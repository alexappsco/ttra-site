// // 'use client';

// // import * as yup from 'yup';
// // import Image from 'next/image';
// // import { useForm } from 'react-hook-form';
// // import { useState, useEffect } from 'react';
// // import { useTranslations } from 'next-intl';
// // import { useRouter } from 'src/routes/hooks';
// // import { endpoints } from 'src/utils/endpoints';
// // import { useAuthStore } from 'src/auth/auth-store';
// // import { getData } from 'src/utils/crud-fetch-api';
// // import { yupResolver } from '@hookform/resolvers/yup';
// // import FormProvider, { RHFTextField } from 'src/components/hook-form';
// // import {
// //   Box,
// //   Tab,
// //   Tabs,
// //   Stack,
// //   Button,
// //   Container,
// //   Typography,
// //   Grid,
// //   Card,
// //   CardContent,
// // } from '@mui/material';
// // import axios from 'axios';

// // // --------------------------------------------------
// // // Types
// // // --------------------------------------------------
// // interface RegisterFormValues {
// //   name: string;
// //   officialName: string;
// //   email: string;
// //   phoneNumber: string;
// // }

// // interface BusinessType {
// //   id: string;
// //   nameAr: string;
// //   nameEn: string;
// //   name: string;
// //   imageUrl: string;
// //   companySalesCount: number;
// // }

// // const FieldLabel = ({ children }: { children: string }) => (
// //   <Typography
// //     variant="body1"
// //     sx={{
// //       width: 120,
// //       height: 18,
// //       fontFamily: `'Frutiger LT Arabic', sans-serif`,
// //       fontWeight: 700,
// //       fontSize: 16,
// //       lineHeight: '31px',
// //       textAlign: 'left',
// //       color: '#5D5D5D',
// //     }}
// //   >
// //     {children}
// //   </Typography>
// // );

// // // --------------------------------------------------
// // // Business Card Component - COMPACT VERSION
// // // --------------------------------------------------
// // const BusinessCard = ({
// //   business,
// //   isSelected,
// //   onSelect
// // }: {
// //   business: BusinessType;
// //   isSelected: boolean;
// //   onSelect: (business: BusinessType) => void;
// // }) => (
// //   <Card
// //     sx={{
// //       cursor: 'pointer',
// //       border: isSelected ? '2px solid #1976d2' : '1px solid #e0e0e0',
// //       borderRadius: 2,
// //       transition: 'all 0.2s ease-in-out',
// //       '&:hover': {
// //         transform: 'translateY(-2px)',
// //         boxShadow: 2,
// //       },
// //       height: '100%',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       minHeight: 120,
// //       maxWidth: 140,
// //       margin: '0 auto',
// //     }}
// //     onClick={() => onSelect(business)}
// //   >
// //     <CardContent sx={{
// //       textAlign: 'center',
// //       flexGrow: 1,
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       padding: 1.5,
// //       '&:last-child': { paddingBottom: 1.5 }
// //     }}>
// //       <Box sx={{ width: 40, height: 40, mb: 1 }}>
// //         <Image
// //           src={business.imageUrl}
// //           alt={business.nameAr}
// //           width={40}
// //           height={40}
// //           style={{ objectFit: 'contain' }}
// //         />
// //       </Box>
// //       <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, fontSize: '0.8rem' }}>
// //         {business.nameAr}
// //       </Typography>
// //       <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
// //         {business.companySalesCount} شركة
// //       </Typography>
// //     </CardContent>
// //   </Card>
// // );

// // // --------------------------------------------------
// // // Main Component
// // // --------------------------------------------------
// // interface Props {
// //   bussiness: BusinessType[];
// // }

// // export default function JwtRegisterView({ bussiness }: Props) {
// //   const t = useTranslations();
// //   const router = useRouter();
// //   const { registerUser } = useAuthStore();
// //   const [errorMsg, setErrorMsg] = useState('');
// //   const [selectedBusiness, setSelectedBusiness] = useState<BusinessType | null>(null);

// //   // Tabs state
// //   const [currentTab, setCurrentTab] = useState(0);

