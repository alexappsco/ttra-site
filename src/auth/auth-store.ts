import { create } from 'zustand';
import { Profile } from 'src/types/prof';
import { paths } from 'src/routes/paths';

import { LoginCretentials, RegiterCretentials, LoginVerifyCretentials } from './types';
import { saveSession, removeSession, restoreSession, updateUserSession } from './auth-utils';
import {
  login,
  Register,
  verifyOtpApi,
  refreshSession,
  verifyRegiterOtp,
  new_register_action,
} from './auth-actions';

type AuthStore = {
  loading: boolean;
  authenticated: boolean;
  user: any | null;
  accessToken?: string | null;
  refreshToken?: string | null;

  // Actions
  login: (credentials: LoginCretentials) => Promise<{ redirectTo: string } | { error: string }>;
  new_register: (credentials: LoginCretentials) => Promise<{ redirectTo: string } | { error: string }>;
  registerUser: (
    credentials: RegiterCretentials
  ) => Promise<{ redirectTo: string } | { error: string }>;
  verifyLoginOtp: (
    credentials: LoginVerifyCretentials
  ) => Promise<{ redirectTo: string } | { error: string }>;
  verifyRegisterOtp: (
    credentials: LoginVerifyCretentials
  ) => Promise<{ redirectTo: string } | { error: string }>;
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
    const res=  await login({ phoneNumber });


  if (!res.success) {
    console.log("my res",res)
    return { error: 'الهاتف المحمول لم يتم به التسجيل به من قبل', message: res.message };
  }
      set({ authenticated: false });

      if (typeof window !== 'undefined') {
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('verifyReferrer', paths.auth.login);
      }

      return { redirectTo: '/auth/verify' };

  },
  // -------------------- VERIFY OTP --------------------
  verifyLoginOtp: async ({ phoneNumber: _, otp }: LoginVerifyCretentials) => {
    try {
      if (typeof window === 'undefined') {
        return { error: 'المتصفح غير متاح' };
      }

      const storedPhoneNumber = localStorage.getItem('phoneNumber');
      if (!storedPhoneNumber) return { error: 'رقم الهاتف غير موجود' };


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
  new_register: async ({ phoneNumber }) => {
   const  res=  await new_register_action({ phoneNumber });
      set({ authenticated: false });

  if (!res.success) {
    console.log("my res",res)
    return { error: 'الهاتف المحمول مستخدم بالقعل', message: res.message };
  }

      if (typeof window !== 'undefined') {
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('verifyReferrer', paths.auth.login);
      }
      return { redirectTo: '/auth/new-verify' };
  },
  // -------------------- Regiter ==>Step=>2 --------------------
  verifyRegisterOtp: async ({ phoneNumber: _, otp }: LoginVerifyCretentials) => {
    try {
      if (typeof window === 'undefined') {
        return { error: 'المتصفح غير متاح' };
      }

      const storedPhoneNumber = localStorage.getItem('phoneNumber');
      if (!storedPhoneNumber) return { error: 'رقم الهاتف غير موجود' };

      await verifyRegiterOtp({
        phoneNumber: storedPhoneNumber,
        otp,
      });
      return { redirectTo: '/auth/register' };
    } catch (error: any) {
      return { error: error.message };
    }
  },

registerUser: async ({ Name, Email, BusinessTypeIds, AgreeToTerms, OfficialName }) => {
  const phone = localStorage.getItem('phoneNumber');
  if (!phone) return { error: 'please enter phone first' };

  const response = await Register({
    Name,
    PhoneNumber: phone,
    Email,
    BusinessTypeIds: Array.isArray(BusinessTypeIds) ? BusinessTypeIds : [BusinessTypeIds],
    AgreeToTerms: Boolean(AgreeToTerms),
    OfficialName,
  });

  if (!response.success) {
    let errorKey = response.message?.toLowerCase();

    if (errorKey?.includes('username')) errorKey = 'username_already_exist';
    else if (errorKey?.includes('email')) errorKey = 'email_already_exist';
    else errorKey = 'unknown_error';

    return { error: errorKey, message: response.message };
  }

  localStorage.removeItem('phoneNumber');
  return { redirectTo: '/auth/login' };
},

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
            accessTokenExp:
              new Date(accessToken.expire).getTime() - new Date().getTime() - 60 * 1000,
          };
        } catch (error) {
          errorFunc();
        }
      } else {
        errorFunc();
      }
    } catch (error) {
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
