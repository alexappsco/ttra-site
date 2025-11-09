// 'use client';

// import { paths } from 'src/routes/paths';
// import { useRouter, usePathname } from 'src/routes/hooks';
// import { useState, useEffect, useCallback } from 'react';
// import { useAuthStore } from '../auth-store';

// type Props = {
//   children: React.ReactNode;
// };

// export default function AuthGuard({ children }: Props) {
//   const { loading } = useAuthStore();
//   return <>{loading ? <SplashScreen /> : <Container>{children}</Container>}</>;
// }

// function Container({ children }: Props) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { authenticated } = useAuthStore();
//   const [checked, setChecked] = useState(false);

//   const check = useCallback(() => {
//     const isGuest = localStorage.getItem('isGuest') === 'true';

//     // ✅ لو المستخدم مش داخل ولا Guest
//     if (!authenticated && !isGuest) {
//       // لو الصفحة الحالية مش الصفحة الرئيسية فقط نحوله
//       if (pathname !== paths.controlPanel.main) {
//         router.replace(paths.controlPanel.main);
//       }
//     }

//     // ✅ في كل الحالات نعرض الصفحة بعد التحقق
//     setChecked(true);
//   }, [authenticated, router, pathname]);

//   useEffect(() => {
//     check();
//   }, [check]);

//   if (!checked) return null;

//   return <>{children}</>;
// }

'use client';

import React from 'react';
import { SplashScreen } from 'src/components/loading-screen';
import { useAuthStore } from '../auth-store';

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const { loading } = useAuthStore();

  // Optional: show loading while store initializes
  if (loading) {
    return <SplashScreen />;
  }

  // ✅ No restrictions at all
  return <>{children}</>;
}

// 'use client';

// import { paths } from 'src/routes/paths';
// import { useState, useEffect, useCallback } from 'react';
// import { useRouter, usePathname } from 'src/routes/hooks';
// import { SplashScreen } from 'src/components/loading-screen';

// import { useAuthStore } from '../auth-store';

// // ----------------------------------------------------------------------

// type Props = {
//   children: React.ReactNode;
// };

// // هذا الجزء مسؤول عن إظهار شاشة التحميل أثناء التحقق من حالة المستخدم
// export default function AuthGuard({ children }: Props) {
//   const { loading } = useAuthStore();

//   return <>{loading ? <SplashScreen /> : <Container>{children}</Container>}</>;
// }

// // ----------------------------------------------------------------------

// function Container({ children }: Props) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { authenticated } = useAuthStore(); // الحالة الخاصة بالمستخدم
//   const [checked, setChecked] = useState(false);

//   // دالة التحقق من حالة المستخدم
//   const check = useCallback(() => {
//     // نتحقق من هل المستخدم داخل كـ Guest
//     const isGuest = localStorage.getItem('isGuest') === 'true';

//     // لو المستخدم لا هو مسجل دخول ولا Guest نحوله لصفحة تسجيل الدخول
//     if (!authenticated && !isGuest) {
//       const searchParams = new URLSearchParams({
//         returnTo: pathname,
//       }).toString();

//       const href = `${paths.auth.login}?${searchParams}`;
//       router.replace(href);
//     } else {
//       // لو المستخدم Guest أو مسجل دخول فعلاً، نسمح له بالدخول
//       setChecked(true);
//     }
//   }, [authenticated, router, pathname]);

//   // تشغيل التحقق عند تحميل الصفحة
//   useEffect(() => {
//     check();
//   }, [check]);

//   // أثناء التحقق لا نظهر أي شيء
//   if (!checked) {
//     return null;
//   }

//   // لو كل شيء تمام نعرض المحتوى
//   return <>{children}</>;
// }
// 'use client';

// import { paths } from 'src/routes/paths';
// import { useEffect } from 'react';
// import { useRouter, usePathname } from 'src/routes/hooks';
// import { useAuthStore } from '../auth-store';

// type Props = {
//   children: React.ReactNode;
// };

// export default function AuthGuard({ children }: Props) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { authenticated } = useAuthStore(); // حالة المستخدم

//   useEffect(() => {
//     // لو المستخدم مش مسجل دخول → نحوله مباشرة لصفحة login
//     if (!authenticated) {
//       const searchParams = new URLSearchParams({
//         returnTo: pathname, // نحفظ الصفحة الحالية عشان نرجعها بعد تسجيل الدخول
//       }).toString();

//       router.replace(`${paths.auth.login}?${searchParams}`);
//     }
//   }, [authenticated, router, pathname]);

//   // لو المستخدم مش مسجل دخول → من الأفضل ما نظهرش الصفحة
//   if (!authenticated) {
//     return null;
//   }

//   // لو المستخدم مسجل دخول → نعرض الصفحة
//   return <>{children}</>;
// }
