
'use client';

import * as yup from 'yup';
import Image from 'next/image';
import NextLink from 'next/link';
import { paths } from 'src/routes/paths';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'src/routes/hooks';
import { useAuthStore } from 'src/auth/auth-store';
import FormProvider from 'src/components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Link,
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';

import RHFOTP from './rhf-otp-view';

type VerifyFormValues = {
  otp: string;
};

export default function JwtVerifyView() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [timer, setTimer] = useState(30);
  const { verifyLoginOtp } = useAuthStore();

  const phoneNumber =
    typeof window !== 'undefined' ? localStorage.getItem('phoneNumber') : '';

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

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

  const onSubmit = handleSubmit(async (data: VerifyFormValues) => {
    try {
      const storedPhoneNumber = localStorage.getItem('phoneNumber');
      if (!storedPhoneNumber) {
        setErrorMsg('رقم الهاتف غير موجود');
        return;
      }

      const res = await verifyLoginOtp({
        phoneNumber: storedPhoneNumber,
        otp: data.otp,
      });
      if ('error' in res) {
        reset();
        setErrorMsg(res.error);
      } else if ('redirectTo' in res) {
        // Use window.location.href for full page reload to ensure cookies are available
        // This is important for Server Components that need to access cookies on first render
        // Preserve locale in the redirect path
        if (typeof window !== 'undefined') {
          const redirectPath = res.redirectTo.startsWith('/')
            ? `/${locale}${res.redirectTo === '/' ? '' : res.redirectTo}`
            : res.redirectTo;
          window.location.href = redirectPath;
        } else {
          router.push(res.redirectTo);
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
      }}
    >
      {/* === RIGHT SIDE FORM (65%) === */}
      <Box
        sx={{
          width: { xs: '60%', sm: '65%', md: '65%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Box sx={{ textAlign: 'center', mb: 4, justifyContent: 'center' }}>
            <Image
              src="/logo/black_icon.svg"
              alt="Logo"
              width={180}
              height={120}
              style={{ margin: 'auto' }}
            />
          </Box>

          <Typography
            variant="h5"
            fontWeight="bold"
            color="#4B4B4B"
            sx={{ mb: 1 }}
          >
            التحقق من الكود
          </Typography>

          <Typography
            component="div"
            variant="body2"
            color="text.secondary"
          >
            لقد أرسلنا رمز التحقق إلى&nbsp;
            {phoneNumber || '966XXXXXXXXX'}،&nbsp;
            <br />
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Typography
                component="span"
                variant='body2'
                sx={{
                  pb: 3,
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
              </Typography>
              <Link
                component={NextLink}
                href={paths.auth.login}
                underline="hover"
                sx={{
                  mb: 3,
                  fontFamily: `'Frutiger LT Arabic', sans-serif`,
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: '31px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  letterSpacing: '0.5px',
                  color: '#59A0F2',
                  mx: 'auto',
                }}
              >
                ليس أنت؟
              </Link>
            </Box>
          </Typography>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={3} alignItems={'center'} textAlign="center" justifyContent={'center'}>
              <RHFOTP name="otp" />

              {errorMsg && (
                <Typography color="error" variant="body2">
                  {errorMsg}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  height: 50,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  backgroundColor: '#1A1A1A',
                  '&:hover': { backgroundColor: '#000000' },
                }}
                disabled={isSubmitting}
              >
                دخول
              </Button>

              <Typography variant="body2" color="text.secondary">
                لم تتلق الرمز؟{' '}
                {timer > 0 ? (
                  <span style={{ color: '#4B4B4B' }}>
                    إعادة إرسال الرمز ({timer})
                  </span>
                ) : (
                  <Link
                    component="button"
                    underline="hover"
                    color="#1A1A1A"
                    onClick={() => setTimer(30)}
                  >
                    إعادة إرسال الرمز
                  </Link>
                )}
              </Typography>
            </Stack>
          </FormProvider>
        </Container>
      </Box>

      {/* === LEFT SIDE IMAGE (35%) === */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '40%', sm: '35%', md: '35%' },
          minWidth: 150,
          height: '100%',
          '& img': {
            objectFit: { xs: 'contain', md: 'none' }, // responsive
            objectPosition: 'center',
            position: 'absolute',
            zIndex: 10
          },
        }}
      >
        <Image
          src="/assets/auth/bgolor-auth.png"
          alt="auth background"
          fill
          priority
        />
      </Box>
    </Box>
  );
}
