// 'use client';

// import * as yup from 'yup';
// import Image from 'next/image';
// import { useState } from 'react';
// import { paths } from 'src/routes/paths';
// import { useForm } from 'react-hook-form';
// import { useTranslations } from 'next-intl';
// import { LoginCretentials } from 'src/auth/types';
// import { useAuthStore } from 'src/auth/auth-store';
// import { useBoolean } from 'src/hooks/use-boolean';
// import FormProvider from 'src/components/hook-form';
// import { PATH_AFTER_LOGIN } from 'src/config-global';
// import { yupResolver } from '@hookform/resolvers/yup';
// import RHFPhone from 'src/components/hook-form/rhf-phone';
// import { useRouter, useSearchParams } from 'src/routes/hooks';
// import { Box, Link, Stack, Button, Container, Typography } from '@mui/material';

// export default function JwtLoginView() {
//   const t = useTranslations();
//   const LoginSchema = yup.object().shape({
//     email: yup.string(),
// phoneNumber: yup
//     .string()
//     .required(t('Global.Validation.password_required'))
//     // .matches(/^5\d*$/, t('Global.Validation.phone_must_start_5')),
//     //
//     });

//   const { login } = useAuthStore();
//   const router = useRouter();
//   const [errorMsg, setErrorMsg] = useState('');
//   const searchParams = useSearchParams();
//   const returnTo = searchParams.get('returnTo');
//   const showPassword = useBoolean();

//   const defaultValues = {
//     phoneNumber: '',
//     email: '',
//     isPhone: true,
//   };

//   const methods = useForm({
//     resolver: yupResolver(LoginSchema),
//     defaultValues,
//   }) as any;

//   const { reset, handleSubmit, formState: { isSubmitting } } = methods;

//   const onSubmit = handleSubmit(async (data: LoginCretentials) => {
//     try {
//       const res = await login({ ...data, phoneNumber: `+966${data.phoneNumber}`, isPhone: true, email: '' });

//       if (typeof res === 'object' && 'error' in res) {
//         reset();
//         setErrorMsg(res.error);
//       } else {
//         router.push(returnTo || PATH_AFTER_LOGIN);
//       }
//     } catch (error) {
//       reset();
//       setErrorMsg(typeof error === 'string' ? error : (error as Error).message);
//     }
//   });

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         width: '100%',
//         backgroundColor: '#a2b5a3',
//         backgroundImage: 'url("/assets/background/bgColor-sinwan-auth.png")',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         p: { xs: 2, sm: 3 },
//       }}
//     >
//       <Container maxWidth="sm">
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             borderRadius: 3,
//             boxShadow: 3,
//             p: { xs: 3, sm: 4 },
//             textAlign: 'center',
//             width: '100%',
//             maxWidth: 500,
//             mx: 'auto',
//           }}
//         >
//           {/* Logo */}
//           <Box sx={{ mb: 2 }}>
//             <Image
//               src="/logo/logo_single.png"
//               alt="Logo"
//               width={200}
//               height={150}
//               style={{ margin: 'auto', maxWidth: '100%', height: 'auto' }}
//             />
//           </Box>

//           {/* Title */}
//           <Typography
//             variant="h5"
//             fontWeight="bold"
//             color="#4B684C"
//             mb={1}
//             sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
//           >
//             {t('Pages.Auth.login_title')}
//           </Typography>

//           {/* Subtitle */}
//           <Typography
//             variant="h6"
//             color="text.secondary"
//             mb={3}
//             sx={{ textAlign: 'left', fontSize: { xs: '0.9rem', sm: '1rem' } }}
//           >
//             {t('Pages.Auth.enter_phone_number')}
//           </Typography>

//           {/* Form */}
//           <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
//             <Stack spacing={2}>
//               {/* Phone Field */}
//               <RHFPhone
//                 name="phoneNumber"
//                 sx={{
//                   '& .MuiInputBase-root': {
//                     height: 56,
//                     bgcolor: '#F5F5F5',
//                     borderRadius: 1,
//                     px: 2,
//                   },
//                 }}
//               />

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   height: 56,
//                   fontWeight: 'bold',
//                   fontSize: { xs: '0.95rem', sm: '1rem' },
//                   bgcolor: '#4B684C',
//                   '&:hover': { bgcolor: '#3a523c' },
//                   color: '#fff',
//                   borderRadius: 1,
//                 }}
//                 disabled={isSubmitting}
//               >
//                 {t('Pages.Auth.login_title')}
//               </Button>
//             </Stack>
//           </FormProvider>

