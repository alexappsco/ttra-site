'use client';

import * as yup from 'yup';
import Image from 'next/image';
import { paths } from 'src/routes/paths';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'src/routes/hooks';
import { useSearchParams } from 'next/navigation';
import { useAuthStore } from 'src/auth/auth-store';
import FormProvider from 'src/components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack, Button, Container, Typography } from '@mui/material';

import RHFOTP from './rhf-otp-view';

type VerifyFormValues = {
  otp: string;
};

export default function JwtVerifyView() {
  const t = useTranslations();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [referrer, setReferrer] = useState('');
  const { verifyOtp } = useAuthStore();
  const searchParams = useSearchParams();

  const phoneNumber = typeof window !== 'undefined' ? localStorage.getItem('phoneNumber') : '';

  useEffect(() => {
    const storedReferrer = localStorage.getItem('verifyReferrer');
    const urlReferrer = searchParams.get('from');

    // Prefer URL parameter over localStorage
    if (urlReferrer) {
      setReferrer(urlReferrer);
      localStorage.setItem('verifyReferrer', urlReferrer);
    } else if (storedReferrer) {
      setReferrer(storedReferrer);
    }

    // Cleanup on component unmount
    return () => {
      localStorage.removeItem('verifyReferrer');
    };
  }, [searchParams]);

  const VerifySchema = yup.object().shape({
    otp: yup.string().required(t('Global.Validation.code_required')),
  });

  const methods = useForm<VerifyFormValues>({
    resolver: yupResolver(VerifySchema),
    defaultValues: { otp: '' },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async ({ otp }) => {
    try {
      const res = await verifyOtp(otp);
      if ('error' in res) {
        reset();
        setErrorMsg(res.error);
      } else if ('redirectTo' in res) {
        router.push(res.redirectTo);
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  });

  // Conditional header rendering
  const renderHeader = () => {
    if (referrer === paths.auth.register) {
      return (
        <Typography variant="h5" mt={1} mb={3} fontWeight="bold" color="#4B684C">
          {' '}
          {t('Pages.Auth.create_new_account')}
        </Typography>
      );
    }

    // Default header (login)
    return (
      <>
        <Typography variant="h5" mt={1} mb={3} fontWeight="bold" color="#4B684C">
          {' '}
          {t('Pages.Auth.login_title')}
        </Typography>
      </>
    );
  };

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
      <Container maxWidth="sm" sx={{ mt: 10, mb: 4 }}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 3,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Image
            src="/logo/logo_single.png"
            alt="Logo"
            width={240}
            height={180}
            style={{ margin: 'auto' }}
          />
          {renderHeader()}

          <Typography variant="body2" mt={1} mb={2} color="text.secondary">
            أدخل الرمز التأكيدي الذي تم إرساله إلى الرقم {phoneNumber || '...'}
          </Typography>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2}>
              <RHFOTP name="otp" />
              {errorMsg && (
                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                  {errorMsg}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#4B684C',
                  '&:hover': { bgcolor: '#3a523c' },
                  color: '#fff',
                  borderRadius: 1,
                  mt: 2,
                }}
                disabled={isSubmitting}
              >
                تأكيد
              </Button>
            </Stack>
          </FormProvider>
        </Box>
      </Container>
    </Box>
  );
}
