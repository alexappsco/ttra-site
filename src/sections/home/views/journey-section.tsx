'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Box, Grid, Fade, Paper, Button, Typography } from '@mui/material';

export default function JourneySection() {
  const [mode, setMode] = useState<'buyer' | 'seller'>('seller');
  const isSeller = mode === 'seller';

  // ✅ Seller Steps
  const sellerSteps = [
    {
      img: '/assets/images/seller-icon-img/like.png',
      title: 'قارن العروض وتوصّل إلى اتفاق',
      desc: 'راجع العروض المقدمة، قارن بينها، واختر العرض الأنسب لإتمام الصفقة بنجاح.',
    },
    {
      img: '/assets/images/seller-icon-img/supply.png',
      title: 'استقبل العروض وتفاوض',
      desc: 'تلقَّ العروض المقدمة من المشترين، وابدأ المفاوضات للوصول إلى أفضل عرض ممكن.',
    },
    {
      img: '/assets/images/seller-icon-img/messages.png',
      title: 'تفاعل مع المهتمين',
      desc: 'تابع عدد المشاهدات والاستفسارات، ورد على المشترين المحتملين عبر النظام.',
    },
    {
      img: '/assets/images/seller-icon-img/add.png',
      title: 'اطرح مشروعك للبيع',
      desc: 'اعرض نشاطك التجاري بخطوات بسيطة، وحدد تفاصيل البيع والمبالغ والإيرادات بدقة.',
    },
  ];

  // ✅ Buyer Steps
  const buyerSteps = [
    {
      img: '/assets/images/buyer-icon-img/key.png',
      title: 'توصّل إلى الاتفاق النهائي',
      desc: 'قارن بين العروض والبائعين، واختر المشروع الأنسب لإتمام الصفقة بثقة واحترافية.',
    },
    {
      img: '/assets/images/buyer-icon-img/file.png',
      title: 'قدّم عرضك وتفاوض',
      desc: 'أرسل عروضك وابدأ التفاوض عليها بموافقة البائع.',
    },
    {
      img: '/assets/images/buyer-icon-img/home.png',
      title: 'ادرس المشروع بعناية',
      desc: 'اطلع على التفاصيل المالية والتشغيلية لفهم الصورة الكاملة قبل اتخاذ القرار.',
    },
    {
      img: '/assets/images/buyer-icon-img/search.png',
      title: 'تصفّح المشاريع المتاحة',
      desc: 'اكتشف الفرص الاستثمارية ضمن مختلف القطاعات واختر ما يناسبك.',
    },
  ];

  const steps = isSeller ? sellerSteps : buyerSteps;

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: isSeller ? '#E8F5E9' : '#E3F2FD',
        textAlign: 'center',
        direction: 'rtl',
        transition: 'background-color 0.5s ease',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: isSeller ? '#2E7D32' : '#1976D2',
          mb: 3,
        }}
      >
        رحلتك تبدأ من هنا
      </Typography>

      {/* Switch Buttons */}
      <Box display="flex" justifyContent="center" gap={2} mb={4}>
        <Button
          variant={isSeller ? 'contained' : 'outlined'}
          onClick={() => setMode('seller')}
          sx={{
            bgcolor: isSeller ? '#2E7D32' : 'transparent',
            color: isSeller ? '#fff' : '#2E7D32',
            borderColor: '#2E7D32',
            '&:hover': { bgcolor: isSeller ? '#1B5E20' : '#E8F5E9' },
          }}
        >
          أنا بائع
        </Button>
        <Button
          variant={!isSeller ? 'contained' : 'outlined'}
          onClick={() => setMode('buyer')}
          sx={{
            bgcolor: !isSeller ? '#1976D2' : 'transparent',
            color: !isSeller ? '#fff' : '#1976D2',
            borderColor: '#1976D2',
            '&:hover': { bgcolor: !isSeller ? '#1565C0' : '#E3F2FD' },
          }}
        >
          أنا مشتري
        </Button>
      </Box>

      {/* Subtitle */}
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold' }}>
        {isSeller ? 'كيف تبيع مشروعك؟' : 'كيف تشتري مشروعك؟'}
      </Typography>

      {/* Steps Grid */}
      <Fade in timeout={500}>
        <Grid container spacing={2} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                {/* ✅ PNG Icon */}
                <Box
                  sx={{
                    width: 65,
                    height: 65,
                    mb: 2,
                    position: 'relative',
                  }}
                >
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
}
