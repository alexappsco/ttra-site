
'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import Grid from '@mui/material/Grid2';
import { paths } from 'src/routes/paths';
import { cartItem } from 'src/types/carts';
import { enqueueSnackbar } from 'notistack';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { endpoints } from 'src/utils/endpoints';
import { postData } from 'src/utils/crud-fetch-api';
import {
  Box,
  Card,
  Stack,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';

interface CartItemsProps {
  carts: cartItem[];
}

export default function CartItems({ carts }: CartItemsProps) {
  const t = useTranslations();
  const router = useRouter();

  const updateCart = async (productUnitOfMeasureId: string, delta: number) => {
    try {
      const url = `${endpoints.Carts.addToCart}?ProductUnitOfMeasureId=${productUnitOfMeasureId}&Quantity=${delta}`;
      const res = await postData(url, {});
      if (res && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
        if (res.status === 401) router.push(paths.auth.login);
      } else {
        enqueueSnackbar('Cart updated successfully', { variant: 'success' });
        window.dispatchEvent(new Event('cartUpdated'));
      }
    } catch (e: any) {
      enqueueSnackbar(e.error, { variant: 'error' });
    }
  };

  const handleIncrement = (item: any) => updateCart(item.productUnitOfMeasure.id, 1);
  const handleDecrement = (item: any) =>
    item.quantity > 1
      ? updateCart(item.productUnitOfMeasure.id, -1)
      : handleRemove(item);
  const handleChangeQuantity = (item: any, value: number) => {
    if (value < 0) return;
    const delta = value - item.quantity;
    if (delta !== 0) updateCart(item.productUnitOfMeasure.id, delta);
  };
  const handleRemove = (item: any) => updateCart(item.productUnitOfMeasure.id, -item.quantity);

  return (
    <Stack spacing={2}>
  {carts.map((item: cartItem) => {
  //  تحديد السعر الصحيح بناءً على وجود عرض
  const hasOffer = !!item.productUnitOfMeasure.offer;
  const basePrice = hasOffer
    ? item.productUnitOfMeasure.offer.price // السعر بعد العرض
    : item.productUnitOfMeasure.price; // السعر العادي

  //  حساب الضريبة والسعر بعد الضريبة
  const unitPriceWithVat = basePrice * (1 + item.vatPercentage);

  //  الإجمالي = السعر بعد الضريبة × الكمية
  const totalWithVat = unitPriceWithVat * item.quantity;

  return (
    <Card
      key={item.id}
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {/* القسم الأيسر (الصورة + النصوص) */}
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap={2}
          sx={{
            flexDirection: 'row',
            flexWrap: 'nowrap',
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Box
            component="img"
            src={item.product.imageUrl}
            alt={item.product.name}
            sx={{
              width: 65,
              height: 65,
              borderRadius: 2,
              objectFit: 'cover',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              flexGrow: 1,
            }}
          >
            <Typography
              noWrap
              fontWeight="bold"
              fontSize={{ xs: 14, sm: 16 }}
              maxWidth={{ xs: 150, sm: 200 }}
            >
              {item.product.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              whiteSpace="nowrap"
            >
              {t('Pages.Carts.summary.total')}: {totalWithVat.toFixed(2)}{' '}
              {t('Pages.Currency.symbol')}
            </Typography>
          </Box>
        </Grid>

        {/* القسم الأيمن (السعر + التحكم في الكمية) */}
        <Grid>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              whiteSpace="nowrap"
            >
              {unitPriceWithVat.toFixed(2)} {t('Pages.Currency.symbol')} /
              {item.productUnitOfMeasure.unitOfMeasure.name}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 1,
                border: '1px solid #d9d9d9',
                backgroundColor: '#f8f8f8',
                overflow: 'hidden',
              }}
            >
              <IconButton
                size="small"
                onClick={() => handleDecrement(item)}
                sx={{
                  bgcolor: 'success.main',
                  color: '#fff',
                  '&:hover': { bgcolor: 'success.dark' },
                  borderRadius: 0,
                }}
              >
                <Icon icon="mdi:minus" />
              </IconButton>

              <TextField
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleChangeQuantity(item, Number(e.target.value))
                }
                inputProps={{
                  min: 0,
                  style: {
                    textAlign: 'center',
                    width: 50,
                    border: 'none',
                    backgroundColor: 'transparent',
                  },
                }}
                variant="standard"
                size="small"
              />

              <IconButton
                size="small"
                onClick={() => handleIncrement(item)}
                sx={{
                  bgcolor: 'success.main',
                  color: '#fff',
                  '&:hover': { bgcolor: 'success.dark' },
                  borderRadius: 0,
                }}
              >
                <Icon icon="mdi:plus" />
              </IconButton>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
})}
 </Stack>
  );
}
