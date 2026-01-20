// import { getTranslations } from 'next-intl/server';
// import HomeView from 'src/sections/home/views/list-view';

// // ----------------------------------------------------------------------
// export default async function HomePage() {
//   return (
//     <HomeView
//     />
//   );
// }

// // ----------------------------------------------------------------------


// export async function generateMetadata({ params }: { params: Promise<any> }) {
//   const { locale } = await params;
//   const t = await getTranslations({ locale, namespace: 'Metadata' });

//   return {
//     title: t('title'),
//   };
// }


// 'use client';
// import { useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import HomeView from 'src/sections/home/views/list-view';

// export default function HomePage() {
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const scrollTo = searchParams.get('scrollTo');
//     if (scrollTo) {
//       const section = document.getElementById(scrollTo);
//       if (section) section.scrollIntoView({ behavior: 'smooth' });
//       window.history.replaceState({}, '', '/'); 
//     }
//   }, [searchParams]);

//   return <HomeView />;
// }

// app/page.tsx
// import HomeView from 'src/sections/home/views/list-view';

// export default async function HomePage({ searchParams }: { searchParams: { scrollTo?: string } }) {
//   return <HomeView scrollTo={searchParams.scrollTo || null} />;
// }
import HomeView from 'src/sections/home/views/list-view';
export default async function HomePage(props: any) {
  const searchParams = await props.searchParams;

  return <HomeView scrollTo={searchParams?.scrollTo ?? null} />;
}

// export default async function HomePage({ searchParams }: any) {
//   return <HomeView scrollTo={searchParams?.scrollTo ?? null} />;
// }
