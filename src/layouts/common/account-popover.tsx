'use client';

import { m } from 'framer-motion';
import { useSnackbar } from 'notistack';
import { paths } from 'src/routes/paths';
import { useState, useEffect } from 'react';
import { useRouter } from 'src/routes/hooks';
import Iconify from 'src/components/iconify';
import { endpoints } from 'src/utils/endpoints';
import { useAuthStore } from 'src/auth/auth-store';
import { getData } from 'src/utils/crud-fetch-api';
import { useLocale, useTranslations } from 'next-intl';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import {
  Stack,
  alpha,
  Avatar,
  Button,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';

// -------------------- Types --------------------
interface ProfileResponse {
  id: string;
  name: string;
  phoneNumber: string;
  profileImage: string | null;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  status: number;
}

// -------------------- Component --------------------
export default function AccountPopover() {
  const t = useTranslations('');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const popover = usePopover();
  const { enqueueSnackbar } = useSnackbar();

  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // -------------------- Fetch Profile --------------------
  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async () => {
      try {
        const response = await getData<ApiResponse<ProfileResponse>>(endpoints.auth.viewProf);

        if (!isMounted) return;

        if (response?.success && response.data) {
          setProfile(response.data as any);
        }
      } catch (error) {
        if (isMounted) enqueueSnackbar('Failed to load profile', { variant: 'error' });
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, [enqueueSnackbar]);

  // -------------------- Handlers --------------------
  const handleLogout = async () => {
    try {
      popover.onClose();
      await logout();
      router.push(paths.auth.login);
    } catch (error: any) {
      console.error('Logout error:', error);
      enqueueSnackbar(error?.message || 'Logout failed', { variant: 'error' });
    }
  };

  const handleEdit = () => {
    popover.onClose();
    router.push(paths.controlPanel.profile.viewProfile);
  };

  // -------------------- Helpers --------------------
  const formatPhone = (phone?: string) => {
    if (!phone) return t('Global.Account-Popover.no_phone') || 'No phone number';
    const cleaned = phone.replace(/^\+/, '');
    return `+${cleaned}`;
  };

  const getInitial = () => {
    const name = profile?.name || user?.name;
    return name ? name.charAt(0).toUpperCase() : '';
  };

  const getAvatarSrc = () => {
    return profile?.profileImage || user?.image || undefined;
  };
  // Generate color based on user initial
const getAvatarColor = (initial: string) => {
  const colors = [
    '#1E88E5', // blue
    '#43A047', // green
    '#FB8C00', // orange
    '#8E24AA', // purple
    '#00ACC1', // cyan
    '#F4511E', // deep orange
    '#3949AB', // indigo
  ];

  if (!initial) return '#757575'; // default gray
  const index = initial.charCodeAt(0) % colors.length;
  return colors[index];
};


  // -------------------- Render --------------------
  return (
    <>
      {/* Avatar Button */}
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(popover.open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >

    <Avatar
  src={getAvatarSrc()}
  alt={profile?.name || user?.name || 'User avatar'}
  sx={(theme) => ({
    width: 36,
    height: 36,
    border: `solid 2px ${theme.palette.background.default}`,
    bgcolor: !getAvatarSrc()
      ? getAvatarColor(getInitial())
      : theme.palette.background.paper,
    color: 'white',
    fontWeight: 600,
  })}
>
  {!loading && !getAvatarSrc() && getInitial()}
</Avatar>

      </IconButton>

      {/* Popover Menu */}
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        sx={{
          width: 250,
          p: 3,
          borderRadius: 3,
          boxShadow: 10,
          textAlign: 'center',
        }}
      >
        <Stack alignItems="center" spacing={1}>
          <Avatar
            src={getAvatarSrc()}
            alt={profile?.name || user?.name || 'User avatar'}
            sx={{ width: 80, height: 80 }}
          >
            {!loading && !getAvatarSrc() && getInitial()}
          </Avatar>

          <Typography variant="subtitle1" noWrap>
            {profile?.name || user?.name || t('Global.Account-Popover.no_name') || 'No Name'}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            dir={isArabic ? 'ltr' : 'auto'}
            sx={{
              display: 'inline-block',
              textAlign: isArabic ? 'left' : 'inherit',
              fontFamily: 'monospace',
            }}
          >
            {formatPhone(profile?.phoneNumber || user?.phoneNumber)}
          </Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleEdit}
            startIcon={<Iconify icon="eva:edit-2-fill" />}
            sx={{ justifyContent: 'center', fontWeight: 600 }}
          >
            {t('Global.Account-Popover.update_profile')}
          </Button>

          <Button
            fullWidth
            variant="outlined"
            color="error"
            onClick={handleLogout}
            startIcon={<Iconify icon="solar:logout-2-bold-duotone" />}
            sx={{ justifyContent: 'center', fontWeight: 600 }}
          >
            {t('Global.Account-Popover.logout')}
          </Button>
        </Stack>
      </CustomPopover>
    </>
  );
}
