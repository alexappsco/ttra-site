
'use client';

import React from 'react';
import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import { Box, Stack, Typography } from '@mui/material';

interface Status {
  id?: string;
  status: string;
  creationTime: string;
  orderId?: string;
}

interface Props {
  orderStatus: Status[];
}

const statusColors: Record<string, string> = {
  Pending: '#fbbf24',
  Processing: '#0ea5e9',
  Shipped: '#9333ea',
  Delivered: '#16a34a',
  Canceled: '#ef4444',
  PartiallyReturned: '#fa16aa',
};

export default function OrderStatusHistories({ orderStatus }: Props) {
  const t = useTranslations('Pages.Order');

  const sortedStatus = [...orderStatus].sort(
    (a, b) => new Date(a.creationTime).getTime() - new Date(b.creationTime).getTime()
  );

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: '1px solid #eee',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          mb: 2,
          fontWeight: 'bold',
          color: 'success.dark',
          bgcolor: '#ABBFAB80',
          display: 'inline-block',
          px: 1.5,
          py: 0.5,
          borderRadius: 2,
        }}
      >
        {t('order_updates')}
      </Typography>

      <Stack spacing={2}>
        {sortedStatus.map((item) => {
          const color = statusColors[item.status] || '#9ca3af';
          const label = t(`Status.${item.status}`);
          const date = dayjs(item.creationTime).format('DD MMMM');
          const time = dayjs(item.creationTime).format('HH:mm');

          return (
            <Box
              key={`${item.status}-${item.creationTime}`} //  unique key fix
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderRight: `4px solid ${color}`,
                pr: 1.5,
                mr: 1,
              }}
            >
              <Box textAlign="left">
                <Typography variant="caption" color="text.secondary">
                  {t('time')} {time}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {date}
                </Typography>
              </Box>

              <Typography sx={{ fontWeight: 'bold', flex: 1, textAlign: 'right' }}>
                {label}
              </Typography>

              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: color,
                  ml: 1.5,
                  mt: 0.5,
                }}
              />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
