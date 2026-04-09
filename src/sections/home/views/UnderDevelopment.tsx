'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { m } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Iconify from 'src/components/iconify';
import Header from 'src/layouts/dashboard/header';

export default function UnderDevelopment() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const content = {
    title: isArabic ? 'نحن في مرحلة التطوير الآن' : 'Under Development',
    subtitle: isArabic 
      ? 'نعمل بجد لنقدم لكم أفضل تجربة نشر رقمي. ترقبوا الإطلاق قريباً!' 
      : "We're working hard to bring you the best digital publishing experience. Stay tuned!",
    backBtn: isArabic ? 'العودة للرئيسية' : 'Back to Home',
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#1A062E',
          color: '#fff',
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',
          direction: isArabic ? 'rtl' : 'ltr',
        }}
      >
        {/* Deep Glow Background */}
        <Box
          component={m.div}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #4B228A 0%, transparent 70%)',
            filter: 'blur(100px)',
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ zIndex: 1 }}>
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Spinning Wheel Only */}
            <Box sx={{ mb: 6, display: 'inline-flex' }}>
              <Box
                component={m.div}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Iconify icon="line-md:loading-twotone-loop" width={100} sx={{ color: '#D4AF37' }} />
              </Box>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                mb: 2,
                whiteSpace: { md: 'nowrap' },
                fontSize: { xs: '2.2rem', sm: '3rem', md: '4.5rem' },
                background: 'linear-gradient(90deg, #fff, #D4AF37, #fff)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shine 4s linear infinite',
                '@keyframes shine': {
                  '0%': { backgroundPosition: '0% center' },
                  '100%': { backgroundPosition: '200% center' },
                },
                textShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              {content.title}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#BDBDBD',
                mb: 6,
                maxWidth: '750px',
                mx: 'auto',
                fontWeight: 400,
                opacity: 0.8,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6
              }}
            >
              {content.subtitle}
            </Typography>

            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                component={Link}
                href="/"
                variant="outlined"
                size="large"
                // startIcon={<Iconify icon={isArabic ? "eva:arrow-back-fill" : "eva:arrow-fill"} />}
                sx={{
                  borderColor: '#D4AF37',
                  color: '#D4AF37',
                  borderWidth: '2px',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#fff',
                    color: '#1A062E',
                    bgcolor: '#fff',
                    boxShadow: '0 0 30px rgba(255,255,255,0.3)',
                    borderWidth: '2px',
                  },
                }}
              >
                {content.backBtn}
              </Button>
            </m.div>
          </m.div>
        </Container>

        {/* 30 Floating Gold Particles */}
        {[...Array(30)].map((_, i) => (
          <Box
            key={i}
            component={m.div}
            animate={{
              y: [0, (i % 2 === 0 ? -100 : 100) * Math.random(), 0],
              x: [0, (i % 3 === 0 ? 80 : -80) * Math.random(), 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
            sx={{
              position: 'absolute',
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              bgcolor: '#D4AF37',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 12px #D4AF37',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
        ))}
      </Box>
    </>
  );
}