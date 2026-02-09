'use client';

import { Box, Typography, Card } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';
import LayoutContainer from './LayoutContainer';

type Feature = {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
};

const FEATURES: Feature[] = [
  {
    title: 'منتجات أصلية',
    description: 'نضمن جودة وأصالة جميع المنتجات',
    icon: '/assets/icons/home/vest.svg',
  },
  {
    title: 'أسعار منافسة',
    description: 'أفضل الأسعار مقارنةً بالسوق',
    icon: '/assets/icons/home/star.svg',
  },
  {
    title: 'وفّر وقتك',
    description: 'اطلب من البيت واستلم على باب بيتك',
    icon: '/assets/icons/home/time.svg',
    highlighted: true,
  },
  {
    title: 'توصيل سريع',
    description: 'نوصل طلبك بأسرع وقت ممكن',
    icon: '/assets/icons/home/fast.svg',
  },
];

/* ===== ANIMATIONS ===== */
const containerMotion = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textMotion = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function WhyChooseUsSection() {
  return (
    <Box
    id="why-choose-us"
      sx={{
        py: 8,
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ===== TITLE ===== */}
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textMotion}
      >
        <Typography
          sx={{
            fontSize: { xs: 26, md: 48 },
            fontWeight: 700,
            mb: 1,
          }}
        >
          لماذا تختار{' '}
          <Box component="span" sx={{ color: '#C89B6E' }}>
            نيو ديرة
          </Box>{' '}
          ؟
        </Typography>
      </m.div>

      {/* ===== SUBTITLE ===== */}
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textMotion}
      >
        <Typography
          sx={{
            
            fontSize: 16,
            color: '#C89B6E',
            mb: 6,
          }}
        >
          نجمع لك كل مميزات الأسواق التقليدية مع سهولة التسوق الإلكتروني
        </Typography>
      </m.div>

      {/* ===== CARDS ===== */}
      <LayoutContainer>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerMotion}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            {FEATURES.map((item, index) => (
              <m.div key={index} variants={cardMotion}>
                <Card
                  sx={{
                    width: 260,
                    p: 3,
                    borderRadius: 3,
                    boxShadow: item.highlighted
                      ? '0px 10px 30px rgba(0,0,0,0.12)'
                      : 'none',
                    backgroundColor: item.highlighted
                      ? '#FFFFFF'
                      : 'transparent',
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      mx: 'auto',
                      mb: 2,
                      borderRadius: 2,
                      backgroundColor: '#EADFD3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      
                      fontSize: 18,
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      
                      fontSize: 14,
                      color: '#B08968',
                      lineHeight: '22px',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Card>
              </m.div>
            ))}
          </Box>
        </m.div>
      </LayoutContainer>
    </Box>
  );
}
