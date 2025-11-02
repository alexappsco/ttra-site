import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Button,
  useTheme
} from '@mui/material';
// ✅ نستخدم الأيقونات المتوفرة فقط: Instagram و Apple و Twitter.
// سنعتمد على أيقونة Twitter بدلاً من X، ونستخدم SVG لأيقونة TikTok
import { Instagram, Twitter as XIcon, Apple } from '@mui/icons-material';

// --- أيقونات منصات التواصل الاجتماعي المخصصة (لعدم توفر أيقونة TikTok و X المخصصة) ---
const SocialIcon = ({ IconComponent, href }: { IconComponent: React.ElementType, href: string }) => {
  const theme = useTheme();
  return (
    <Link href={href} target="_blank" rel="noopener" sx={{ color: theme.palette.text.primary, transition: 'color 0.2s', '&:hover': { color: theme.palette.primary.main } }}>
      <IconComponent sx={{ fontSize: 24 }} />
    </Link>
  );
};

// --- أيقونة TikTok بسيطة (مخصصة SVG) ---
const TikTokIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.3 0c.9 0 1.9.4 2.6 1.1s1.1 1.7 1.1 2.6c0 .9-.4 1.9-1.1 2.6s-1.7 1.1-2.6 1.1c-.9 0-1.9-.4-2.6-1.1s-1.1-1.7-1.1-2.6c0-.9.4-1.9 1.1-2.6s1.7-1.1 2.6-1.1zm-1.8 17.5c0 .3-.1.6-.3.8s-.4.3-.7.3c-.3 0-.6-.1-.8-.3s-.3-.4-.3-.7v-5.2c0-.3.1-.6.3-.8s.4-.3.7-.3c.3 0 .6.1.8.3s.3.4.3.7v5.2zm-2.7 0c0 .3-.1.6-.3.8s-.4.3-.7.3c-.3 0-.6-.1-.8-.3s-.3-.4-.3-.7v-5.2c0-.3.1-.6.3-.8s.4-.3.7-.3c.3 0 .6.1.8.3s.3.4.3.7v5.2zm10.7-3.7v3.7c0 .9-.4 1.9-1.1 2.6s-1.7 1.1-2.6 1.1c-.9 0-1.9-.4-2.6-1.1s-1.1-1.7-1.1-2.6v-3.7c0-.9.4-1.9 1.1-2.6s1.7-1.1 2.6-1.1c.9 0 1.9.4 2.6 1.1s1.1 1.7 1.1 2.6z"/>
  </svg>
);


// --- أيقونة Google Play (مخصصة SVG) ---
const GooglePlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M2.083 20.312l9.999 3.655 9.999-3.655v-7.669l-9.999-3.655-9.999 3.655v7.669zm1.187-8.086l8.812 3.23 8.812-3.23-8.812-3.23-8.812 3.23zM2.083 4.887l9.999 3.655 9.999-3.655-9.999-3.655-9.999 3.655z" fillRule="evenodd"/>
    </svg>
);


// --- مكون زر تحميل التطبيق ---
const AppDownloadButton = ({ platform, icon, href }: { platform: string, icon: React.ReactNode, href: string }) => {
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
                p: isAppStore ? 1 : 1.5, // تقليل البادينغ قليلاً لـ App Store
                height: 50,
                minWidth: 150,
                '&:hover': { bgcolor: '#333' },
                fontSize: '0.9rem',
                fontWeight: 'bold',
            }}
        >
            <Stack direction="row" alignItems="center" spacing={1} sx={{ direction: 'ltr' }}>
                <Box sx={{ fontSize: '1.2rem' }}>
                   {isAppStore ? <Apple sx={{ fontSize: 24, color: 'white' }} /> : icon}
                </Box>
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
                    {/* 1. الروابط السريعة (تظهر أولاً على الجوال) */}
                    <Stack
                        direction="row"
                        spacing={{ xs: 2, md: 4 }}
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                        // ✅ على الشاشات الصغيرة، اطلب ظهور الروابط ثانياً بعد أزرار التطبيق
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

                    {/* 2. أزرار تحميل التطبيق (تظهر أولاً على الجوال) */}
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent={{ xs: 'center', md: 'flex-end' }}
                        sx={{ width: { xs: '100%', md: 'auto' }, order: { xs: 1, md: 2 } }}
                    >
                        <AppDownloadButton
                            platform="Google Play"
                            icon={<GooglePlayIcon />}
                            href="#"
                        />
                        <AppDownloadButton
                            platform="App Store"
                            icon={<></>} // الأيقونة يتم تمريرها داخليًا كـ <Apple> في المكون نفسه
                            href="#"
                        />
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
                            order: { xs: 1, md: 2 }, // ترتيب في الجوال (الأول)، الديسكتوب (الثاني)
                            // يضمن عرض النص على سطرين أو أكثر في الجوال
                            maxWidth: { xs: '100%', md: '50%' }
                        }}
                    >
                        كل الحقوق محفوظة لصالح شركة منصة استحواذ للتقنية
                        <br className="md:hidden" /> {/* إضافة كسر سطر في الجوال */}
                        المسجلة برقم: 7051862113
                    </Typography>

                    {/* 2. أيقونات التواصل الاجتماعي (على اليسار في الديسكتوب، في الأسفل في الجوال) */}
                    <Stack
                        direction="row"
                        spacing={2}
                        order={{ xs: 2, md: 1 }}
                    >
                        {/* Instagram */}
                        <SocialIcon IconComponent={Instagram} href="#" />
                        {/* TikTok (SVG مخصص) */}
                        <SocialIcon IconComponent={TikTokIcon} href="#" />
                        {/* X (Twitter) */}
                        <SocialIcon IconComponent={XIcon} href="#" />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
