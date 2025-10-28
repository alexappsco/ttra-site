
'use client';

import React from 'react';
import { paths } from 'src/routes/paths';
import { useTranslations } from 'next-intl';
import CartItems from 'src/sections/paid/CartItems';
import SummaryCard from 'src/sections/paid/SummaryCard';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { Box, Grid2, Paper, Container, Typography } from '@mui/material';

import NotesCard from './notes_card';
import DriverCard from './driver-card';
import OrderCard from '../views/order-card';
import OrderStatusHistories from './order-status-history';

interface Props {
  orderDeatils: any;
}

export default function OrderDetailsView({ orderDeatils }: Props) {
  const t = useTranslations();
  console.log("my ordrr detaslis",orderDeatils)
  // Transform orderItems to fit CartItems component props
  const carts = orderDeatils.orderItems.map((item: any) => ({
    id: item.id,
    totalPriceAfterDiscount: item.totalPrice,
    totalPrice: item.totalPrice,
    quantity: item.quantity,
    product: {
      name: item.productName,
      imageUrl: item.productImage,
    },
    productUnitOfMeasure: {
      price: item.priceAtPurchase,
      unitOfMeasure: { name: item.unitOfMeasureName },
    },
  }));
  return (
    <Container>
      <Paper>
        {/* Breadcrumbs */}
        <CustomBreadcrumbs
          links={[
            { name: t('Nav.main'), href: paths.controlPanel.main },
            { name: t('Metadata.MyOrder.title'), href: paths.controlPanel.orders.list },
            { name: t('Pages.Order.display_order') },
          ]}
          heading={t('Pages.Order.display_order')}
          sx={{ color: '#447143', mb: 2 }}
        />
        <Grid2 container spacing={2} mt={2}>
          <Grid2 size={{ xs: 12, md: 8 }} >
            <Box sx={{ my: 2 }}>
              <DriverCard
                status={orderDeatils.status}
                driverName={orderDeatils.driverName}
                driverPhone={orderDeatils.driverPhoneNumber}
                orderId={orderDeatils.id}
                driverProfileImage={orderDeatils.driverProfileImage}
                driverLatitude={orderDeatils.driverLatitude}
                driverLongitude={orderDeatils.driverLongitude}
                address={orderDeatils.address?.description || ''}
                orderItems={orderDeatils.orderItems}
              />
            </Box>

            {/* Order Summary Card (top) */}
            <OrderCard
              id={orderDeatils.id}
              orderNumber={orderDeatils.orderNumber}
              amount={orderDeatils.totalOrderAmount}
              status={orderDeatils.status}
              address={orderDeatils.address?.description || ''}
              date={new Date(orderDeatils.creationTime).toLocaleDateString('ar-EG', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
                          />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }} >
            {/* here added component in image */}
            <OrderStatusHistories orderStatus={orderDeatils.orderStatusHistories as any}/>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} mt={2}>
          {/* Left side: totals + notes */}
          <Grid2 size={{ xs: 12, md: 5 }} >
              <SummaryCard
                            carts={carts.map((c: any) => ({
                              ...c,
                              totalPrice: c.totalPriceAfterDiscount,
                            }))}
                            deliveryFee={orderDeatils.shippingCost}
                            discountData={orderDeatils.discount}
                            vatPercentage={orderDeatils.vatRate}
                            TotalVat={orderDeatils.vatAmount}
                            TotalOrderDetails={orderDeatils.totalOrderAmount}
                            isOrderDetails

                          />
            <Box mt={2}>
              <NotesCard note={orderDeatils.note} />
            </Box>
          </Grid2>

          {/* Right side: products */}
          <Grid2 size={{ xs: 12, md: 7 }} >
            <Typography variant="subtitle1" fontWeight="bold" mb={1}
             sx={{ bgcolor: '#ABBFAB80', width: 75, lineHeight: 1.5, borderRadius: 5, pb: 0.5, pl: 1 }}>
              {t('Nav.products')}
            </Typography>
            <CartItems carts={carts} />
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
}
