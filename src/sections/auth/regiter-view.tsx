'use client';

import * as yup from 'yup';
import Image from 'next/image';
import { useState } from 'react';
import { paths } from 'src/routes/paths';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useAuthStore } from 'src/auth/auth-store';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFPhone from 'src/components/hook-form/rhf-phone';
import { useRouter } from 'src/routes/hooks';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import {
  Box,
  Link,
  Stack,
  Button,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

interface RegisterFormValues {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  terms: boolean;
}

export default function JwtRegisterView() {
  const t = useTranslations();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const { registerUser } = useAuthStore();

  const RegisterSchema = yup.object().shape({
    fullName: yup
      .string()
      .required(t('Global.Validation.var_required', { var: 'الاسم بالكامل' })),
    companyName: yup
      .string()
      .required(t('Global.Validation.var_required', { var: 'اسم الشركة' })),
    email: yup
      .string()
      .email('البريد الإلكتروني غير صالح')
      .required('البريد الإلكتروني مطلوب'),
    phoneNumber: yup
      .string()
      .required(t('Global.Validation.password_required'))
      .matches(/^5\d*$/, t('Global.Validation.phone_must_start_5')),
    terms: yup.bool().oneOf([true], 'يجب الموافقة على الشروط والأحكام'),
  });

  const defaultValues: RegisterFormValues = {
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    terms: false,
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
      const res = await registerUser({
        name: data.fullName,
        companyName: data.companyName,
        email: data.email,
        phoneNumber: `+966${data.phoneNumber}`,
      });
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

      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            bgcolor: 'background.paper', // عادة أبيض أو حسب theme
            borderRadius: 3,
            boxShadow: 3,
            p: { xs: 3, sm: 4 },
            textAlign: 'center',
            width: '100%',
            maxWidth: 480, // تأكد من نفس العرض الموجود في الصورة
            mx: 'auto',
            // لو حابب تضع حد رفيع وأزرق من الخارج مثل الصورة المربعة المنقطة
            // border: '1px solid rgba(0,0,0,0.04)',
          }}
        >
          {/* Logo */}
          <Stack alignItems="center" spacing={0.5} sx={{ mb: 3 }}>
            <Box
              component="img"
              src="/logo/logo_istihwaz.svg"
              alt="logo"
              sx={{ width: 70, height: 70 }}
            />
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              استحواذ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Acquisitions
            </Typography>
          </Stack>

          {/* Title */}
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            تسجيل جديد
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            أدخل بياناتك لإنشاء حساب جديد
          </Typography>

          {/* Form */}
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2}>
              <RHFTextField
                name="fullName"
                label="الاسم بالكامل"
                fullWidth
                InputLabelProps={{ sx: { right: 0, left: 'auto', textAlign: 'right' } }}
                inputProps={{ dir: 'rtl' }}
              />

              <RHFTextField
                name="companyName"
                label="اسم الشركة"
                fullWidth
                InputLabelProps={{ sx: { right: 0, left: 'auto', textAlign: 'right' } }}
                inputProps={{ dir: 'rtl' }}
              />

              <RHFTextField
                name="email"
                label="البريد الإلكتروني"
                type="email"
                fullWidth
                InputLabelProps={{ sx: { right: 0, left: 'auto', textAlign: 'right' } }}
                inputProps={{ dir: 'rtl' }}
              />

              <RHFPhone name="phoneNumber" label="رقم الجوال" />

              <FormControlLabel
                control={<Checkbox {...methods.register('terms')} />}
                label={
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    أوافق على{' '}
                    <Typography
                      component="span"
                      color="primary.main"
                      sx={{ cursor: 'pointer' }}
                    >
                      الشروط والأحكام
                    </Typography>
                  </Typography>
                }
                sx={{
                  justifyContent: 'flex-start',
                  mr: 0,
                  ml: 'auto',
                  textAlign: 'right',
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isSubmitting}
                sx={{
                  bgcolor: 'black',
                  py: 1.4,
                  fontWeight: 'bold',
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  '&:hover': { bgcolor: '#333' },
                }}
              >
                التالي
              </Button>

              {errorMsg && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                  {errorMsg}
                </Typography>
              )}
            </Stack>
          </FormProvider>

          {/* Already have account */}
          <Typography
            variant="body2"
            mt={3}
            sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' } }}
          >
            {t('Pages.Auth.have_account_already')}{' '}
            <Link href={paths.auth.login} underline="hover" fontWeight="bold">
              {t('Pages.Auth.log')}
            </Link>
          </Typography>
        </Box>
      </Container>

  );
}
