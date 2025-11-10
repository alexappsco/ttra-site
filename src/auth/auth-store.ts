import { create } from 'zustand';
import { Profile } from 'src/types/prof';
import { paths } from 'src/routes/paths';

import { LoginCretentials, RegiterCretentials } from './types';
import { login, Register, verifyOtpApi, refreshSession } from './auth-actions';
import { saveSession, removeSession, restoreSession, updateUserSession } from './auth-utils';

type AuthStore = {
  loading: boolean;
  authenticated: boolean;
  user: any | null;
  accessToken?: string | null;
  refreshToken?: string | null;

  // Actions
  login: (credentials: LoginCretentials) => Promise<{ redirectTo: string } | { error: string }>;
  registerUser: (
    credentials: RegiterCretentials
  ) => Promise<{ redirectTo: string } | { error: string }>;
  verifyOtp: (otp: string) => Promise<{ redirectTo: string } | { error: string }>;
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
  login: async ({ phoneNumber, email, isPhone }) => {
    try {
      await login({ phoneNumber, email, isPhone });
      set({ authenticated: false });
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('verifyReferrer', paths.auth.login);

      return { redirectTo: '/auth/verify' };
    } catch (error: any) {
      return { error: error.message };
    }
  },

  // -------------------- REGISTER --------------------
  registerUser: async ({ name, phoneNumber }) => {
    try {
      await Register({ name, phoneNumber });
      set({ authenticated: false });
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('verifyReferrer', paths.auth.register);

      return { redirectTo: '/auth/verify' };
    } catch (error: any) {
      return { error: error.message };
    }
  },

  // -------------------- VERIFY OTP --------------------
  verifyOtp: async (otp: string) => {
    try {
      const phoneNumber = localStorage.getItem('phoneNumber');
      if (!phoneNumber) return { error: 'رقم الهاتف غير موجود' };

      const referrer = localStorage.getItem('verifyReferrer') || '';

      const { accessToken, refreshToken, user } = await verifyOtpApi({
        phoneNumber,
        email: '',
        isPhone: true,
        otp,
      });

      await saveSession({ accessToken, refreshToken, user });
      set({
        authenticated: true,
        user,
        accessToken: accessToken.value,
        refreshToken: refreshToken.value,
      });

      const redirectTo = user?.isHasLocation ? '/' : '/auth/set-address';

      return { redirectTo };
    } catch (error: any) {
      return { error: error.message };
    }
  },

  // -------------------- INIT --------------------
  init: async () => {
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
  },

  // -------------------- LOGOUT --------------------
  logout: async () => {
    const { user } = get();

    if (user?.image?.startsWith('blob:')) {
      URL.revokeObjectURL(user.image);
    }

    await removeSession();
    localStorage.removeItem('isGuest');
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
        state.user.profileImage !== updates.image
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
    localStorage.setItem('isGuest', 'true');
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
