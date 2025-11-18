import { create } from 'zustand';
import { Profile } from 'src/types/prof';
import { paths } from 'src/routes/paths';

import { LoginCretentials, RegiterCretentials, LoginVerifyCretentials } from './types';
import { saveSession, removeSession, restoreSession, updateUserSession } from './auth-utils';
import { login, verifyOtpApi, refreshSession, new_login_action, verifyRegiterOtp, Register } from './auth-actions';

type AuthStore = {
  loading: boolean;
  authenticated: boolean;
  user: any | null;
  accessToken?: string | null;
  refreshToken?: string | null;

  // Actions
  login: (credentials: LoginCretentials) => Promise<{ redirectTo: string } | { error: string }>;
  new_login: (credentials: LoginCretentials) => Promise<{ redirectTo: string } | { error: string }>;
  registerUser: (
    credentials: RegiterCretentials
  ) => Promise<{ redirectTo: string } | { error: string }>;
  verifyLoginOtp: (credentials: LoginVerifyCretentials) => Promise<{ redirectTo: string } | { error: string }>;
  verifyRegisterOtp: (credentials: LoginVerifyCretentials) => Promise<{ redirectTo: string } | { error: string }>;
  init: () => Promise<void | { accessTokenExp: number }>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => void;
  loginAsGuest: () => Promise<{ redirectTo: string }>;
  setSession: (session: any) => void;
};

