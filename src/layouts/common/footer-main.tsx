
'use client';

import Image from 'next/image';
import React, { memo } from 'react';
import { usePathname } from 'next/navigation';
import { Box, Link, Stack, useTheme, Container, Typography } from '@mui/material';

// ===== Social Media Icons (Next Image with lazy loading) =====
const SocialIcon = memo(function SocialIcon({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) {
  const theme = useTheme();
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      sx={{
        display: 'inline-block',
        transition: 'opacity 0.2s',
        '&:hover': { opacity: 0.7 },
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        loading="lazy"
        style={{
          filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
        }}
      />
    </Link>
  );
});

// ===== Footer Component =====
export default function Footer() {
  const theme = useTheme();
  const pathname = usePathname();

  const isHomePage =
    pathname === '/' ||
    pathname === '/ar' ||
    pathname === '/ar/' ||
    pathname === '/en' ||
    pathname === '/en/';

  const quickLinks = [
    { name: 'الشروط والأحكام', href: '/privacy-policy' },
    { name: 'الأسئلة الشائعة', href: '/landing-page' },
    { name: 'تواصل معنا', href: '/landing-page' },
  ];

  const socialLinks = [
    { src: '/assets/icons/social-icons/insta.svg', alt: 'Instagram', href: 'https://www.instagram.com/isthwath?igsh=NmE2MG14cGtxMXdu' },
    { src: '/assets/icons/social-icons/tiktok.svg', alt: 'TikTok', href: 'https://www.tiktok.com/@isthwath?_t=ZS-90qp1PPBbhy&_r=1' },
    { src: '/assets/icons/social-icons/x.svg', alt: 'X (Twitter)', href: 'https://x.com/isthwath?t=njhzZ92EtYko7qkPVTXcEA&s=09' },
  ];

  const appBadges = [
    { src: '/assets/footer/GoogleApp.png', alt: 'Google Play App Download' },
    { src: '/assets/footer/AppleApp.png', alt: 'App Store App Download' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#fff',
        py: { xs: 4, md: 6 },
        borderTop: `1px solid ${theme.palette.divider}`,
        direction: 'rtl',
      }}
    >
      <Container maxWidth="lg">
        {/* ===== Upper Section ===== */}
        {isHomePage && (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            spacing={{ xs: 4, md: 0 }}
            sx={{
              pb: 3,
              mb: 3,
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            {/* Quick Links */}
            <Stack
              direction="row"
              spacing={{ xs: 2, md: 4 }}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                width: { xs: '100%', md: 'auto' },
                order: { xs: 2, md: 1 },
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
                    '&:hover': { color: theme.palette.primary.main },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>

            {/* App Store Buttons */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-end' }}
              sx={{
                width: { xs: '100%', md: 'auto' },
                order: { xs: 1, md: 2 },
              }}
            >
              {appBadges.map((app) => (
                <Link key={app.alt} href="#" target="_blank" rel="noopener">
                  <Box
                    sx={{
                      display: 'inline-block',
                      height: { xs: 45, md: 50 },
                      width: 'auto',
                      borderRadius: 1.5,
                      boxShadow: theme.shadows[1],
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={app.src}
                      alt={app.alt}
                      width={150}
                      height={50}
                      loading="lazy"
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </Link>
              ))}
            </Stack>
          </Stack>
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
              maxWidth: { xs: '100%', md: '50%' },
            }}
          >
            كل الحقوق محفوظة لصالح شركة منصة استحواذ للتقنية
            <br />
            المسجلة برقم: 7051862113
          </Typography>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2} order={{ xs: 2, md: 1 }}>
            {socialLinks.map((icon) => (
              <SocialIcon key={icon.alt} {...icon} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