// //   // useForm + validation
// //   const RegisterSchema = yup.object().shape({
// //     name: yup
// //       .string()
// //       .required(t('Global.Validation.var_required', { var: t('Pages.Auth.user_name') })),
// //     officialName: yup
// //       .string()
// //       .required(t('Global.Validation.var_required', { var: t('Global.Label.official_name') })),
// //     email: yup
// //       .string()
// //       .email(t('Global.Validation.var_invalid', { var: t('Global.Label.email') }))
// //       .required(t('Global.Validation.var_required', { var: t('Global.Label.email') })),
// //     phoneNumber: yup
// //       .string()
// //       .required(t('Global.Validation.password_required'))
// //       .matches(/^5\d*$/, t('Global.Validation.phone_must_start_5')),
// //   });

// //   const methods = useForm<RegisterFormValues>({
// //     resolver: yupResolver(RegisterSchema),
// //     defaultValues: {
// //       name: '',
// //       officialName: '',
// //       email: '',
// //       phoneNumber: '',
// //     },
// //   });

// //   const {
// //     reset,
// //     handleSubmit,
// //     formState: { isSubmitting },
// //   } = methods;

// //   const handleBusinessSelect = (business: BusinessType) => {
// //     setSelectedBusiness(business);
// //   };

// //   // --------------------------------------------------
// //   // Submit Handler
// //   // --------------------------------------------------
// //   const onSubmit = handleSubmit(async (data) => {
// //     try {
// //       const registerData = {
// //         ...data,
// //         businessTypeId: selectedBusiness?.id, // Include selected business ID
// //       };

// //       const res = await registerUser(registerData as any);

// //       if ('error' in res) {
// //         setErrorMsg(res.error);
// //       } else if ('redirectTo' in res) {
// //         router.push(res.redirectTo);
// //       }
// //     } catch (error) {
// //       reset();
// //       setErrorMsg(error instanceof Error ? error.message : String(error));
// //     }
// //   });

// //   // --------------------------------------------------
// //   // Render
// //   // --------------------------------------------------
// //   return (
// //     <Box sx={{ width: '100%', height: '100vh', display: 'flex' }}>
// //       {/* Right Side Form */}
// //       <Box
// //         sx={{
// //           width: { xs: '60%', sm: '65%', md: '65%' },
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           px: { xs: 2, sm: 4 },
// //           overflow: 'auto',
// //         }}
// //       >
// //         <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
// //           {/* Logo */}
// //           <Box sx={{ mb: 1 }}>
// //             <Image
// //               src="/logo/logo_istihwaz.svg"
// //               alt="Acquisitions logo"
// //               width={160}
// //               height={120}
// //               style={{ margin: 'auto' }}
// //             />
// //           </Box>

// //           <Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
// //             {t('Pages.Auth.create_new_account')}
// //           </Typography>

// //           {/* Tabs */}
// //           <Tabs
// //             value={currentTab}
// //             onChange={(e, v) => setCurrentTab(v)}
// //             sx={{
// //               mb: 3,
// //               '& .MuiTabs-flexContainer': { justifyContent: 'center' },
// //             }}
// //           >
// //             <Tab label="البيانات الأساسية" />
// //             <Tab label="العنوان" />
// //             <Tab label="التأكيد" />
// //           </Tabs>

// //           {/* TAB 1 - Basic Info */}
// //           {currentTab === 0 && (
// //             <FormProvider methods={methods} onSubmit={onSubmit}>
// //               <Stack spacing={2.5}>
// //                 <FieldLabel>{t('Global.Label.name')}</FieldLabel>
// //                 <RHFTextField name="name" placeholder={t('Pages.Auth.user_name')} fullWidth />

// //                 <FieldLabel>{t('Global.Label.official_name')}</FieldLabel>
// //                 <RHFTextField name="officialName" placeholder={t('Global.Label.official_name')} fullWidth />

// //                 <FieldLabel>{t('Global.Label.email')}</FieldLabel>
// //                 <RHFTextField name="email" placeholder={t('Global.Label.email')} fullWidth type="email" />

// //                 <FieldLabel>{t('Global.Label.phone')}</FieldLabel>
// //                 <RHFTextField name="phoneNumber" placeholder="5xxxxxxxx" fullWidth />

// //                 <Button
// //                   fullWidth
// //                   variant="contained"
// //                   size="large"
// //                   disabled={isSubmitting}
// //                   sx={{ height: 50, borderRadius: 2 }}
// //                   onClick={() => setCurrentTab(1)}
// //                 >
// //                   {t('Global.Action.next')}
// //                 </Button>
// //               </Stack>
// //             </FormProvider>
// //           )}

