'use server';

import { cookies } from 'next/headers';

import { UserSession } from './types';
import { USER, ACCESS_TOKEN, REFRESH_TOKEN } from './config';

export async function saveSession({ user, accessToken, refreshToken }: UserSession) {
  const cookiesStore = await cookies();

  // Cookie options compatible with iOS Safari
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const, // Critical for iOS Safari
    path: '/',
  };

  cookiesStore.set(ACCESS_TOKEN, accessToken.value, {
    ...cookieOptions,
    expires: new Date(refreshToken.expire), // remove with Refresh Token because the old accessToken is needed to get new accessToken
  });

  cookiesStore.set(REFRESH_TOKEN, refreshToken.value, {
    ...cookieOptions,
    expires: new Date(refreshToken.expire),
  });

  cookiesStore.set(USER, JSON.stringify(user), {
    ...cookieOptions,
    expires: new Date(refreshToken.expire),
  });
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
