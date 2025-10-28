'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import { paths } from 'src/routes/paths';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { useRef, useState } from 'react';
import { endpoints } from 'src/utils/endpoints';
import { useLocale, useTranslations } from 'next-intl';
import BrokenImage from 'src/components/image/broken-image';
import { postData, deleteData } from 'src/utils/crud-fetch-api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Typography, IconButton } from '@mui/material';

interface Props {
  items: any[];
}

export default function OfferView({ items }: Props) {
  console.log("items items",items)
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const sliderRef = useRef<Slider | null>(null);

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

  const AddToCart = async (ProductUnitOfMeasureId: string, Quantity: number) => {
    const res = await postData(
      `${endpoints.Carts.addToCart}?ProductUnitOfMeasureId=${ProductUnitOfMeasureId}&Quantity=${Quantity}`,
      {}
    );
    if ('error' in res) {
      enqueueSnackbar(res.error, { variant: 'error' });
          if(res.status==401){
             router.push(paths.auth.login)
          }
    } else {
      enqueueSnackbar(t('Global.Message.Added_To_cart_success'), { variant: 'success' });
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  const handleAddToFavorites = async (idProduct: string) => {
    try {
      await postData(endpoints.Favorites.addToFavorites(idProduct), {});
      setFavorites((prev) => ({ ...prev, [idProduct]: true }));
      enqueueSnackbar(t('Global.Message.Added_To_wishlist_success'), { variant: 'success' });

      // Dispatch event so other components refresh
      window.dispatchEvent(new Event("favoriteUpdated"));
    } catch (error) {
      enqueueSnackbar(typeof error === 'string' ? error : (error as Error).message, { variant: 'error' });
    }
  };

  const handleRemoveFromFavorites = async (idProduct: string) => {
    try {
      await deleteData(endpoints.Favorites.removeFromFavorites(idProduct), {});
      setFavorites((prev) => ({ ...prev, [idProduct]: false }));
      enqueueSnackbar(t('Global.Message.Removed_From_wishlist_success'), { variant: 'success' });

      //  Dispatch event so other components refresh
      window.dispatchEvent(new Event("favoriteUpdated"));
    } catch (error) {
      enqueueSnackbar(typeof error === 'string' ? error : (error as Error).message, { variant: 'error' });
    }
  };


  const settings = {
    dots: false,
    infinite: items.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: locale === 'ar',
    arrows: false, // hide default arrows
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      {/* Header */}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'DIN Next LT Arabic',
            fontWeight: 700,
            fontSize: { xs: '24px', sm: '28px' },
            color: '#447143',
            mb: 2,
          }}
        >
          {t('Pages.Home.best_offer')}
        </Typography>
        <Button
          variant="text"
          sx={{
            fontFamily: 'DIN Next LT Arabic',
            fontWeight: 700,
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
            color: '#447143',
            p: 0,
            '&:hover': { background: 'none', color: '#365c36' },
          }}
          onClick={() => router.push(paths.controlPanel.offers.view)}
          endIcon={<Icon icon={locale === 'en' ? 'mdi:chevron-right' : 'mdi:chevron-left'} />}
        >
          {t('Pages.offers.display_all')}
        </Button>
      </Box>

      {/* Slider */}
      {items.length > 0 ? (
        <Box sx={{ mt: 4, position: 'relative' }}>
          <Slider ref={sliderRef} {...settings}>
            {items.map((item) => {
              const product = item.productUnitOfMeasure;
              const discountLabel =
                item?.discountType === 'FixedAmount'
                  ? `${item.discount} ${t('Pages.Currency.symbol')}`
                  : `${(item.discount * 100).toFixed(0)}%`;
              return (
                <Box key={item.id} sx={{ px: 1 }}>
                  <Box
                    sx={{
                      borderRadius: '16px',
                      boxShadow: '0px 4px 12px rgba(0,0,0,0.12)',
                      overflow: 'hidden',
                      position: 'relative',
                      bgcolor: 'background.paper',
                      transition: 'transform 0.3s, boxShadow 0.3s',
                      display: 'flex',
                      flexDirection: 'row',
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
                          <>
                            {t('Pages.Home.off')} {discountLabel}
                          </>
                        ) : (
                          <>
                            {discountLabel} {t('Pages.Home.off')}
                          </>
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
                          {item.productUnitOfMeasure.totalPrice.toFixed(2)} {t('Pages.Currency.symbol')}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography sx={{ color: '#2E7D32', fontWeight: 'bold', fontSize: '18px' }}>
                            {item.totalPrice.toFixed(2)} {t('Pages.Currency.symbol')}
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
                        onClick={() => AddToCart(item.productUnitOfMeasure.id, 1)}
                      >
                        {t('Pages.Home.add_to_cart')}
                      </Button>
                    </Box>

                    {/* Right side - Image */}
                    <Box
                      sx={{
                        width: 160,
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
              );
            })}
          </Slider>

          {/* Prev/Next Buttons (only if >4 items) */}
          {items.length > 4 && (
            <>
              <IconButton
                onClick={() => sliderRef.current?.slickPrev()}
                sx={{
                  position: 'absolute',
                  top: '40%',
                  left: -20,
                  background: 'primary.light',
                  boxShadow: 2,
                  zIndex: 5,
                  '&:hover': { background: '#eee' },
                }}
              >
                <Icon icon={locale === 'ar' ? 'mdi:chevron-right' : 'mdi:chevron-left'} />
              </IconButton>

              <IconButton
                onClick={() => sliderRef.current?.slickNext()}
                sx={{
                  position: 'absolute',
                  top: '40%',
                  right: -20,
                  background: 'white',
                  boxShadow: 2,
                  zIndex: 5,
                  '&:hover': { background: '#eee' },
                }}
              >
                <Icon icon={locale === 'ar' ? 'mdi:chevron-left' : 'mdi:chevron-right'} />
              </IconButton>
            </>
          )}
        </Box>
      ) : (
        <Box textAlign="center" sx={{ py: 6 }}>
          <Image src="/assets/images/home/roller-paint.svg" alt="لا توجد طلبات" width={200} height={180} />
          <Typography variant="h6" color="text.secondary" mt={2}>
            {t('Pages.offers.No_offers')}
          </Typography>
        </Box>
      )}
    </>
  );
}
