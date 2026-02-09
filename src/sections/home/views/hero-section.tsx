



'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  Card,
} from '@mui/material';
import LayoutContainer from './LayoutContainer';
import { m } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import CountUp from 'react-countup';

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const contentMotion = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  const stats = [
    { value: 10, label: 'فئات متنوعة', suffix: '+' },
    { value: 100, label: 'تاجر موثوق', suffix: '+' },
    { value: 500, label: 'منتج أصلي', suffix: '+' },
    
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.8)
          ),
          url('/assets/background/ImageWithFallback.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <LayoutContainer>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentMotion}
        >
          <Stack
            spacing={4}
            alignItems="center"
            textAlign="center"
            sx={{ color: '#fff', py: { xs: 10, md: 0 } }}
          >
            {/* ===== TITLE ===== */}
            <Typography
              sx={{
                fontSize: { xs: 32, sm: 44, md: 70 },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              <Box component="span" sx={{ color: '#C9A063' }}>
                سوق الديرة
              </Box>{' '}
              يوصل لباب بيتك
            </Typography>

            {/* ===== SUBTITLE ===== */}
            <Typography
              sx={{
                maxWidth: 680,
                fontSize: { xs: 12, sm: 14, md: 16 },
                color: 'rgba(248, 246, 243, 1)',
                lineHeight: 1.6,
              }}
            >
              نربط بين أصالة الأسواق التقليدية وسهولة التسوق الرقمي لاكتشاف
              كنوز الرياض من راحة منزلك
            </Typography>

            {/* ===== CTA ===== */}
            <Button
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: 'rgba(193, 154, 107, 1)',
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: '32px',
                fontSize: { xs: 14, md: 16 },
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#b18b54',
                },
              }}
            >
              حمل التطبيق الآن
            </Button>

            {/* ===== STATS ===== */}
            <Stack
              direction="row"
              spacing={{ xs: 1.5, sm: 3, md: 5 }}
              mt={4}
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
            >
              {stats.map((item) => (
                <Card
                  key={item.label}
                  sx={{
                    width: { xs: 100, sm: 150, md: 180 },
                    py: { xs: 1.5, sm: 2 },
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(201,160,99,0.4)',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 20, sm: 26, md: 36 },
                      fontWeight: 700,
                      color: '#C9A063',
                    }}
                  >
                     {item.suffix}
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2}
                      separator=","
                    />
                   
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 12, sm: 14, md: 16 },
                      color: '#fff',
                      mt: 0.5,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Card>
              ))}
            </Stack>
          </Stack>
        </m.div>
      </LayoutContainer>
    </Box>
  );
}
