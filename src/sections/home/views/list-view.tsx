'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

import BannerSlider from './banner-view'; // تأكد من صحة المسار
// القسم الثاني (اختياري)
import FirstSection from '../section-third/first-section';
import SecondSection from '../section-third/second-section';
import JourneySection from './journey-section';

export default function HomeView() {
  return (
    <>
      {/* القسم الأول: السلايدر */}
      <BannerSlider />

      {/* القسم الثاني: صورة متجاوبة ومحتواة */}
      <Box
        component="section"
        sx={{
          width: '100%',
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#fff', // لون خلفية اختياري لتوضيح حدود الصورة
        }}
      >
        <Box
          component="img"
          src="/assets/section_2.svg" // ← مسار الصورة
          alt="Investment Section"
          sx={{
            width: '100%',
            height: { xs: 200, sm: 300, md: 450 },
            objectFit: 'contain', // ✅ يجعل الصورة محتواة بالكامل
            borderRadius: 2,
          }}
        />
      </Box>
      <Box sx={{my:2}}>
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
            py:2,
          }}
        >
          مميزات تجعل استحواذ منصتك الأولى لبيع وشراء الأعمال التجارية
        </Typography>

      </Box>
<FirstSection/>
<SecondSection/>
<JourneySection/>

    </>
  );
}
