
'use client';

import * as yup from 'yup';
import Image from 'next/image';
import NextLink from 'next/link';
import { paths } from 'src/routes/paths';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
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

type VerifyFormValues = { otp: string };
interface Props {
  isnewphone?: boolean;
}

export default function JwtVerifyView({ isnewphone }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [timer, setTimer] = useState(60);
  const [resendCount, setResendCount] = useState(0);

  const { verifyLoginOtp, verifyRegisterOtp, login, new_register } = useAuthStore();

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

  const { reset, handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const storedPhoneNumber = localStorage.getItem("phoneNumber");
      const mode = localStorage.getItem("otpMode");

      if (!storedPhoneNumber) {
        setErrorMsg("رقم الهاتف غير موجود");
        return;
      }

      const payload = { phoneNumber: storedPhoneNumber, otp: data.otp };

      const res =
        mode === "register"
          ? await verifyRegisterOtp(payload)
          : await verifyLoginOtp(payload);

      if ("error" in res) {
        reset();
        setErrorMsg(res.error);
      } else if ("redirectTo" in res) {
        router.push(res.redirectTo);
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  });

  const handleResend = async () => {
    if (resendCount >= 3) return;

    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    const mode = localStorage.getItem("otpMode");

    if (!storedPhoneNumber) {
      setErrorMsg("رقم الهاتف غير موجود");
      return;
    }

    if (mode === "register") {
      await new_register({ phoneNumber: storedPhoneNumber });
    } else {
      await login({ phoneNumber: storedPhoneNumber });
    }

    setResendCount((prev) => prev + 1);
    setTimer(60);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '90vh', md: '100vh' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row-reverse' },
      }}
    >
      {/* ===== RIGHT SIDE (FORM) ===== */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
          py: { xs: 4, md: 0 },
          order: { xs: 2, md: 1 },
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: { xs: 7 } }}>

          {/* Logo with meaningful ALT */}
          <Box sx={{ textAlign: 'center' }}>
            <Image
              src="/logo/black_icon.svg"
              alt="شعار منصة استحواذ"
              width={180}
              height={120}
              style={{ margin: 'auto' }}
              priority
            />
          </Box>

          {/* Accessible page title */}
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1,color:'#575B6E'}} component="h1">
            {t('Pages.Auth.verify_otp')}
          </Typography>

          <Typography component="p" variant="body2" color="text.secondary">
            لقد أرسلنا رمز التحقق إلى&nbsp;
            <strong>{phoneNumber || '966XXXXXXXXX'}</strong>
          </Typography>

          <Box display="flex" justifyContent="center" sx={{mb:2}}>
            <Link
              component={NextLink}
              href={isnewphone ? paths.auth.new_register : paths.auth.login}
              underline="hover"
              sx={{ fontWeight: 'bold', color: '#59A0F2' }}
              aria-label="تغيير رقم الهاتف"
            >
              ليس أنت؟
            </Link>
          </Box>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={3} alignItems="center">
              {/* OTP INPUT */}
              <RHFOTP name="otp" disabled={resendCount >= 3} aria-label="أدخل رمز التحقق" />

              {/* Accessible error message */}
              {errorMsg && (
                <Typography
                  color="error"
                  variant="body2"
                  role="alert"
                  aria-live="assertive"
                >
                  {errorMsg}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ height: 50, borderRadius: 2, fontWeight: 'bold', bgcolor: '#1A1A1A' }}
                disabled={isSubmitting}
                aria-label="تأكيد الدخول"
              >
                دخول
              </Button>

              <Typography variant="body2" color="text.secondary">
                لم تتلق الرمز؟{' '}
                {timer > 0 ? (
                  <span>إعادة الإرسال خلال ({timer})</span>
                ) : resendCount >= 3 ? (
                  <span style={{ color: 'red' }}>تم بلوغ الحد الأقصى</span>
                ) : (
                  <Button
                    onClick={handleResend}
                    size="small"
                    aria-label="إعادة إرسال الرمز"
                  >
                    إعادة إرسال الرمز
                  </Button>
                )}
              </Typography>
            </Stack>
          </FormProvider>
        </Container>
      </Box>

      {/* ===== LEFT SIDE (IMAGE) ===== */}
      <Box
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          top: 0,
          left: 0,
          width: { xs: '100%', md: '50%' },
          height: { xs: '70vh', md: '100vh' },
          overflow: 'hidden',
          zIndex: { xs: -1, md: 0 },
          bgcolor: { xs: '#F9F9F9', md: 'transparent' },
          filter: { xs: 'blur(4px)', md: 'none' },
          opacity: { xs: 0.35, md: 1 },
        }}
        aria-hidden="true"
      >
        <Image
          src="/assets/auth/bgolor-auth.png"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
}