// //           {/* TAB 2 - Address (You can add address fields here) */}
// //           {currentTab === 1 && (
// //             <Stack spacing={2.5}>
// //               <Typography variant="h6">معلومات العنوان</Typography>
// //               {/* Add your address fields here */}
// //               <Button
// //                 fullWidth
// //                 variant="contained"
// //                 size="large"
// //                 sx={{ height: 50, borderRadius: 2 }}
// //                 onClick={() => setCurrentTab(2)}
// //               >
// //                 {t('Global.Action.next')}
// //               </Button>
// //               <Button
// //                 fullWidth
// //                 variant="outlined"
// //                 size="large"
// //                 sx={{ height: 50, borderRadius: 2 }}
// //                 onClick={() => setCurrentTab(0)}
// //               >
// //                 {t('Global.Action.back')}
// //               </Button>
// //             </Stack>
// //           )}

// //           {/* TAB 3 - Business Selection */}
// //           {currentTab === 2 && (
// //             <FormProvider methods={methods} onSubmit={onSubmit}>
// //               <Stack spacing={3}>
// //                 <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
// //                   اختر نوع نشاطك التجاري
// //                 </Typography>

// //                 {/* Responsive Grid for Business Cards */}
// //                 <Grid container spacing={1.5} sx={{ justifyContent: 'center' }}>
// //                   {bussiness.map((business) => (
// //                     <Grid item xs={4} sm={3} md={2.4} key={business.id}>
// //                       <BusinessCard
// //                         business={business}
// //                         isSelected={selectedBusiness?.id === business.id}
// //                         onSelect={handleBusinessSelect}
// //                       />
// //                     </Grid>
// //                   ))}
// //                 </Grid>

// //                 {selectedBusiness && (
// //                   <Typography variant="body2" color="primary" sx={{ textAlign: 'center', mt: 2 }}>
// //                     تم اختيار: <strong>{selectedBusiness.nameAr}</strong>
// //                   </Typography>
// //                 )}

// //                 <Stack spacing={1} sx={{ mt: 2 }}>
// //                   <Button
// //                     fullWidth
// //                     variant="contained"
// //                     size="large"
// //                     type="submit"
// //                     disabled={isSubmitting || !selectedBusiness}
// //                     sx={{ height: 50, borderRadius: 2 }}
// //                   >
// //                     {isSubmitting ? 'جاري التسجيل...' : t('Pages.Auth.create_new_account')}
// //                   </Button>
// //                   <Button
// //                     fullWidth
// //                     variant="outlined"
// //                     size="large"
// //                     sx={{ height: 50, borderRadius: 2 }}
// //                     onClick={() => setCurrentTab(1)}
// //                   >
// //                     {t('Global.Action.back')}
// //                   </Button>
// //                 </Stack>
// //               </Stack>
// //             </FormProvider>
// //           )}
// //         </Container>
// //       </Box>

// //       {/* Left Side Image */}
// //       <Box sx={{
// //         width: { xs: '40%', sm: '35%', md: '35%' },
// //         height: '100%',
// //         position: 'relative',
// //         display: { xs: 'none', sm: 'block' } // Hide on mobile
// //       }}>
// //         <Image
// //           src="/assets/auth/bgolor-auth.png"
// //           alt="auth background"
// //           fill
// //           priority
// //           style={{ objectFit: 'cover' }}
// //         />
// //       </Box>
// //     </Box>
// //   );
// // }
// 'use client';

// import * as yup from 'yup';
// import Image from 'next/image';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useTranslations } from 'next-intl';
// import { useRouter } from 'src/routes/hooks';
// import { useAuthStore } from 'src/auth/auth-store';
// import { yupResolver } from '@hookform/resolvers/yup';
// import FormProvider, { RHFTextField } from 'src/components/hook-form';
// import {
//   Box,
//   Tab,
//   Tabs,
//   Grid,
//   Card,
//   Stack,
//   Paper,
//   Button,
//   Checkbox,
//   Container,
//   Typography,
//   CardContent,
//   FormControlLabel,
// } from '@mui/material';

// // --------------------------------------------------
// // Types
// // --------------------------------------------------
// interface RegisterFormValues {
//   name: string;
//   officialName: string;
//   email: string;
//   phoneNumber: string;
//   acceptTerms: boolean;
// }

// interface BusinessType {
//   id: string;
//   nameAr: string;
//   nameEn: string;
//   name: string;
//   imageUrl: string;
//   companySalesCount: number;
// }

