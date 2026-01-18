'use client';

import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import LayoutContainer from './LayoutContainer';
import { m } from 'framer-motion';

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

  // ===== Motion Variants =====
  const textMotion = {
    hidden: { opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageMotion = {
    hidden: { opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 20 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: { xs: '40px', md: '80px' },
        paddingBottom: { xs: '60px', md: '120px' },
        bgcolor: "#f1a78e22",
      }}
    >
      <LayoutContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 4 },
          }}
        >
          {/* ===== TEXT ===== */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textMotion}
            style={{ flex: 1, maxWidth: 520, textAlign: { xs: 'center', md: 'right' } }}
          >
            <Typography
              sx={{
                fontSize: { xs: 25, md: 32 },
                fontWeight: 500,
                lineHeight: 1.5,
                mb: 2,
                textAlign: { xs: 'center', md: 'start' },
              }}
            >
              عالجي بشرتك أونلاين مع أخصائيين دوليين
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 16, md: 20 },
                color: '#60646E',
                marginBottom: 4,
                lineHeight: 1.3,
                textAlign: { xs: 'center', md: 'start' },
              }}
            >
              تطبيقنا يقدّم لك جلسات تشخيصية شات أو فيديو مع أفضل الأطباء الدوليين المتخصصين في الجلد والبشرة، التشخيص، التحاليل، وصول الأدوية لغاية باب بيتك بسهولة وأمان.
            </Typography>

            {/* desktop buttons */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-start',
                gap: 2,
                cursor:"pointer"
              }}
            >
              <Image src="/assets/Button 1.svg" alt="app store" width={140} height={45} />
              <Image src="/assets/Button 2.svg" alt="google play" width={140} height={45} />
            </Box>
          </m.div>

          {/* ===== IMAGE ===== */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageMotion}
            style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          >
            <Image
              src="/assets/background/illus.png"
              alt="hero illustration"
              width={520}
              height={520}
              priority
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </m.div>

          {/* mobile + ipad buttons */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              gap: 2,
              marginTop: 2,
              cursor:"pointer"
            }}
          >
            <Image src="/assets/Button 1.svg" alt="app store" width={135} height={40} />
            <Image src="/assets/Button 2.svg" alt="google play" width={135} height={40} />
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
}
