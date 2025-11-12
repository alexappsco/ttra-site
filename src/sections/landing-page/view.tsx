'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Navbar from 'src/layouts/dashboard/navbar';
import { Box, Paper, Stack, Button, useTheme, Typography, useMediaQuery } from '@mui/material';

export default function LandingView() {
  const t = useTranslations();
const googleAppImgPath = '/assets/footer/GoogleApp.png';
  const appleAppImgPath = '/assets/footer/AppleApp.png';
  const loadingImgPath = '/assets/images/loading.png';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md ~ 900px

  return (
    <>
    <Navbar isLanding={true} />
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
      }}
    >
      {/* Right Side - Text Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          p: { xs: 3, sm: 4, md: 6 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            maxWidth: 500,
            textAlign: 'center',
            background: 'transparent',
          }}
        >
          {/* Main Text Section */}
          <Box sx={{ textAlign: 'right', direction: 'rtl' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                fontWeight: 'bold',
                color: '#000',
                mb: 5,
                lineHeight: 1.4,
                textAlign: 'left',
              }}
            >{t(`Global.Message.landing_page_title`)}

            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#000',
                lineHeight: 1.6,
                mb: 2,
                fontSize: { xs: '0.9rem', md: '1.10rem' },
                textAlign: 'left',

              }}
            >
              يمكنك تحميل تطبيق <span style={{ fontWeight: 'bold', color: '#0D6EFD' }}>استحواذ</span> والاستفادة من جميع الخدمات وتصفّح المشاريع مباشرة عبر التطبيق
                     </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#000',
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', md: '1.10rem' },
                                textAlign: 'left',

              }}
            >
              . الموقع الإلكتروني لا يزال قيد التطوير وسيتم إطلاقه قريبًا بإذن الله
            </Typography>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              width: '100%',
              height: '1px',
              backgroundColor: '#E0E0E0',
              my: 3,
            }}
          />

          {/* App Store Buttons */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mb: 2, flexWrap: 'wrap' }}
          >
            <Button
              component="a"
              href="#"
              sx={{
                p: 0,
                minWidth: 'auto',
                '&:hover': { opacity: 0.8 },
              }}
            >
              <Box
                component="img"
                src={googleAppImgPath}
                alt="Get it on Google Play"
                sx={{
                  width: { xs: 130, sm: 150 },
                  height: { xs: 42, sm: 48 },
                  objectFit: 'contain',
                }}
              />
            </Button>

            <Button
              component="a"
              href="#"
              sx={{
                p: 0,
                minWidth: 'auto',
                '&:hover': { opacity: 0.8 },
              }}
            >
              <Box
                component="img"
                src={appleAppImgPath}
                alt="Download on the App Store"
                sx={{
                  width: { xs: 130, sm: 150 },
                  height: { xs: 42, sm: 48 },
                  objectFit: 'contain',
                }}
              />
            </Button>
          </Stack>
        </Paper>
      </Box>

      {/* Left Side - Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '50vh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, md: 0 },
        }}
      >
        <Box
          component="img"
          src={loadingImgPath}
          alt="Loading"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            p:10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </Box>
    </Box>
    </>
  );
}
