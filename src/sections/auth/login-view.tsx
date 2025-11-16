'use client';

import * as yup from 'yup';
import Image from 'next/image';
import { useState } from 'react';
import { paths } from 'src/routes/paths';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useRouter } from 'src/routes/hooks';
import { LoginCretentials } from 'src/auth/types';
import { useAuthStore } from 'src/auth/auth-store';
import FormProvider from 'src/components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFPhone from 'src/components/hook-form/rhf-phone';
import {
  Box,
  Link,
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';

interface props{
  isNewphonenumber?:boolean
}
export default function JwtLoginView({isNewphonenumber}:props) {
  const t = useTranslations();
  const router = useRouter();
  const { login } = useAuthStore();

  const [errorMsg, setErrorMsg] = useState('');

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
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',

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
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
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
          <Typography sx={{
            width: 338,
            height: 29,
            fontFamily: `'Frutiger LT Arabic', sans-serif`,
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: 16,
            lineHeight: '180%',
            display: 'flex',
            alignItems: 'center',
            color: '#797979',
            textAlign: 'center',
            mx: 'auto', // center it horizontally
            '@media (max-width:600px)': {
              width: '100%', // make it flexible on mobile
              fontSize: 14, // slightly smaller for smaller screens
            },
          }}>
            من فضلك قم بتسجيل الدخول برقم الهاتف المسجل
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'left' }}>
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
