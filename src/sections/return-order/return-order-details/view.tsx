
'use client';

import React from 'react';
import { paths } from 'src/routes/paths';
import { useTranslations } from 'next-intl';
import CartItems from 'src/sections/paid/CartItems';
import SummaryCard from 'src/sections/paid/SummaryCard';
import OrderCard from 'src/sections/my-order/views/order-card';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import DriverCard from 'src/sections/my-order/order-details/driver-card';
import { Box, Card, Grid2, Paper, Container, Typography } from '@mui/material';

interface Props {
  returnorderDetails: any;
}

export default function ReturnOrderDetailsView({ returnorderDetails }: Props) {
  const t = useTranslations();
  // Transform orderItems to match CartItems expected structure
  const carts = (returnorderDetails?.orderItems || []).map((item: any) => ({
    id: item.id,
    product: {
      name: item.productName,
      imageUrl: item.productImage,
    },
    productUnitOfMeasure: {
      price: item.priceAtPurchase,
      unitOfMeasure: {
        name: item.unitOfMeasureName,
      },
    },
    quantity: item.quantity,
    totalPriceAfterDiscount: item.totalPrice,
  }));

  // Build discount data
  const discountData = returnorderDetails.discount
    ? {
      discount: returnorderDetails.discount,
      type: 'FixedAmount',
      isActive: returnorderDetails.discount > 0,
    }
    : null;

  return (
    <Container>
      <Paper>
        <CustomBreadcrumbs
          links={[
            { name: t('Nav.main'), href: paths.controlPanel.main },
            { name: t('Pages.Return_Order.title2'), href: paths.controlPanel.returnOrders.list },
            { name: t('Pages.Return_Order.display_return_order') },
          ]}
          heading={t('Pages.Return_Order.display_return_order')}
          sx={{ color: '#447143', mb: 2 }}
        />
        <Card>
          <Grid2 container spacing={2} mt={2}>
            {/* === LEFT SIDE === */}
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Box sx={{ my: 2 }}>
                <DriverCard
                  status={returnorderDetails.status}
                  driverName={returnorderDetails.driverName}
                  driverPhone={returnorderDetails.driverPhoneNumber}
                  orderId={returnorderDetails.id}
                  address={returnorderDetails.address?.description || ''}
                  returnedOrderDate={returnorderDetails.deliveryDate}
                  isReturnedOrder
                />
              </Box>
              <OrderCard
                key={returnorderDetails.id}
                id={returnorderDetails.id}
                orderNumber={returnorderDetails.orderNumber}
                returnOrderNumber={returnorderDetails.returnOrderNumber}
                amount={returnorderDetails.totalOrderAmount || 0}
                status={returnorderDetails.status}
                address={returnorderDetails.address?.description || ''}
                date={
                  returnorderDetails.returnDate
                    ? new Date(returnorderDetails.returnDate).toLocaleString('ar-EG', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                    : ''
                }
                delivery_date={
                  returnorderDetails.deliveryDate
                    ? new Date(returnorderDetails.deliveryDate).toLocaleString('ar-EG', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                    : ''
                }
                isReturns
              />
              <Box sx={{ mt: 2 }}>
                {/* === PRODUCTS & REASONS ===
            {/* Products List */}
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  mb={1}
                  sx={{
                    bgcolor: '#ABBFAB80',
                    width: 75,
                    lineHeight: 1.5,
                    borderRadius: 5,
                    pb: 1,
                    pl: 1,
                    pr: 3,
                  }}
                >
                  {t('Nav.products')}
                </Typography>
                <CartItems carts={carts} />
              </Box>
            </Grid2>
            {/* === RIGHT SIDE === */}
            <Grid2 size={{ xs: 12, md: 4 }}>
              <SummaryCard
                carts={carts.map((c: any) => ({
                  ...c,
                  totalPrice: c.totalPriceAfterDiscount,
                }))}
                deliveryFee={returnorderDetails.shippingCost || 0}
                discountData={discountData as any}
                vatPercentage={returnorderDetails.vatRate}
                TotalVat={returnorderDetails.vatAmount}
                TotalOrderDetails={returnorderDetails.totalOrderAmount}
                isOrderDetails
              />
              <Box sx={{ mt: 2, mr: 1.5 }} gap={2} display="flex" flexDirection="column">
                <Box sx={{ backgroundColor: '#F2F6F2', borderRadius: 2, p: 2 }}>
                  <Typography sx={{ color: '#447143', fontWeight: 'bold', mb: 1 }}>
                    {t('Pages.Order.return_reason')}
                  </Typography>
                  <Typography sx={{ color: '#000', whiteSpace: 'pre-line' }}>
                    {returnorderDetails.reason ||
                      t('Pages.Return_Order.no_reason_provided')}
                  </Typography>
                </Box>

                {/* سبب الرفض */}
                <Box sx={{ backgroundColor: '#F2F6F2', borderRadius: 2, p: 2 }}>
                  <Typography sx={{ color: '#447143', fontWeight: 'bold', mb: 1 }}>
                    {t('Pages.Return_Order.refused_reason')}
                  </Typography>
                  <Typography sx={{ color: '#000', whiteSpace: 'pre-line' }}>
                    {returnorderDetails.adminReason || t('Pages.Return_Order.no_reason_provided')}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Card>
      </Paper>
    </Container>
  );
}
