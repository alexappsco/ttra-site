'use client';

import React from 'react';
import { Box, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import LayoutContainer from './LayoutContainer';
import { useLocale } from 'next-intl';
import { m, Variants } from 'framer-motion';
import Grid from '@mui/material/Grid';

import InsightsIcon from '@mui/icons-material/Insights';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface FeatureSection {
  left: FeatureItem[];
  right: FeatureItem[];
}

export default function PublisherVisionSection() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const bgPurple = 'rgba(57, 20, 98, 1)';
  const sectionTitleColor = 'rgba(212, 173, 69, 1)';

  const sectionOneImages = isArabic ? '/assets/slider/slid-ar-4.jpeg' : '/assets/slider/slid-en-4.jpeg';
  const sectionOneFeatures: FeatureSection = {
    right: [
      {
        title: isArabic ? "عداد الأرباح اللحظي" : "Instant Earnings Counter",
        desc: isArabic ? "لوحة تحكم ذكية تحول القراءات إلى أرقام مالية فورية." : "Smart dashboard converting reads into instant financial figures.",
        icon: <CalculateIcon sx={{ color: '#D4AF37' }} />
      }
    ],
    left: [
      {
        title: isArabic ? "التفوق التنافسي" : "Competitive Excellence",
        desc: isArabic ? "تتجاوز النماذج التقليدية بتقديم تقارير أداء لحظية." : "Surpassing traditional models with real-time performance reports.",
        icon: <InsightsIcon sx={{ color: '#D4AF37' }} />
      }
    ]
  };

  const sectionTwoImages = isArabic ? '/assets/slider/slid-ar-5.jpeg' : '/assets/slider/slid-en-5.jpeg';
  const sectionTwoFeatures: FeatureSection = {
    right: [
      {
        title: isArabic ? "الحماية الملكية" : "Copyright Protection",
        desc: isArabic ? "استخدام أحدث التقنيات لجعل تصوير أو نسخ المحتوى مستحيلاً." : "Using latest tech to make copying or filming content impossible.",
        icon: <VerifiedUserIcon sx={{ color: '#D4AF37' }} />
      }
    ],
    left: [
      {
        title: isArabic ? "نظام الدفع المباشر" : "Direct Payment System",
        desc: isArabic ? "تحويل العوائد فوراً إلى حساب الناشر بعد خصم العمولات." : "Immediate transfer of earnings to publisher accounts after fees.",
        icon: <AccountBalanceWalletIcon sx={{ color: '#D4AF37' }} />
      }
    ]
  };

  const bookFlipVariants = (isLeft: boolean): Variants => ({
    hidden: { 
      opacity: 0, 
      rotateY: isLeft ? -40 : 40, 
      x: isLeft ? -30 : 30 
    },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  });

  const FeatureCard = ({ item, isLeft }: { item: FeatureItem; isLeft: boolean }) => (
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
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: isLeft ? '20px 4px 4px 20px' : '4px 20px 20px 4px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderLeft: isLeft ? '6px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.1)',
          borderRight: !isLeft ? '6px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.1)',
          mb: 3,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            transform: 'translateY(-5px)',
          }
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
          {item.icon}
          <Typography variant="h6" sx={{ color: '#D4AF37', fontWeight: 800, fontSize: '1.15rem' }}>
            {item.title}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: '#eee', lineHeight: 1.8, fontWeight: 400 }}>
          {item.desc}
        </Typography>
      </Box>
    </m.div>
  );

  const RenderingSection = ({ title, subTitle, image, features }: { title: string, subTitle?: string, image: string, features: FeatureSection }) => (
    <Box sx={{ mb: { xs: 10, md: 15 } }}>
      <Typography 
        variant="h3" 
        sx={{ 
          color: sectionTitleColor, 
          textAlign: 'center', 
          fontWeight: 900, 
          mb: subTitle ? 1 : 6, 
          fontSize: { xs: '1.8rem', md: '2.8rem' } 
        }}
      >
        {title}
      </Typography>
      {subTitle && (
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#D4AF37', 
            textAlign: 'center', 
            fontWeight: 600, 
            mb: 8, 
            fontSize: { xs: '1.1rem', md: '1.6rem' },
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          {subTitle}
        </Typography>
      )}

      <Grid container spacing={isMobile ? 4 : 6} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={3.5} order={{ xs: 2, md: 1 }}>
          <Stack spacing={1}>
            {features.left.map((f, i) => <FeatureCard key={i} item={f} isLeft={true} />)}
          </Stack>
        </Grid>

        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box 
              sx={{ 
                position: 'relative', 
                width: '100%', 
                height: { xs: 280, sm: 350, md: 450 }, 
                borderRadius: '32px', 
                overflow: 'hidden', 
                boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <Image 
                src={image} 
                alt={title} 
                fill 
                style={{ 
                  objectFit: 'fill',
                  borderRadius: '32px'
                }} 
              />
            </Box>
          </m.div>
        </Grid>

        <Grid item xs={12} md={3.5} order={{ xs: 3, md: 3 }}>
          <Stack spacing={1}>
            {features.right.map((f, i) => <FeatureCard key={i} item={f} isLeft={false} />)}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: bgPurple, py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <LayoutContainer>
        <RenderingSection 
          title={isArabic ? "الناشر أولاً" : "Publisher First"} 
          image={sectionOneImages} 
          features={sectionOneFeatures} 
        />

        <RenderingSection 
          title={isArabic ? " لا يوجد سوى الأموال والأمان السيبراني" : "Unmatched Financial & Cyber Security"} 
          image={sectionTwoImages} 
          features={sectionTwoFeatures} 
        />
      </LayoutContainer>
    </Box>
  );
}