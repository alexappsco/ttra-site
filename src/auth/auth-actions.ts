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
export async function new_register_action(credentials: LoginCretentials) {
  try {
    const res = await axiosInstance.post(
      endpoints.auth.Register.send_unregistered_otp,
      credentials
    );

  } catch (error: any) {
    throw new Error(error?.message || 'Login failed');
  }
}
// export async function Register(credentials: RegiterCretentials) {
//   try {
//     const formData = new FormData();

//     formData.append('Name', credentials.Name);
//     formData.append('PhoneNumber', credentials.PhoneNumber);
//     formData.append('Email', credentials.Email);
//     formData.append('OfficialName', credentials.OfficialName);
//     formData.append('AgreeToTerms', credentials.AgreeToTerms ? 'true' : 'false');
//     const businessTypeIdsArray = Array.isArray(credentials.BusinessTypeIds)
//       ? credentials.BusinessTypeIds
//       : [credentials.BusinessTypeIds];

//     // Append each ID separately with the same key name - server will parse as array
//     businessTypeIdsArray.forEach((id) => {
//       formData.append('BusinessTypeIds', id);
//     });

//     const response = await axiosInstance.post(endpoints.auth.Register.register, formData);

//     return response;
//   } catch (error: any) {
//     throw new Error(error?.response?.data || error?.message);
//   }
// }
// export async function Register(credentials: RegiterCretentials) {
//   try {
//     const formData = new FormData();

//     formData.append('Name', credentials.Name);
//     formData.append('PhoneNumber', credentials.PhoneNumber);
//     formData.append('Email', credentials.Email);
//     formData.append('OfficialName', credentials.OfficialName);
//     formData.append('AgreeToTerms', String(credentials.AgreeToTerms));

//     if (Array.isArray(credentials.BusinessTypeIds)) {
//       credentials.BusinessTypeIds.forEach((id) => {
//         formData.append('BusinessTypeIds', String(id));
//       });
//     }

//    const res = await axiosInstance.post(endpoints.auth.Register.register, formData);
//     return res;
//   } catch (error: any) {
//     // Normalize error message from backend
//     const errorMsg =
//       error?.response?.data?.message ||
//       error?.response?.data?.error ||
//       error?.message ||
//       'Registration failed';

//     console.error('Register API error:', errorMsg);
//     throw new Error(errorMsg);
//   }
// }
// auth-actions
// export async function Register(credentials: RegiterCretentials) {
//   try {
//     const formData = new FormData();

//     formData.append('Name', credentials.Name);
//     formData.append('PhoneNumber', credentials.PhoneNumber);
//     formData.append('Email', credentials.Email);
//     formData.append('OfficialName', credentials.OfficialName);
//     formData.append('AgreeToTerms', String(credentials.AgreeToTerms));

//     if (Array.isArray(credentials.BusinessTypeIds)) {
//       credentials.BusinessTypeIds.forEach((id) => {
//         formData.append('BusinessTypeIds', String(id));
//       });
//     }

//     const res = await axiosInstance.post(endpoints.auth.Register.register, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     return res.data;

//   } catch (error: any) {
//     // Comprehensive error extraction
//     let errorMsg = 'Registration failed';

//     if (error?.response?.data) {
//       const data = error.response.data;

//       // Handle different backend error formats
//       if (typeof data === 'string') {
//         errorMsg = data;
//       } else if (data.message) {
//         errorMsg = data.message;
//       } else if (data.error) {
//         errorMsg = data.error;
//       } else if (data.errors) {
//         // Handle validation errors array
//         errorMsg = Object.values(data.errors).flat().join(', ');
//       }
//     } else if (error?.message) {
//       errorMsg = error.message;
//     }

//     console.error('Register API error details:', {
//       status: error?.response?.status,
//       statusText: error?.response?.statusText,
//       data: error?.response?.data,
//       message: errorMsg
//     });

//     throw new Error(errorMsg);
//   }
// }
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

    const res = await axiosInstance.post(endpoints.auth.Register.register, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      // Add timeout for production
      timeout: 30000,
    });

    return res.data;

  } catch (error: any) {
    // PRODUCTION FIX: Comprehensive error handling
    console.log('Full error in auth-actions:', error);

    let errorMsg = 'Registration failed';

    // Direct error message
    if (error?.message) {
      errorMsg = error.message;
    }

    // Axios response error
    if (error?.response?.data) {
      const data = error.response.data;

      // Handle different backend response formats
      if (typeof data === 'string') {
        errorMsg = data;
      } else if (data.message) {
        errorMsg = data.message;
      } else if (data.error) {
        errorMsg = data.error;
      } else if (data.errors && Array.isArray(data.errors)) {
        errorMsg = data.errors.join(', ');
      } else if (typeof data === 'object') {
        // Try to extract any string value from the object
        const stringValues = Object.values(data).filter(val => typeof val === 'string');
        if (stringValues.length > 0) {
          errorMsg = stringValues.join(', ');
        }
      }
    }

    // Network errors
    if (error?.code === 'NETWORK_ERROR' || error?.code === 'ECONNREFUSED') {
      errorMsg = 'Network error: Cannot connect to server';
    }

    // Timeout errors
    if (error?.code === 'ECONNABORTED') {
      errorMsg = 'Request timeout: Server took too long to respond';
    }

    console.error('Register API final error:', errorMsg);
    throw new Error(errorMsg);
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
