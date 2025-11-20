
'use client';

import * as yup from 'yup';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useRouter } from 'src/routes/hooks';
import { useAuthStore } from 'src/auth/auth-store';
import { BusinessType } from 'src/types/bussiness';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import {
  Box,
  Grid2,
  Stack,
  Button,
  Checkbox,
  Container,
  Typography,
  FormControlLabel,
} from '@mui/material';

import BusinessCard from '../bussiness-card/view';

// --------------------------------------------------
// Types
// --------------------------------------------------
interface RegisterFormValues {
  name: string;
  officialName: string;
  email: string;
  phoneNumber: string;
  acceptTerms: boolean;
}



const FieldLabel = ({ children }: { children: string }) => (
  <Typography
    variant="body1"
    sx={{
      width: 120,
      fontWeight: 700,
      fontSize: 16,
      color: '#5D5D5D',
      textAlign: 'left',
    }}
  >
    {children}
  </Typography>
);
//   // Terms and Conditions content
const termsContent = `
جريم إيسموم (noun) وضمن أساس رخصي أن الماء هو سياسة
عن الشكل وليس المحتوى وتستخدم في صناعات المطلع وهو النشر.
إن لوريم إيسموم وأدربال المصار للنص الشامل منذ القرن الخاص عشر
للدى قامت حقيقة معوقة برص دمجونة من الترتيب بشكل عشوائي
اختياط من نص، تتفق تقني حياتية دليل أو جميع شغلي لهذه القوت.
محددة ثورة من الزمن لم تخضع على هذا النص بنا أنه حتى صار.
مساعدة ومشكلة الأصلي في الجابعة والتخفي بالثانويين. انشر بشكل
غير في سنوات هذا القرن مع إصدار وفاق "ليزاسيت" (letcase)
البالستيكية تتوفر مطلع من هذا النص، وعاد ينترش روءاً لدى مؤخراً مع
ظهور راض النشر الإلكتروني مثل "الروس باج مارك" (siglaia)
(PageMake) واتلى حيث أيضاً على اسم عن نص لوريم إيسموم.
  `.trim();
// --------------------------------------------------
// Main Component
// --------------------------------------------------
interface Props {
  bussiness: BusinessType[];
}