export const useAuthStore = create<AuthStore>()((set, get) => ({
  loading: true,
  authenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,

  // -------------------- LOGIN --------------------
  login: async ({ phoneNumber }) => {
    try {
      await login({ phoneNumber });
      set({ authenticated: false });

      if (typeof window !== 'undefined') {
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('verifyReferrer', paths.auth.login);
      }

      return { redirectTo: '/auth/verify' };
    } catch (error: any) {
      return { error: error.message };
    }
  },
  // -------------------- VERIFY OTP --------------------
  verifyLoginOtp: async ({ phoneNumber, otp }: LoginVerifyCretentials) => {
    try {
      if (typeof window === 'undefined') {
        return { error: 'المتصفح غير متاح' };
      }

      const storedPhoneNumber = localStorage.getItem('phoneNumber');
      if (!storedPhoneNumber) return { error: 'رقم الهاتف غير موجود' };

      const referrer = localStorage.getItem('verifyReferrer') || '';

      const { accessToken, refreshToken, user } = await verifyOtpApi({
        phoneNumber: storedPhoneNumber,
        otp,
      });

      await saveSession({ accessToken, refreshToken, user });
      set({
        authenticated: true,
        user,
        accessToken: accessToken.value,
        refreshToken: refreshToken.value,
      });

      // Clean up localStorage after successful verification
      localStorage.removeItem('phoneNumber');
      localStorage.removeItem('verifyReferrer');

      // const redirectTo = user?.isHasLocation ? '/' : '/auth/set-address';
      return { redirectTo: '/' };

      // return { redirectTo };
    } catch (error: any) {
      return { error: error.message };
    }
  },

  // -------------------- Regiter ==>Step=>1 --------------------
  new_login: async ({ phoneNumber }) => {
    try {
      await new_login_action({ phoneNumber });
      set({ authenticated: false });

      if (typeof window !== 'undefined') {
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('verifyReferrer', paths.auth.login);
      }

      return { redirectTo: '/auth/new-verify' };
    } catch (error: any) {
      return { error: error.message };
    }
  },
  // -------------------- Regiter ==>Step=>2 --------------------
  verifyRegisterOtp: async ({ phoneNumber, otp }: LoginVerifyCretentials) => {
    try {
      if (typeof window === 'undefined') {
        return { error: 'المتصفح غير متاح' };
      }

      const storedPhoneNumber = localStorage.getItem('phoneNumber');
      if (!storedPhoneNumber) return { error: 'رقم الهاتف غير موجود' };

      const referrer = localStorage.getItem('verifyReferrer') || '';

      const { accessToken, refreshToken, user } = await verifyRegiterOtp({
        phoneNumber: storedPhoneNumber,
        otp,
      });

      await saveSession({ accessToken, refreshToken, user });
      set({
        authenticated: true,
        user,
        accessToken: accessToken.value,
        refreshToken: refreshToken.value,
      });

      // Clean up localStorage after successful verification
      // localStorage.removeItem('phoneNumber');
      // localStorage.removeItem('verifyReferrer');

      // const redirectTo = user?.isHasLocation ? '/' : '/auth/set-address';
      return { redirectTo: '/auth/register' };

      // return { redirectTo };
    } catch (error: any) {
      return { error: error.message };
    }
  },


  // In your auth-store.ts - fix the registerUser function
  registerUser: async ({
    Name,
    Email,
    BusinessTypeIds,
    AgreeToTerms,
    OfficialName,
  }: any) => {
    try {
      const phone = localStorage.getItem("phoneNumber");

      if (!phone) {
        return { error: "Phone number not found in localStorage" };
      }

      // Send request to backend with proper data structure
      await Register({
        Name,
        PhoneNumber: phone,
        Email,
        BusinessTypeIds: Array.isArray(BusinessTypeIds) ? BusinessTypeIds : [BusinessTypeIds],
        AgreeToTerms: Boolean(AgreeToTerms),
        OfficialName,
      });
      // Clear the phone number from localStorage after successful registration
      localStorage.removeItem('phoneNumber');

      // Update auth state if needed
      set({ authenticated: false });

      return { redirectTo: "/auth/login" };
    } catch (error: any) {
      return { error: error?.message || "Registration failed" };
    }
  },


  // -------------------- INIT --------------------
  init: async () => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') {
      set({ loading: false });
      return;
    }

    try {
      const isGuest = localStorage.getItem('isGuest');
      if (isGuest) {
        set({
          loading: false,
          authenticated: false,
          user: { name: 'Guest User', role: 'guest' },
        });
        return;
      }

      const errorFunc = async () => {
        await removeSession();
        set({ loading: false });
      };

      const refreshToken = await restoreSession();
      if (refreshToken) {
        try {
          const session = await refreshSession();
          const { user, accessToken, refreshToken } = session;

          await saveSession({ user, accessToken, refreshToken });
          set({
            loading: false,
            authenticated: true,
            user,
            accessToken: accessToken.value,
            refreshToken: refreshToken.value,
          });

          return {
            accessTokenExp: new Date(accessToken.expire).getTime() - new Date().getTime() - 60 * 1000,
          };
        } catch (error) {
          console.log(error);
          errorFunc();
        }
      } else {
        errorFunc();
      }
    } catch (error) {
      console.error('Error initializing auth:', error);
      set({ loading: false });
    }
  },

  // -------------------- LOGOUT --------------------
  logout: async () => {
    const { user } = get();

    if (user?.image?.startsWith('blob:')) {
      URL.revokeObjectURL(user.image);
    }

    await removeSession();

    if (typeof window !== 'undefined') {
      localStorage.removeItem('isGuest');
      localStorage.removeItem('phoneNumber');
      localStorage.removeItem('verifyReferrer');
    }

    set({
      authenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
      loading: false,
    });
  },

  // -------------------- UPDATE PROFILE --------------------
  updateProfile: (updates: Partial<Profile>) => {
    set((state) => {
      if (!state.user) return state;

      const updatedUser = {
        ...state.user,
        ...updates,
      };

      if (
        state.user.profileImage?.startsWith('blob:') &&
        state.user.profileImage !== updates.profileImage
      ) {
        URL.revokeObjectURL(state.user.profileImage);
      }

      // Update only the user session cookie (tokens remain unchanged)
      updateUserSession(updatedUser);

      return { user: updatedUser };
    });
  },

  // -------------------- LOGIN AS GUEST --------------------
  loginAsGuest: async () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isGuest', 'true');
    }

    set({
      authenticated: false,
      user: { name: 'Guest User', role: 'guest' },
      loading: false,
    });

    return { redirectTo: paths.controlPanel.main };
  },

  // -------------------- SET SESSION (used by axios & InitAuth) --------------------
  setSession: (session) =>
    set({
      authenticated: true,
      user: session.user,
      accessToken: session.accessToken.value,
      refreshToken: session.refreshToken.value,
    }),
}));
