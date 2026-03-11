'use client';

import Image from 'next/image';
import { Box } from '@mui/material';
import { useLocale } from 'next-intl';
import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function Images() {
  const locale = useLocale();

  const slides = Array.from({ length: 12 }, (_, i) => {
    const index = i + 1;
    return `/assets/slider/slid-${locale}-${index}.jpeg`;
  });

  return (
    <LazyMotion features={domAnimation}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          mb: 6,
          mt: "50px",
        }}
      >
        {slides.map((src, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ width: '100%' }}
          >
            <Box
              sx={{
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <Image
                src={src}
                alt={`slide-${index}`}
                width={1600}
                height={900}
                priority={index === 0}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </m.div>
        ))}
      </Box>
      
    </LazyMotion>
  );
}