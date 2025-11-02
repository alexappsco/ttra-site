

import React from 'react';
import {
  Box,
  Link,
  Stack,
  Button,
  useTheme,
  Container,
  Typography
} from '@mui/material';

// ✅ لا حاجة لاستيراد أيقونات من @mui/icons-material للـ Social Icons بعد الآن

// --- أيقونات منصات التواصل الاجتماعي المخصصة (ملفات SVG) ---

// مكون لأيقونة Instagram SVG
const InstagramIcon = (props: any) => (
  <img src="/assets/icons/social-icons/insta.svg" alt="Instagram" width="24" height="24" {...props} />
);

// مكون لأيقونة TikTok SVG
const TikTokIcon = (props: any) => (
  <img src="/assets/icons/social-icons/tiktok.svg" alt="TikTok" width="24" height="24" {...props} />
);

// مكون لأيقونة X (Twitter) SVG
const X_Icon = (props: any) => (
  <img src="/assets/icons/social-icons/x.svg" alt="X (Twitter)" width="24" height="24" {...props} />
);

// SocialIcon يتم تعريفه هنا في ملف Footer.tsx نفسه

// ✅ تم إزالة GooglePlayIcon و AppDownloadButton حيث سيتم استخدام صور ثابتة بدلاً منها

const SocialIcon = ({ IconComponent, href }: { IconComponent: React.ElementType, href: string }) => {
  const theme = useTheme();
  return (
    <Link href={href} target="_blank" rel="noopener" sx={{ color: theme.palette.text.primary, transition: 'color 0.2s', '&:hover': { color: theme.palette.primary.main } }}>
      <IconComponent sx={{ fontSize: 24 }} />
    </Link>
  );
};

// --- مكون زر تحميل التطبيق (تم الإبقاء عليه كما هو، لكننا نمرر الصور مباشرة الآن) ---
const AppDownloadButton = ({ platform, iconSrc, href }: { platform: string, iconSrc: string, href: string }) => {
    const theme = useTheme();

    // تصميم مخصص لزر Apple Store لتقليد التصميم المرفق في الصورة
    const isAppStore = platform === "App Store";

    return (
        <Button
            component={Link}
            href={href}
            target="_blank"
            rel="noopener"
            variant="contained"
            sx={{
                bgcolor: '#000',
                color: '#fff',
                borderRadius: 1.5,
                p: isAppStore ? 1 : 1.5,
                height: 50,
                minWidth: 150,
                '&:hover': { bgcolor: '#333' },
                fontSize: '0.9rem',
                fontWeight: 'bold',
                display: 'flex', // للتأكد من توسيط المحتوى
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Stack direction="row" alignItems="center" spacing={1} sx={{ direction: 'ltr' }}>
                <Box component="img" src={iconSrc} alt={`${platform} icon`} sx={{ width: 24, height: 24 }} />
                <Stack alignItems="flex-start" sx={{ lineHeight: 1.2 }}>
                    <Typography variant="caption" sx={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>
                        {isAppStore ? 'Download on the' : 'GET IT ON'}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                        {platform}
                    </Typography>
                </Stack>
            </Stack>
        </Button>
    );
};


// --- المكون الرئيسي لتذييل الصفحة ---
export const Footer: React.FC = () => {
    const theme = useTheme();

    // قائمة الروابط السريعة
    const quickLinks = [
        { name: 'الشروط والأحكام', href: '#' },
        { name: 'الأسئلة الشائعة', href: '#' },
        { name: 'تواصل معنا', href: '#' },
    ];

    // مسارات صور التطبيق
    const googleAppImgPath = '/assets/footer/GoogleApp.png';
    const appleAppImgPath = '/assets/footer/AppleApp.png';

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
                {/* --- القسم العلوي: الروابط والتحميل --- */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    spacing={{ xs: 4, md: 0 }}
                    sx={{ pb: 3, mb: 3, borderBottom: `1px solid ${theme.palette.divider}` }}
                >
                    {/* 1. الروابط السريعة (تظهر ثانياً على الجوال) */}
                    <Stack
                        direction="row"
                        spacing={{ xs: 2, md: 4 }}
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                        sx={{ width: { xs: '100%', md: 'auto' }, order: { xs: 2, md: 1 } }}
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

                    {/* 2. أزرار تحميل التطبيق (تم استبدالها بصور) */}
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent={{ xs: 'center', md: 'flex-end' }}
                        sx={{ width: { xs: '100%', md: 'auto' }, order: { xs: 1, md: 2 } }}
                    >
                        {/* ✅ زر Google Play كصورة */}
                        <Link href="#" target="_blank" rel="noopener" sx={{ display: 'inline-block' }}>
                            <Box
                                component="img"
                                src={googleAppImgPath}
                                alt="Google Play App Download"
                                sx={{
                                    height: { xs: 45, md: 50 },
                                    width: 'auto',
                                    maxWidth: '100%',
                                    borderRadius: 1.5,
                                    boxShadow: theme.shadows[1],
                                }}
                            />
                        </Link>

                        {/* ✅ زر App Store كصورة */}
                        <Link href="#" target="_blank" rel="noopener" sx={{ display: 'inline-block' }}>
                            <Box
                                component="img"
                                src={appleAppImgPath}
                                alt="App Store App Download"
                                sx={{
                                    height: { xs: 45, md: 50 },
                                    width: 'auto',
                                    maxWidth: '100%',
                                    borderRadius: 1.5,
                                    boxShadow: theme.shadows[1],
                                }}
                            />
                        </Link>
                    </Stack>
                </Stack>

                {/* --- القسم السفلي: الحقوق والتواصل الاجتماعي --- */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={{ xs: 3, md: 0 }}
                >
                    {/* 1. نص حقوق النشر (على اليمين في الديسكتوب، في الأعلى في الجوال) */}
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
                        <br className="md:hidden" />
                        المسجلة برقم: 7051862113
                    </Typography>

                    {/* 2. أيقونات التواصل الاجتماعي (على اليسار في الديسكتوب، في الأسفل في الجوال) */}
                    <Stack
                        direction="row"
                        spacing={2}
                        order={{ xs: 2, md: 1 }}
                    >
                        {/* ✅ استخدام مكونات SVG الجديدة */}
                        <SocialIcon IconComponent={InstagramIcon} href="https://www.instagram.com/isthwath?igsh=NmE2MG14cGtxMXdu" />
                        <SocialIcon IconComponent={TikTokIcon} href="https://www.tiktok.com/@isthwath?_t=ZS-90qp1PPBbhy&_r=1" />
                        <SocialIcon IconComponent={X_Icon} href="https://x.com/isthwath?t=njhzZ92EtYko7qkPVTXcEA&s=09" />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
