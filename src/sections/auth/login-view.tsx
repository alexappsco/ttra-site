
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

interface Props {
  isNewphonenumber?: boolean;
}

export default function JwtLoginView({ isNewphonenumber }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const { login, new_login } = useAuthStore();

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
      const payload = { phoneNumber: `+966${data.phoneNumber}` };

      const res = isNewphonenumber
        ? await new_login(payload)
        : await login(payload);

      if ("error" in res) {
        reset();
        setErrorMsg(res.error);
      } else if ("redirectTo" in res) {
        // Save phone & mode
        localStorage.setItem("phoneNumber", payload.phoneNumber);
        localStorage.setItem(
          "otpMode",
          isNewphonenumber ? "register" : "login"
        );

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
      {/* ==== RIGHT SIDE (FORM) ==== */}
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
          {/* Logo */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Image
              src="/logo/logo_istihwaz.svg"
              alt="Acquisitions logo"
              width={160}
              height={120}
              style={{ margin: 'auto' }}
            />
          </Box>

          {/* ==== If New Phone Number → Show Steps UI ==== */}
          {isNewphonenumber && (
            <>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                تسجيل جديد
              </Typography>

              {/* Steps */}
              <Box
                sx={{
                  mb: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src="/assets/auth/new_register_step1.png"
                  alt="steps"
                  width={400}
                  height={90}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>


              {/* Subtitle */}
              <Typography
                sx={{
                  width: '100%',
                  fontSize: 15,
                  color: '#797979',
                  textAlign: 'center',
                  mb: 3,
                }}
              >
                يجب أن يتم التحقق من الهاتف قبل إكمال باقي التسجيل
              </Typography>
            </>
          )}

          {/* Title */}
          {!isNewphonenumber && (
            <>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#4B4B4B"
                sx={{ mb: 1 }}
              >
                {t('Pages.Auth.login_title')}
              </Typography>

              <Typography
                sx={{
                  width: 338,
                  fontWeight: 300,
                  fontSize: 16,
                  lineHeight: '180%',
                  color: '#797979',
                  mx: 'auto',
                  mb: 2,
                  '@media (max-width:600px)': { width: '100%', fontSize: 14 },
                }}
              >
                من فضلك قم بتسجيل الدخول برقم الهاتف المسجل
              </Typography>
            </>
          )}

          {/* Phone label */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'left' }}>
            {t('Pages.Auth.enter_phone_number')}
          </Typography>

          {/* FORM */}
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
                التالي
              </Button>
            </Stack>
          </FormProvider>

          {/* Links */}
          {!isNewphonenumber && (
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
          )}

          {errorMsg && (
            <Typography color="error" sx={{ mt: 2 }}>
              {errorMsg}
            </Typography>
          )}
        </Container>
      </Box>

      {/* ==== LEFT IMAGE (Always same UI on mobile & desktop) ==== */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '40%', sm: '35%', md: '35%' },
          minWidth: 150,
          height: '100%',
          overflow: 'hidden',
          '& img': {
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
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
