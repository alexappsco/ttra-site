


'use client';

import React, { useEffect } from 'react';
import Navbar from 'src/layouts/dashboard/navbar';
import HeroWithStats from './hero-with-stats';
// import OurServices from './our-services';
import WhoWeAre from './who-we-are';
import ProductSection from './products-section';
import CustomerReviews from './customer-reviews';
import { BLOGS } from 'src/_mock/data';
import WhyChooseUsSection from './WhyChooseUsSection';
import DownloadAppSection from './DownloadAppSection';
import HowItWorksSection from './HowItWorksSection';
import ShopsSection from './shops-section';
import { Shop } from 'src/_mock/shop';

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
      <Navbar />
      <HeroWithStats />
      {/* <OurServices /> */}
      <WhoWeAre />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ProductSection  blogs={BLOGS} />
      <ShopsSection shops={Shop} />
      <DownloadAppSection />
      <CustomerReviews />
    </>
  );
}
