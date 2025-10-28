
'use client';

import React from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Image from 'src/components/image';
import { enqueueSnackbar } from 'notistack';
import { useTranslations } from 'next-intl';
import { PastOrders } from 'src/types/order';
import { endpoints } from 'src/utils/endpoints';
import { postData } from 'src/utils/crud-fetch-api';
import { Box, Grid2, Typography, CardContent } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  OrderCard,
  PriceText,
  ItemsText,
  OrderTitle,
  DateTimeText,
  ProductImage,
  HeaderSection,
  ReorderButton,
  ImagesContainer,
  MoreImagesIndicator,
} from './last-order-style';

interface Props {
  items?: PastOrders[];
  total: number;
}

export default function LastOrdersView({ items, total }: Props) {
  const t = useTranslations();
  const hasOrders = items && items.length > 0;

  // 🔹 Custom Slider Arrows
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        sx={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          cursor: 'pointer',
          bgcolor: '#447143',
          color: '#fff',
          width: 36,
          height: 36,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': { bgcolor: '#365c30' },
        }}
      >
        <Icon icon="mdi:chevron-right" width={22} height={22} />
      </Box>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        sx={{
          position: 'absolute',
          left: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          cursor: 'pointer',
          bgcolor: '#447143',
          color: '#fff',
          width: 36,
          height: 36,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': { bgcolor: '#365c30' },
        }}
      >
        <Icon icon="mdi:chevron-left" width={22} height={22} />
      </Box>
    );
  };

  // 🔹 Add order again handler
  const handleAddCart = async (orderId: string) => {
    try {
      const res = await postData(endpoints.orderAgain.create(orderId), {});
      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        enqueueSnackbar(t('Global.Message.Added_To_cart_success'), {
          variant: 'success',
        });
        window.dispatchEvent(new Event('cartUpdated'));
      }
    } catch (error) {
      enqueueSnackbar(
        typeof error === 'string' ? error : (error as Error).message,
        { variant: 'error' }
      );
    }
  };

  // 🔹 Formatting helpers
  const formatDateTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const time = date
        .toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
        .toLowerCase();
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${time} .${day}-${month}-${year}`;
    } catch {
      return '12:30 pm .02-12-2024';
    }
  };

  const formatItems = (orderItems: any[]) => {
    if (!orderItems?.length) return 'No items in this order';
    return orderItems
      .map((item) => {
        const quantity = item.quantity || 1;
        let quantityText = quantity.toString();
        if (quantity === 0.5) quantityText = '1/2';
        else if (quantity === 1.5) quantityText = '1 1/2';
        else if (quantity % 1 !== 0) quantityText = quantity.toFixed(2);

        const unit = item.unitOfMeasure || '';
        const productName = item.productName || 'Product';
        return `${quantityText} ${unit} ${productName}`.trim();
      })
      .join(', ');
  };

  const getProductImages = (orderItems: any[]) => {
    if (!orderItems) return [];
    return orderItems
      .map((item) =>
        item.imageUrls?.[0]?.url
          ? { url: item.imageUrls[0].url, alt: item.productName || 'Product' }
          : null
      )
      .filter(Boolean)
      .slice(0, 4);
  };

  const getOrderPrice = (order: PastOrders) =>
    Math.round(order.price?.finalPrice ?? order.price?.totalPrice ?? 0);

  return (
    <Box sx={{ px: { xs: 2, sm: 3 }, py: 4 }}>
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
          {t('Pages.Home.order_again')}
        </Typography>
      </Box>

      {/* Orders */}
      {hasOrders ? (
        total > 3 ? (
          // 🔹 Slider mode
          <Slider
            dots={false}
            infinite={false}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 600, settings: { slidesToShow: 1 } },
            ]}
          >
            {items.map((order) => {
              const dateTimeText = formatDateTime(order.orderDate);
              const itemsText = formatItems(order.orderItems);
              const orderPrice = getOrderPrice(order);
              const productImages = getProductImages(order.orderItems);
              const totalImages =
                order.orderItems?.filter((i) => i.imageUrls?.length)?.length || 0;

              return (
                <Box key={order.id} px={1}>
                  <OrderCard>
                    <CardContent
                      sx={{
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        minHeight: 360, // 🔹 Equal height fix
                      }}
                    >
                      <HeaderSection>
                        <OrderTitle sx={{ color: '#447143' }}>
                          {t('Pages.Home.order_again')}
                        </OrderTitle>
                        <PriceText>
                          {orderPrice} {t('Pages.Currency.symbol')}
                        </PriceText>
                      </HeaderSection>

                      <DateTimeText>{dateTimeText}</DateTimeText>
                      <ItemsText sx={{ flexGrow: 1 }}>{itemsText}</ItemsText>

                      {productImages.length > 0 && (
                        <ImagesContainer>
                          {productImages.map((image, idx) => (
                            <ProductImage key={idx}>
                              <Image
                                src={image?.url}
                                alt={image?.alt}
                                style={{ objectFit: 'cover' }}
                              />
                            </ProductImage>
                          ))}
                          {totalImages > 4 && (
                            <MoreImagesIndicator>
                              +{totalImages - 4}
                            </MoreImagesIndicator>
                          )}
                        </ImagesContainer>
                      )}

                      <ReorderButton
                        variant="contained"
                        endIcon={<Icon icon="mdi:cart-plus" width={24} height={24} />}
                        onClick={() => handleAddCart(order.id)}
                      >
                        {t('Pages.Order.resend_order')}
                      </ReorderButton>
                    </CardContent>
                  </OrderCard>
                </Box>
              );
            })}
          </Slider>
        ) : (
          // 🔹 Normal grid mode
          <Grid2 container spacing={3}>
            {items.map((order) => {
              const dateTimeText = formatDateTime(order.orderDate);
              const itemsText = formatItems(order.orderItems);
              const orderPrice = getOrderPrice(order);
              const productImages = getProductImages(order.orderItems);
              const totalImages =
                order.orderItems?.filter((i) => i.imageUrls?.length)?.length || 0;
              return (
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={order.id}>
                  <OrderCard>
                    <CardContent
                      sx={{
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        minHeight: 360,
                      }}
                    >
                      <HeaderSection>
                        <OrderTitle sx={{ color: '#447143' }}>
                          {t('Pages.Home.order_again')}
                        </OrderTitle>
                        <PriceText>
                          {orderPrice} {t('Pages.Currency.symbol')}
                        </PriceText>
                      </HeaderSection>

                      <DateTimeText>{dateTimeText}</DateTimeText>
                      <ItemsText sx={{ flexGrow: 1 }}>{itemsText}</ItemsText>

                      {productImages.length > 0 && (
                        <ImagesContainer>
                          {productImages.map((image, idx) => (
                            <ProductImage key={idx}>
                              <Image
                                src={image?.url}
                                alt={image?.alt}
                                style={{ objectFit: 'cover' }}
                              />
                            </ProductImage>
                          ))}
                          {totalImages > 4 && (
                            <MoreImagesIndicator>
                              +{totalImages - 4}
                            </MoreImagesIndicator>
                          )}
                        </ImagesContainer>
                      )}

                      <ReorderButton
                        variant="contained"
                        endIcon={<Icon icon="mdi:cart-plus" width={24} height={24} />}
                        onClick={() => handleAddCart(order.id)}
                      >
                        {t('Pages.Order.resend_order')}
                      </ReorderButton>
                    </CardContent>
                  </OrderCard>
                </Grid2>
              );
            })}
          </Grid2>
        )
      ) : (
        // 🔹 No orders
        <Box
          textAlign="center"
          sx={{
            py: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/assets/images/home/roller-paint.svg"
            alt="لا توجد طلبات"
            width={200}
            height={180}
            style={{ marginBottom: '24px' }}
          />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontFamily: 'DIN Next LT Arabic',
              fontWeight: 400,
              fontSize: '18px',
            }}
          >
            {t('Pages.Home.no_past_orders')}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
