
'use client';

import { useTranslations } from 'next-intl';
import { Box, Card, Divider, Typography } from '@mui/material';

interface CouponResponse {
  discount: number;
  type: 'FixedAmount' | 'Percentage';
  isActive: boolean;
}

interface SummaryCardProps {
  carts: { totalPrice: number }[];
  deliveryFee: number;
  discountData?: CouponResponse | number | null; // can be number when order details
  TotalVat?: number;
  vatPercentage?: number; // dynamically passed from API
  total?: number;
  finalTotal?: number;
  TotalOrderDetails?: number; // when viewing order details
  isOrderDetails?: boolean;
  processingFee?:number
}

export default function SummaryCard({
  carts,
  deliveryFee,
  discountData,
  TotalVat,
  vatPercentage,
  total,
  finalTotal,
  isOrderDetails,
  TotalOrderDetails,
  processingFee
}: SummaryCardProps) {
  const t = useTranslations('');

  // VAT default if missing
  const effectiveVatPercentage = vatPercentage ?? 0.15;

  // Calculate subtotal
  const subtotal = total ?? carts.reduce((sum, item) => sum + (item.totalPrice || 0), 0);

  // Calculate discount
  let discountAmount = 0;
  if (typeof discountData === 'number') {
    discountAmount = discountData;
  } else if (discountData?.isActive) {
    discountAmount =
      discountData.type === 'FixedAmount'
        ? discountData.discount
        : (subtotal * discountData.discount) / 100;
  }

  // VAT after discount
  const vatAfterDiscount =
    TotalVat ?? (subtotal - discountAmount) * effectiveVatPercentage;

  // Default processing fee (3 if missing)
  const fee = processingFee ?? 3;

  // Final total logic
  let computedFinalTotal: number;

  if (isOrderDetails) {
    if (typeof discountData === 'number' && discountData > 0) {
      computedFinalTotal = (finalTotal ?? 0) + discountData + fee;
    } else {
      computedFinalTotal =
        (finalTotal ?? subtotal - discountAmount + vatAfterDiscount + deliveryFee) + fee;
    }
  } else {
    computedFinalTotal =
      finalTotal !== undefined
        ? discountAmount > 0
          ? finalTotal - discountAmount + fee
          : finalTotal + fee
        : subtotal - discountAmount + vatAfterDiscount + deliveryFee + fee;
  }

  return (
    <Card sx={{ p: 2, borderRadius: 2 }}>
      {/* Subtotal */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>{t('Pages.Carts.summary.purchasesvalue')}</Typography>
        <Typography>
          {subtotal.toFixed(2)} {t('Pages.Currency.symbol')}
        </Typography>
      </Box>

      {/* VAT */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>
          {t('Pages.Carts.summary.vat')} ({(effectiveVatPercentage * 100).toFixed(0)}%)
        </Typography>
        <Typography>
          {vatAfterDiscount.toFixed(2)} {t('Pages.Currency.symbol')}
        </Typography>
      </Box>

      {/* Discount */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>{t('Pages.Carts.summary.discount')}</Typography>
        <Typography color={discountAmount > 0 ? 'error' : 'inherit'}>
          -{discountAmount.toFixed(2)} {t('Pages.Currency.symbol')}
        </Typography>
      </Box>
             {/* Shipping */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>{t('Pages.Order.delivery_fee_with_shipping_cost')}</Typography>
        <Typography>
          {deliveryFee.toFixed(2)} {t('Pages.Currency.symbol')}
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Total */}
      <Box display="flex" justifyContent="space-between" fontWeight="bold">
        <Typography>{t('Pages.Carts.summary.total')}</Typography>
        <Typography>
          {isOrderDetails?  TotalOrderDetails : computedFinalTotal.toFixed(2)} {t('Pages.Currency.symbol')}
        </Typography>
      </Box>
    </Card>
  );
}
