


'use client';

import React, { useEffect } from 'react';
import Navbar from 'src/layouts/dashboard/navbar';
import HeroWithStats from './hero-with-stats';
import OurServices from './our-services';
import WhoWeAre from './who-we-are';
import HowWork from './how-work';
import BlogSection from './blog-section';
import CustomerReviews from './customer-reviews';
import { BLOGS } from 'src/_mock/data';
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
      <OurServices />
      <WhoWeAre />
      <HowWork />
      <BlogSection  blogs={BLOGS} />
      <CustomerReviews />
    </>
  );
}
