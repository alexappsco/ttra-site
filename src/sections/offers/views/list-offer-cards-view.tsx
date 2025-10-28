
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Offer } from 'src/types/offers';
import { enqueueSnackbar } from 'notistack';
import { endpoints } from 'src/utils/endpoints';
import { useLocale, useTranslations } from 'next-intl';
import BrokenImage from 'src/components/image/broken-image';
import { Box, Grid2, Button, Typography } from '@mui/material';
import { postData, deleteData } from 'src/utils/crud-fetch-api';
import { paths } from 'src/routes/paths';
import { useRouter } from 'next/navigation';

interface Props {
  items: Offer[];
  totalCount: number;
}

export default function ListOffersCardsView({ items, totalCount: _ }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const router=useRouter();

  // keep track of favorites per product
  const [favorites, setFavorites] = useState<Record<string, boolean>>(
    () =>
      items.reduce(
        (acc, item) => ({
          ...acc,
          [item.productUnitOfMeasure.productId]: item.productUnitOfMeasure.isFavorite,
        }),
        {}
      )
  );

  const handleAddToFavorites = async (idProduct: string) => {
    try {
      const res = await postData(endpoints.Favorites.addToFavorites(idProduct), {});
      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        setFavorites((prev) => ({ ...prev, [idProduct]: true }));
        enqueueSnackbar(t('Global.Message.Added_To_wishlist_success'), { variant: 'success' });
              window.dispatchEvent(new Event('favoriteUpdated'));

      }
    } catch (error) {
      enqueueSnackbar(typeof error === 'string' ? error : (error as Error).message, { variant: 'error' });
    }
  };

  const handleRemoveFromFavorites = async (idProduct: string) => {
    try {
      const res = await deleteData(endpoints.Favorites.removeFromFavorites(idProduct), {});
      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        setFavorites((prev) => ({ ...prev, [idProduct]: false }));
        enqueueSnackbar(t('Global.Message.Removed_From_wishlist_success'), { variant: 'success' });
      }
    } catch (error) {
      enqueueSnackbar(typeof error === 'string' ? error : (error as Error).message, { variant: 'error' });
    }
  };
  const handleAddToCart = async (productUnitOfMeasureId: string, quantity: number = 1) => {
    try {
      const url = `${endpoints.Carts.addToCart}?ProductUnitOfMeasureId=${productUnitOfMeasureId}&Quantity=${quantity}`;
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
      enqueueSnackbar(
        typeof e === 'string' ? e : (e as any).error || (e as Error).message,
        { variant: 'error' }
      );
    }
  };



  return (
    <Box sx={{ mt: 4 }}>
      <Grid2 container spacing={3}>
        {items?.map((item) => {
          const product = item.productUnitOfMeasure;

          const discountLabel =
            item.discountType === 'FixedAmount'
              ? `${item.discount} ${t('Pages.Currency.symbol')}`
              : `${item.discount}%`;

          const oldPrice = product.price;
          const newPrice = item.price;

          // const isFav = favorites[product.productId];

          return (
            <Grid2
              key={item.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
                xl: 3,
              }}
              display="flex"
              justifyContent="center"
            >
              <Box key={item.id} sx={{ px: 1 }}>
                <Box
                  sx={{
                    borderRadius: '16px',
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    position: 'relative',
                    bgcolor: 'background.paper',
                    transition: 'transform 0.3s, boxShadow 0.3s',
                    display: 'flex',          // Make details + image in same row
                    flexDirection: 'row',     // Row layout
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {/* Left side - Details */}
                  <Box sx={{ flex: 1, p: 2, position: 'relative' }}>
                    {/* Favorite */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        cursor: 'pointer',
                        zIndex: 2,
                      }}
                      onClick={() =>
                        favorites[product.productId]
                          ? handleRemoveFromFavorites(product.productId)
                          : handleAddToFavorites(product.productId)
                      }
                    >
                      {favorites[product.productId] ? (
                        <Icon icon="mdi:heart" width={24} height={24} color="#E53935" />
                      ) : (
                        <Icon icon="mdi:heart-outline" width={24} height={24} color="#7D7D7D" />
                      )}
                    </Box>

                    {/* Discount */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        bgcolor: '#E53935',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '12px',
                        zIndex: 2,
                      }}
                    >
                      {locale === 'ar' ? (
                        <>{t('Pages.Home.off')} {discountLabel}</>
                      ) : (
                        <>{discountLabel} {t('Pages.Home.off')}</>
                      )}
                    </Box>
                    <Box sx={{ mt: 4 }}>
                      {/* Info */}
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          fontSize: { xs: '16px', sm: '17px' },
                          minHeight: '2.8em',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {product?.productName}
                      </Typography>
                    </Box>
                    {/* Prices */}
                    <Box sx={{ mt: 1, mb: 2 }}>
                      <Typography
                        sx={{
                          color: '#7D7D7D',
                          fontSize: '14px',
                          textDecoration: 'line-through',
                        }}
                      >
                        {oldPrice} {t('Pages.Currency.symbol')}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ color: '#2E7D32', fontWeight: 'bold', fontSize: '18px' }}>
                          {newPrice} {t('Pages.Currency.symbol')}
                        </Typography>
                        <Typography sx={{ color: '#7D7D7D', fontSize: '13px' }}>
                          / {product?.unitOfMeasureName}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Add to cart */}
                    <Button
                      variant="contained"
                      fullWidth
                      endIcon={<Icon icon="mdi:cart" width={20} height={20} />}
                      sx={{
                        height: 40,
                        fontSize: '15px',
                        fontWeight: 'bold',
                        backgroundColor: '#447143',
                        borderRadius: '12px',
                        '&:hover': { backgroundColor: '#365c36' },
                      }}
                      onClick={() => handleAddToCart(product.id, 1)} // Pass the correct product ID
                    >
                      {t('Pages.Home.add_to_cart')}
                    </Button>

                  </Box>

                  {/* Right side - Image */}
                  <Box
                    sx={{
                      width: 160,  //  Fix width for image column
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      bgcolor: '#f8f8f8',
                      overflow: 'hidden',
                    }}
                  >
                    <BrokenImage
                      src={product?.productImageUrl}
                      alt={product?.productName}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>

              </Box>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
