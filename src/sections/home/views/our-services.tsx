'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';

const services = [
  {
    title: 'توصيل الأدوية بسرعة وأمان',
    description: 'أرسل مشكلتك للطبيب مع صور واحصل على تشخيص ووصفة دقيقة بدون انتظار.',
    image: '/assets/images/our-services/unsplash_FO3XO4JQtlo.png',
  },
  {
    title: 'تحليل دقيقة حسب احتياجك',
    description: ' تواصل وجهًا لوجه لمتابعة دقيقة وفحص شامل لبشرتك، كل ذلك من راحة منزلك.',
    image: '/assets/images/our-services/unsplash_FO3XO4JQtlo (3).png',
  },
  {
    title: 'جلسة شخصية فيديو',
    description: 'اختَر بين زيارة المعمل أو إرسال فريقنا إلى بيتك لأخذ العينات بأمان وسهولة.',
    image: '/assets/images/our-services/unsplash_FO3XO4JQtlo (2).png',
  },
  {
    title: 'جلسة شخصية عبر الرسائل',
    description: 'استلم وصفاتك وأدويتك حتى باب بيتك بدون أي عناء.',
    image: '/assets/images/our-services/unsplash_FO3XO4JQtlo (1).png',
  },
];

// Motion config for cards
const cardMotion = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.15 },
});

export default function OurServices() {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, md: 6 }, textAlign: 'center' }}>
      
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", mb: 5, lineHeight: 0 }}>
        <Typography sx={{ fontWeight: 500, fontSize: { xs: '30px', md: '40px' }, letterSpacing: 0, lineHeight: 1, mb: 0 }}>
          خدماتنا
        </Typography>
        <Image 
          src="/assets/images/our-services/Vector 14.png"
          width={180}
          height={15}
          alt="underline"
        />
      </Box>
      
      <Grid container spacing={{ xs: 3, sm: 4, md: 2 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <m.div {...cardMotion(index)} style={{ width: '100%', maxWidth: 280, textAlign: 'center', px: 1, mb: { xs: 4, sm: 6 } }}>
              
              <Box sx={{ overflow: 'hidden', mb: 1 }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={330}
                  style={{ objectFit: 'cover' }}
                />
              </Box>

              <Typography sx={{ fontWeight: 500, mb: 1, textAlign:"center", fontSize:"16px" }}>
                {service.title}
              </Typography>

              <Typography sx={{ color: '#60646E', textAlign:"center", fontSize:"12px", fontWeight:"400", lineHeight: 1.3 }}>
                {service.description}
              </Typography>

            </m.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
