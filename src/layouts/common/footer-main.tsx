'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography, IconButton, Grid } from '@mui/material';

import LayoutContainer from '../../sections/home/views/LayoutContainer';
import Iconify from 'src/components/iconify';

export default function Footer() {
  const FooterLink = ({ text, active }: { text: string; active?: boolean }) => (
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      sx={{
        cursor: 'pointer',
        mb: 1.4,
        '&:hover span': { color: '#31105D' },
      }}
    >
      <Typography fontSize={13} color={active ? '#31105D' : '#8A8A8A'}>
        «
      </Typography>

      <Typography
        fontSize={14}
        fontWeight={active ? 600 : 400}
        color={active ? '#31105D' : '#8A8A8A'}
      >
        {text}
      </Typography>
    </Stack>
  );

  const social = [
    { icon: 'mdi:snapchat' },
    { icon: 'mdi:instagram' },
    { icon: 'mdi:twitter', active: true },
    { icon: 'mdi:facebook' },
  ];

  const payments = [
    '/assets/footer/mada.png',
    '/assets/footer/paypal.png',
    '/assets/footer/master.png',
    '/assets/footer/visa.png',
  ];

  return (
    <Box  component="footer" sx={{ borderTop: '1px solid #eee', bgcolor: '#fff' }}>
      
      {/* ================= Newsletter (Section from Image) ================= */}
      <Box sx={{ bgcolor: '#FAFAFA', py: 4 }}>
        <LayoutContainer>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={{ xs: 3, lg: 2 }}
          >
            {/* 1. القسم الأيمن: الأيقونة + النصوص */}
            <Stack direction="row" alignItems="center" spacing={2} sx={{ flexShrink: 0 }}>
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  bgcolor: '#F3E8FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Iconify icon="solar:letter-bold" width={32} color="#31105D" />
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography fontSize={20} fontWeight={700} color="#222">
                  الاشتراك فى النشرة البريدية
                </Typography>
                <Typography fontSize={14} color="#666">
                  انضم الآن واحصل على خصم 10% على مشترياتك التالية!
                </Typography>
              </Box>
            </Stack>

            {/* 2. القسم الأوسط: حقل الإدخال */}
            <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: 500 }, width: '100%', px: { lg: 4 } }}>
               <Typography fontSize={13} color="#666" mb={1} textAlign="right" sx={{ display: { xs: 'none', md: 'block' } }}>
                  يمكنك إلغاء الاشتراك في أي لحظة
                </Typography>
              <Stack direction="row" sx={{ direction: 'ltr' }}>
                <Box
                  component="input"
                  placeholder="ادخل البريد الالكتروني"
                  sx={{
                    flex: 1,
                    height: 48,
                    border: '1px solid #E6E6E6',
                    borderLeft: 'none',
                    px: 2,
                    fontSize: 14,
                    outline: 'none',
                    borderRadius: '0 4px 4px 0',
                    textAlign: 'right',
                    bgcolor: '#fff'
                  }}
                />
                <Box
                  component="button"
                  sx={{
                    bgcolor: '#31105D',
                    color: '#fff',
                    border: 'none',
                    px: 4,
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '4px 0 0 4px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  إشتراك
                </Box>
              </Stack>
            </Box>

            {/* 3. القسم الأيسر: تطبيقات الجوال */}
            <Stack alignItems={{ xs: 'center', lg: 'flex-start' }} spacing={1} sx={{ flexShrink: 0 }}>
              <Typography fontSize={16} fontWeight={700} color="#222">
                تطبيقات الجوال
              </Typography>
              <Stack direction="row" spacing={1.5}>
                <Image src="/assets/footer/AppleApp.png" alt="app" width={130} height={42} />
                <Image src="/assets/footer/GoogleApp.png" alt="google" width={130} height={42} />
              </Stack>
            </Stack>

          </Stack>
        </LayoutContainer>
      </Box>

      {/* ================= Links Section ================= */}
      <Box sx={{ py: 6 }}>
        <LayoutContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Typography fontSize={18} fontWeight={700} mb={3}>عن متجرنا</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Typography fontSize={18} fontWeight={700} mb={3}>حسابي</Typography>
              <FooterLink text="حسابي" />
              <FooterLink text="طلباتي" active />
              <FooterLink text="سلة المشتريات" />
              <FooterLink text="المفضلة" />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Typography fontSize={18} fontWeight={700} mb={3}>روابط مهمة</Typography>
              <FooterLink text="من نحن" />
              <FooterLink text="سياسة الخصوصية" />
              <FooterLink text="الشروط والاحكام" />
              <FooterLink text="الدعم الفني" />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Typography fontSize={18} fontWeight={700} mb={3}>تواصل معنا</Typography>
              <Stack spacing={1.5}>
                <Box>
                  <Typography fontSize={13} color="#777">« واتساب</Typography>
                  <Typography fontSize={14} color="#AAA">098765456789</Typography>
                </Box>
                <Box>
                  <Typography fontSize={13} color="#777">« موبايل</Typography>
                  <Typography fontSize={14} color="#AAA">9876545678</Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={2.4}>
              <Typography fontSize={18} fontWeight={700} mb={3}>تابعنا على</Typography>
              <Stack direction="row" spacing={1.5}>
                {social.map((item, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      width: 40,
                      height: 40,
                      border: `1px solid ${item.active ? '#31105D' : '#E6E6E6'}`,
                      color: item.active ? '#31105D' : '#888',
                    }}
                  >
                    <Iconify icon={item.icon} width={20} />
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </LayoutContainer>
      </Box>

      {/* ================= Bottom Bar (Responsive) ================= */}
      <Box sx={{ bgcolor: '#31105D', py: 3 }}>
        <LayoutContainer>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Typography fontSize={14} color="#fff">
              الحقوق محفوظة لمصطفى الحسيني © 2026
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={3}>
              {/* الضريبة بجانب الصور */}
              <Stack direction="row" spacing={1} alignItems="center">
                <Image src="/assets/footer/value.jpg" alt="vat" width={24} height={24} style={{ borderRadius: '4px' }} />
                <Typography color="#fff" fontSize={14}>
                  الرقم الضريبي : 546987552
                </Typography>
              </Stack>

              {/* طرق الدفع */}
              <Stack direction="row" spacing={1}>
                {payments.map((img, i) => (
                  <Box key={i} sx={{ bgcolor: '#fff', borderRadius: 0.5, px: 0.8, display: 'flex', alignItems: 'center', height: 28 }}>
                    <Image src={img} alt="payment" width={35} height={18} />
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </LayoutContainer>
      </Box>
    </Box>
  );
}