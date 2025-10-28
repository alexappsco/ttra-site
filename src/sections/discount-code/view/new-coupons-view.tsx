'use client';
import * as yup from 'yup';
import dayjs, { Dayjs } from 'dayjs';
import { useSnackbar } from 'notistack';
import { paths } from 'src/routes/paths';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { endpoints } from 'src/utils/endpoints';
import { DatePicker } from '@mui/x-date-pickers';
import { postData } from 'src/utils/crud-fetch-api';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  Card,
  Grid2,
  Switch,
  MenuItem,
  Container,
  TextField,
  CardContent,
  FormControlLabel,
} from '@mui/material';

interface CouponFormValues {
  code: string;
  discount: number;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  numberOfUsagesNow: number;
  isActive: boolean;
  type: number;
}

const schema: yup.ObjectSchema<CouponFormValues> = yup.object({
  code: yup
  .string()
  .required('Discount is required')
  .matches(/^[a-zA-Z0-9]{4}$/, 'Discount must be exactly 4 letters or numbers'),
  discount: yup.number().min(0).required('Discount is required'),
  startDate: yup
    .mixed<Dayjs>()
    .required('Start date is required')
    .nullable()
    .transform((value, originalValue) => (originalValue === '' ? null : dayjs(originalValue))),
  endDate: yup
    .mixed<Dayjs>()
    .required('End date is required')
    .nullable()
    .transform((value, originalValue) => (originalValue === '' ? null : dayjs(originalValue))),
  numberOfUsagesNow: yup.number().min(0).required('Current usage is required'),
  isActive: yup.boolean().required(),
  type: yup.number().oneOf([1, 2]).required('Type is required'),
});

export default function CreateCouponPage() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const t = useTranslations();

  const labels = {
    startDate: t('Pages.Banners.start_date'),
    endDate: t('Pages.Banners.end_date'),
    status: t('Global.Label.status'),
    discountValue: t('Pages.DiscountCodes.discount_value'),
    numberOfUsages: t('Pages.DiscountCodes.current_uses'),
    maximumValue: t('Pages.DiscountCodes.maximum_value'),
    code: t('Pages.DiscountCodes.code'),
    type_discount: t('Pages.DiscountCodes.type_discount'),
    percantage: t('Pages.DiscountCodes.percantage'),
    values: t('Pages.DiscountCodes.values'),
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CouponFormValues>({
    defaultValues: {
      code: '',
      discount: undefined,
      startDate: null,
      endDate: null,
      numberOfUsagesNow: undefined,
      isActive: true,
      type: undefined, // initially invalid
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: CouponFormValues) => {
    const payload = {
      ...data,
      startDate: data.startDate ? data.startDate.toISOString() : '',
      endDate: data.endDate?.toISOString(),
    };

    try {
      const res = await postData(endpoints.barcodeDiscount.create, payload);
      if ('error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        enqueueSnackbar(
          t('Global.Server.Success.var_created', {
            var: t(`Pages.DiscountCodes.this_discount`),
          }),
          { variant: 'success' }
        );
        reset();
        router.push(paths.controlPanel.marketings.barcodeDiscount.list)

      }
    } catch (err: any) {
      enqueueSnackbar(err.message || 'حدث خطأ أثناء إرسال البيانات', {
        variant: 'error',
      });
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <CustomBreadcrumbs
        heading={t('Pages.DiscountCodes.new_coupon')}
        links={[
          {
            name: t('Nav.Marketing.coupons'),
            href: paths.controlPanel.marketings.barcodeDiscount.list,
          },
          { name: t('Pages.DiscountCodes.new_coupon') },
        ]}
        actions={[
          {
            children: t('Global.Action.cancel'),
            variant: 'outlined',
            onClick: () => router.push(paths.controlPanel.marketings.barcodeDiscount.list),
            sx: { minWidth: 120, maxWidth: '100%' },
          },
          {
            children: t('Global.Action.save'),
            variant: 'contained',
            onClick: () => handleSubmit(onSubmit)(),
            sx: { minWidth: 120, maxWidth: '100%' },
          },
        ]}
        activeLast
      />
      <Card>
        <CardContent>
          <form>
            <Grid2 container spacing={2}>
              <Grid2  size={{ xs: 12, sm: 6 }}  >
                <Controller
                  name="code"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={labels.code}
                      error={!!errors.code}
                      helperText={errors.code?.message}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
              <Controller
                  name="numberOfUsagesNow"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={labels.numberOfUsages}
                      type="number"
                      error={!!errors.numberOfUsagesNow}
                      helperText={errors.numberOfUsagesNow?.message}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label={labels.startDate}
                      value={field.value}
                      onChange={(val) => field.onChange(val)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!errors.startDate,
                          helperText: errors.startDate?.message,
                        },
                      }}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="endDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label={labels.endDate}
                      value={field.value}
                      onChange={(val) => field.onChange(val)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!errors.endDate,
                          helperText: errors.endDate?.message,
                        },
                      }}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="type"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label={labels.type_discount}
                      error={!!errors.type}
                      helperText={errors.type?.message}
                    >
                      <MenuItem value={1}>{labels.percantage}</MenuItem>
                      <MenuItem value={2}>{labels.values}</MenuItem>
                    </TextField>
                  )}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="discount"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={labels.discountValue}
                      type="number"
                      error={!!errors.discount}
                      helperText={errors.discount?.message}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <FormControlLabel
                  control={
                    <Controller
                      name="isActive"
                      control={control}
                      render={({ field }) => (
                        <Switch
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                      )}
                    />
                  }
                  label={labels.status}
                />
              </Grid2>
            </Grid2>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
