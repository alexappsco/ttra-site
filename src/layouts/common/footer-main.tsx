'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import LayoutContainer from '../../sections/home/views/LayoutContainer';
import { useRouter } from 'next/navigation';
import Link from 'next/dist/client/link';

export default function Footer() {
  const router = useRouter();

  const socialIcons = [
    '/assets/icons/social-icons/Icon (5).svg', // Instagram
    '/assets/icons/social-icons/Icon (4).svg', // Twitter
    '/assets/icons/social-icons/Icon (3).svg', // Facebook
  ];

  // دالة Scroll للروابط الداخلية بالصفحة
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks: { label: string; id: string }[] = [
    { label: 'من نحن', id: 'who-we-are' },
    { label: 'كيف يعمل', id: 'how-it-works' },
    { label: 'لماذا نيو ديرة', id: 'why-choose-us' },
    { label: 'الفئات', id: 'product' },
  ];

  const supportLinks: { label: string; href: string }[] = [
    { label: 'مركز المساعدة', href: '/legal/help' },
    { label: 'سياسة الخصوصية', href: '/legal/privacy' },
    { label: 'الشروط والأحكام', href: '/legal/terms' },
    { label: 'سياسة الإرجاع', href: '/legal/return-policy' },
  ];

  const bottomLinks: { label: string; href: string }[] = [
    { label: 'سياسة الخصوصية', href: '/legal/privacy' },
    { label: 'الشروط والأحكام', href: '/legal/terms' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#FBF7F2',
        pt: { xs: 6, md: 10 },
        pb: 3,
      }}
    >
      <LayoutContainer>
        {/* ================= Newsletter ================= */}
        <Box textAlign="center" mb={8}>
          <Typography
            fontSize={{ xs: 22, md: 26 }}
            fontWeight={700}
            color="#3E3A36"
            mb={1}
          >
            اشترك في نشرتنا الإخبارية
          </Typography>

          <Typography
            fontWeight={400}
            fontSize={20}
            color="rgba(154, 110, 58, 1)"
            mb={3}
          >
            احصل على آخر العروض والمنتجات الجديدة مباشرة في بريدك
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="input"
              placeholder="ادخل بريدك الإلكتروني"
              type="email"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '100%', sm: 320 },
                padding: { xs: '10px 12px', sm: '14px 16px' },
                borderRadius: 1,
                border: '1px solid rgba(193, 154, 107, 1)',
                fontSize: { xs: 14, sm: 14 },
                outline: 'none',
                flexGrow: 1,
              }}
            />
            <Box
              component="button"
              sx={{
                backgroundColor: 'rgba(193, 154, 107, 1)',
                px: { xs: 3, sm: 4 },
                py: { xs: 1.2, sm: 1.5 },
                width: { sm: 'auto' },
                height: { xs: 40, sm: 50 },
                borderRadius: 1,
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                fontSize: { xs: 14, sm: 16 },
                '&:hover': { backgroundColor: '#B8935C' },
              }}
            >
              اشترك الآن
            </Box>
          </Stack>
        </Box>

        <Box sx={{ borderTop: '1px solid #E8DDD0', mb: 6 }} />

        {/* ================= Main Footer ================= */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 0 },
          }}
        >
          {/* Logo + Description + Social */}
          <Box sx={{ flexBasis: { xs: '100%', md: '22%' }, minWidth: { md: 280 } }}>
            <Stack spacing={2}>
               <Link href="/" style={{ display: 'inline-block' }}>
      <Image
        src="/logo/logo-deira.png"
        alt="نبيه ديرة"
        width={132}
        height={106}
        priority
        style={{ cursor: 'pointer' }}
      />
    </Link>
              <Typography fontSize={16} color="rgba(154, 110, 58, 1)" lineHeight={1.6}>
                نربط بين أصالة الأسواق التقليدية
                وسهولة التسوق الرقمي، اكتشف
                كنوز الرياض من راحة منزلك.
              </Typography>

              <Stack direction="row" spacing={1.5}>
                {socialIcons.map((icon, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '8px',
                      backgroundColor: '#EFE7DD',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <Image src={icon} alt={`social-${idx}`} width={18} height={18} />
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>

          {/* روابط سريعة */}
          <Box sx={{ flexBasis: { xs: '48%', md: '18%' }, minWidth: { md: 200 } }}>
            <Typography fontWeight={600} mb={2}>
              روابط سريعة
            </Typography>
            <Stack spacing={1.2}>
              {footerLinks.map((link) => (
                <Typography
                  key={link.label}
                  fontSize={14}
                  color="rgba(154, 110, 58, 1)"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => handleScroll(link.id)}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* الدعم */}
          <Box sx={{ flexBasis: { xs: '48%', md: '18%' }, minWidth: { md: 200 } }}>
            <Typography fontWeight={600} color="#3E3A36" mb={2}>
              الدعم
            </Typography>
            <Stack spacing={1.2}>
              {supportLinks.map((link) => (
                <Typography
                  key={link.label}
                  fontSize={14}
                  color="rgba(154, 110, 58, 1)"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => router.push(link.href)}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* تواصل معنا */}
          <Box sx={{ flexBasis: { xs: '100%', md: '22%' }, minWidth: { md: 280 } }}>
            <Typography fontWeight={600} color="#3E3A36" mb={2}>
              تواصل معنا
            </Typography>
            <Stack spacing={1.5}>
              <Typography fontSize={14} color="rgba(154, 110, 58, 1)">
                info@nabdira.sa
              </Typography>
              <Typography fontSize={14} color="rgba(154, 110, 58, 1)">
                +966 50 123 4567
              </Typography>
              <Typography fontSize={14} color="rgba(154, 110, 58, 1)">
                الرياض، المملكة العربية السعودية
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* ================= Bottom ================= */}
        <Box
          sx={{
            borderTop: '1px solid #E8DDD0',
            mt: 6,
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography fontSize={16} color="rgba(154, 110, 58, 1)" textAlign="center">
            © 2026 نيو ديرة. جميع الحقوق محفوظة.
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center" sx={{ flexWrap: 'wrap' }}>
            {bottomLinks.map((link) => (
              <Typography
                key={link.label}
                fontSize={16}
                color="rgba(154, 110, 58, 1)"
                sx={{ cursor: 'pointer' }}
                onClick={() => router.push(link.href)}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>
        </Box>
      </LayoutContainer>
    </Box>
  );
}