// const FieldLabel = ({ children }: { children: string }) => (
//   <Typography
//     variant="body1"
//     sx={{
//       width: 120,
//       height: 18,
//       fontFamily: `'Frutiger LT Arabic', sans-serif`,
//       fontWeight: 700,
//       fontSize: 16,
//       lineHeight: '31px',
//       textAlign: 'left',
//       color: '#5D5D5D',
//     }}
//   >
//     {children}
//   </Typography>
// );

// // --------------------------------------------------
// // Business Card Component - COMPACT VERSION
// // --------------------------------------------------
// const BusinessCard = ({
//   business,
//   isSelected,
//   onSelect
// }: {
//   business: BusinessType;
//   isSelected: boolean;
//   onSelect: (business: BusinessType) => void;
// }) => (
//   <Card
//     sx={{
//       cursor: 'pointer',
//       border: isSelected ? '2px solid #1976d2' : '1px solid #e0e0e0',
//       borderRadius: 2,
//       transition: 'all 0.2s ease-in-out',
//       '&:hover': {
//         transform: 'translateY(-2px)',
//         boxShadow: 2,
//       },
//       height: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//       minHeight: 120,
//       maxWidth: 140,
//       margin: '0 auto',
//     }}
//     onClick={() => onSelect(business)}
//   >
//     <CardContent sx={{
//       textAlign: 'center',
//       flexGrow: 1,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: 1.5,
//       '&:last-child': { paddingBottom: 1.5 }
//     }}>
//       <Box sx={{ width: 40, height: 40, mb: 1 }}>
//         <Image
//           src={business.imageUrl}
//           alt={business.nameAr}
//           width={40}
//           height={40}
//           style={{ objectFit: 'contain' }}
//         />
//       </Box>
//       <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, fontSize: '0.8rem' }}>
//         {business.nameAr}
//       </Typography>
//       <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
//         {business.companySalesCount} شركة
//       </Typography>
//     </CardContent>
//   </Card>
// );

// // --------------------------------------------------
// // Main Component
// // --------------------------------------------------
// interface Props {
//   bussiness: BusinessType[];
// }

// export default function JwtRegisterView({ bussiness }: Props) {
//   const t = useTranslations();
//   const router = useRouter();
//   const { registerUser } = useAuthStore();
//   const [errorMsg, setErrorMsg] = useState('');
//   const [selectedBusiness, setSelectedBusiness] = useState<BusinessType | null>(null);
//   const [acceptTerms, setAcceptTerms] = useState(false);

//   // Tabs state
//   const [currentTab, setCurrentTab] = useState(0);

//   // useForm + validation
//   const RegisterSchema = yup.object().shape({
//     name: yup
//       .string()
//       .required(t('Global.Validation.var_required', { var: t('Pages.Auth.user_name') })),
//     officialName: yup
//       .string()
//       .required(t('Global.Validation.var_required', { var: t('Global.Label.official_name') })),
//     email: yup
//       .string()
//       .email(t('Global.Validation.var_invalid', { var: t('Global.Label.email') }))
//       .required(t('Global.Validation.var_required', { var: t('Global.Label.email') })),
//     phoneNumber: yup
//       .string()
//       .required(t('Global.Validation.password_required'))
//       .matches(/^5\d*$/, t('Global.Validation.phone_must_start_5')),
//     acceptTerms: yup
//       .boolean()
//       .oneOf([true], 'يجب الموافقة على الشروط والأحكام'),
//   });

//   const methods = useForm<RegisterFormValues>({
//     resolver: yupResolver(RegisterSchema as any),
//     defaultValues: {
//       name: '',
//       officialName: '',
//       email: '',
//       phoneNumber: '',
//       acceptTerms: false,
//     },
//   });

//   const {
//     reset,
//     handleSubmit,
//     formState: { isSubmitting },
//     watch,
//   } = methods;

//   const handleBusinessSelect = (business: BusinessType) => {
//     setSelectedBusiness(business);
//   };

//   // --------------------------------------------------
//   // Submit Handler
//   // --------------------------------------------------
//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       const registerData = {
//         ...data,
//         businessTypeId: selectedBusiness?.id, // Include selected business ID
//       };

//       const res = await registerUser(registerData as any);

//       if ('error' in res) {
//         setErrorMsg(res.error);
//       } else if ('redirectTo' in res) {
//         router.push(res.redirectTo);
//       }
//     } catch (error) {
//       reset();
//       setErrorMsg(error instanceof Error ? error.message : String(error));
//     }
//   });

