'use client';

import * as yup from 'yup';
import Image from 'next/image';
import { useState } from 'react';
import { paths } from 'src/routes/paths';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { LoginCretentials } from 'src/auth/types';
import { useAuthStore } from 'src/auth/auth-store';
import FormProvider from 'src/components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFPhone from 'src/components/hook-form/rhf-phone';
import { useRouter, useSearchParams } from 'src/routes/hooks';
import {
  Box,
  Link,
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';

export default function JwtLoginView() {
  const t = useTranslations();
  const router = useRouter();
  const { login } = useAuthStore();

  const [errorMsg, setErrorMsg] = useState('');
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');

  const LoginSchema = yup.object().shape({
    phoneNumber: yup.string().required(t('Global.Validation.password_required')),
  });

  const defaultValues = {
    phoneNumber: '',
    email: '',
    isPhone: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  }) as any;

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data: LoginCretentials) => {
    try {
      const res = await login({
        phoneNumber: `966${data.phoneNumber}`,
      });
      console.log("res in login",res)

      if ('error' in res) {
        reset();
        setErrorMsg(res.error);
      } else if ('redirectTo' in res) {
              console.log("res in login",res)

        router.push(res.redirectTo);
      }
    } catch (error) {
      reset();
      setErrorMsg(typeof error === 'string' ? error : (error as Error).message);
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

      {/* === RIGHT SIDE FORM (75%) === */}
      <Box
        sx={{
          width: { xs: '60%', sm: '65%', md: '65%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 0, sm: 4 },
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Image
              src="/logo/logo_istihwaz.svg"
              alt="Acquisitions logo"
              width={160}
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
            {t('Pages.Auth.login_title')}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {t('Pages.Auth.enter_phone_number')}
          </Typography>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2.5}>
              <RHFPhone
                name="phoneNumber"
                sx={{
                  '& .MuiInputBase-root': {
                    height: 50,
                    bgcolor: '#F9F9F9',
                    borderRadius: 2,
                    px: 2,
                  },
                }}
              />

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
                {t('Pages.Auth.login_title')}
              </Button>
            </Stack>
          </FormProvider>

          <Typography variant="body2" sx={{ mt: 3 }}>
            {t('Pages.Auth.not_have_account')}{' '}
            <Link
              href={paths.auth.register}
              underline="hover"
              fontWeight="bold"
              color="#1A1A1A"
            >
              {t('Pages.Auth.create_new_account')}
            </Link>
          </Typography>

          {errorMsg && (
            <Typography color="error" sx={{ mt: 2 }}>
              {errorMsg}
            </Typography>
          )}
        </Container>
      </Box>
      {/* === LEFT SIDE IMAGE (25%) === */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '40%', sm: '35%', md: '35%' }, // ثابت في كل المقاسات
          minWidth: 150, // لتجنب الانهيار في شاشات صغيرة جدًا
          height: '100%',
        }}
      >
        <Image
          src="/assets/auth/bgolor-auth.png"
          alt="auth background"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
          priority
        />
      </Box>

    </Box>
  );
}
