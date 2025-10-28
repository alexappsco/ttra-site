'use client';

import { useTranslations } from 'next-intl';
import Iconify from 'src/components/iconify';
import { useForm, FormProvider } from 'react-hook-form';
import RHFViewMap from 'src/components/hook-form/rhf-view-map';
import driverImage from 'public/assets/icons/global/ic_driver.svg';
import { Box, Stack, Dialog, IconButton, Typography, DialogTitle, DialogContent } from '@mui/material';
interface Props {
  open: boolean;
  onClose: () => void;
  driverName: string;
  driverPhone?: string | null;
  driverLatitude?: number | null;
  driverLongitude?: number | null;
  address: string;
  driverProfileImage?: string;
}

const DEFAULT_CENTER = { lat: 24.7136, lng: 46.6753 };

export default function DialogTrackDriver({
  open,
  onClose,
  driverName,
  driverPhone,
  driverLatitude,
  driverLongitude,
  address,
  driverProfileImage,
}: Props) {
  const t = useTranslations();
  const methods = useForm();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{ sx: { borderRadius: 2, overflow: 'hidden' } }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          fontWeight: 'bold',
          color: '#447143',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pr: 5,
        }}
      >
        {t('Pages.Order.track_order')}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#999',
            '&:hover': { color: '#333' },
          }}
        >
          <Iconify icon="mdi:close" width={22} />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent sx={{ p: 0 }}>
        {/* Map */}
        <FormProvider {...methods}>
          <RHFViewMap
            markerPosition={{
              lat: driverLatitude ?? DEFAULT_CENTER.lat,
              lng: driverLongitude ?? DEFAULT_CENTER.lng,
            }}
            defaultCenter={{
              lat: driverLatitude ?? DEFAULT_CENTER.lat,
              lng: driverLongitude ?? DEFAULT_CENTER.lng,
            }}
            defaultZoom={14}
          />
        </FormProvider>

        {/* Driver Row */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ borderTop: '1px solid #ddd', px: 2, py: 1.5 }}
        >
          {/* Call button */}
          <IconButton
            component="a"
            href={`tel:${driverPhone}`}
            sx={{
              bgcolor: '#447143',
              color: '#fff',
              '&:hover': { bgcolor: '#335933' },
              width: 48,
              height: 48,
            }}
          >
            <Iconify icon="ic:baseline-phone" />
          </IconButton>

          {/* Driver name & phone */}
          <Stack spacing={0.5} flex={1} alignItems="flex-end" sx={{ pr: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {driverName}
            </Typography>
            {driverPhone && (
              <Typography variant="body2" sx={{ color: '#447143', fontWeight: 500 }}>
                {driverPhone}
              </Typography>
            )}
          </Stack>

          {/* Avatar or placeholder */}
          <Box
            component="img"
            src={driverProfileImage || driverImage}
            alt={driverName || driverImage}
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              objectFit: 'cover',
              bgcolor: '#E8F2E8',
            }}
          />
        </Stack>

        {/* Address */}
        <Box
          sx={{
            bgcolor: '#F1F7F1',
            px: 2,
            py: 1.5,
            borderTop: '1px solid #ddd',
          }}
        >
          <Typography variant="body2">{address}</Typography>
        </Box>

        {/* ETA */}
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ px: 2, py: 1 }}>
          <Iconify icon="mdi:information-outline" width={16} color="gray" />
          <Typography variant="caption" color="text.secondary">
            {t('Pages.Order.arrives_in', { minutes: 23 })}
          </Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
