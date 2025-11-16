'use client';

import * as yup from 'yup';
import Image from 'next/image';
import { useState } from 'react';
import { paths } from 'src/routes/paths';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useRouter } from 'src/routes/hooks';
import { useAuthStore } from 'src/auth/auth-store';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFPhone from 'src/components/hook-form/rhf-phone';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { Box, Link, Stack, Button, Container, Typography } from '@mui/material';

interface RegisterFormValues {
  name: string;
  phoneNumber: string;
}

export default function JwtRegisterView() {
  const t = useTranslations();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const { registerNewPhonenumber } = useAuthStore();

  const RegisterSchema = yup.object().shape({
    name: yup
      .string()
      .required(t('Global.Validation.var_required', { var: t('Pages.Auth.user_name') })),
    phoneNumber: yup
      .string()
      .required(t('Global.Validation.password_required'))
      .matches(/^5\d*$/, t('Global.Validation.phone_must_start_5')),
  });

  const defaultValues: RegisterFormValues = {
    name: '',
    phoneNumber: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data: RegisterFormValues) => {
    try {
      const res = await registerNewPhonenumber({ ...data, phoneNumber: `+966${data.phoneNumber}` });
      if ('error' in res) {
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
        backgroundImage: 'url("/assets/background/bgColor-sinwan-auth.png")',
        backgroundColor: '#a2b5a3',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 3,
            p: { xs: 3, sm: 4 },
            textAlign: 'center',
            width: '100%',
            maxWidth: 500,
            mx: 'auto',
          }}
        >
          {/* Logo */}
          <Box sx={{ mb: 2 }}>
            <Image
              src="/logo/logo_single.png"
              alt="Logo"
              width={250}
              height={200}
              style={{ margin: 'auto', maxWidth: '100%', height: 'auto' }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            mt={1}
            mb={3}
            fontWeight="bold"
            color="#4B684C"
            sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
          >
            {t('Pages.Auth.create_new_account')}
          </Typography>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={1}>
              {/* Name Label */}
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="primary.main"
                sx={{ textAlign: 'left', fontSize: { xs: '0.9rem', sm: '1rem' } }}
              >
                {t('Global.Label.name')}
              </Typography>
              <RHFTextField
                name="name"
                placeholder={t('Pages.Auth.user_name')}
                fullWidth
                InputProps={{
                  sx: {
                    height: 56,
                    bgcolor: '#F5F5F5',
                    borderRadius: 1,
                  },
                }}
              />

              {/* Phone Label */}
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="primary.main"
                sx={{
                  textAlign: 'left',
                  mt: 2,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                {t('Pages.Auth.enter_phone_number')}
              </Typography>
              <RHFPhone
                name="phoneNumber"
                sx={{
                  '& .MuiInputBase-root': {
                    height: 56,
                    bgcolor: '#F5F5F5',
                    borderRadius: 1,
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  height: 56,
                  fontWeight: 'bold',
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  bgcolor: '#4B684C',
                  '&:hover': { bgcolor: '#3a523c' },
                  color: '#fff',
                  borderRadius: 1,
                }}
                disabled={isSubmitting}
              >
                {t('Pages.Auth.create_account')}
              </Button>

              {/* Error Message */}
              {errorMsg && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                  {errorMsg}
                </Typography>
              )}
            </Stack>
          </FormProvider>

          {/* Already have account */}
          <Typography variant="body2" mt={3} sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
            {t('Pages.Auth.have_account_already')}{' '}
            <Link href={paths.auth.login} underline="hover" fontWeight="bold">
              {t('Pages.Auth.log')}
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
