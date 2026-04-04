// 'use client';

// import React, { useEffect } from 'react';
// import Header from 'src/layouts/dashboard/header';
// import ComingSoonSection from '../ComingSoonSection';
// import HomeSlider from './HomeSlider';

// interface HomeViewProps {
//   scrollTo?: string | null;
// }

// export default function HomeView({ scrollTo }: HomeViewProps) {
//   useEffect(() => {
//   if (scrollTo) {
//     const section = document.getElementById(scrollTo);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//       window.history.replaceState({}, '', '/'); 
//     }
//   }
// }, [scrollTo]);

//   return (
//     <>
//       <Header />
//       <ComingSoonSection />
//     </>
//   );
// }



'use client';

import React, { useEffect } from 'react';
import Header from 'src/layouts/dashboard/header';
import ComingSoonSection from '../ComingSoonSection';
import HomeSlider from './HomeSlider';
import VisionSection from './VisionSection';
import CoreValuesSection from './CoreValuesSection';
import PublisherVisionSection from './PublisherVisionSection';
import SmartContentManagement from './SmartContentManagement';
import ReaderAndValuesSection from './ReaderAndValuesSection';
import TatraAppFeaturesSection from './TatraAppFeaturesSection';
import CloudAndAudioSyncSection from './CloudAndAudioSyncSection';
import Footer from 'src/layouts/common/footer-main';

interface HomeViewProps {
  scrollTo?: string | null;
}

export default function HomeView({ scrollTo }: HomeViewProps) {
  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, '', '/');
      }
    }
  }, [scrollTo]);

  return (
    <>
      <Header />
      <VisionSection />
      <CoreValuesSection />
      <PublisherVisionSection />
      <SmartContentManagement />
      <ReaderAndValuesSection />
      <TatraAppFeaturesSection />
      <CloudAndAudioSyncSection />
    </>
  );
}