'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';

export default function DownloadApp() {
  // Motion variants
  const containerMotion = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const childMotion = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      component={m.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerMotion}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      sx={{
        backgroundColor: '#FFF6F1',
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 0 },
      }}
    >
      {/* ===== WRAPPER ===== */}
      <Box
        sx={{
          maxWidth: { xs: '90%', lg: 1200 },
          mx: 'auto',
          display: 'flex',
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* ===== TEXT ===== */}
        <Box
          component={m.div}
          variants={childMotion}
          sx={{
            flex: { md: 1, lg: 1.2 },
            maxWidth: { lg: 520 },
            textAlign: { xs: 'center', md: 'start' },
            order: { xs: 1, md: 1 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 22, sm: 28, md: 42 },
              fontWeight: 500,
              color: '#2D201C',
              lineHeight: 1.3,
              mb: { xs: 0, md: 2 },
            }}
          >
            ابدأ رحلتك للعناية ببشرتك اليوم مع أفضل الأطباء الدوليين
          </Typography>

          {/* desktop only*/}
          <Box component={m.div} variants={childMotion} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Typography
              sx={{
                fontSize: 15,
                color: '#2D201C',
                lineHeight: 1.6,
                mb: 3,
                maxWidth: 380,
              }}
            >
              حمّل التطبيق الآن واحصل على استشارتك المجانية الأولى!
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Image src="/assets/Button 1.svg" alt="App Store" width={145} height={44} />
              <Image src="/assets/Button 2.svg" alt="Google Play" width={145} height={44} />
            </Box>
          </Box>
        </Box>

        {/* ===== IMAGE ===== */}
        <Box component={m.div} variants={childMotion} sx={{
            flex: { md: 1, lg: 1.3 },
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            order: { xs: 2, md: 2 },
          }}
        >
          <Box sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Image src="/assets/download-app.svg" alt="" fill style={{ objectFit: 'contain' }} />
          </Box>

          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Image src="/assets/download-app.svg" alt="App Preview" width={360} height={560} style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        </Box>

        {/* ===== MOBILE: TEXT + BUTTONS AFTER IMAGE ===== */}
        <Box component={m.div} variants={childMotion} sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', order: 3 }}>
          <Typography sx={{ fontSize: 15, color: '#2D201C', lineHeight: 1.6, mb: 2 }}>
            حمّل التطبيق الآن واحصل على استشارتك المجانية الأولى!
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5 }}>
            <Image src="/assets/Button 1.svg" alt="App Store" width={145} height={44} />
            <Image src="/assets/Button 2.svg" alt="Google Play" width={145} height={44} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
