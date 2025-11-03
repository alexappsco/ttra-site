// 'use client';

// import { paths } from 'src/routes/paths';
// import { useRouter, usePathname } from 'src/routes/hooks';
// import { useState, useEffect, useCallback } from 'react';
// import { SplashScreen } from 'src/components/loading-screen';
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