export default function JwtRegisterView({ bussiness }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const { registerUser } = useAuthStore();

  const [currentTab, setCurrentTab] = useState(0);
  const handleSelectBusiness = (business: BusinessType) => {
    setSelectedBusiness((prev) =>
      prev.find((b) => b.id === business.id)
        ? prev.filter((b) => b.id !== business.id) // remove if already selected
        : [...prev, business] // add if not selected
    );
  };

  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType[]>([]);

  // Validation Schema
  const RegisterSchema = yup.object().shape({
    name: yup
      .string()
      .required(t('Global.Validation.var_required', { var: t('Pages.Auth.user_name') }))
      .matches(
        /^[a-zA-Z0-9._]{3,}$/,
        t('Global.Validation.username_invalid') // create this translation if needed
      ),
    officialName: yup.string().required(t('Global.Validation.var_required', { var: t('Global.Label.official_name') })),
    email: yup.string().email(t('Global.Validation.var_invalid', { var: t('Global.Label.email') })).required(),
    acceptTerms: yup.boolean(),
  });


  const methods = useForm<RegisterFormValues>({
    mode: 'onTouched',
    resolver: yupResolver(RegisterSchema as any),
    defaultValues: {
      name: '',
      officialName: '',
      email: '',
      phoneNumber: '',
      acceptTerms: false,
    },
  });
  const { setError } = methods;

  const { watch, trigger, handleSubmit, setValue, formState: { isValid, isSubmitting } } = methods;

  // Handle next button logic
  const handleNext = async () => {
    const valid = await trigger(['name', 'officialName', 'email', 'phoneNumber']);
    if (!valid) return;

    if (watch('acceptTerms')) {
      setCurrentTab(2); // Skip to step 3 if accepted
    } else {
      setCurrentTab(1); // Otherwise go to step 2
    }
  };

  const handleBack = () => setCurrentTab((p) => p - 1);

  // In your register-view component - fix the onSubmit function
  // const onSubmit = handleSubmit(async (data) => {
  //   const registerData = {
  //     Name: data.name,
  //     Email: data.email,
  //     OfficialName: data.officialName,
  //     // BusinessTypeIds: selectedBusiness ? [selectedBusiness.id] : [],
  //     BusinessTypeIds: selectedBusiness.map((b) => b.id),

  //     AgreeToTerms: data.acceptTerms,
  //   };

  //   const res = await registerUser(registerData as any);

  //   if ('redirectTo' in res) {
  //     router.push(res.redirectTo);
  //   } else if ('error' in res) {
  //     console.log(res)
  //     if (res.error === 'username_already_exist') {
  //       setCurrentTab(0);
  //       requestAnimationFrame(() => {
  //         setError('name', {
  //           type: 'server',
  //           message: t('Global.Validation.var_exists', { var: t('Global.Label.name') }),
  //         });
  //       });
  //     }
  //     else if (res.error === 'Email already exists') {
  //       setCurrentTab(0);

  //       requestAnimationFrame(() => {
  //         setError('email', {
  //           type: 'server',
  //           message: t('Global.Validation.var_exists', { var: t('Global.Label.email') }),
  //         });
  //       });
  //     }

  //   }
  // });
  const onSubmit = handleSubmit(async (data) => {
  const registerData = {
    Name: data.name,
    Email: data.email,
    OfficialName: data.officialName,
    BusinessTypeIds: selectedBusiness.map((b) => b.id),
    AgreeToTerms: data.acceptTerms,
  };

  const res = await registerUser(registerData as any);

  if ('redirectTo' in res) {
    router.push(res.redirectTo);
  } else if ('error' in res) {
    console.log('Register error:', res.error);

    const error = String(res.error).trim().toLowerCase();

    if (error === 'username_already_exist') {
      setCurrentTab(0);
      requestAnimationFrame(() => {
        setError('name', {
          type: 'server',
          message: t('Global.Validation.var_exists', { var: t('Global.Label.name') }),
        });
      });
    } else if (error === 'email already exists') {
      setCurrentTab(0);
      requestAnimationFrame(() => {
        setError('email', {
          type: 'server',
          message: t('Global.Validation.var_exists', { var: t('Global.Label.email') }),
        });
      });
    }
  }
});

  const acceptTerms = watch('acceptTerms');

  return (
    <Box sx={{ width: '100%', height: { xs: '100vh' }, display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' } }}>

      {/* ===== RIGHT SIDE: FORM ===== */}
      <Box
        sx={{
          width: { xs: '100%', md: '60%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
          py: { xs: 4, md: 0 },
          mt: { xs: 9, md: 8 },
          order: { xs: 2, md: 1 },
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Image src="/logo/logo_istihwaz.svg" alt="logo" width={160} height={90} />
            <Typography variant="h4" fontWeight="bold" mb={2}>
              {t('Pages.Auth.create_new_account')}
            </Typography>
          </Box>


          <FormProvider methods={methods} onSubmit={onSubmit}>
            {/* STEP 1 */}
            {currentTab === 0 && (
              <>
                <Image src="/assets/images/auth/new_register_step1_completed.svg" alt="step-2" width={400} height={83} />
                <Stack spacing={2}>
                  <FieldLabel>{t('Global.Label.name')}</FieldLabel>
                  <RHFTextField name="name" placeholder={t('Pages.Auth.user_name')} />

                  <FieldLabel>{t('Global.Label.official_name')}</FieldLabel>
                  <RHFTextField name="officialName" placeholder={t('Global.Label.official_name')} />

                  <FieldLabel>{t('Global.Label.email')}</FieldLabel>
                  <RHFTextField name="email" placeholder={t('Global.Label.email')} />

                  <FormControlLabel
                    control={<Checkbox checked={acceptTerms} onChange={(e) => setValue('acceptTerms', e.target.checked)} />}
                    label="أوافق على الشروط والأحكام"
                  />

                  <Button fullWidth variant="contained" disabled={!isValid || isSubmitting} onClick={handleNext} sx={{ py: 1.5 }}>
                    التالي
                  </Button>
                </Stack>
              </>
            )}

            {/* STEP 2 */}
            {currentTab === 1 && (
              <Stack spacing={2}>
                <Typography variant="h6">الشروط والأحكام</Typography>
                <Typography sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2, maxHeight: 250, overflow: 'auto' }}>
                  {/* محتوى الشروط */}
                  {termsContent}
                </Typography>

                <FormControlLabel
                  control={<Checkbox checked={acceptTerms} onChange={(e) => setValue('acceptTerms', e.target.checked)} />}
                  label="أوافق على الشروط والأحكام"
                />

                <Button fullWidth variant="contained" disabled={!acceptTerms} onClick={() => setCurrentTab(2)} sx={{ py: 1.5 }}>
                  التالي
                </Button>
                <Button fullWidth variant="outlined" onClick={handleBack} sx={{ py: 1.5 }}>
                  رجوع
                </Button>
              </Stack>
            )}

            {/* STEP 3 */}
            {currentTab === 2 && (
              <>
                <Image src="/assets/images/auth/new_resgister_step_2.svg" alt="step-2" width={400} height={83} />

                <Stack spacing={2}>
                  <Grid2 container spacing={1} justifyContent="center">
                    {bussiness.map((b) => (
                      <Grid2 key={b.id} size={{ xs: 4 }} display="flex" justifyContent="center">
                        <BusinessCard
                          business={b}
                          isSelected={selectedBusiness.some((sb) => sb.id === b.id)}
                          onSelect={handleSelectBusiness}
                        />

                      </Grid2>
                    ))}
                  </Grid2>

                  <Button fullWidth type="submit" variant="contained" disabled={!selectedBusiness || isSubmitting} sx={{ py: 1.5 }}>
                    {t('Pages.Auth.create_new_account')}
                  </Button>
                  <Button fullWidth variant="outlined" onClick={handleBack} sx={{ py: 1.5 }}>
                    رجوع
                  </Button>
                </Stack>
              </>
            )}
          </FormProvider>
        </Container>
      </Box>

      {/* ===== LEFT SIDE: BACKGROUND IMAGE ===== */}
      <Box
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          top: 0,
          left: 0,
          width: { xs: '100%', md: '40%' },
          height: { xs: '100vh' },
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
        <Image
         src="/assets/auth/bgolor-auth.png" alt="background" fill style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
      </Box>
    </Box>
  );
}
