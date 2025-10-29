'use client';

import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';

// ✅ بيانات الخلفيات
const staticBanners = [
  { id: 1, url: '/assets/img_1.png' },
  { id: 2, url: '/assets/img_2.png' },
  { id: 3, url: '/assets/img_3.png' },
  { id: 4, url: '/assets/img_4.jpg' },
  { id: 5, url: '/assets/img_5.jpg' },
  { id: 6, url: '/assets/img_6.jpg' },
];

export default function InvestmentHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ تغيير الخلفية كل 10 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % staticBanners.length);
    }, 10000); // كل 10 ثواني
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 500, md: 600 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: '#367ce5',
      }}
    >
      {/* ✅ خلفية متغيرة */}
      {staticBanners.map((banner, index) => (
        <Box
          key={banner.id}
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${banner.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1.5s ease-in-out',
            opacity: currentIndex === index ? 1 : 0,
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,72,181,0.6)',
            },
          }}
        />
      ))}

      {/* ✅ الكروت */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: { xs: 1, md: 3 },
          zIndex: 2,
          width:'100%'
        }}
      >
        {/* الصورة اليسار */}
        <Box
          component="img"
          src="/assets/slide_img_2.svg"
          alt="left"
          sx={{
            width: { xs: 120, md: 240 },
            opacity: 0.3,
            transform: { md: 'translateX(60px)' },
          }}
        />

        {/* الصورة الوسط */}
        <Box
          component="img"
          src="/assets/slide_img_1.svg"
          alt="center"
          sx={{
            width: { xs: 180, md: 320 },
            zIndex: 3,
            boxShadow: '0px 10px 30px rgba(0,0,0,0.3)',
            borderRadius: 3,
          }}
        />

        {/* الصورة اليمين */}
        <Box
          component="img"
          src="/assets/slide_img_3.svg"
          alt="right"
          sx={{
            width: { xs: 120, md: 240 },
            opacity: 0.3,
            transform: { md: 'translateX(-60px)' },
          }}
        />
      </Box>

      {/* ✅ النص */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: 16, md: 80 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          textAlign: 'right',
          maxWidth: 420,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            lineHeight: 1.4,
          }}
        >
          استحوذ على فرصتك الاستثمارية اليوم
        </Typography>

        <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>
          اكتشف، قيّم، وتفاوض لإنشاء أو بيع الأعمال التجارية بسهولة عبر منصة “استحواذ”.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: '#fff',
            color: '#0048b5',
            fontWeight: 'bold',
            borderRadius: 10,
            px: 3,
            py: 1,
            '&:hover': { bgcolor: '#e6e6e6' },
          }}
        >
          التسجيل
        </Button>
      </Box>
    </Box>
  );
}
