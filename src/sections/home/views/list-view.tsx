'use client';

import React from 'react';
import Navbar from 'src/layouts/dashboard/navbar';
import HeroWithStats from './hero-with-stats';
import OurServices from './our-services';
import WhoWeAre from './who-we-are';
import HowWork from './how-work';
import BlogSection from './blog-section';
import CustomerReviews from './customer-reviews';
export default function HomeView() {
  return (
    <>
      <Navbar />
      <HeroWithStats />
      <OurServices />
      <WhoWeAre />
      <HowWork />
      <BlogSection />
      <CustomerReviews />
    </>
  );
}