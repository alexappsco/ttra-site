'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import LayoutContainer from './LayoutContainer';
import CustomerReviewCard from './customer-review-card';

const REVIEWS = [
  { name: 'مي محمد', since: 'شهر', review: 'تجربة ممتازة جدًا، كل شيء كان واضح ومنظم من البداية.' },
  { name: 'أحمد علي', since: 'شهرين', review: 'خدمة راقية وتعامل محترم، أنصح بالتجربة.' },
  { name: 'سارة خالد', since: '6 أشهر', review: 'الاهتمام بالتفاصيل فرق معي كثير.' },
  { name: 'محمد سمير', since: 'سنة', review: 'تنظيم ممتاز وسرعة في الخدمة.' },
  { name: 'ليلى حسن', since: '3 أشهر', review: 'التجربة كانت مريحة من أول زيارة.' },
  { name: 'نور أحمد', since: 'سنتين', review: 'تعامل لطيف ونتائج مرضية.' },
];

const LOOP_REVIEWS = [...REVIEWS, ...REVIEWS];

export default function CustomerReviews() {
  return (
    <Box
      sx={{
        background: '#F6F6F6',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <LayoutContainer>
        {/* Title */}
        <Box textAlign="center" mb={7}>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 700,
              color: '#2B2B2B',
            }}
          >
            ماذا يقول{' '}
            <Box component="span" sx={{ color: 'rgba(193, 154, 107, 1)' }}>
              عملاؤنا
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              fontSize: 16,
              color: 'rgba(193, 154, 107, 1)',
            }}
          >
            آلاف العملاء السعداء يثقون في نيو ديرة لتلبية احتياجاتهم
          </Typography>
        </Box>

        {/* Slider */}
        <Box sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              display: 'flex',
              gap: '24px', 
              width: 'max-content',
              animation: 'marquee 40s linear infinite',

              '@keyframes marquee': {
                '0%': {
                  transform: 'translateX(0)',
                },
                '100%': {
                  transform: 'translateX(-50%)',
                },
              },

              '&:hover': {
                animationPlayState: 'paused',
              },
            }}
          >
            {LOOP_REVIEWS.map((item, index) => (
              <CustomerReviewCard key={index} {...item} />
            ))}
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
}
