'use client';

import * as yup from 'yup';
import Image from 'next/image';
import { paths } from 'src/routes/paths';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { endpoints } from 'src/utils/endpoints';
import FormProvider from 'src/components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFMap from 'src/components/hook-form/rhf-map';
import { SetLocationCretentials } from 'src/auth/types';
import { postData, editData } from 'src/utils/crud-fetch-api';
import { useRouter, useSearchParams } from 'src/routes/hooks';
import {
  Box,
  Stack,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
  FormControlLabel,
} from '@mui/material';

const schema = (t: ReturnType<typeof useTranslations>) =>
  yup.object({
    name: yup
      .string()
      .required(t('Global.Validation.var_required', { var: t('Pages.SetLocation.location_name') })),
    description: yup.string().required(t('Pages.SetLocation.location_details')),
    latitude: yup
      .number()
      .required(t('Global.Validation.var_required', { var: t('Pages.SetLocation.latitude') })),
    longitude: yup
      .number()
      .required(t('Global.Validation.var_required', { var: t('Pages.SetLocation.longitude') })),
    isDefault: yup.boolean().required(),
  }) as yup.ObjectSchema<SetLocationCretentials>;

export default function JwtSetLocation() {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMsg, setErrorMsg] = useState('');
  const [editDataObj, setEditDataObj] = useState<any>(null);

  useEffect(() => {
    const encodedData = searchParams.get('data');
    if (encodedData) {
      try {
        const parsed = JSON.parse(decodeURIComponent(encodedData));
        setEditDataObj(parsed);
      } catch {
        console.error('Invalid edit data');
      }
    }
  }, [searchParams]);

  const isEditMode = !!editDataObj;

  const methods = useForm<SetLocationCretentials>({
    resolver: yupResolver(schema(t)),
    defaultValues: {
      name: '',
      description: '',
      latitude: 24.7136,
      longitude: 46.6753,
      isDefault: true,
    },
  });

  const { reset, handleSubmit, setValue, watch, formState: { isSubmitting } } = methods;

  useEffect(() => {
    if (editDataObj) {
      reset({
        name: editDataObj.name || '',
        description: editDataObj.description || '',
        latitude: editDataObj.latitude || 24.7136,
        longitude: editDataObj.longitude || 46.6753,
        isDefault: editDataObj.isDefault ?? true,
      });
    }
  }, [editDataObj, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      let res;
      if (isEditMode) {
        res = await editData(endpoints.Location.edit(editDataObj.id), 'PATCH', data);
      } else {
        res = await postData(endpoints.auth.setAddress, data);
      }

      if ('error' in res) setErrorMsg(res.error);
      else router.push(paths.controlPanel.location.view);
    } catch (error) {
      setErrorMsg(typeof error === 'string' ? error : (error as Error).message);
    }
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/assets/background/bgColor-sinwan-auth.png")',
        backgroundColor: '#a2b5a3',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <FormProvider methods={methods} onSubmit={onSubmit} >
          {/* Main container */}
          <Box
            sx={{
              width: '100%',
              maxWidth: { xs: 500, lg: 940 }, //  responsive width
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' }, //  stacked for small, row for large
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 3,
              bgcolor: 'white',
              mx: 'auto',
              mb: 4,
              minHeight: { xs: '100vh', lg: 600 },
              '@media (max-width:500px)': {
                borderRadius: 0,
                boxShadow: 'none',
                width: '100%'
              },
            }}
          >
            {/* Map */}
            <Box
              sx={{
                width: { xs: '100%', lg: '50%' },
                minHeight: { xs: 400, lg: '100%' },
                flexShrink: 0,
              }}
            >
              <RHFMap
                label=""
                defaultCenter={{ lat: watch('latitude'), lng: watch('longitude') }}
                defaultZoom={14}
                markerPosition={{ lat: watch('latitude'), lng: watch('longitude') }}
                onMapClick={({ lat, lng }) => {
                  setValue('latitude', lat);
                  setValue('longitude', lng);
                }}
              />
            </Box>
            {/* Form */}
            <Box
              sx={{
                width: { xs: '100%', lg: '50%' },
                p: { xs: 3, sm: 4 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src="/logo/logo_single.png" alt="logo" width={307} height={236} />
              <Typography variant="h5" fontWeight="bold" color="#4B684C" mb={1}>
                {isEditMode ? t('Pages.SetLocation.edit_title') : t('Pages.SetLocation.title')}
              </Typography>

              <Stack spacing={2} alignItems="center" width="100%" sx={{ mt: 2 }}>
                <TextField
                  label={t('Pages.SetLocation.location_name')}
                  {...methods.register('name')}
                  fullWidth
                  InputProps={{ sx: { height: 62 } }}
                  error={!!methods.formState.errors.name}
                  helperText={methods.formState.errors.name?.message}
                />

                <TextField
                  label={t('Pages.SetLocation.details_address')}
                  placeholder={t('Pages.SetLocation.ex_address')}
                  {...methods.register('description')}
                  fullWidth
                  InputProps={{ sx: { height: 62 } }}
                  error={!!methods.formState.errors.description}
                  helperText={methods.formState.errors.description?.message}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      {...methods.register('isDefault')}
                      checked={watch('isDefault')}
                      onChange={(e) => setValue('isDefault', e.target.checked)}
                    />
                  }
                  label={t('Pages.SetLocation.set_default')}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    height: 62,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    bgcolor: '#4B684C',
                    '&:hover': { bgcolor: '#3a523c' },
                  }}
                  disabled={isSubmitting}
                >
                  {isEditMode
                    ? t('Pages.SetLocation.update_location')
                    : t('Pages.SetLocation.choose_location')}
                </Button>

                {errorMsg && (
                  <Typography variant="body2" color="error">
                    {errorMsg}
                  </Typography>
                )}
              </Stack>
            </Box>
          </Box>
        </FormProvider>
      </Container>
    </Box>
  );
}
