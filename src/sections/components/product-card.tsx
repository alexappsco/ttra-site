'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import { paths } from 'src/routes/paths';
import { useRouter } from 'next/navigation';
import { Product } from 'src/types/product';
import { endpoints } from 'src/utils/endpoints';
import { useLocale, useTranslations } from 'next-intl';
import { postData, deleteData } from 'src/utils/crud-fetch-api';
import {
  Box,
  Card,
  Button,
  CardMedia,
  Typography,
  CardContent,
} from '@mui/material';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const router = useRouter();
  const t = useTranslations();
  const locale=useLocale();
  const { enqueueSnackbar } = useSnackbar();

  const unit = product.productUnitOfMeasures?.[0];
  const [quantity, setQuantity] = useState(1);
  const [isFav, setIsFav] = useState(product.isFavourite);

  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => Math.max(1, q - 1));
   const handleAddToCart = async () => {
    try {
      const url = `${endpoints.Carts.addToCart}?ProductUnitOfMeasureId=${unit?.id}&Quantity=${quantity}`;
      const res = await postData(url, {});

      if (res && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
          if(res.status==401){
             router.push(paths.auth.login)
          }

      } else {
        enqueueSnackbar(t('Global.Message.Added_To_cart_success'), { variant: 'success' });
        window.dispatchEvent(new Event("cartUpdated"));
      }
    } catch (e) {
      // enqueueSnackbar(t('Global.Message.error_occurred'), { variant: 'error' });
         enqueueSnackbar(e.error, { variant: 'error' });
    }
  };


  const toggleFavorite = async () => {
  try {
    if (isFav) {
      await deleteData(endpoints.Favorites.removeFromFavorites(product.id), {});
      setIsFav(false);
      enqueueSnackbar(t('Global.Message.Removed_From_wishlist_success'));
      // Dispatch event on remove
      window.dispatchEvent(new Event("favoriteUpdated"));
    } else {
      await postData(endpoints.Favorites.addToFavorites(product.id), {});
      setIsFav(true);
      enqueueSnackbar(t('Global.Message.Added_To_wishlist_success'));
      // Dispatch event on add
      window.dispatchEvent(new Event("favoriteUpdated"));
    }
  } catch (e: any) {
    enqueueSnackbar(e.error || t('Global.Message.error_occurred'), { variant: 'error' });
  }
};

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: 1,
        position: 'relative',
        overflow: 'visible',
        border: '2px solid #E4EDE3',
      }}
    >
      {/* Wishlist */}
      <Box
        sx={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }}
        onClick={toggleFavorite}
      >
        {isFav ? (
          <Icon icon="mdi:heart" width={24} height={24} color="red" />
        ) : (
          <Icon icon="mdi:heart-outline" width={24} height={24} color="#7D7D7D" />
        )}
      </Box>

      {/* Product Image */}
      <CardMedia
        component="img"
        image={product.productImage}
        alt={product.name}
        sx={{
          width: '100%',
          height: 150,
          objectFit: 'contain',
          mt: 2,
          cursor: 'pointer',
        }}
        onClick={() => router.push(paths.controlPanel.products.single(product.id))}
      />

      <CardContent>
        {/* Price + Name */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          {unit && (
            <Typography
              variant="subtitle2"
              sx={{
                background: '#F5F7F8',
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {unit.totalPrice.toFixed(2)} <span style={{ color: '#7B8A7A', fontWeight: 400 }}>SAR / {unit.unitOfMeasureName}</span>
            </Typography>
          )}
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              textAlign: 'right',
              fontSize: 18,
              color: '#222',
              ml: 2,
              flex: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {product.name}
          </Typography>
        </Box>

        {/* Quantity Stepper */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Button onClick={handleDecrease} sx={{ width: 48, height: 48 }}>–</Button>
          <Box
            sx={{
              border: '1px solid #E4EDE3',
              borderRadius: 2,
              width: 120,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 22,
              color: '#222',
              background: '#fff',
            }}
          >
            {quantity} {unit?.unitOfMeasureName}
          </Box>
          <Button onClick={handleIncrease} sx={{ width: 48, height: 48 }}>+</Button>
        </Box>

        {/* Add to Cart */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 1, borderRadius: 2, fontWeight: 700, background: '#447143',gap:1.5 }}
        {...(locale === 'ar'
    ? { startIcon: <Icon icon="mdi:cart-outline" width={24} height={24} /> }
    : { endIcon: <Icon icon="mdi:cart-outline" width={24} height={24} /> })}
          onClick={handleAddToCart}
        >
            {t('Pages.Home.add_to_cart')}
        </Button>
      </CardContent>
    </Card>
  );
}