//           {/* Register link */}
//           <Typography variant="body2" mt={3} sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
//             {t('Pages.Auth.not_have_account')}{' '}
//             <Link href={paths.auth.register} underline="hover" fontWeight="bold">
//               {t('Pages.Auth.create_new_account')}
//             </Link>
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
'use client';

import * as yup from 'yup';
import Image from 'next/image';
import { useState } from 'react';
import { paths } from 'src/routes/paths';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { LoginCretentials } from 'src/auth/types';
import { useAuthStore } from 'src/auth/auth-store';
import FormProvider from 'src/components/hook-form';
import { PATH_AFTER_LOGIN } from 'src/config-global';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFPhone from 'src/components/hook-form/rhf-phone';
import { useRouter, useSearchParams } from 'src/routes/hooks';
import LanguagePopover from 'src/layouts/common/language-popover';
import { Box, Link, Stack, Paper, Button, Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function JwtLoginView() {
  const t = useTranslations();
  const router = useRouter();
  const { login, loginAsGuest } = useAuthStore();
  // const theme = useTheme();

  const [errorMsg, setErrorMsg] = useState('');
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  // const showPassword = useBoolean();

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
        ...data,
        phoneNumber: `+966${data.phoneNumber}`,
        isPhone: true,
        email: '',
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
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#a2b5a3',
        backgroundImage: 'url("/assets/background/bgColor-sinwan-auth.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* === TOP BAR === */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 1.5, sm: 2 },
        }}
      >
        <Button
          variant="outlined"
          onClick={async () => {
            const res = await loginAsGuest();
            if ('redirectTo' in res) {
              router.push(res.redirectTo);
            }
          }}
          sx={{
            borderRadius: 10,
            borderColor: '#fff',
            color: '#fff',
            fontWeight: 600,
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            textTransform: 'none',
            px: { xs: 2, sm: 3 },
            transition: '0.3s',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.15)',
              borderColor: '#fff',
            },
          }}
        >
          {t('Global.Action.skip')}
        </Button>

        <LanguagePopover />
      </Box>

      {/* === LOGIN FORM === */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 2, sm: 3 },
          py: { xs: 3, sm: 5 },
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={5}
            sx={{
              borderRadius: 4,
              p: { xs: 3, sm: 5 },
              textAlign: 'center',
              backdropFilter: 'blur(12px)',
              backgroundColor: 'rgba(255,255,255,0.9)',
            }}
          >
            {/* Logo */}
            <Box sx={{ mb: 2 }}>
              <Image
                src="/logo/logo_single.png"
                alt="Logo"
                width={180}
                height={120}
                style={{
                  margin: 'auto',
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Box>

            <Typography
              variant="h5"
              fontWeight="bold"
              color="#4B684C"
              mb={1}
              sx={{
                fontSize: { xs: '1.3rem', sm: '1.6rem' },
              }}
            >
              {t('Pages.Auth.login_title')}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={3}
              sx={{
                textAlign: 'center',
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              {t('Pages.Auth.enter_phone_number')}
            </Typography>

            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2}>
                <RHFPhone
                  name="phoneNumber"
                  sx={{
                    '& .MuiInputBase-root': {
                      height: 56,
                      bgcolor: '#F5F5F5',
                      borderRadius: 2,
                      px: 2,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    height: 56,
                    fontWeight: 'bold',
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                    bgcolor: '#4B684C',
                    '&:hover': { bgcolor: '#3a523c' },
                    color: '#fff',
                    borderRadius: 2,
                    mt: 1,
                  }}
                  disabled={isSubmitting}
                >
                  {t('Pages.Auth.login_title')}
                </Button>
              </Stack>
            </FormProvider>

            <Typography
              variant="body2"
              mt={3}
              sx={{
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
              }}
            >
              {t('Pages.Auth.not_have_account')}{' '}
              <Link href={paths.auth.register} underline="hover" fontWeight="bold" color="#4B684C">
                {t('Pages.Auth.create_new_account')}
              </Link>
            </Typography>

            {errorMsg && (
              <Typography color="error" sx={{ mt: 2 }}>
                {errorMsg}
              </Typography>
            )}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
