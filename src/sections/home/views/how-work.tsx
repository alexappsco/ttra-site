'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';
import DownloadApp from './download-app';

const steps = [
  { title: 'حمل التطبيق', desc: 'قم بتحميل التطبيق عبر Google Play أو App Store', icon: '/assets/icons/how-work/material-symbols-light_mobile-3-outline.svg', side: 'left' },
  { title: 'احجز موعدك', desc: 'اختر الطبيب المناسب واحجز جلسة مباشرة أو فيديو', icon: '/assets/icons/how-work/material-symbols-light_mobile-3-outline (1).svg', side: 'right' },
  { title: 'استلم التشخيص', desc: 'احصل على تشخيص دقيق وخطة علاج من الطبيب', icon: '/assets/icons/how-work/material-symbols-light_mobile-3-outline (2).svg', side: 'left' },
  { title: 'التحاليل المطلوبة', desc: 'قم بإرسال أي تحاليل أو صور مطلوبة أثناء المتابعة', icon: '/assets/icons/how-work/material-symbols-light_mobile-3-outline (3).svg', side: 'right' },
  { title: 'استلم أدويتك', desc: 'توصيل الأدوية ومنتجات العناية لباب منزلك', icon: '/assets/icons/how-work/material-symbols-light_mobile-3-outline (4).svg', side: 'left' },
];

// ===== Motion =====
const cardMotion = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay: index * 0.15, ease: 'easeOut' },
});

const lineMotion = (index: number) => ({
  initial: { scaleX: 0, opacity: 0 },
  whileInView: { scaleX: 1, opacity: 1 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.4, delay: index * 0.15, ease: 'easeOut' }, 
});

export default function OurServices() {
  return (
    <Box id='how-it-works' sx={{ backgroundColor: '#FFF6F1', py: { xs: 6, md: 14 }, px: { xs: 2, md: 6 } }}>
      {/* ===== Title ===== */}
      <Box textAlign="center" mb={{ xs: 5, md: 8 }}>
        <Typography sx={{ fontSize: { xs: 26, md: 40 }, fontWeight: 500, color: '#3A2B25', lineHeight: 1 }}>
          كيف يعمل
        </Typography>
        <Image src="/assets/images/our-services/Vector 14.png" width={160} height={14} alt="" />
      </Box>

      {/* ===== Timeline ===== */}
      <Box sx={{ maxWidth: 900, mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {steps.map((step, index) => {
          const isLeft = step.side === 'left';

          return (
            <React.Fragment key={index}>
              {/* ===== Card ===== */}
              <Box
                component={m.div}
                {...cardMotion(index)}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
                sx={{
                  width: 320,
                  alignSelf: { xs: isLeft ? 'flex-start' : 'flex-end', sm: isLeft ? 'flex-start' : 'flex-end', md: isLeft ? 'flex-start' : 'flex-end' },
                  transform: { xs: isLeft ? 'translateX(12px)' : 'translateX(-12px)', sm: isLeft ? 'translateX(40px)' : 'translateX(-40px)' },
                  backgroundColor: '#fff',
                  border: '0.5px solid #F1A68E',
                  borderRadius: '96px',
                  p: 2.5,
                  display: 'flex',
                  gap: 1,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                  zIndex: 2,
                }}
              >
                <Box sx={{ width: 42, height: 42, borderRadius: '50%', backgroundColor: '#FFE7E1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Image src={step.icon} width={22} height={22} alt="" />
                </Box>

                <Box>
                  <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#3A2B25', mb: 0.5 }}>{step.title}</Typography>
                  <Typography sx={{ fontSize: 14, color: '#7A6A65', lineHeight: 1.3 }}>{step.desc}</Typography>
                </Box>
              </Box>

              {/* ===== Connector ===== */}
              {index < steps.length - 1 && (
                <>
                  {/* iPad + Desktop */}
                  <Box
                    component={m.div}
                    {...lineMotion(index)}
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      alignSelf: 'center',
                      mt: -2,
                      mb: -2,
                      transform: isLeft ? 'translateX(80px)' : 'translateX(-80px)',
                      zIndex: 1,
                      transformOrigin: isLeft ? 'left' : 'right',
                    }}
                  >
                    <Image src={isLeft ? '/assets/icons/how-work/line (1).svg' : '/assets/icons/how-work/line (2).svg'} width={600} height={160} alt="" />
                  </Box>

                  {/* Mobile */}
                  <Box
                    component={m.div}
                    {...lineMotion(index)}
                    sx={{
                      display: { xs: 'flex', sm: 'none' },
                      justifyContent: 'center',
                      transform: 'translateY(-6px)',
                      zIndex: 1,
                      transformOrigin: 'center', 
                    }}
                  >
                    <Image src={isLeft ? '/assets/icons/how-work/line (1).svg' : '/assets/icons/how-work/line (2).svg'} width={350} height={70} alt="" />
                  </Box>
                </>
              )}
            </React.Fragment>
          );
        })}
      </Box>

      <DownloadApp />
    </Box>
  );
}
