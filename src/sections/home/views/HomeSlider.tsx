'use client';

import Image from 'next/image';
import { Box } from '@mui/material';
import { useLocale } from 'next-intl';

import LayoutContainer from 'src/sections/home/views/LayoutContainer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function HomeSlider() {
  const locale = useLocale();

  const slides = Array.from({ length: 12 }, (_, i) => {
    const index = i + 1;
    return `/assets/slider/slid-${locale}-${index}.jpeg`;
  });

  return (
      <Box
        sx={{
          width: '100%',
          borderRadius: 2,
          overflow: 'hidden',
          mb: 6,
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9', // نفس نسبة صورك
                }}
              >
                <Image
                  src={src}
                  alt={`slide-${index}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  style={{
                    objectFit: 'contain', // يمنع القص نهائياً
                    background: '#fff',
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(57, 20, 98, 0.4);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: rgba(57, 20, 98, 1);
        }
      `}</style>
      </Box>

      
  );
}