'use client';

import { paths } from 'src/routes/paths';
import { useAuthStore } from 'src/auth/auth-store';
import { useRouter, usePathname } from 'next/navigation';

export function useRequireAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const { authenticated } = useAuthStore();

  const requireAuth = (callback?: () => void) => {
    if (!authenticated) {
      // لو المستخدم مش مسجل دخول → نرجعه لصفحة تسجيل الدخول
      const searchParams = new URLSearchParams({
        returnTo: pathname,
      }).toString();

      router.push(`${paths.auth.login}?${searchParams}`);
      return;
    }

    // لو مسجل فعلاً → نفّذ الفعل المطلوب
    if (callback) callback();
  };

  return { requireAuth, authenticated };
}
