'use client';

import React from 'react';
import {
  Box,
  Link,
  Stack,
  useTheme,
  Container,
  Typography
} from '@mui/material';
import { usePathname } from 'next/navigation';

// ===== Social Media Icons (SVGs) =====
const InstagramIcon = () => (
  <img src="/assets/icons/social-icons/insta.svg" alt="Instagram" width="24" height="24" />
);

const TikTokIcon = () => (
  <img src="/assets/icons/social-icons/tiktok.svg" alt="TikTok" width="24" height="24" />
);

const X_Icon = () => (
  <img src="/assets/icons/social-icons/x.svg" alt="X (Twitter)" width="24" height="24" />
);

// ===== Generic Social Icon Component =====
const SocialIcon = ({
  IconComponent,
  href
}: {
  IconComponent: React.ElementType;
  href: string;
}) => {
  const theme = useTheme();
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      sx={{
        transition: 'opacity 0.2s',
        '&:hover': { opacity: 0.7 }
      }}
    >
      <IconComponent />
    </Link>
  );
};

// ===== Footer Component =====
export default function Footer() {
  const theme = useTheme();
  const pathname = usePathname();

  //  Only true on homepage (Arabic, English, or default)
  const isHomePage =
    pathname === '/' ||
    pathname === '/ar' ||
    pathname === '/ar/' ||
    pathname === '/en' ||
    pathname === '/en/';

  // Quick Links
  const quickLinks = [
    { name: 'الشروط والأحكام', href: '/privacy-policy' },
    { name: 'الأسئلة الشائعة', href: '/landing-page' },
    { name: 'تواصل معنا', href: '/landing-page' }
  ];

  // App Store Images
  const googleAppImgPath = '/assets/footer/GoogleApp.png';
  const appleAppImgPath = '/assets/footer/AppleApp.png';

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#fff',
        py: { xs: 4, md: 6 },
        borderTop: `1px solid ${theme.palette.divider}`,
        direction: 'rtl'
      }}
    >
      <Container maxWidth="lg">
        {/* ===== Upper Section ===== */}
                        {isHomePage && (
                            <>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          spacing={{ xs: 4, md: 0 }}
          sx={{
            pb: 3,
            mb: 3,
            borderBottom: `1px solid ${theme.palette.divider}`
          }}
        >

          <Stack
            direction="row"
            spacing={{ xs: 2, md: 4 }}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            sx={{
              width: { xs: '100%', md: 'auto' },
              order: { xs: 2, md: 1 }
            }}
          >
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                color="text.primary"
                underline="none"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '0.85rem', md: '1rem' },
                  '&:hover': { color: theme.palette.primary.main }
                }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-end' }}
              sx={{
                width: { xs: '100%', md: 'auto' },
                order: { xs: 1, md: 2 }
              }}
            >
              {/* <Link
                href="#"
                target="_blank"
                rel="noopener"
                sx={{ display: 'inline-block' }}
              >
                <Box
                  component="img"
                  src={googleAppImgPath}
                  alt="Google Play App Download"
                  sx={{
                    height: { xs: 45, md: 50 },
                    width: 'auto',
                    borderRadius: 1.5,
                    boxShadow: theme.shadows[1],
                    objectFit: 'contain'
                  }}
                />
              </Link>

              <Link
                href="#"
                target="_blank"
                rel="noopener"
                sx={{ display: 'inline-block' }}
              >
                <Box
                  component="img"
                  src={appleAppImgPath}
                  alt="App Store App Download"
                  sx={{
                    height: { xs: 45, md: 50 },
                    width: 'auto',
                    borderRadius: 1.5,
                    boxShadow: theme.shadows[1],
                    objectFit: 'contain'
                  }}
                />
              </Link> */}
                            <Link
                href="#"
                target="_blank"
                rel="noopener"
                sx={{ display: 'inline-block' }}
              >
                <Box
                  component="img"
                  src={googleAppImgPath}
                  alt="Google Play App Download"
                  width={150}
                  height={50}
                  sx={{
                    height: { xs: 45, md: 50 },
                    width: 'auto',
                    borderRadius: 1.5,
                    boxShadow: theme.shadows[1],
                    objectFit: 'contain',
                    aspectRatio: '3 / 1'
                  }}
                />
              </Link>

              <Link
                href="#"
                target="_blank"
                rel="noopener"
                sx={{ display: 'inline-block' }}
              >
                <Box
                  component="img"
                  src={appleAppImgPath}
                  alt="App Store App Download"
                  width={150}
                  height={50}
                  sx={{
                    height: { xs: 45, md: 50 },
                    width: 'auto',
                    borderRadius: 1.5,
                    boxShadow: theme.shadows[1],
                    objectFit: 'contain',
                    aspectRatio: '3 / 1'
                  }}
                />
              </Link>
            </Stack>
        </Stack>
        </>
        )}

        {/* ===== Lower Section ===== */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 3, md: 0 }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.75rem', md: '0.9rem' },
              textAlign: { xs: 'center', md: 'right' },
              order: { xs: 1, md: 2 },
              maxWidth: { xs: '100%', md: '50%' }
            }}
          >
            كل الحقوق محفوظة لصالح شركة منصة استحواذ للتقنية
            <br />
            المسجلة برقم: 7051862113
          </Typography>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2} order={{ xs: 2, md: 1 }}>
            <SocialIcon
              IconComponent={InstagramIcon}
              href="https://www.instagram.com/isthwath?igsh=NmE2MG14cGtxMXdu"
            />
            <SocialIcon
              IconComponent={TikTokIcon}
              href="https://www.tiktok.com/@isthwath?_t=ZS-90qp1PPBbhy&_r=1"
            />
            <SocialIcon
              IconComponent={X_Icon}
              href="https://x.com/isthwath?t=njhzZ92EtYko7qkPVTXcEA&s=09"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
