
'use client';

import React from 'react';
import Slider from 'react-slick';
import { Banner } from 'src/types/banner';
import Iconify from 'src/components/iconify';
import { Box, useTheme, IconButton } from '@mui/material';

interface Props {
  items: Banner[];
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: { xs: 8, md: 16 },
        transform: 'translateY(-50%)',
        zIndex: 2,
        bgcolor: 'Green.50',
        width: { xs: 40, md: 60 },
        height: { xs: 40, md: 60 },
        borderRadius: '50%',
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.9)',
        },
      }}
    >
      <Iconify
        icon="eva:arrow-ios-forward-fill"
        width={24}
        sx={{ color: 'text.primary' }}
      />
    </IconButton>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: { xs: 8, md: 16 },
        transform: 'translateY(-50%)',
        zIndex: 2,
        bgcolor: 'Green.50',
        width: { xs: 40, md: 60 },
        height: { xs: 40, md: 60 },
        borderRadius: '50%',
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.9)',
        },
      }}
    >
      <Iconify
        icon="eva:arrow-ios-back-fill"
        width={24}
        sx={{ color: 'text.primary' }}
      />
    </IconButton>
  );
}

export default function BannerSlider({ items }: Props) {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rtl: true, // Right to left for Arabic
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          gap: 8
        }}>
          {dots}
        </ul>
      </Box>
    ),

    customPaging: (_i: number) => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.5)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.8)',
          },
        }}
      />
    ),
    dotsClass: 'slick-dots custom-dot-class',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        mb: 4,
        position: 'relative',
        '& .slick-dots li.slick-active div': {
          bgcolor: 'white',
        },
      }}
    >
      <Slider {...settings}>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              px: 1,
              display: 'flex !important',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={item.url}
              alt={`banner-${item.id}`}
              sx={{
                borderRadius: 2,
                width: '100%',
                height: { xs: 180, sm: 240, md: 320 },
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}