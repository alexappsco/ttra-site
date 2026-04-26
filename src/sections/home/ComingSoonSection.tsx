'use client';

import { Box, Typography, Button, Stack } from '@mui/material';
import { m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { useLocale } from 'next-intl';
import Header from 'src/layouts/dashboard/header';

export default function ComingSoonSection() {
  const router = useRouter();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const TARGET_DATE = new Date('2026-10-25T00:00:00').getTime();

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  }, [TARGET_DATE]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);

      if (remaining <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const handleRedirect = (localeToRedirect: 'ar' | 'en') => {
    router.push(`/${localeToRedirect}/landing`);
  };

  const items = [
    { label: isArabic ? 'أيام' : 'DAYS', value: days },
    { label: isArabic ? 'ساعات' : 'HOURS', value: hours },
    { label: isArabic ? 'دقائق' : 'MINUTES', value: minutes },
    { label: isArabic ? 'ثواني' : 'SECONDS', value: seconds },
  ];

  const text = isArabic ? 'قريباً جداً' : 'coming soon';
  const letters = Array.from(text);

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    initial: { opacity: 0.3, y: 0 },
    animate: {
      opacity: [0.3, 1, 0.3],
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',

        // الخلفية
        backgroundImage: "url('/assets/background/tatra-books.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 10000 }}>
        <Header />
      </Box>

      <Box
        sx={{
          height: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', width: '100%' }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontWeight: 900,
              letterSpacing: { xs: 6, md: 15 },
              mb: 1,
              fontSize: { xs: '2.5rem', md: '6rem' },
              textTransform: 'uppercase',
            }}
          >
            Tatra books
          </Typography>

          <Typography
            component="a"
            href="https://tatrabooks.com/en"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#D4AF37',
              fontSize: { xs: '0.7rem', md: '0.85rem' },
              letterSpacing: { xs: 1, md: 2 },
              fontWeight: 400,
              display: 'inline-block',
              mb: 4,
              textDecoration: 'none',
              opacity: 0.7,
              transition: 'all 0.3s ease',
              '&:hover': {
                opacity: 1,
                textDecoration: 'underline',
              },
            }}
          >
            tatrabooks.com
          </Typography>

          <Box
            component={m.div}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            sx={{
              mb: 8,
              display: 'flex',
              justifyContent: 'center',
              gap: 0.5,
              direction: 'ltr',
            }}
          >
            {letters.map((char, index) => (
              <Typography
                key={index}
                component={m.span}
                variants={letterVariants}
                sx={{
                  color: '#D4AF37',
                  fontSize: { xs: 16, md: 24 },
                  letterSpacing: { xs: 2, md: 4 },
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  whiteSpace: char === ' ' ? 'pre' : 'normal',
                }}
              >
                {char}
              </Typography>
            ))}
          </Box>

          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 10, px: 2 }}
          >
            {items.map((item, i) => (
              <Box key={i} sx={{ textAlign: 'center', minWidth: { xs: 60, md: 140 } }}>
                <Typography
                  sx={{
                    fontSize: { xs: '2rem', md: '5rem' },
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1,
                    fontFamily: 'monospace',
                  }}
                >
                  {String(item.value).padStart(2, '0')}
                </Typography>
                <Typography
                  sx={{
                    color: '#888',
                    fontSize: { xs: 9, md: 14 },
                    letterSpacing: 2,
                    mt: 1,
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ px: 3 }}
          >
            <Button
              onClick={() => handleRedirect('en')}
              sx={{
                px: 6,
                py: 2,
                minWidth: { xs: '100%', sm: 200 },
                borderRadius: 0,
                fontWeight: 800,
                fontSize: '1.1rem',
                border: '2px solid #fff',
                color: '#fff',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': { backgroundColor: '#fff', color: '#000' },
              }}
            >
              ENTER ENGLISH
            </Button>

            <Button
              onClick={() => handleRedirect('ar')}
              sx={{
                px: 6,
                py: 2,
                minWidth: { xs: '100%', sm: 200 },
                borderRadius: 0,
                fontWeight: 800,
                fontSize: '1.2rem',
                backgroundColor: '#D4AF37',
                color: '#000',
                border: '2px solid #D4AF37',
                transition: 'all 0.3s ease',
                '&:hover': { backgroundColor: 'transparent', color: '#D4AF37' },
              }}
            >
              دخول بالعربية
            </Button>
          </Stack>
        </m.div>
      </Box>

      {/* overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
         background: `
  linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)),
  radial-gradient(circle at center, rgba(57, 20, 98, 0.15) 0%, rgba(0,0,0,0.8) 80%)
`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </Box>
  );
}