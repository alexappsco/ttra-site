'use client';

import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';

/* ================= ANIMATIONS ================= */

/* PHONE IMAGE (RIGHT ➜ LEFT) */
const imageMotion = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

/* TEXT CONTAINER */
const textContainerMotion = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* TEXT ITEMS (LEFT ➜ RIGHT) */
const textItemMotion = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

/* FEATURES */
const featureMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function DownloadAppSection() {
  return (
    <Box
    id="app-section"
      sx={{
        width: '100%',
        backgroundImage: 'url(/downloadApp/BG.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={6}
        sx={{
          maxWidth: 1300,
          mx: 'auto',
          px: { xs: 3, md: 6 },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* ===== PHONE IMAGE (RIGHT) ===== */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={imageMotion}
        >
          <Box
            sx={{
              position: 'relative',
              width: { xs: 260, md: 380 },
              height: { xs: 360, md: 480 },
              flexShrink: 0,
            }}
          >
            <Image
              src="/downloadApp/phone.png"
              alt="App Preview"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </m.div>

        {/* ===== TEXT CONTENT (LEFT) ===== */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={textContainerMotion}
        >
          <Box sx={{ maxWidth: 540 }}>
            {/* Title */}
            <m.div variants={textItemMotion}>
              <Typography
                sx={{
                  color: '#D6B17C',
                  fontSize: { xs: 26, md: 32 },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                حمّل التطبيق الآن
              </Typography>
            </m.div>

            {/* Description */}
            <m.div variants={textItemMotion}>
              <Typography
                sx={{
                  color: '#CFCFCF',
                  fontSize: 16,
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                حمل تطبيقنا بدون رسوم واستمتع بتجربة تسوق فريدة تجمع بين
                الأصالة والحداثة. اكتشف آلاف المنتجات الأصلية واطلبها متى
                تشاء بضغطة زر.
              </Typography>
            </m.div>

            {/* Features */}
            <Stack spacing={1.5} sx={{ mb: 4 }}>
              {[
                'تصفح سلس وسريع',
                'أفضل العروض الحصرية',
                'متابعة الطلبات مباشرة',
                'دعم فني متعدد اللغات',
              ].map((item, index) => (
                <m.div
                  key={index}
                  variants={featureMotion}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Image
                      src="/downloadApp/done.svg"
                      alt="check"
                      width={18}
                      height={18}
                    />
                    <Typography sx={{ color: '#E0E0E0', fontSize: 15 }}>
                      {item}
                    </Typography>
                  </Stack>
                </m.div>
              ))}
            </Stack>

            {/* Store Buttons */}
            <m.div variants={textItemMotion}>
              <Stack direction="row" spacing={2}>
                <Image
                  src="/downloadApp/linkApp.png"
                  alt="App Store"
                  width={150}
                  height={48}
                  style={{ cursor: 'pointer' }}
                />
                <Image
                  src="/downloadApp/LinkApp2.png"
                  alt="Google Play"
                  width={150}
                  height={48}
                  style={{ cursor: 'pointer' }}
                />
              </Stack>
            </m.div>
          </Box>
        </m.div>
      </Stack>
    </Box>
  );
}
