'use client';

import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { m } from 'framer-motion';
import Grid from '@mui/material/Grid';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function ReaderAccessSection() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  
  const bgPurple = '#391462'; 
  const goldColor = '#D4AF37';

  const data = [
    {
      title: isArabic ? "نظام الاشتراك" : "Subscription System:",
      desc: isArabic ? "مكتبة ضخمة متاحة باشتراك شهري مع ميزة القراءة دون إنترنت." : "A massive library available via monthly subscription with offline reading.",
      icon: <CloudDownloadIcon sx={{ color: goldColor, fontSize: '2.5rem' }} />
    },
    {
      title: isArabic ? "المتجر الحصري" : "Exclusive Store:",
      desc: isArabic ? "قسم مخصص لأحدث الإصدارات والكتب الأكثر مبيعاً عبر الشراء المباشر." : "A dedicated section for latest releases and bestsellers via direct purchase.",
      icon: <ShoppingBagIcon sx={{ color: goldColor, fontSize: '2.5rem' }} />
    },
    {
      title: isArabic ? "المحتوى المجاني" : "Free Content:",
      desc: isArabic ? "آلاف العناوين المتاحة مجاناً بهدف بناء قاعدة جماهيرية وضمان ولائها." : "Thousands of titles available for free to build audience loyalty.",
      icon: <MenuBookIcon sx={{ color: goldColor, fontSize: '2.5rem' }} />
    }
  ];

  const displayData = isArabic ? data : [...data].reverse();

  return (
    <Box sx={{ backgroundColor: bgPurple, py: { xs: 8, md: 12 }, minHeight: '100vh', direction: isArabic ? 'rtl' : 'ltr' }}>
      <Container maxWidth="lg">
        
        <Typography
          variant="h3"
          sx={{
            color: goldColor,
            textAlign: 'center',
            fontWeight: 900,
            mb: { xs: 6, md: 8 },
            fontSize: { xs: '1.8rem', md: '3rem' }
          }}
        >
          {isArabic ? "مستويات الوصول للقارئ" : "Reader Access Levels"}
        </Typography>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: 250, sm: 400, md: 500 },
              mb: { xs: 6, md: 10 },
              borderRadius: '30px',
              p: 1,
              overflow: 'hidden'
            }}
          >
            <Image
              src={isArabic ? "/assets/slider/slid-ar-7.jpeg" : "/assets/slider/slid-en-7.jpeg"}
              alt="Main Illustration"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </m.div>

        <Grid container spacing={4} justifyContent="center">
          {displayData.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <m.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Stack
                  alignItems="center"
                  spacing={2}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                    borderRadius: '20px',
                    height: '100%',
                    transition: '0.3s',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      transform: 'translateY(-10px)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(212, 175, 55, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ color: goldColor, fontWeight: 900, fontSize: '1.2rem' }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: '#ffffff', opacity: 0.8, lineHeight: 1.8, fontSize: '0.95rem', maxWidth: '280px' }}
                  >
                    {item.desc}
                  </Typography>
                </Stack>
              </m.div>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}