//   // Terms and Conditions content
//   const termsContent = `
// جريم إيسموم (noun) وضمن أساس رخصي أن الماء هو سياسة
// عن الشكل وليس المحتوى وتستخدم في صناعات المطلع وهو النشر.
// إن لوريم إيسموم وأدربال المصار للنص الشامل منذ القرن الخاص عشر
// للدى قامت حقيقة معوقة برص دمجونة من الترتيب بشكل عشوائي
// اختياط من نص، تتفق تقني حياتية دليل أو جميع شغلي لهذه القوت.
// محددة ثورة من الزمن لم تخضع على هذا النص بنا أنه حتى صار.
// مساعدة ومشكلة الأصلي في الجابعة والتخفي بالثانويين. انشر بشكل
// غير في سنوات هذا القرن مع إصدار وفاق "ليزاسيت" (letcase)
// البالستيكية تتوفر مطلع من هذا النص، وعاد ينترش روءاً لدى مؤخراً مع
// ظهور راض النشر الإلكتروني مثل "الروس باج مارك" (siglaia)
// (PageMake) واتلى حيث أيضاً على اسم عن نص لوريم إيسموم.
//   `.trim();

//   // --------------------------------------------------
//   // Render
//   // --------------------------------------------------
//   return (
//     <Box sx={{ width: '100%', height: '100vh', display: 'flex' }}>
//       {/* Right Side Form */}
//       <Box
//         sx={{
//           width: { xs: '100%', sm: '65%', md: '65%' },
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           px: { xs: 2, sm: 4 },
//           // overflow: 'auto',
//           py: 2,
//         }}
//       >
//         <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
//           {/* Logo */}
//           <Box sx={{ mb: 1 }}>
//             <Image
//               src="/logo/logo_istihwaz.svg"
//               alt="Acquisitions logo"
//               width={160}
//               height={120}
//               style={{ margin: 'auto' }}
//             />
//           </Box>

//           <Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
//             {t('Pages.Auth.create_new_account')}
//           </Typography>

//           {/* Tabs */}
//           <Tabs
//             value={currentTab}
//             onChange={(e, v) => setCurrentTab(v)}
//             sx={{
//               mb: 3,
//               '& .MuiTabs-flexContainer': { justifyContent: 'center' },
//             }}
//           >
//             <Tab label="البيانات الأساسية" />
//             <Tab label="الشروط والأحكام" />
//             <Tab label="التأكيد" />
//           </Tabs>

//           {/* TAB 1 - Basic Info */}
//           {currentTab === 0 && (
//             <FormProvider methods={methods} onSubmit={onSubmit}>
//               <Stack spacing={2.5}>
//                 <FieldLabel>{t('Global.Label.name')}</FieldLabel>
//                 <RHFTextField name="name" placeholder={t('Pages.Auth.user_name')} fullWidth />

//                 <FieldLabel>{t('Global.Label.official_name')}</FieldLabel>
//                 <RHFTextField name="officialName" placeholder={t('Global.Label.official_name')} fullWidth />

//                 <FieldLabel>{t('Global.Label.email')}</FieldLabel>
//                 <RHFTextField name="email" placeholder={t('Global.Label.email')} fullWidth type="email" />

//                 <FieldLabel>{t('Global.Label.phone')}</FieldLabel>
//                 <RHFTextField name="phoneNumber" placeholder="5xxxxxxxx" fullWidth />

//                 <Button
//                   fullWidth
//                   variant="contained"
//                   size="large"
//                   disabled={isSubmitting}
//                   sx={{ height: 50, borderRadius: 2 }}
//                   onClick={() => setCurrentTab(1)}
//                 >
//                   {t('Global.Action.next')}
//                 </Button>
//               </Stack>
//             </FormProvider>
//           )}

//           {/* TAB 2 - Terms and Conditions */}
//           {currentTab === 1 && (
//             <FormProvider methods={methods} onSubmit={onSubmit}>
//               <Stack spacing={3}>
//                 {/* Header */}
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     fontWeight: 'bold',
//                     textAlign: 'left',
//                     color: '#1a1a1a',
//                     mb: 2
//                   }}
//                 >
//                   الشروط والأحكام
//                 </Typography>

