
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
  const [resendCount, setResendCount] = useState(0); // 🔹 Track resend attempts

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

  const onSubmit = handleSubmit(async (data: VerifyFormValues) => {
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

  // 🔹 Handle OTP resend
  const handleResend = async () => {
    if (resendCount >= 3) return; // Prevent after 3 attempts

    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    const mode = localStorage.getItem("otpMode");

    if (!storedPhoneNumber) {
      setErrorMsg("رقم الهاتف غير موجود");
      return;
    }

    // 📌 Send OTP again (call your register or login OTP request)
    if (mode === "register") {
      await new_register({ phoneNumber: storedPhoneNumber });
    } else {
      await login({ phoneNumber: storedPhoneNumber });
    }

    setResendCount((prev) => prev + 1);
    setTimer(60);
  };

  return (
    <Box sx={{ width: '100%', height: {xs:{'65vh':'100vh'}}, display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' } }}>
      <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', alignItems: 'center', justifyContent: 'center', px: { xs: 2, sm: 4 }, py: { xs: 4, md: 0 }, order: { xs: 2, md: 1 } }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: { xs: 7 } }}>
          <Box sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Image src="/logo/black_icon.svg" alt="Logo" width={180} height={120} style={{ margin: 'auto' }} />
          </Box>

          <Typography variant="h5" fontWeight="bold" color="#4B4B4B" sx={{ mb: 1 }}>
            التحقق من الكود
          </Typography>

          <Typography component="div" variant="body2" color="text.secondary">
            لقد أرسلنا رمز التحقق إلى&nbsp;{phoneNumber || '966XXXXXXXXX'}،
            <br />
            <Box display="flex" flexDirection="row" justifyContent={'center'} textAlign={'center'}>
              <Link component={NextLink} href={ isnewphone? paths.auth.new_register:paths.auth.login} underline="hover" sx={{ mb: 3, fontFamily: `'Frutiger LT Arabic', sans-serif`, fontWeight: 700, fontSize: 16, lineHeight: '31px', color: '#59A0F2' }}>
                ليس أنت؟
              </Link>
            </Box>
          </Typography>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Stack spacing={3} alignItems="center" textAlign="center" justifyContent="center">
              <RHFOTP name="otp"  disabled={resendCount >= 3} />

              {errorMsg && (
                <Typography color="error" variant="body2">
                  {errorMsg}
                </Typography>
              )}

              <Button type="submit" fullWidth variant="contained" size="large" sx={{ height: 50, borderRadius: 2, fontWeight: 'bold', fontSize: '1rem', backgroundColor: '#1A1A1A', '&:hover': { backgroundColor: '#000000' } }} disabled={isSubmitting}>
                دخول
              </Button>

              <Typography variant="body2" color="text.secondary">
                لم تتلق الرمز؟{' '}
                {timer > 0 ? (
                  <span style={{ color: '#4B4B4B' }}>إعادة إرسال الرمز ({timer})</span>
                ) : resendCount >= 3 ? (
                  <span style={{ color: 'red' }}>لقد وصلت للحد الأقصى (3 مرات)</span>
                ) : (
                  <Link component="button" underline="hover" color="#1A1A1A" onClick={handleResend}>
                    إعادة إرسال الرمز
                  </Link>
                )}
              </Typography>
            </Stack>
          </FormProvider>
        </Container>
      </Box>

      <Box
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          top: 0,
          left: 0,
          width: { xs: '100%', md: '50%' },
          height: { xs: '68vh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          zIndex: { xs: -1, md: 0 },
          bgcolor: { xs: '#F9F9F9', md: 'transparent' },
          filter: { xs: 'blur(4px)', md: 'none' },
          opacity: { xs: 0.35, md: 1 },
        }}
      >
        <Image src="/assets/auth/bgolor-auth.png" alt="auth background" fill priority style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </Box>
    </Box>
  );
}
