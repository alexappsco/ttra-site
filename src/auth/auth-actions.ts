'use server';

import { cookies } from 'next/headers';
import axiosInstance from 'src/utils/axios';
import { endpoints } from 'src/utils/endpoints';

import { ACCESS_TOKEN, REFRESH_TOKEN } from './config';
import {
  User,
  UserSession,
  LoginCretentials,
  RegiterCretentials,
  LoginVerifyCretentials,
} from './types';

export interface LoginRes extends User {
  accessToken: string;
  refreshToken: string;
  accessTokenExpireAt: Date;
  refreshTokenExpireAt: Date;
}

// Login API Call
export async function login(credentials: LoginCretentials) {
  try {
    const res = await axiosInstance.post(endpoints.auth.Login.send_otp, credentials);

    return {
      success: true,
      data: res.data, // return only useful data
    };
  } catch (error: any) {
  const errorMsg =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      'Login failed';

 return {
      success: false,
      message: errorMsg,
      status: error?.response?.status ?? 500,
    };  }
}
export async function new_register_action(credentials: LoginCretentials) {
  try {
    const res = await axiosInstance.post(
      endpoints.auth.Register.send_unregistered_otp,
      credentials
    );
    console.log("res new register action",res)
     return {
      success: true,
      data: res.data, // return only useful data
    };
  } catch (error: any) {
    console.log("error in  new register action",error);
        const errorMsg =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      'Registration failed';

 return {
      success: false,
      message: errorMsg,
      status: error?.response?.status ?? 500,
    };  }
}
export async function Register(credentials: RegiterCretentials) {
  try {
    const formData = new FormData();

    formData.append('Name', credentials.Name);
    formData.append('PhoneNumber', credentials.PhoneNumber);
    formData.append('Email', credentials.Email);
    formData.append('OfficialName', credentials.OfficialName);
    formData.append('AgreeToTerms', String(credentials.AgreeToTerms));

    if (Array.isArray(credentials.BusinessTypeIds)) {
      credentials.BusinessTypeIds.forEach((id) => {
        formData.append('BusinessTypeIds', String(id));
      });
    }

    const res = await axiosInstance.post(endpoints.auth.Register.register, formData);
    return {
      success: true,
      data: res.data, // return only useful data
    };
  } catch (error: any) {
    const errorMsg =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      'Registration failed';

    return {
      success: false,
      message: errorMsg,
      status: error?.response?.status ?? 500,
    };
  }
}

export async function verifyOtpApi(credentials: LoginVerifyCretentials): Promise<UserSession> {
  try {
    const res = await axiosInstance.post(endpoints.auth.Login.verify_otp, credentials);
    const { accessToken, refreshToken, accessTokenExpireAt, refreshTokenExpireAt, ...user } =
      res as unknown as LoginRes;

    return {
      user,
      accessToken: { value: accessToken, expire: accessTokenExpireAt },
      refreshToken: { value: refreshToken, expire: refreshTokenExpireAt },
    };
  } catch (error: any) {
    throw new Error(error?.message || 'OTP verification failed');
  }
}
export async function verifyRegiterOtp(credentials: LoginVerifyCretentials) {
  try {
    const res = await axiosInstance.post(
      endpoints.auth.Register.verify_new_number_otp,
      credentials
    );
    return { res };
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

    return {
      user,
      accessToken: {
        value: accessToken,
        expire: accessTokenExpireAt,
      },
      refreshToken: {
        value: refreshToken,
        expire: refreshTokenExpireAt,
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
