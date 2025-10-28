
'use client';

import { useTranslations } from 'next-intl';
import { Box, Card, Typography } from '@mui/material';

export default function CartItems({ carts }: { carts: any[] }) {
  const t = useTranslations();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {carts.map((item) => {
        const {offer} = item.productUnitOfMeasure;
        const price = offer ? offer.price : item.productUnitOfMeasure.price;
        const vatPercentage = item.vatPercentage ?? 0.15;

        // السعر مع الضريبة لمنتج واحد
        const priceWithVat = price + price * vatPercentage;

        // الإجمالي (لكل الكمية)
        const totalWithVat = priceWithVat * item.quantity;

        return (
          <Card
            key={item.id}
            sx={{
              p: 2,
              borderRadius: 2,
              boxShadow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Left side: السعر */}
            <Box display="flex" flexDirection="column" gap={0.5}>
              <Typography variant="body2" color="text.secondary">
                {(priceWithVat).toFixed(2)} {t('Pages.Currency.symbol')} /{' '}
                {item.productUnitOfMeasure.unitOfMeasure.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {t('Pages.Carts.summary.total')}:{' '}
                {totalWithVat.toFixed(2)} {t('Pages.Currency.symbol')}
              </Typography>
            </Box>

            {/* Right side: الصورة والاسم */}
            <Box display="flex" alignItems="center" gap={2}>
              <Box textAlign="right">
                <Typography fontWeight="bold">{item.product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.quantity} {item.productUnitOfMeasure.unitOfMeasure.name}
                </Typography>
              </Box>
              <Box
                component="img"
                src={item.product.imageUrl}
                alt={item.product.name}
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}
