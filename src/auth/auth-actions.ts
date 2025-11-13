'use server';

import { cookies } from 'next/headers';
import axiosInstance from 'src/utils/axios';
import { endpoints } from 'src/utils/endpoints';

import { ACCESS_TOKEN, REFRESH_TOKEN } from './config';
import { User, UserSession, LoginCretentials, RegiterCretentials, LoginVerifyCretentials } from './types';

export interface LoginRes extends User {
  accessToken: string;
  refreshToken: string;
  accessTokenExpireAt: Date;
  refreshTokenExpireAt: Date;
}

// Login API Call
export async function login(credentials: LoginCretentials): Promise<UserSession> {
  try {
    const res = await axiosInstance.post(endpoints.auth.Login.send_otp, credentials);
    const { accessToken, refreshToken, accessTokenExpireAt, refreshTokenExpireAt, ...user } =
      res as unknown as LoginRes;

    return {
      user,
      accessToken: { value: accessToken, expire: accessTokenExpireAt },
      refreshToken: { value: refreshToken, expire: refreshTokenExpireAt },
    };
  } catch (error: any) {
    throw new Error(error?.message || 'Login failed');
  }
}
export async function Register(credentials: RegiterCretentials): Promise<UserSession> {
    try {
      const res = await axiosInstance.post(endpoints.auth.register, credentials);

      const { accessToken, refreshToken, accessTokenExpireAt, refreshTokenExpireAt, ...user } =
        res as unknown as LoginRes;

      // Ensure dates are properly converted to Date objects
      const accessTokenExpire = accessTokenExpireAt instanceof Date
        ? accessTokenExpireAt
        : new Date(accessTokenExpireAt);

      const refreshTokenExpire = refreshTokenExpireAt instanceof Date
        ? refreshTokenExpireAt
        : new Date(refreshTokenExpireAt);

      // Validate dates
      if (isNaN(accessTokenExpire.getTime()) || isNaN(refreshTokenExpire.getTime())) {
        throw new Error('Invalid date format in response');
      }

      return {
        user,
        accessToken: {
          value: accessToken,
          expire: accessTokenExpire,
        },
        refreshToken: {
          value: refreshToken,
          expire: refreshTokenExpire,
        },
      };
    } catch (error: any) {
      throw new Error(error?.message || 'Registration failed');
    }
  }
export async function verifyOtpApi(credentials: LoginVerifyCretentials): Promise<UserSession> {
  try {
    const res = await axiosInstance.post(endpoints.auth.Login.verify_otp, credentials);
    const { accessToken, refreshToken, accessTokenExpireAt, refreshTokenExpireAt, ...user } =
      res as unknown as LoginRes;

    // Ensure dates are properly converted to Date objects
    const accessTokenExpire = accessTokenExpireAt instanceof Date
      ? accessTokenExpireAt
      : new Date(accessTokenExpireAt);

    const refreshTokenExpire = refreshTokenExpireAt instanceof Date
      ? refreshTokenExpireAt
      : new Date(refreshTokenExpireAt);

    // Validate dates
    if (isNaN(accessTokenExpire.getTime()) || isNaN(refreshTokenExpire.getTime())) {
      throw new Error('Invalid date format in response');
    }

    return {
      user,
      accessToken: { value: accessToken, expire: accessTokenExpire },
      refreshToken: { value: refreshToken, expire: refreshTokenExpire },
    };
  } catch (error: any) {
    throw new Error(error?.message || 'OTP verification failed');
  }
}
export async function refreshSession(): Promise<UserSession> {
  try {
    const cookiesStore = await cookies();
    const refreshTokenCookie = cookiesStore.get(REFRESH_TOKEN);
    const accessTokenCookie = cookiesStore.get(ACCESS_TOKEN);

    if (!refreshTokenCookie?.value) {
      throw new Error('No refresh token found');
    }

    const res = await axiosInstance.post(
      endpoints.auth.refreshToken,
      {
        refreshToken: refreshTokenCookie.value,
      },
      {
        headers: {
          Authorization: `Bearer ${accessTokenCookie?.value}`,
        },
      }
    );

    const { accessToken, refreshToken, accessTokenExpireAt, refreshTokenExpireAt, ...user } =
      res as unknown as LoginRes;

    // Ensure dates are properly converted to Date objects
    const accessTokenExpire = accessTokenExpireAt instanceof Date
      ? accessTokenExpireAt
      : new Date(accessTokenExpireAt);

    const refreshTokenExpire = refreshTokenExpireAt instanceof Date
      ? refreshTokenExpireAt
      : new Date(refreshTokenExpireAt);

    // Validate dates
    if (isNaN(accessTokenExpire.getTime()) || isNaN(refreshTokenExpire.getTime())) {
      throw new Error('Invalid date format in response');
    }

    return {
      user,
      accessToken: {
        value: accessToken,
        expire: accessTokenExpire,
      },
      refreshToken: {
        value: refreshToken,
        expire: refreshTokenExpire,
      },
    };
  } catch (error) {
    throw error;
  }
}

export async function requestOtp(email: string): Promise<void> {
  try {
    await axiosInstance.post(endpoints.auth.sendOtp, { email, isPhone: false });
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function resetPassword({
  newPassword,
  confirmPassword,
  token,
}: {
  newPassword: string;
  confirmPassword: string;
  token: string;
}): Promise<void> {
  try {
    await axiosInstance.post(
      endpoints.auth.changePassword,
      { newPassword, confirmPassword },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
}
