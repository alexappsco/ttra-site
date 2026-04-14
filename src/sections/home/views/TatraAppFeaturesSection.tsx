'use client';

import React from 'react';
import { Box, Typography, Stack, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import LayoutContainer from './LayoutContainer'; 
import { useLocale } from 'next-intl';
import { m, Variants } from 'framer-motion';
import Grid from '@mui/material/Grid';

import EditNoteIcon from '@mui/icons-material/EditNote';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import CloudOffIcon from '@mui/icons-material/CloudOff';

interface AppFeature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function TatraAppFeaturesSection() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const appImage = isArabic ? '/assets/slider/slid-ar-8.jpeg' : '/assets/slider/slid-en-8.jpeg';

  const appFeatures: AppFeature[] = [
    {
      title: isArabic ? "المذكرة الذكية:" : "Smart Note:",
      desc: isArabic 
        ? "نظام أرشفة للملاحظات والتعليقات مرتبط بكل كتاب للرجوع إليه لاحقاً." 
        : "An archiving system for notes and comments linked to each book for later reference.",
      icon: <EditNoteIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
    },
    {
      title: isArabic ? "تخصيص التجربة:" : "Experience Customization:",
      desc: isArabic 
        ? "تحكم كامل في الخطوط، أحجامها، وألوان التظليل لتناسب راحتك." 
        : "Full control over fonts, sizes, and highlight colors to suit your comfort.",
      icon: <FormatSizeIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
    },
    {
      title: isArabic ? "القراءة الأوفلاين:" : "Offline Reading:",
      desc: isArabic 
        ? "المحتوى متاح معك دائماً وفي كل مكان، حتى بدون اتصال بالإنترنت." 
        : "Content is always with you everywhere, even without an internet connection.",
      icon: <CloudOffIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
    }
  ];

  const bookFlipVariants: Variants = {
    hidden: { 
      opacity: 0, 
      rotateY: isArabic ? 60 : -60, 
      x: isArabic ? 40 : -40 
    },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      x: 0, 
      transition: { duration: 0.9, ease: "easeOut" } 
    }
  };

  const CardItem = ({ item }: { item: AppFeature }) => (
    <m.div
      variants={bookFlipVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ perspective: '1500px', width: '100%' }}
    >
      <Box
        sx={{
          p: { xs: 2.5, md: 4 },
          backgroundColor: '#fff',
          borderRadius: isArabic ? '25px 4px 4px 25px' : '4px 25px 25px 4px',
          border: '1px solid #f0f0f0',
          borderLeft: isArabic ? '10px solid #D4AF37' : '1px solid #f0f0f0',
          borderRight: !isArabic ? '10px solid #D4AF37' : '1px solid #f0f0f0',
          boxShadow: '0 12px 35px rgba(0,0,0,0.06)',
          minHeight: { xs: 'auto', md: '130px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mb: { xs: 2, md: 3 },
          transition: 'all 0.3s ease',
          '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 18px 40px rgba(0,0,0,0.1)' }
        }}
      >
        <Stack direction="row" alignItems="center" spacing={isMobile ? 1.5 : 2} mb={1}>
          {item.icon}
          <Typography variant="h6" sx={{ color: '#391462', fontWeight: 900, fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.2 }}>
            {item.title}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6, fontWeight: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          {item.desc}
        </Typography>
      </Box>
    </m.div>
  );

  return (
    <Box sx={{ backgroundColor: '#ffffff', py: { xs: 6, md: 15 }, overflow: 'hidden' }}>
      <LayoutContainer>
        
        <Typography
          variant="h2"
          sx={{
            color: '#D4AF37',
            textAlign: 'center',
            fontWeight: 900,
            mb: { xs: 4, md: 12 },
            fontSize: { xs: '1.75rem', md: '3.5rem' },
            px: 2
          }}
        >
          {isArabic ? "تطبيق تترى" : "Tatra App"}
        </Typography>

        <Grid container spacing={isMobile ? 3 : 4} alignItems="center">
          
          <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 250, sm: 400, md: 550, lg: 650 }, 
                  borderRadius: '30px',
                  overflow: 'hidden',
                  backgroundColor: 'transparent', 
                  border: 'none',
                  boxShadow: 'none' 
                }}
              >
                <Image
                  src={appImage}
                  alt="Tatra App Illustration"
                  fill
                  priority
                  style={{ 
                    objectFit: 'contain',
                    borderRadius: '20px' 
                  }}
                />
              </Box>
            </m.div>
          </Grid>

          <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
            <Stack spacing={0}>
              {appFeatures.map((feature, i) => (
                <CardItem key={i} item={feature} />
              ))}
            </Stack>
          </Grid>

        </Grid>
      </LayoutContainer>
    </Box>
  );
}