// components/Footer.tsx
'use client';

import Image from 'next/image';
import { ICONS } from 'src/config-icons';
import { useTranslations } from 'next-intl';
import { primary } from 'src/theme/palette';
import { Box, Stack, Divider, Container, Typography } from '@mui/material';

export default function Footer() {
  const t=useTranslations();
  return (
    <Box sx={{ bgcolor: '#233127', color: 'white', py: 4, fontFamily: 'Cairo, sans-serif' }} >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={4}>
          {/* Logo Section */}

          {/* App Download Section */}
          <Stack alignItems="center" spacing={1}>
            <Typography variant="body2" fontWeight="bold" color={primary.light}>
              {t("Global.Footer.Policy.You_can_also_get_our_mobile_app")}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Image src="/assets/image.png" alt="App Store" width={120} height={100} />
            </Stack>
          </Stack>

          {/* Links Section */}
          <Box textAlign={{ xs: 'center', md: 'right' }} sx={{textAlign:"start"}}>
            <Typography variant="h6" fontWeight="bold" color={primary.light}>
              {t("Metadata.title")}
            </Typography>
            <Typography variant="body2" mt={1} color={primary.light}>{t("Global.Footer.Policy.privacy_policy")}</Typography>
            <Typography variant="body2" color={primary.light}>{t("Global.Footer.Policy.Exchange_Return_Policy")}</Typography>
          </Box>
          <Box>
            <Image src="/logo/sinwan_footr_logo.svg" alt="Logo" width={150} height={110} />
          </Box>
        </Stack>

        {/* Divider */}
        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />
     <Typography
  textAlign="center"
  sx={{
    width: '70px',
    height: '24px',
    fontFamily: 'DIN Next LT Arabic',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    mb: 1.5,
    mx:"auto",
    whiteSpace: 'nowrap',
  }}
>
  {t("Nav.contact-us")}
</Typography>


        {/* Contact Section */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Stack direction="row" spacing={1} alignItems="center" color={primary.light}>
            {ICONS.SocialIcons.gmail}
            <Typography variant="body2" color={primary.light}>example@gmail.com</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center"  color={primary.light}>
            {ICONS.SocialIcons.wats}
            <Typography variant="body2" color={primary.light}>+966223334444</Typography>
            </Stack>
          <Stack direction="row" spacing={1} alignItems="center"  color={primary.light}>
            {ICONS.SocialIcons.phone}
            <Typography variant="body2" color={primary.light}>966223334444</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
