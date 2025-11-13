'use server';

import { cookies } from 'next/headers';

import { UserSession } from './types';
import { USER, ACCESS_TOKEN, REFRESH_TOKEN } from './config';

export async function saveSession({ user, accessToken, refreshToken }: UserSession) {
  try {
    const cookiesStore = await cookies();

    // Validate required values
    if (!accessToken?.value || !refreshToken?.value || !user) {
      throw new Error('Invalid session data: missing required fields');
    }

    // Safely convert expire date
    let expireDate: Date;
    try {
      expireDate = refreshToken.expire instanceof Date
        ? refreshToken.expire
        : new Date(refreshToken.expire);

      // Validate the date is valid
      if (isNaN(expireDate.getTime())) {
        // Fallback to 30 days from now if date is invalid
        expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 30);
      }
    } catch (error) {
      // Fallback to 30 days from now if date parsing fails
      expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 30);
    }

    // Cookie options compatible with iOS Safari
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const, // Critical for iOS Safari
      path: '/',
      expires: expireDate,
    };

    // Set cookies with error handling
    cookiesStore.set(ACCESS_TOKEN, accessToken.value, cookieOptions);
    cookiesStore.set(REFRESH_TOKEN, refreshToken.value, cookieOptions);
    cookiesStore.set(USER, JSON.stringify(user), cookieOptions);
  } catch (error) {
    console.error('Error saving session:', error);
    throw error;
  }
}

export async function removeSession() {
  const cookiesStore = await cookies();

  cookiesStore.delete(ACCESS_TOKEN);
  cookiesStore.delete(REFRESH_TOKEN);
  cookiesStore.delete(USER);
}

export async function updateUserSession(user: any) {
  const cookiesStore = await cookies();

  // Check if session exists
  const refreshToken = cookiesStore.get(REFRESH_TOKEN);
  if (!refreshToken) return;

  // Set user cookie with same options as session cookies
  // Using a 30-day expiry to match typical refresh token duration
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    expires: thirtyDaysFromNow,
  };

  cookiesStore.set(USER, JSON.stringify(user), cookieOptions);
}

export async function restoreSession() {
  const cookiesStore = await cookies();

  const refreshToken = cookiesStore.get(REFRESH_TOKEN);

  return refreshToken || null;
}
