
'use client';

import { useState } from 'react';
import { paths } from 'src/routes/paths';
import { useTranslations } from 'next-intl';
import { enqueueSnackbar } from 'notistack';
import { postData } from 'src/utils/crud-fetch-api';
import { useForm, FormProvider } from 'react-hook-form';
import { Card, Grid2, Button, Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import CartItems from '../CartItems';
import NotesCard from '../NotesCard';
import SummaryCard from '../SummaryCard';
import SuccessDialog from '../SuccessDialog';
import PaymentMethods from '../PaymentMethods';
import DiscountCoupon from '../DiscountCoupon';SummaryCard

interface CouponResponse {
  discount: number;
  type: 'FixedAmount' | 'Percentage';
  isActive: boolean;
}

interface FormValues {
  AddressId: string;
  PaymentMethodId: string;
  CouponCode: string;
  Note: string;
}

export default function PaidView({
  carts: initialCarts,
  payment,
  location_id_Default,
  TotalVat,
  shippingCost,
  total,
  finalTotal,
  vatPercentage,
}: {
  carts: any[];
  payment: any[];
  deliveryFee: number;
  location_id_Default: string;
  total: number;
  shippingCost: number;
  finalTotal: number;
  TotalVat: number;
  vatPercentage?: number;
}) {
  const t = useTranslations();
  const [cartState, setCartState] = useState<any[]>(initialCarts);
  const [discountData, setDiscountData] = useState<CouponResponse | null>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  //  New state to hold selected processing fee
  const [processingFee, setProcessingFee] = useState<number>(payment[0]?.processingFee || 0);

  const methods = useForm<FormValues>({
    defaultValues: {
      AddressId: location_id_Default,
      PaymentMethodId: payment[0]?.id || '',
      CouponCode: '',
      Note: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const query = new URLSearchParams(data as any).toString();
      const url = `${paths.controlPanel.orders.checkout}?${query}`;
      const response = (await postData(url, {})) as any;

      if (response?.data?.data?.fullUrl) {
        setPaymentUrl(response.data.data.fullUrl);
      }

      enqueueSnackbar(
        t('Global.Server.Success.var_created', { var: t('Global.Label.order') }),
        { variant: 'success' }
      );

      setCartState([]);
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (error: any) {
      enqueueSnackbar(error?.message || t('Global.Server.Error.generic'), {
        variant: 'error',
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Container component="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <CustomBreadcrumbs
          links={[
            { name: t('Nav.main'), href: paths.controlPanel.main },
            { name: t('Pages.Carts.title'), href: paths.controlPanel.cart.view },
            { name: t('Pages.Pay.title') },
          ]}
          heading={t('Pages.Carts.title')}
          sx={{ color: '#447143' }}
        />

        <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1, mt: 3 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <CartItems carts={cartState} />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }} display="flex" flexDirection="column" gap={2}>
              <PaymentMethods
                payment={payment}
                onProcessingFeeChange={(fee) => setProcessingFee(fee)} //  new
              />
              <NotesCard />
              <DiscountCoupon onDiscountApplied={setDiscountData} />

              {/* pass the selected processingFee */}
              <SummaryCard
                carts={cartState}
                deliveryFee={shippingCost}
                discountData={discountData}
                vatPercentage={vatPercentage}
                total={total}
                finalTotal={finalTotal}
                TotalVat={TotalVat}
                processingFee={processingFee}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, bgcolor: '#447143', borderRadius: 1.5 }}
              >
                {t('Pages.Carts.summary.pay')}
              </Button>
            </Grid2>
          </Grid2>
        </Card>

        <SuccessDialog
          open={Boolean(paymentUrl)}
          paymentUrl={paymentUrl}
          onClose={() => setPaymentUrl(null)}
        />
      </Container>
    </FormProvider>
  );
}
