'use client';

import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import LayoutContainer from '../../sections/home/views/LayoutContainer';

const linkStyle = {
  fontSize: 14,
  cursor: 'pointer',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#F1A68E',
  },
};

export default function Footer() {
  return (
    <Box
      sx={{
        pt: 8,
        pb: 3,
        backgroundColor: '#fff',
        boxShadow: '0 -8px 20px -10px rgba(0,0,0,0.1)',
        overflowX: 'hidden', // ✅ يمنع أي سكرول أفقي
        width: '100%',
      }}
    >
      <LayoutContainer>
        <Grid container spacing={4}>
          {/* Column 1 - Logo + Name */}
          <Grid item xs={12} sm={12} md={2.4}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Image
                  src="/logo/logo-scen.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  style={{ display: 'block' }}
                />
                <Typography
                  fontWeight={600}
                  fontSize={24}
                  whiteSpace="nowrap"
                >
                  سكين كير
                </Typography>
              </Stack>

              <Typography fontSize={16} color="text.secondary">
                تطبيقك الأول للعناية بالبشرة مع أفضل الأطباء الموجودين في الإمارات
              </Typography>
            </Stack>
          </Grid>

          {/* Column 2 - Quick Links */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography fontWeight={700} mb={2}>
              روابط سريعة
            </Typography>

            {[
              'الرئيسية',
              'خدماتنا',
              'من نحن',
              'كيف يعمل',
              'الأسئلة',
              'آراء العملاء',
            ].map((item) => (
              <Stack
                key={item}
                direction="row"
                spacing={1}
                alignItems="center"
                mb={1}
              >
                <Image
                  src="/assets/Vector-row-right.svg"
                  alt=""
                  width={12}
                  height={12}
                  style={{ display: 'block' }}
                />
                <Typography sx={linkStyle}>{item}</Typography>
              </Stack>
            ))}
          </Grid>

          {/* Column 3 - Legal */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography fontWeight={600} mb={2}>
              معلومات قانونية
            </Typography>

            {['سياسة الخصوصية', 'الشروط والأحكام', 'الأسئلة الشائعة'].map(
              (item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  mb={1}
                >
                  <Image
                    src="/assets/Vector-row-right.svg"
                    alt=""
                    width={12}
                    height={12}
                    style={{ display: 'block' }}
                  />
                  <Typography sx={linkStyle}>{item}</Typography>
                </Stack>
              )
            )}
          </Grid>

          {/* Column 4 - Contact */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography fontWeight={600} mb={2}>
              تواصل معنا
            </Typography>

            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Image
                  src="/assets/Vector-call.svg"
                  alt=""
                  width={16}
                  height={16}
                  style={{ display: 'block' }}
                />
                <Typography sx={linkStyle}>971567328923+</Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Image
                  src="/assets/Vector-mail.svg"
                  alt=""
                  width={16}
                  height={16}
                  style={{ display: 'block' }}
                />
                <Typography sx={linkStyle}>info@skincare.com</Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Image
                  src="/assets/Vector-position.svg"
                  alt=""
                  width={16}
                  height={16}
                  style={{ display: 'block' }}
                />
                <Typography sx={linkStyle}>الإمارات</Typography>
              </Stack>

              {/* Social Icons */}
              <Stack direction="row" spacing={2} mt={1} alignItems="center">
                <Image
                  src="/assets/Vector-linkedin.svg"
                  alt=""
                  width={18}
                  height={18}
                />
                <Image
                  src="/assets/Vector-insta.svg"
                  alt=""
                  width={18}
                  height={18}
                />
                <Image
                  src="/assets/Vector-facebook.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </Stack>
            </Stack>
          </Grid>

          {/* Column 5 - App Download */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography fontWeight={600} mb={2}>
              حمّل تطبيقنا الآن
            </Typography>

            <Typography fontSize={14} color="#153A52" mb={2}>
              ابدأ رحلة العناية ببشرتك مع أفضل أطباء الجلدية الدوليين في الإمارات.
              <br />
              كل خدمات التشخيص، التحاليل، والمتابعة في تطبيق واحد سهل وآمن.
              <br />
              <br />
              حمّل التطبيق الآن وابدأ أول جلسة مجانية
            </Typography>

            {/* Download Buttons */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-start"
              sx={{ width: '100%' }}
            >
              <Box>
                <Image
                  src="/assets/Button 1.svg"
                  alt="app-store"
                  width={140}
                  height={45}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
              <Box>
                <Image
                  src="/assets/Button 2.svg"
                  alt="google-play"
                  width={140}
                  height={45}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box
          sx={{
            borderTop: '1px solid #eee',
            mt: 6,
            pt: 2,
            textAlign: 'center',
          }}
        >
          <Typography fontSize={13} color="text.secondary">
            Copyright © skincare 2025. All Rights Reserved
          </Typography>
        </Box>
      </LayoutContainer>
    </Box>
  );
}
