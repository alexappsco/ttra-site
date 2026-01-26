'use client';

import React, { useState } from 'react';
import { Box, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import LayoutContainer from './LayoutContainer';
import CustomerReviewCard from './customer-review-card';
import Image from 'next/image';

const REVIEWS = [
  {
    avatar: '/assets/Frame 1171275583.svg',
    name: 'مي محمد',
    review:
      'تجربة رائعة مع العيادة، بشرتي أصبحت أفضل كثير بعد الجلسات والمنتجات الموصوفة. أنصح كل صديقاتي بالتعامل معهم.',
    rating: 5,
  },
  {
    avatar: '/assets/Frame 1171275583.svg',
    name: 'أحمد علي',
    review:
      'خدمة ممتازة وسريعة، الأنشطة التجميلية كانت احترافية للغاية. أنصح الجميع بتجربتها.',
    rating: 4,
  },
  {
    avatar: '/assets/Frame 1171275583.svg',
    name: 'سارة خالد',
    review:
      'أحببت التعامل مع فريق العيادة، كانوا مهتمين بالتفاصيل بشكل رائع. النتائج كانت مذهلة!',
    rating: 5,
  },
  {
    avatar: '/assets/Frame 1171275583.svg',
    name: 'محمد سمير',
    review:
      'كل شيء كان ممتاز! الموظفون لطفاء والخدمة سريعة، أنصح بهذه العيادة بشدة.',
    rating: 5,
  },
  {
    avatar: '/assets/Frame 1171275583.svg',
    name: 'ليلى حسن',
    review:
      'تجربة رائعة، النتائج فاقت توقعاتي. كل شيء مرتب واحترافي.',
    rating: 4,
  },
];

export default function CustomerReviews() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const visibleCount = isLarge ? 3 : 1; 

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < REVIEWS.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Box id="reviews" sx={{ py: { xs: 6, md: 12 } }}>
      <LayoutContainer>
        {/* Title */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 5,
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 30, md: 40 },
              lineHeight: 1,
              mb: 1,
            }}
          >
            آراء العملاء
          </Typography>

          <Image
            src="/assets/images/our-services/Vector 14.png"
            width={180}
            height={15}
            alt="underline"
          />
        </Box>

        {/* Cards Container */}
        <Box sx={{ overflow: 'hidden', position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              transition: 'transform 0.8s ease-in-out',
              width: `${REVIEWS.length * (100 / visibleCount)}%`, 
              transform: `translateX(-${(100 / REVIEWS.length) * currentIndex}%)`, 
            }}
          >
            {REVIEWS.map((review, idx) => (
              <Box
                key={idx}
                sx={{
                  flex: `0 0 ${100 / REVIEWS.length}%`, 
                  px: 1,
                }}
              >
                <CustomerReviewCard {...review} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Pagination */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={6}>
          {/* Arrows */}
          <Stack direction="row" spacing={2}>
            
            <Box
              onClick={handleNext}
              sx={{
                width: 44,
                height: 44,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor:
                  currentIndex >= REVIEWS.length - visibleCount ? 'not-allowed' : 'pointer',
                backgroundColor:
                  currentIndex >= REVIEWS.length - visibleCount ? '#E0E0E0' : '#F6B18A',
                boxShadow: '-4px 4px 20px 0px #20B4861F',
              }}
            >
              <Image src="/assets/Vector-right.svg" alt="next" width={15} height={15} />
            </Box>
            <Box
              onClick={handlePrev}
              sx={{
                width: 44,
                height: 44,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                backgroundColor: currentIndex === 0 ? '#E0E0E0' : '#F6B18A',
                boxShadow: '-4px 4px 20px 0px #20B4861F',
              }}
            >
              <Image src="/assets/Vector-left.svg" alt="prev" width={15} height={15} />
            </Box>
          </Stack>

          {/* Dots */}
          <Stack direction="row" spacing={1}>
            {REVIEWS.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor:
                    index >= currentIndex && index < currentIndex + visibleCount
                      ? '#F6B18A'
                      : '#E0E0E0',
                }}
              />
            ))}
          </Stack>
        </Stack>
      </LayoutContainer>
    </Box>
  );
}
