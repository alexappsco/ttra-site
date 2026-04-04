'use client';

import React from 'react';
import { Box, Typography, Grid, Stack, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import LayoutContainer from './LayoutContainer'; 
import { useLocale } from 'next-intl';
import { m, Variants } from 'framer-motion';

import AddBoxIcon from '@mui/icons-material/AddBox';
import AnalyticsIcon from '@mui/icons-material/Analytics';

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function SmartContentManagement() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const centerImage = isArabic ? '/assets/slider/slid-ar-6.jpeg' : '/assets/slider/slid-en-6.jpeg';

  const features: FeatureItem[] = [
    {
      title: isArabic ? "الاستقلالية الكاملة:" : "Full Independence:",
      desc: isArabic
        ? "لوحة تحكم تتيح إضافة/حذف الكتب وتفعيل العروض الترويجية بضغطة زر."
        : "A control panel that allows adding/deleting books and activating promotional offers with a single click.",
      icon: <AddBoxIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
    },
    {
      title: isArabic ? "تحليل سلوك القراء:" : "Reader Behavior Analysis:",
      desc: isArabic
        ? "تقارير دقيقة تشمل \"الفئات العمرية، التوزيع الجغرافي، ومعدلات إكمال الكتب\" لمساعدة الناشر في اتخاذ قرارات إنتاجية مبنية على حقائق."
        : "Detailed reports including \"age groups, geographic distribution, and book completion rates\" to help publishers make productivity decisions based on facts.",
      icon: <AnalyticsIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
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

  const CardItem = ({ item }: { item: FeatureItem }) => (
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
          boxShadow: '0 15px 40px rgba(0,0,0,0.07)',
          minHeight: { xs: 'auto', md: '140px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mb: { xs: 2, md: 3 },
          transition: 'all 0.3s ease',
          '&:hover': { 
            transform: 'translateY(-8px)', 
            boxShadow: '0 20px 45px rgba(0,0,0,0.12)' 
          }
        }}
      >
        <Stack direction="row" alignItems="center" spacing={isMobile ? 1.5 : 2} mb={1}>
          {item.icon}
          <Typography variant="h6" sx={{ color: '#391462', fontWeight: 900, fontSize: { xs: '1.05rem', md: '1.25rem' } }}>
            {item.title}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.6, fontWeight: 500, fontSize: { xs: '0.9rem', md: '1.05rem' } }}>
          {item.desc}
        </Typography>
      </Box>
    </m.div>
  );

  return (
    <Box sx={{ backgroundColor: '#ffffff', py: { xs: 6, md: 12 }, overflow: 'hidden' }}>
      <LayoutContainer>
        
        <Typography
          variant="h2"
          sx={{
            color: '#D4AF37',
            textAlign: 'center',
            fontWeight: 900,
            mb: { xs: 4, md: 10 },
            fontSize: { xs: '1.75rem', md: '3.5rem' },
            px: 2
          }}
        >
          {isArabic ? "إدارة المحتوى بذكاء البيانات" : "Content Management with Data Intelligence"}
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
                  overflow: 'hidden',
                  backgroundColor: 'transparent', 
                  border: 'none',
                  boxShadow: 'none' 
                }}
              >
                <Image
                  src={centerImage}
                  alt="AI Content Management Illustration"
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
              {features.map((f, i) => (
                <CardItem key={i} item={f} />
              ))}
            </Stack>
          </Grid>

        </Grid>
      </LayoutContainer>
    </Box>
  );
}