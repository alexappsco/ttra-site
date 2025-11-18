
'use client';

import * as yup from 'yup';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useRouter } from 'src/routes/hooks';
import { useAuthStore } from 'src/auth/auth-store';
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

interface BusinessType {
  id: string;
  nameAr: string;
  nameEn: string;
  name: string;
  imageUrl: string;
  companySalesCount: number;
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
// Business Card Component
// --------------------------------------------------

const BusinessCard = ({
  business,
  isSelected,
  onSelect,
}: {
  business: BusinessType;
  isSelected: boolean;
  onSelect: (business: BusinessType) => void;
}) => (
  <Box
    onClick={() => onSelect(business)}
    sx={{
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start', // RTL
      padding: '16px',
      gap: '8px',
      width: '176.67px',
      height: '66px',
      border: isSelected ? '2px solid #1976d2' : '1px solid #CECECE',
      borderRadius: '91px',
      transition: '0.2s',
      backgroundColor: isSelected ? '#EBF3FF' : 'white',
      '&:hover': {
        boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
        transform: 'translateY(-2px)',
      },
    }}
  >

    {/* الأيقونة */}
    <Image
      src={business.imageUrl}
      alt={business.nameAr}
      width={34}
      height={34}
      style={{ objectFit: 'contain' }}
    />
    {/* النص */}
    <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>
      {business.nameAr}
    </Typography>

  </Box>
);


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
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType | null>(null);

  // Validation Schema
  const RegisterSchema = yup.object().shape({
    name: yup.string().required(t('Global.Validation.var_required', { var: t('Pages.Auth.user_name') })),
    officialName: yup.string().required(t('Global.Validation.var_required', { var: t('Global.Label.official_name') })),
    email: yup.string().email(t('Global.Validation.var_invalid', { var: t('Global.Label.email') })).required(),
    // phoneNumber: yup.string().matches(/^5\d*$/, t('Global.Validation.phone_must_start_5')).required(),
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

  // const onSubmit = handleSubmit(async (data) => {
  //   const registerData = {
  //     Name: data.name,
  //     Email: data.email,
  //     OfficialName: data.officialName,
  //     BusinessTypeIds: selectedBusiness ? [selectedBusiness.id] : [],
  //     AgreeToTerms: data.acceptTerms,
  //     PhoneNumber: data.phoneNumber,
  //   };

  //   const res = await registerUser(registerData as any);
  //   if ('redirectTo' in res) router.push(res.redirectTo);
  // });

  // In your register-view component - fix the onSubmit function
  const onSubmit = handleSubmit(async (data) => {
    const registerData = {
      Name: data.name,
      Email: data.email,
      OfficialName: data.officialName,
      BusinessTypeIds: selectedBusiness ? [selectedBusiness.id] : [],
      AgreeToTerms: data.acceptTerms,
      // PhoneNumber will be taken from localStorage in the store
    };

    const res = await registerUser(registerData as any);

    if ('redirectTo' in res) {
      router.push(res.redirectTo);
    } else if ('error' in res) {
      // Handle error - you might want to show a toast or error message
      console.error('Registration error:', res.error);
    }
  });
  const acceptTerms = watch('acceptTerms');

  return (
    <Box sx={{ width: '100%', height: '120vh', display: 'flex' }}>
      <Box sx={{ width: { xs: '100%', md: '60%' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container maxWidth="sm" >
          <Box sx={{ textAlign: 'center', mt: currentTab === 2 ? 8 : 2, mb: 2 }} >
            <Image src="/logo/logo_istihwaz.svg" alt="logo" width={160} height={90} />

            <Typography variant="h4" fontWeight="bold" mb={1}>
              {t('Pages.Auth.create_new_account')}
            </Typography>
            {currentTab == 0 &&
              <>
                <Image
                  src="/assets/images/auth/new_resgister_step_2.svg"
                  alt="step-2 logo"
                  width={400}
                  height={83}
                  style={{ margin: 'auto' }}
                />
              </>
            }
            {currentTab == 2 &&
              <Image
                src="/assets/images/auth/new_register_step2_completed.svg"
                alt="Step-3 logo"
                width={400}
                height={83}
                style={{ margin: 'auto' }}
              />}

          </Box>

          <FormProvider methods={methods} onSubmit={onSubmit}>
            {/* STEP 1 */}
            {currentTab === 0 && (
              <Stack gap={1.5}>
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

                <Button
                  fullWidth
                  variant="contained"
                  disabled={!isValid || isSubmitting}
                  onClick={handleNext}
                  sx={{ p: 1.5 }}
                >
                  التالي
                </Button>
              </Stack>
            )}

            {/* STEP 2 */}
            {currentTab === 1 && (
              <Stack gap={1.5}>
                <Typography variant="h6">الشروط والأحكام</Typography>
                <Typography sx={{ p: 1, border: '1px solid #ccc', borderRadius: 2, maxHeight: 250, overflow: 'auto' }}>
                  {/* محتوى الشروط */}
                  {termsContent}
                </Typography>
                <FormControlLabel
                  control={<Checkbox checked={acceptTerms} onChange={(e) => setValue('acceptTerms', e.target.checked)} />}
                  label="أوافق على الشروط والأحكام"
                />

                <Button fullWidth variant="contained" disabled={!acceptTerms} onClick={() => setCurrentTab(2)} sx={{ p: 1.5 }}>
                  التالي
                </Button>

                <Button fullWidth variant="outlined" onClick={handleBack} sx={{ p: 1.5 }}>
                  رجوع
                </Button>
              </Stack>
            )}

            {/* STEP 3 */}
            {currentTab === 2 && (
              <>
                <Grid2 container spacing={0.6} justifyContent="center">

                  <Grid2 container spacing={1} justifyContent="center" sx={{ my: 3 }}>
                    {bussiness.map((b) => (
                      <Grid2 key={b.id} size={{ xs: 4 }} display="flex" justifyContent="center" sx={{ my: 0.5 }}>
                        <BusinessCard
                          business={b}
                          isSelected={selectedBusiness?.id === b.id}
                          onSelect={(b) => setSelectedBusiness(b)}
                        />
                      </Grid2>
                    ))}
                  </Grid2>

                </Grid2>

                <Stack mt={1} gap={2}>
                  <Button fullWidth type="submit" variant="contained" disabled={!selectedBusiness || isSubmitting} sx={{ p: 1.5 }}>
                    {t('Pages.Auth.create_new_account')}
                  </Button>
                  <Button fullWidth variant="outlined" onClick={handleBack} sx={{ p: 1.5 }}>
                    رجوع
                  </Button>
                </Stack>
              </>
            )}
          </FormProvider>
        </Container>
      </Box>

      {/* Left Side */}
      <Box sx={{ width: '40%', display: { xs: 'none', md: 'block' }, position: 'relative' }}>
        <Image src="/assets/auth/bgolor-auth.png" alt="background" fill style={{ objectFit: 'cover' }} />
      </Box>
    </Box>
  );
}
