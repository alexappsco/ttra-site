
'use client';
import { paths } from 'src/routes/paths';
import { cartItem } from 'src/types/carts';
import { useTranslations } from 'next-intl';
import { endpoints } from 'src/utils/endpoints';
import { getData } from 'src/utils/crud-fetch-api';
import { Card, Grid2, Container } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import SummaryCard from '../components/sum-card';
import CartItems from '../components/cart-items';
import LocationMenu from '../components/location-items';

interface Props {
  carts: cartItem[];
  locationItems: any[];
  total: number;
  shippingCost: number;
  finalTotal: number;
  TotalVat: number;
}


export default function CartsView({
  carts: initialCarts,
  locationItems,
  TotalVat: initialVat,
  shippingCost,
  total: initialTotal,
  finalTotal: initialFinalTotal,
}: Props) {
  console.log("fi initialCarts rst",initialCarts)
  
  const t = useTranslations();
  const [cartState, setCartState] = useState<cartItem[]>(initialCarts);
  const [summary, setSummary] = useState({
    total: initialTotal,
    vat: initialVat,
    finalTotal: initialFinalTotal,
  });
  //  Updated calculation: total without VAT
  const fetchCarts = useCallback(async () => {
    const res = await getData<any>(endpoints.Carts.list);
    if (res?.data?.items) {
      const { items } = res.data;
      setCartState(items);
      //  calculate total without VAT (subtotal)
      const totalWithoutVat = items.reduce(
        (sum: number, item: any) =>
          sum + item.productUnitOfMeasure.price * item.quantity,
        0
      );

      //  calculate VAT amount from each item (sum of item.vat)
      const totalVat = items.reduce((sum: number, item: any) => sum + item.vat, 0);

      //  final total (subtotal + VAT + shipping)
      const finalTotal = totalWithoutVat + totalVat + shippingCost;
      setSummary({
        total: totalWithoutVat,
        vat: totalVat,
        finalTotal,
      });
    }
  }, [shippingCost]);

  useEffect(() => {
    const handler = () => fetchCarts();
    window.addEventListener('cartUpdated', handler);
    return () => window.removeEventListener('cartUpdated', handler);
  }, [fetchCarts]);

  return (
    <Container>
      <CustomBreadcrumbs
        links={[
          { name: t('Nav.main'), href: paths.controlPanel.main },
          { name: t('Pages.Carts.title') },
        ]}
        heading={t('Pages.Carts.title')}
        sx={{ color: '#447143' }}
      />
      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1, mt: 3 }}>
        <Grid2 container spacing={2}>
          {/* Right Side */}
          <Grid2 size={{ xs: 12, md: 8 }}>
            <CartItems carts={cartState} />
          </Grid2>

          {/* Left Side */}
          <Grid2 size={{ xs: 12, md: 4 }} display="flex" flexDirection="column" gap={2}>
            <LocationMenu locations={locationItems} />
            <SummaryCard
              carts={cartState}
              total={summary.total}
              TotalVat={summary.vat}
              finalTotal={summary.finalTotal}
              deliveryFee={shippingCost}
                vatPercentage={cartState.length > 0 ? cartState[0].vatPercentage : 0.15}

            />
          </Grid2>
        </Grid2>
      </Card>
    </Container>
  );
}
