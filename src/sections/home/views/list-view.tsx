'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Typography } from '@mui/material';

import BannerSlider from './banner-view';

// Lazy-load below-the-fold sections to reduce initial JS and improve LCP/TBT
const InteractiveCardSection = dynamic(() => import('../section-two/interactive-card-section'), {
  ssr: true,
  loading: () => null,
});
const FirstSection = dynamic(() => import('./company-section'), { ssr: true, loading: () => null });
const SecondSection = dynamic(() => import('./office-section'), { ssr: true, loading: () => null });
const JourneySection = dynamic(() => import('./journey-section'), { ssr: true, loading: () => null });
const ProjectShowcaseSection = dynamic(() => import('./project-showcase-section'), { ssr: true, loading: () => null });

export default function HomeView() {
  return (
    <>
      <BannerSlider />

      <InteractiveCardSection />

      <Box sx={{ my: 2 }}>
        <Typography
          sx={{
            fontFamily: "'Frutiger LT Arabic', sans-serif",
            fontWeight: 700,
            fontSize: { xs: '22px', sm: '30px', md: '42px' },
            lineHeight: { xs: '32px', sm: '42px', md: '51px' },
            color: 'rgb(0,72,181)',
            letterSpacing: '0.1px',
            mb: { xs: 3, md: 5 },
            textAlign: 'center',
            width: '100%',
            px: 2,
            py: 2,
          }}
        >
          مميزات تجعل استحواذ منصتك الأولى لبيع وشراء الأعمال التجارية
        </Typography>
      </Box>
      <FirstSection />
      <SecondSection />
      <JourneySection />
      <ProjectShowcaseSection />
    </>
  );
}
