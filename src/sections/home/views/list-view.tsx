


'use client';

import React, { useEffect } from 'react';
import Header from 'src/layouts/dashboard/header';
import HomeSlider from './HomeSlider';
import Images from './Images';

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
      {/* <HomeSlider /> */}
      <Images />
    </>
  );
}
