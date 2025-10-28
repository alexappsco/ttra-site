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

// ----------------------------------------------------------------------

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
        ...data,
        phoneNumber: `+966${data.phoneNumber}`,
        isPhone: true,
        email: '',
      });

      if ('error' in res) {
        reset();
        setErrorMsg(res.error);
      } else if ('redirectTo' in res) {
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
        minHeight: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, sm: 3 },
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {/* === LOGO === */}
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <Image
            src="/logo/logo_istihwaz.svg"
            alt="Acquisitions logo"
            width={130}
            height={120}
            style={{
              margin: 'auto',
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>

        {/* === TITLE & TEXT === */}
        <Typography
          variant="h5"
          fontWeight="bold"
          color="#4B4B4B"
          sx={{
            mb: 1,
            fontSize: { xs: '1.3rem', sm: '1.5rem' },
          }}
        >
          {t('Pages.Auth.login_title')}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          {t('Pages.Auth.enter_phone_number')}
        </Typography>

        {/* === FORM === */}
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2.5} sx={{ width: '100%' }}>
            <RHFPhone
              name="phoneNumber"
              sx={{
                '& .MuiInputBase-root': {
                  height: 50,
                  bgcolor: '#F9F9F9',
                  borderRadius: 2,
                  px: 2,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
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
                fontSize: { xs: '0.95rem', sm: '1rem' },
                backgroundColor: '#1A1A1A',
                '&:hover': {
                  backgroundColor: '#000000',
                },
              }}
              disabled={isSubmitting}
            >
              {t('Pages.Auth.login_title')}
            </Button>
          </Stack>
        </FormProvider>

        {/* === FOOTER LINK === */}
        <Typography
          variant="body2"
          sx={{
            mt: 3,
            fontSize: { xs: '0.85rem', sm: '0.95rem' },
          }}
        >
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
  );
}
