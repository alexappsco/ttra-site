'use client';

import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

const staticBanners = [
  { id: 1, url: '/assets/img_1.png' },
  { id: 2, url: '/assets/img_2.png' },
  { id: 3, url: '/assets/img_3.png' },
  { id: 4, url: '/assets/img_4.jpg' },
  { id: 5, url: '/assets/img_5.jpg' },
  { id: 6, url: '/assets/img_6.jpg' },
];

const slides = ['/assets/slide_img_1.svg', '/assets/slide_img_1.svg', '/assets/slide_img_1.svg'];

export default function InvestmentHero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % staticBanners.length);
    }, 10000);
    return () => clearInterval(bgInterval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const getSlidePosition = (index: number) => {
    const diff = (index - slideIndex + slides.length) % slides.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === 2) return 'left';
    return 'hidden';
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 500, md: 600 },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ✅ الخلفية */}
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
            opacity: bgIndex === index ? 1 : 0,
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(0,72,181,0.75), rgba(0,72,181,0.4))',
            },
          }}
        />
      ))}

      {/* ✅ النص في اليسار */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 16, md: 80 },
          top: '50%',
          transform: 'translateY(-50%)',
          textAlign: 'left',
          color: '#fff',
          zIndex: 5,
          maxWidth: 480,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          استحوذ على فرصتك<br />الاستثمارية اليوم
        </Typography>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.95,
            mb: 4,
            fontSize: { xs: 14, md: 16 },
          }}
        >
          اكتشف، قيّم، وتفاوض لشراء أو بيع الأعمال التجارية بسهولة عبر منصة "استحواذ".
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: '#fff',
            color: '#0048b5',
            fontWeight: 'bold',
            borderRadius: 20,
            px: 4,
            py: 1.2,
            fontSize: 16,
            boxShadow: '0 4px 14px rgba(255,255,255,0.3)',
            '&:hover': { bgcolor: '#f3f3f3' },
          }}
        >
          ← التسجيل
        </Button>
      </Box>

      {/* ✅ الكروت الأمامية في اليمين */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: '5%', md: '10%' }, // ✅ moved from left → right
          bottom: { xs: 100, md: 120 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: 250, md: 350 },
          height: { xs: 180, md: 240 },
          zIndex: 3,
        }}
      >
        {slides.map((img, index) => {
          const pos = getSlidePosition(index);
          let transform = 'scale(0.75) translateX(0)';
          let opacity = 0.4;
          let zIndex = 1;

          if (pos === 'center') {
            transform = 'scale(1) translateX(0)';
            opacity = 1;
            zIndex = 4;
          } else if (pos === 'left') {
            transform = 'scale(0.9) translateX(-150px)';
            zIndex = 2;
          } else if (pos === 'right') {
            transform = 'scale(0.9) translateX(150px)';
            zIndex = 2;
          }

          return (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`slide-${index}`}
              sx={{
                position: 'absolute',
                width: { xs: 200, md: 320 },
                height: 'auto',
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                transform,
                opacity,
                zIndex,
                transition: 'all 1s ease-in-out',
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