//                 {/* Terms Content Box */}
//                 <Paper
//                   elevation={1}
//                   sx={{
//                     p: 3,
//                     border: '1px solid #e0e0e0',
//                     borderRadius: 2,
//                     backgroundColor: '#fafafa',
//                     maxHeight: { xs: 300, sm: 350 },
//                     // overflow: 'auto',
//                     textAlign: 'left',
//                     direction: 'ltr',
//                   }}
//                 >
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       lineHeight: 1.8,
//                       fontSize: { xs: '0.9rem', sm: '1rem' },
//                       color: '#555',
//                       fontFamily: 'inherit',
//                       whiteSpace: 'pre-line',
//                     }}
//                   >
//                     {termsContent}
//                   </Typography>
//                 </Paper>

//                 {/* Accept Terms Checkbox */}
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={watch('acceptTerms')}
//                       onChange={(e) => methods.setValue('acceptTerms', e.target.checked)}
//                       sx={{
//                         color: '#1976d2',
//                         textAlign:'left',
//                         '&.Mui-checked': {
//                           color: '#1976d2',
//                         },
//                       }}
//                     />
//                   }
//                   label={
//                     <Typography variant="body2" sx={{ textAlign: 'right', mr: 1 }}>
//                       أوافق على الشروط والأحكام المذكورة أعلاه
//                     </Typography>
//                   }
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'flex-start',
//                     alignItems: 'center',
//                     mt: 2,

//                   }}
//                 />

//                 {/* Navigation Buttons */}
//                 <Stack spacing={1} sx={{ mt: 2 }}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     size="large"
//                     disabled={!watch('acceptTerms')}
//                     sx={{ height: 50, borderRadius: 2 }}
//                     onClick={() => setCurrentTab(2)}
//                   >
//                     {t('Global.Action.next')}
//                   </Button>
//                   {/* <Button
//                     fullWidth
//                     variant="outlined"
//                     size="large"
//                     sx={{ height: 50, borderRadius: 2 }}
//                     onClick={() => setCurrentTab(0)}
//                   >
//                     {t('Global.Action.back')}
//                   </Button> */}
//                 </Stack>
//               </Stack>
//             </FormProvider>
//           )}

//           {/* TAB 3 - Business Selection */}
//           {currentTab === 2 && (
//             <FormProvider methods={methods} onSubmit={onSubmit}>
//               <Stack spacing={3}>
//                 <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
//                   اختر نوع نشاطك التجاري
//                 </Typography>

//                 {/* Responsive Grid for Business Cards */}
//                 <Grid container spacing={1.5} sx={{ justifyContent: 'center' }}>
//                   {bussiness.map((business) => (
//                     <Grid item xs={4} sm={3} md={2.4} key={business.id}>
//                       <BusinessCard
//                         business={business}
//                         isSelected={selectedBusiness?.id === business.id}
//                         onSelect={handleBusinessSelect}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>

//                 {selectedBusiness && (
//                   <Typography variant="body2" color="primary" sx={{ textAlign: 'center', mt: 2 }}>
//                     تم اختيار: <strong>{selectedBusiness.nameAr}</strong>
//                   </Typography>
//                 )}

//                 <Stack spacing={1} sx={{ mt: 2 }}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     size="large"
//                     type="submit"
//                     disabled={isSubmitting || !selectedBusiness}
//                     sx={{ height: 50, borderRadius: 2 }}
//                   >
//                     {isSubmitting ? 'جاري التسجيل...' : t('Pages.Auth.create_new_account')}
//                   </Button>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     size="large"
//                     sx={{ height: 50, borderRadius: 2 }}
//                     onClick={() => setCurrentTab(1)}
//                   >
//                     {t('Global.Action.back')}
//                   </Button>
//                 </Stack>
//               </Stack>
//             </FormProvider>
//           )}
//         </Container>
//       </Box>

//       {/* Left Side Image - Hidden on mobile */}
//       <Box sx={{
//         width: { xs: '0%', sm: '35%', md: '35%' },
//         height: '100%',
//         position: 'relative',
//         display: { xs: 'none', sm: 'block' }
//       }}>
//         <Image
//           src="/assets/auth/bgolor-auth.png"
//           alt="auth background"
//           fill
//           priority
//           style={{ objectFit: 'cover' }}
//         />
//       </Box>
//     </Box>
//   );
// }
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
  Tab,
  Tabs,
  Grid,
  Card,
  Stack,
  Paper,
  Button,
  Checkbox,
  Container,
  Typography,
  CardContent,
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
      height: 18,
      fontFamily: `'Frutiger LT Arabic', sans-serif`,
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '31px',
      textAlign: 'left',
      color: '#5D5D5D',
    }}
  >
    {children}
  </Typography>
);

