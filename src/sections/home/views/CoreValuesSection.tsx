'use client';

import React from 'react';
import { Box, Typography, Grid, Stack, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import LayoutContainer from './LayoutContainer'; // تأكد من المسار لديك
import { useLocale } from 'next-intl';
import { m, Variants } from 'framer-motion';

// استيراد الأيقونات
import GavelIcon from '@mui/icons-material/Gavel';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface ValueItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface Values {
  leftSide: ValueItem[];
  rightSide: ValueItem[];
}

export default function CoreValuesSection() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const centerImage = isArabic
    ? '/assets/slider/slid-ar-3.jpeg'
    : '/assets/slider/slid-en-3.jpeg';

  const values: Values = {
    rightSide: [
      {
        title: isArabic ? "العدالة الرقمية" : "Digital Justice",
        desc: isArabic ? "ضمان حقوق الناشرين في كل صفحة تقرأ." : "Ensuring publishers' rights for every page read.",
        icon: <GavelIcon sx={{ color: '#D4AF37' }} />
      },
      {
        title: isArabic ? "الابتكار الصحي" : "Healthy Innovation",
        desc: isArabic ? "الالتزام بتطوير أجهزة تحد من أضرار الأشعة الزرقاء." : "Commitment to devices that reduce blue light eye strain.",
        icon: <HealthAndSafetyIcon sx={{ color: '#D4AF37' }} />
      }
    ],
    leftSide: [
      {
        title: isArabic ? "التمكين الذكي" : "Smart Empowerment",
        desc: isArabic ? "منح أدوات التحكم لطرفي عملية القراءة." : "Providing control tools for both publishers and readers.",
        icon: <SettingsSuggestIcon sx={{ color: '#D4AF37' }} />
      },
      {
        title: isArabic ? "الاستدامة المعرفية" : "Knowledge Sustainability",
        desc: isArabic ? "ضمان وصول المعرفة للجميع عبر نماذج متنوعة." : "Ensuring universal access to knowledge through diverse models.",
        icon: <MenuBookIcon sx={{ color: '#D4AF37' }} />
      }
    ]
  };

  const bookFlipVariants = (isLeft: boolean): Variants => ({
    hidden: { 
      opacity: 0, 
      rotateY: isLeft ? -70 : 70, 
      x: isLeft ? -30 : 30
    },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  });

  const CardItem = ({ item, isLeft }: { item: ValueItem; isLeft: boolean }) => (
    <m.div
      variants={bookFlipVariants(isLeft)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ perspective: '1200px', width: '100%' }}
    >
      <Box
        sx={{
          p: 3,
          backgroundColor: '#fff',
          borderRadius: isLeft ? '20px 4px 4px 20px' : '4px 20px 20px 4px',
          border: '1px solid #f0f0f0',
          borderLeft: isLeft ? '6px solid #D4AF37' : '1px solid #f0f0f0',
          borderRight: !isLeft ? '6px solid #D4AF37' : '1px solid #f0f0f0',
          boxShadow: '0 10px 20px rgba(0,0,0,0.04)',
          minHeight: '130px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          mb: 3,
          transition: 'transform 0.3s ease',
          '&:hover': { transform: 'scale(1.02)' }
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          {item.icon}
          <Typography variant="subtitle1" sx={{ color: '#391462', fontWeight: 800, fontSize: '1.1rem' }}>
            {item.title}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7, fontWeight: 500 }}>
          {item.desc}
        </Typography>
      </Box>
    </m.div>
  );

  return (
    <Box sx={{ backgroundColor: '#ffffff', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <LayoutContainer>
        
        <Typography
          variant="h3"
          sx={{
            color: '#D4AF37',
            textAlign: 'center',
            fontWeight: 900,
            mb: { xs: 6, md: 10 },
            fontSize: { xs: '2.2rem', md: '3.2rem' },
          }}
        >
          {isArabic ? "القيم الجوهرية" : "Core Values"}
        </Typography>

        <Grid container spacing={isMobile ? 4 : 4} alignItems="center" justifyContent="center">
          
          <Grid item xs={12} md={3.5} order={{ xs: 2, md: 1 }}>
            <Stack>
              {values.leftSide.map((v, i) => (
                <CardItem key={`left-${i}`} item={v} isLeft={true} />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 300, sm: 400, md: 500 },
                  borderRadius: 8,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  backgroundColor: '#f9f9f9' 
                }}
              >
                <Image
                  src={centerImage}
                  alt="Core Values Illustration"
                  fill
                  style={{ 
                    objectFit: 'cover', 
                    objectPosition: 'center'
                  }}
                />
              </Box>
            </m.div>
          </Grid>

          <Grid item xs={12} md={3.5} order={{ xs: 3, md: 3 }}>
            <Stack>
              {values.rightSide.map((v, i) => (
                <CardItem key={`right-${i}`} item={v} isLeft={false} />
              ))}
            </Stack>
          </Grid>

        </Grid>
      </LayoutContainer>
    </Box>
  );
}