'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

import BannerSlider from './banner-view'; // تأكد من صحة المسار
// القسم الثاني (اختياري)
import FirstSection from './company-section';
import SecondSection from './office-section';
import JourneySection from './journey-section';
import ProjectShowcaseSection from './project-showcase-section';
import InteractiveCardSection from '../section-two/interactive-card-section';

export default function HomeView() {
  return (
    <>
      {/* القسم الأول: السلايدر */}
      <BannerSlider />

      {/*  القسم الثاني: المكون التفاعلي الجديد بدلاً من الصورة الثابتة */}
      <InteractiveCardSection />

      <Box sx={{ my: 2 }}>
        {/* Title Text */}
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
        >          مميزات تجعل استحواذ منصتك الأولى لبيع وشراء الأعمال التجارية
        </Typography>
      </Box>
      <FirstSection />
      <SecondSection />
      <JourneySection />
      <ProjectShowcaseSection />
    </>
  );
}
