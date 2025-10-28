'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { enqueueSnackbar } from 'notistack';
import { endpoints } from 'src/utils/endpoints';
import { useFormContext } from 'react-hook-form';
import { getData } from 'src/utils/crud-fetch-api';
import { Box, Card, Button, TextField, Typography } from '@mui/material';

interface CouponResponse {
  discount: number;
  type: 'FixedAmount' | 'Percentage';
  isActive: boolean;
}

interface FormValues {
  CouponCode: string;
}

export default function DiscountCoupon({ onDiscountApplied }: { onDiscountApplied: (data: CouponResponse) => void }) {
  const t = useTranslations();
  const { setValue } = useFormContext<FormValues>();
  const [code, setCode] = useState('');

  const applyCoupon = async () => {
    if (!code) {
      enqueueSnackbar(t('Global.Message.enter_coupon'), { variant: 'warning' });
      return;
    }
    try {
      const url = endpoints.discountCoupon.sendCoupon(code);
      const response = await getData<any>(url);

      if (response?.data?.isActive) {
        enqueueSnackbar(t('Global.Message.coupon_applied_success'), { variant: 'success' });
        onDiscountApplied(response.data);
        setValue('CouponCode', code);
        setCode('');
      } else {
        enqueueSnackbar(t('Global.Message.error_occurred'), { variant: 'error' });
      }
    } catch {
      enqueueSnackbar(t('Global.Message.error_occurred'), { variant: 'error' });
    }
  };

  return (
    <Card sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        {t('Pages.Carts.discountCoupon')}
      </Typography>
      <Box display="flex" gap={1}>
        <TextField
          placeholder={t('Pages.Carts.enter_coupon')}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          size="small"
          fullWidth
        />
        <Button
          variant="contained"
          sx={{ bgcolor: '#447143', borderRadius: 1.5 }}
          onClick={applyCoupon}
        >
          {t('Pages.Carts.apply')}
        </Button>
      </Box>
    </Card>
  );
}
