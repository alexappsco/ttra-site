
'use client';
import { paths } from 'src/routes/paths';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Box, Card, Button, Divider, Typography } from '@mui/material';

interface SummaryCardProps {
  carts: any[];
  deliveryFee: number;
  total: number;
  finalTotal: number;
  TotalVat: number;
    vatPercentage: number; //  new prop

}

export default function SummaryCard({ deliveryFee, TotalVat, total, finalTotal , vatPercentage}: SummaryCardProps) {
  const router = useRouter();
  const t = useTranslations('');

  const discount = 0; // can come from API
  const shippingCost = deliveryFee;
  const FinalTotal = finalTotal ?? total + TotalVat + shippingCost - discount;

  return (
    <Card sx={{ p: 2, borderRadius: 2 }}>
      {/* Subtotal */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>{t('Pages.Carts.summary.purchasesvalue')}</Typography>
        <Typography>{total.toFixed(2)} {t('Pages.Currency.symbol')}</Typography>
      </Box>

      {/* VAT */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>           {t('Pages.Order.vat_rate', { var: (vatPercentage * 100).toFixed(0) })}
  </Typography>
        <Typography>{TotalVat.toFixed(2)} {t('Pages.Currency.symbol')}</Typography>

      </Box>

      {/* Discount */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>{t('Pages.Carts.summary.discount')}</Typography>
        <Typography>{discount.toFixed(2)} {t('Pages.Currency.symbol')}</Typography>
      </Box>

      {/* Shipping */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>{t('Pages.Order.delivery_fee_with_shipping_cost')}</Typography>
        <Typography>{shippingCost.toFixed(2)} {t('Pages.Currency.symbol')}</Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Total */}
      <Box display="flex" justifyContent="space-between" fontWeight="bold">
        <Typography>{t('Pages.Carts.summary.total')}</Typography>
        <Typography>{FinalTotal.toFixed(2)} {t('Pages.Currency.symbol')}</Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2, bgcolor: '#447143', borderRadius: 1.5 }}
        onClick={() => router.push(paths.controlPanel.paid.view)}
      >
        {t('Pages.Carts.summary.pay')}
      </Button>
    </Card>
  );
}

