'use client';

import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import LayoutContainer from './LayoutContainer';
import CustomerReviewCard from './customer-review-card';
import Image from 'next/image';
import { m } from 'framer-motion';

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
    name: 'مي محمد',
    review:
      'تجربة رائعة مع العيادة، بشرتي أصبحت أفضل كثير بعد الجلسات والمنتجات الموصوفة. أنصح كل صديقاتي بالتعامل معهم.',
    rating: 5,
  },
  {
    avatar: '/assets/Frame 1171275583.svg',
    name: 'مي محمد',
    review:
      'تجربة رائعة مع العيادة، بشرتي أصبحت أفضل كثير بعد الجلسات والمنتجات الموصوفة. أنصح كل صديقاتي بالتعامل معهم.',
    rating: 5,
  },
];

// ===== Animations =====
const containerMotion = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemMotion = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function CustomerReviews() {
  return (
    <Box
    id='reviews'
      component={m.div}
      variants={containerMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      sx={{ py: { xs: 6, md: 12 } }}
    >
      <LayoutContainer>
        {/* Title */}
        <Box
          component={m.div}
          variants={itemMotion}
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

        {/* Cards */}
        <Grid container spacing={3}>
          {REVIEWS.map((review, index) => (
            <Grid
              component={m.div}
              variants={itemMotion}
              item
              key={index}
              xs={12}
              lg={4}
              sx={{
                display: {
                  xs: index === 0 ? 'block' : 'none',
                  sm: index === 0 ? 'block' : 'none',
                  md: index === 0 ? 'block' : 'none',
                  lg: 'block',
                },
              }}
            >
              <CustomerReviewCard {...review} />
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Stack
          component={m.div}
          variants={itemMotion}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={6}
        >
          {/* Arrows */}
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '8px',
                backgroundColor: '#F6B18A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '-4px 4px 20px 0px #20B4861F',
              }}
            >
              <Image
                src="/assets/Vector-right.svg"
                alt="next"
                width={15}
                height={15}
              />
            </Box>

            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                cursor: 'pointer',
                boxShadow: '-4px 4px 20px 0px #20B4861F',
              }}
            >
              <Image
                src="/assets/Vector-left.svg"
                alt="prev"
                width={15}
                height={15}
              />
            </Box>
          </Stack>

          {/* Dots */}
          <Stack direction="row" spacing={1}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#F6B18A',
              }}
            />
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#E0E0E0',
              }}
            />
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#E0E0E0',
              }}
            />
          </Stack>
        </Stack>
      </LayoutContainer>
    </Box>
  );
}
