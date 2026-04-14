'use client';

import React from 'react';
import { Box, Typography, Stack, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import LayoutContainer from './LayoutContainer'; 
import { useLocale } from 'next-intl';
import { m, Variants } from 'framer-motion';
import Grid from '@mui/material/Grid';

import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import HeadsetIcon from '@mui/icons-material/Headset';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function CloudAndAudioSyncSection() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const bgPurple = '#391462';

  const cloudImage = isArabic ? '/assets/slider/slid-ar-9.jpeg' : '/assets/slider/slid-en-9.jpeg';
  const audioImage = isArabic ? '/assets/slider/slid-ar-10.jpeg' : '/assets/slider/slid-en-10.jpeg';
  const bottomFooterImage = isArabic ? '/assets/slider/slid-ar-12.jpeg' : '/assets/slider/slid-en-12.jpeg';

  const cloudFeatures: FeatureItem[] = [
    {
      title: isArabic ? "المزامنة الشاملة:" : "Unified Sync:",
      desc: isArabic 
        ? "ابدأ القراءة على جهازك اللوحي وأكمل من هاتفك من حيث توقفت بالضبط بفضل السحابة." 
        : "Start reading on your tablet and finish on your phone from where you left off, thanks to the cloud.",
      icon: <CloudQueueIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
    },
    {
      title: isArabic ? "المكتبة الشخصية:" : "Personal Library:",
      desc: isArabic 
        ? "تنظيم آلي للكتب حسب اهتمامات المستخدم." 
        : "Automated book organization based on user interests.",
      icon: <LibraryBooksIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
    },
    {
      title: isArabic ? "المجتمع التفاعلي:" : "Interactive Community:",
      desc: isArabic 
        ? "نظام تقييم ومراجعات لتبادل الآراء بين القراء." 
        : "Rating and review system for inter-reader feedback.",
      icon: <RecordVoiceOverIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
    }
  ];

  const audioFeatures: FeatureItem[] = [
    {
      title: isArabic ? "التحول السلس:" : "Seamless Switch:",
      desc: isArabic 
        ? "انتقل من القراءة البصرية إلى الاستماع الصوتي للكتاب بضغطة واحدة." 
        : "Switch from visual reading to audio listening with a single tap.",
      icon: <HeadsetIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
    },
    {
      title: isArabic ? "الاستمرارية:" : "Continuity:",
      desc: isArabic 
        ? "مثالية للقراءة أثناء التنقل أو ممارسة الرياضة، دون فقدان سياق الكتاب." 
        : "Perfect for reading while commuting or exercising, without losing context.",
      icon: <DirectionsRunIcon sx={{ color: '#D4AF37', fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
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
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: isArabic ? '20px 4px 4px 20px' : '4px 20px 20px 4px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderLeft: isArabic ? '8px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.1)',
          borderRight: !isArabic ? '8px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.1)',
          minHeight: { xs: 'auto', md: '130px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mb: { xs: 2, md: 3 },
          transition: 'all 0.3s ease',
          '&:hover': { transform: 'translateY(-8px)', backgroundColor: 'rgba(255, 255, 255, 0.08)' }
        }}
      >
        <Stack direction="row" alignItems="center" spacing={isMobile ? 1.5 : 2} mb={1}>
          {item.icon}
          <Typography variant="h6" sx={{ color: '#D4AF37', fontWeight: 900, fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.2 }}>
            {item.title}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: '#eee', lineHeight: 1.6, fontWeight: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}>
          {item.desc}
        </Typography>
      </Box>
    </m.div>
  );

  const SectionLayout = ({ title, image, features }: any) => (
    <Box sx={{ mb: { xs: 8, md: 18 } }}>
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
        {title}
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
                borderRadius: '32px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={image}
                alt={title}
                fill
                priority
                style={{ 
                  objectFit: 'fill', 
                  borderRadius: '32px' 
                }}
              />
            </Box>
          </m.div>
        </Grid>

        <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
          <Stack spacing={0}>
            {features.map((feature: any, i: number) => <CardItem key={i} item={feature} />)}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: bgPurple, pt: { xs: 6, md: 12 }, pb: 0, overflow: 'hidden' }}>
      <LayoutContainer>
        <SectionLayout 
          title={isArabic ? "التفاعل والذكاء السحابي" : "Interactive Cloud Intelligence"} 
          image={cloudImage} 
          features={cloudFeatures} 
        />

        <SectionLayout 
          title={isArabic ? 'ميزة "مواصلة الاستماع"' : '"Audio Sync" Feature'} 
          image={audioImage} 
          features={audioFeatures} 
        />
      </LayoutContainer>

      <Box 
        sx={{ 
          width: '100%', 
          position: 'relative',
          height: { xs: '200px', sm: '350px', md: '450px', lg: '550px', xl: '650px' },
          mt: { xs: 4, md: 0 },
        }}
      >
        <Image
          src={bottomFooterImage}
          alt="Footer Banner"
          fill
          priority
          style={{ 
            objectFit: 'fill', 
            objectPosition: 'top center' 
          }}
        />
      </Box>
    </Box>
  );
}