// --------------------------------------------------
// Business Card Component - COMPACT VERSION
// --------------------------------------------------
const BusinessCard = ({
  business,
  isSelected,
  onSelect
}: {
  business: BusinessType;
  isSelected: boolean;
  onSelect: (business: BusinessType) => void;
}) => (
  <Card
    sx={{
      cursor: 'pointer',
      border: isSelected ? '2px solid #1976d2' : '1px solid #e0e0e0',
      borderRadius: 2,
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: 2,
      },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 120,
      maxWidth: 140,
      margin: '0 auto',
    }}
    onClick={() => onSelect(business)}
  >
    <CardContent sx={{
      textAlign: 'center',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 1.5,
      '&:last-child': { paddingBottom: 1.5 }
    }}>
      <Box sx={{ width: 40, height: 40, mb: 1 }}>
        <Image
          src={business.imageUrl}
          alt={business.nameAr}
          width={40}
          height={40}
          style={{ objectFit: 'contain' }}
        />
      </Box>
      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, fontSize: '0.8rem' }}>
        {business.nameAr}
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
        {business.companySalesCount} شركة
      </Typography>
    </CardContent>
  </Card>
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
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType | null>(null);

  // Tabs state
  const [currentTab, setCurrentTab] = useState(0);

  // useForm + validation
  const RegisterSchema = yup.object().shape({
    name: yup
      .string()
      .required(t('Global.Validation.var_required', { var: t('Pages.Auth.user_name') })),
    officialName: yup
      .string()
      .required(t('Global.Validation.var_required', { var: t('Global.Label.official_name') })),
    email: yup
      .string()
      .email(t('Global.Validation.var_invalid', { var: t('Global.Label.email') }))
      .required(t('Global.Validation.var_required', { var: t('Global.Label.email') })),
    phoneNumber: yup
      .string()
      .required(t('Global.Validation.password_required'))
      .matches(/^5\d*$/, t('Global.Validation.phone_must_start_5')),
    acceptTerms: yup
      .boolean()
      .oneOf([true], 'يجب الموافقة على الشروط والأحكام'),
  });

  const methods = useForm<RegisterFormValues>({
    resolver: yupResolver(RegisterSchema as any),
    defaultValues: {
      name: '',
      officialName: '',
      email: '',
      phoneNumber: '',
      acceptTerms: false,
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = methods;

  const handleBusinessSelect = (business: BusinessType) => {
    setSelectedBusiness(business);
  };

  // --------------------------------------------------
  // Submit Handler - UPDATED DATA STRUCTURE
  // --------------------------------------------------
  const onSubmit = handleSubmit(async (data) => {
    try {
      // Prepare the data in the required format
      const registerData = {
        Name: data.name,
        Email: data.email,
        OfficialName: data.officialName,
        BusinessTypeIds: selectedBusiness ? [selectedBusiness.id] : [], // Array of selected business IDs
        AgreeToTerms: data.acceptTerms, // Boolean from checkbox
        PhoneNumber: data.phoneNumber, // Include phone number if needed
      };

      console.log('Sending registration data:', registerData);

      const res = await registerUser(registerData as any);

      if ('error' in res) {
        setErrorMsg(res.error);
      } else if ('redirectTo' in res) {
        router.push(res.redirectTo);
      }
    } catch (error) {
      reset();
      setErrorMsg(error instanceof Error ? error.message : String(error));
    }
  });

  // Terms and Conditions content
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
  // Render
  // --------------------------------------------------
  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex' }}>
      {/* Right Side Form */}
      <Box
        sx={{
          width: { xs: '100%', sm: '65%', md: '65%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
          py: 2,
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          {/* Logo */}
          <Box sx={{ mb: 1 }}>
            <Image
              src="/logo/logo_istihwaz.svg"
              alt="Acquisitions logo"
              width={160}
              height={120}
              style={{ margin: 'auto' }}
            />
          </Box>

          <Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
            {t('Pages.Auth.create_new_account')}
          </Typography>

          {/* Tabs */}
          <Tabs
            value={currentTab}
            onChange={(e, v) => setCurrentTab(v)}
            sx={{
              mb: 3,
              '& .MuiTabs-flexContainer': { justifyContent: 'center' },
            }}
          >
            <Tab label="البيانات الأساسية" />
            <Tab label="الشروط والأحكام" />
            <Tab label="التأكيد" />
          </Tabs>

          {/* TAB 1 - Basic Info */}
          {currentTab === 0 && (
            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2.5}>
                <FieldLabel>{t('Global.Label.name')}</FieldLabel>
                <RHFTextField name="name" placeholder={t('Pages.Auth.user_name')} fullWidth />

                <FieldLabel>{t('Global.Label.official_name')}</FieldLabel>
                <RHFTextField name="officialName" placeholder={t('Global.Label.official_name')} fullWidth />

                <FieldLabel>{t('Global.Label.email')}</FieldLabel>
                <RHFTextField name="email" placeholder={t('Global.Label.email')} fullWidth type="email" />

                <FieldLabel>{t('Global.Label.phone')}</FieldLabel>
                <RHFTextField name="phoneNumber" placeholder="5xxxxxxxx" fullWidth />

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ height: 50, borderRadius: 2 }}
                  onClick={() => setCurrentTab(1)}
                >
                  {t('Global.Action.next')}
                </Button>
              </Stack>
            </FormProvider>
          )}

          {/* TAB 2 - Terms and Conditions */}
          {currentTab === 1 && (
            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={3}>
                {/* Header */}
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: '#1a1a1a',
                    mb: 2
                  }}
                >
                  الشروط والأحكام
                </Typography>

                {/* Terms Content Box */}
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    backgroundColor: '#fafafa',
                    maxHeight: { xs: 300, sm: 350 },
                    textAlign: 'left',
                    direction: 'ltr',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      color: '#555',
                      fontFamily: 'inherit',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {termsContent}
                  </Typography>
                </Paper>

                {/* Accept Terms Checkbox */}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={watch('acceptTerms')}
                      onChange={(e) => methods.setValue('acceptTerms', e.target.checked)}
                      sx={{
                        color: '#1976d2',
                        textAlign:'left',
                        '&.Mui-checked': {
                          color: '#1976d2',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ textAlign: 'right', mr: 1 }}>
                      أوافق على الشروط والأحكام المذكورة أعلاه
                    </Typography>
                  }
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    mt: 2,
                  }}
                />

                {/* Navigation Buttons */}
                <Stack spacing={1} sx={{ mt: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={!watch('acceptTerms')}
                    sx={{ height: 50, borderRadius: 2 }}
                    onClick={() => setCurrentTab(2)}
                  >
                    {t('Global.Action.next')}
                  </Button>
                </Stack>
              </Stack>
            </FormProvider>
          )}

          {/* TAB 3 - Business Selection */}
          {currentTab === 2 && (
            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={3}>
                <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
                  اختر نوع نشاطك التجاري
                </Typography>

                {/* Responsive Grid for Business Cards */}
                <Grid container spacing={1.5} sx={{ justifyContent: 'center' }}>
                  {bussiness.map((business) => (
                    <Grid item xs={4} sm={3} md={2.4} key={business.id}>
                      <BusinessCard
                        business={business}
                        isSelected={selectedBusiness?.id === business.id}
                        onSelect={handleBusinessSelect}
                      />
                    </Grid>
                  ))}
                </Grid>

                {selectedBusiness && (
                  <Typography variant="body2" color="primary" sx={{ textAlign: 'center', mt: 2 }}>
                    تم اختيار: <strong>{selectedBusiness.nameAr}</strong>
                  </Typography>
                )}

                <Stack spacing={1} sx={{ mt: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    type="submit"
                    disabled={isSubmitting || !selectedBusiness}
                    sx={{ height: 50, borderRadius: 2 }}
                  >
                    {isSubmitting ? 'جاري التسجيل...' : t('Pages.Auth.create_new_account')}
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    sx={{ height: 50, borderRadius: 2 }}
                    onClick={() => setCurrentTab(1)}
                  >
                    {t('Global.Action.back')}
                  </Button>
                </Stack>
              </Stack>
            </FormProvider>
          )}
        </Container>
      </Box>

      {/* Left Side Image - Hidden on mobile */}
      <Box sx={{
        width: { xs: '0%', sm: '35%', md: '35%' },
        height: '100%',
        position: 'relative',
        display: { xs: 'none', sm: 'block' }
      }}>
        <Image
          src="/assets/auth/bgolor-auth.png"
          alt="auth background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
}