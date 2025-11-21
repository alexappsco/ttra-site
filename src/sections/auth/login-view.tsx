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
import { Box, Link, Stack, Button, Container, Typography } from '@mui/material';

interface Props {
  isNewphonenumber?: boolean;
}

export default function JwtLoginView({ isNewphonenumber }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const { login, new_register } = useAuthStore();

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
      const payload = { phoneNumber: `966${data.phoneNumber}` };

      const res = isNewphonenumber ? await new_register(payload) : await login(payload);

      if ('error' in res) {
        reset();
        setErrorMsg(res.error);
      } else if ('redirectTo' in res) {
        // Save phone & mode
        localStorage.setItem('phoneNumber', payload.phoneNumber);
        localStorage.setItem('otpMode', isNewphonenumber ? 'register' : 'login');

        router.push(res.redirectTo);
      }
    } catch (error) {
      reset();
      setErrorMsg(typeof error === 'string' ? error : (error as Error).message);
    }
  });

  return (

    <>
      <Box
        sx={{
          width: '100%',
          height: { xs: "100vh" },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' }, // Stack on mobile
        }}
      >
        {/* ==== RIGHT SIDE (FORM) ==== */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 2, sm: 4 },
            py: { xs: 4, md: 0 }, // Add vertical padding on mobile
            order: { xs: 2, md: 1 }, // Make form come after image on mobile
          }}
        >
          <Container maxWidth="sm" sx={{ textAlign: 'center', mt: { xs: 9 } }}>
            {/* Logo */}
            <Box sx={{ textAlign: 'center', mb: 1 }}>
              <Image
                src="/logo/logo_istihwaz.svg"
                alt="Acquisitions logo"
                width={160}
                height={120}
                style={{ margin: 'auto' }}
              />
            </Box>

            {/* NEW PHONE NUMBER MODE */}
            {isNewphonenumber && (
              <>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                  تسجيل جديد
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src="/assets/images/auth/new_register_step1.png"
                    alt="steps"
                    width={400}
                    height={90}
                    style={{ objectFit: 'contain', maxWidth: '100%' }}

                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: 20, sm: 15 },
                    color: '#797979',
                    textAlign: 'center',
                    px: 2,
                    my: 1
                  }}
                >
                  يجب أن يتم التحقق من الهاتف قبل إكمال باقي التسجيل
                </Typography>
              </>
            )}

            {/* LOGIN MODE */}
            {!isNewphonenumber && (
              <>
                <Typography variant="h5" fontWeight="bold" color="#4B4B4B" sx={{ mb: 1 }}>
                  {t('Pages.Auth.login_title')}
                </Typography>

                <Typography
                  sx={{
                    width: { xs: '100%', sm: 338 },
                    mx: 'auto',
                    fontSize: { xs: 14, sm: 16 },
                    lineHeight: '180%',
                    color: '#797979',
                    mb: 2,
                  }}
                >
                  من فضلك قم بتسجيل الدخول برقم الهاتف المسجل
                </Typography>
              </>
            )}

            {/* Label */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'left' }}>
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

            {!isNewphonenumber && (
              <Typography variant="body2" sx={{ mt: 3 }}>
                {t('Pages.Auth.not_have_account')}{' '}
                <Link href={paths.auth.register} underline="hover" fontWeight="bold" color="#1A1A1A">
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
        {/* ==== LEFT IMAGE (Desktop + Beautiful Mobile) ==== */}
        <Box
          sx={{
            position: { xs: 'absolute', md: 'relative' },
            top: 0,
            left: 0,
            width: { xs: '100%', md: '40%' },
            height: { xs: '100vh', md: '100%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            zIndex: { xs: -1, md: 0 },
            bgcolor: { xs: '#F9F9F9', md: 'transparent' },
            filter: { xs: 'blur(4px)', md: 'none' },
            opacity: { xs: 0.35, md: 1 },

            '& img': {
              objectFit: {
                xs: 'cover',
                md: 'contain',
                lg: 'cover',
                xl: 'cover',
              },
              objectPosition: 'center',
            },
          }}
        >
          <Image
            src="/assets/auth/bgolor-auth.png"
            alt="background"
            fill
            priority
            quality={100}
          />
        </Box>

      </Box>
    </>
  );
}
