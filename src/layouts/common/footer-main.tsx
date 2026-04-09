'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Stack, Typography, Grid, TextField, Button, IconButton } from '@mui/material';
import { useLocale } from 'next-intl';
import LayoutContainer from '../../sections/home/views/LayoutContainer';
import Iconify from 'src/components/iconify';

export default function Footer() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const BG_COLOR = '#1A062E';

  const content = {
    description: isArabic 
      ? "منصة النشر الرقمي الأولى التي تضمن حقوق الناشر وتمنح القارئ تجربة فريدة." 
      : "The premier digital publishing platform that guarantees publisher rights and offers readers a unique experience.",
    newsletterTitle: isArabic ? "النشرة البريدية" : "Newsletter",
    emailPlaceholder: isArabic ? "بريدك الإلكتروني" : "Your Email Address",
    subscribeBtn: isArabic ? "اشترك الآن" : "Subscribe Now",
    quickLinks: isArabic ? "روابط سريعة" : "Quick Links",
    supportLegal: isArabic ? "الدعم والقانونية" : "Support & Legal",
    links: {
      home: isArabic ? "الرئيسية" : "Home",
      about: isArabic ? "عن تترى" : "About Titra",
      download: isArabic ? "تحميل التطبيق" : "Download App",
      help: isArabic ? "مركز المساعدة" : "Help Center",
      privacy: isArabic ? "سياسة الخصوصية" : "Privacy Policy",
      terms: isArabic ? "شروط الاستخدام" : "Terms of Use",
      faq: isArabic ? "الأسئلة الشائعة" : "FAQ",
    },
    rights: isArabic ? "جميع الحقوق محفوظة © 2026 تترى" : "All rights reserved © 2026 Titra"
  };

  // تعديل الـ FooterLink ليدعم الروابط
  const FooterLink = ({ text, href }: { text: string; href: string }) => (
    <Typography
      component={Link}
      href={href}
      variant="body2"
      sx={{
        color: '#E0E0E0',
        textDecoration: 'none',
        display: 'block',
        mb: 1.5,
        fontSize: '0.9rem',
        textAlign: isArabic ? 'right' : 'left', // تم التعديل ليكون متناسق مع الاتجاه
        transition: 'color 0.3s',
        '&:hover': { color: '#D4AF37' },
      }}
    >
      {text}
    </Typography>
  );

  const socialIcons = [
    { icon: 'mdi:snapchat' },
    { icon: 'mdi:instagram' },
    { icon: 'mdi:twitter' },
  ];

  const devPath = "/under-development";

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        bgcolor: BG_COLOR,
        color: '#fff',
        pt: 8,
        pb: 4,
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      <LayoutContainer>
        <Grid container spacing={{ xs: 5, md: 8 }} justifyContent="space-between" alignItems="flex-start">
          
          <Grid item xs={12} md={4} lg={3} order={{ xs: 1, md: isArabic ? 1 : 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, fontSize: '1.1rem', textAlign: isArabic ? 'right' : 'left' }}>
              {content.newsletterTitle}
            </Typography>
            <Stack spacing={2} alignItems={{ xs: 'center', md: isArabic ? 'flex-start' : 'flex-end' }}>
              <Box 
                sx={{ 
                  width: '100%',
                  bgcolor: 'rgba(255,255,255,0.03)',
                  p: 0.5,
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <TextField
                  fullWidth
                  placeholder={content.emailPlaceholder}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    sx: { 
                      px: 2, 
                      py: 1, 
                      color: '#fff',
                      textAlign: isArabic ? 'right' : 'left',
                      '& input::placeholder': { color: '#888', opacity: 1 }
                    }
                  }}
                />
              </Box>
              
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: '#4B228A',
                  color: '#fff',
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: 2,
                  boxShadow: '0 4px 14px 0 rgba(0,0,0,0.39)',
                  '&:hover': { bgcolor: '#391462' }
                }}
              >
                {content.subscribeBtn}
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2} order={{ xs: 3, md: 2 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, fontSize: '1.1rem', textAlign: isArabic ? 'right' : 'left' }}>
              {content.supportLegal}
            </Typography>
            <Stack>
              <FooterLink href={devPath} text={content.links.help} />
              <FooterLink href={devPath} text={content.links.privacy} />
              <FooterLink href={devPath} text={content.links.terms} />
              <FooterLink href={devPath} text={content.links.faq} />
            </Stack>
          </Grid>

          <Grid item xs={6} md={2} order={{ xs: 4, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, fontSize: '1.1rem', textAlign: isArabic ? 'right' : 'left' }}>
              {content.quickLinks}
            </Typography>
            <Stack>
              <FooterLink href="/" text={content.links.home} />
              <FooterLink href="/about-us" text={content.links.about} />
              <FooterLink href={devPath} text={content.links.download} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} lg={3} order={{ xs: 2, md: isArabic ? 4 : 1 }}>
            <Stack spacing={2} alignItems={{ xs: 'center', md: isArabic ? 'flex-end' : 'flex-start' }}>
               <Image 
                src="/logo/my-books.png" 
                alt="Logo" 
                width={150} 
                height={100} 
                style={{ objectFit: 'contain' }}
              />
              
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#BDBDBD', 
                  lineHeight: 1.8, 
                  textAlign: isArabic ? 'right' : 'left',
                  maxWidth: 300 
                }}
              >
                {content.description}
              </Typography>

              <Stack direction="row" spacing={1}>
                {socialIcons.map((item, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                    }}
                  >
                    <Iconify icon={item.icon} width={20} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Box 
          sx={{ 
            mt: 8, 
            pt: 4, 
            borderTop: '1px solid rgba(255,255,255,0.05)', 
            textAlign: 'center' 
          }}
        >
           <Typography variant="caption" sx={{ color: '#666', letterSpacing: isArabic ? 0 : '1px' }}>
             {content.rights}
           </Typography>
        </Box>
      </LayoutContainer>
    </Box>
  );
}