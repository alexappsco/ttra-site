'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Box, Fade, Paper, Button, Typography } from '@mui/material';

export default function JourneySection() {
  const [mode, setMode] = useState<'buyer' | 'seller'>('seller');
  const isSeller = mode === 'seller';

  //  Seller Steps
  const sellerSteps = [
    {
      img: '/assets/images/seller-icon-img/add.png',
      title: 'اطرح مشروعك للبيع',
      desc: 'اعرض نشاطك التجاري بخطوات بسيطة عبر خاصية الإدراج السهل، وحدد تفاصيل النشاط والأصول والإيرادات بدقة.',
    },
    {
      img: '/assets/images/seller-icon-img/messages.png',
      title: 'تفاعل مع المهتمين',
      desc: 'تابع عدد المشاهدات والاستفسارات، ورد على المشترين الجادين من خلال نظام الرسائل داخل المنصة.',
    },
    {
      img: '/assets/images/seller-icon-img/supply.png',
      title: 'استقبل العروض وتفاوض',
      desc: 'تلقَّ العروض المالية من المشترين، وابدأ المفاوضات للوصول إلى أفضل عرض ممكن.',
    },
    {
      img: '/assets/images/seller-icon-img/like.png',
      title: 'قارن العروض وتوصّل إلى الاتفاق',
      desc: 'راجع العروض المقدّمة، قارن بينها، واختر العرض الأنسب لإتمام الصفقة بنجاح.',
    },
  ];

  //  Buyer Steps
  const buyerSteps = [
    {
      img: '/assets/images/buyer-icon-img/search.png',
      title: 'تصفّح المشاريع المتاحة',
      desc: 'استكشف الفرص الاستثمارية في مختلف القطاعات والمدن، واختر ما يتناسب مع اهتماماتك وخبراتك.',
    },
    {
      img: '/assets/images/buyer-icon-img/home.png',
      title: 'ادرس المشروع بعناية',
      desc: 'اطلع على تفاصيل النشاط، الأداء المالي، والأصول لفهم الصورة الكاملة قبل اتخاذ القرار.',
    },
    {
      img: '/assets/images/buyer-icon-img/file.png',
      title: 'قدّم عرضك وتفاوض',
      desc: 'أرسل عروضك وابدأ التفاوض عليها بموافقة البائع.',
    },
    {
      img: '/assets/images/buyer-icon-img/key.png',
      title: 'توصّل إلى الاتفاق النهائي',
      desc: 'قارن بين العروض والفرص، واختر المشروع الأنسب لإتمام الصفقة بثقة واحترافية.',
    },
  ];

  const steps = isSeller ? sellerSteps : buyerSteps;


//  return (
//     <Box
//       sx={{
//         py: 8,
//         px: { xs: 2, sm: 4, md: 6 },
//         bgcolor: isSeller ? '#E8F5E9' : '#E3F2FD',
//         textAlign: 'center',
//         direction: 'rtl',
//         transition: 'background-color 0.5s ease',
//       }}
//     >
//       {/* Title */}
//       <Typography
//         variant="h4"
//         component="h2"
//         sx={{
//           fontWeight: 'bold',
//           color: isSeller ? '#2E7D32' : '#1976D2',
//           mb: 3,
//         }}
//       >
//         رحلتك تبدأ من هنا
//       </Typography>

//       {/* Switch Buttons */}
//       <Box display="flex" justifyContent="center" gap={2} mb={4} role="group" aria-label="اختر وضع المستخدم">
//         <Button
//           variant={isSeller ? 'contained' : 'outlined'}
//           aria-pressed={isSeller}
//           onClick={() => setMode('seller')}
//           sx={{
//             bgcolor: isSeller ? '#2E7D32' : 'transparent',
//             color: isSeller ? '#fff' : '#2E7D32',
//             borderColor: '#2E7D32',
//             '&:hover': { bgcolor: isSeller ? '#1B5E20' : '#E8F5E9' },
//           }}
//         >
//           أنا بائع
//         </Button>
//         <Button
//           variant={!isSeller ? 'contained' : 'outlined'}
//           aria-pressed={!isSeller}
//           onClick={() => setMode('buyer')}
//           sx={{
//             bgcolor: !isSeller ? '#1976D2' : 'transparent',
//             color: !isSeller ? '#fff' : '#1976D2',
//             borderColor: '#1976D2',
//             '&:hover': { bgcolor: !isSeller ? '#1565C0' : '#E3F2FD' },
//           }}
//         >
//           أنا مشتري
//         </Button>
//       </Box>

//       {/* Subtitle */}
//       <Typography variant="h6" component="h3" sx={{ mb: 4, fontWeight: 'bold' }}>
//         {isSeller ? 'كيف تبيع مشروعك؟' : 'كيف تشتري مشروعك؟'}
//       </Typography>

//       {/* Steps */}
//       <Fade in timeout={500}>
//         <Box
//           component="ol"
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexWrap: 'wrap',
//             gap: { xs: 2, sm: 3, md: 2, lg: 3, xl: 4 },
//             flexDirection: { xs: 'row-reverse', md: 'row-reverse' },
//             p: 0,
//             listStyle: 'none',
//           }}
//         >
//           {steps.map((step, index) => (
//             <Box
//               component="li"
//               key={index}
//               display="flex"
//               alignItems="center"
//               sx={{ mb: { xs: 2, md: 0 } }}
//             >
//               {/* Arrow (decorative) */}
//               {index !== steps.length - 1 && (
//                 <Box
//                   aria-hidden="true"
//                   sx={{
//                     mx: 2,
//                     display: { xs: 'none', md: 'flex' },
//                     alignItems: 'center',
//                     '@media (min-width:900px) and (max-width:1568px)': {
//                       display: 'none',
//                     },
//                   }}
//                 >
//                   <Image src="/assets/images/home/arrow.png" alt="" width={40} height={40} />
//                 </Box>
//               )}

//               {/* Step Card */}
//               <Paper
//                 elevation={3}
//                 role="group"
//                 aria-label={`Step ${index + 1}: ${step.title}`}
//                 sx={{
//                   p: 3,
//                   borderRadius: 3,
//                   width: 290,
//                   height: 240,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'flex-start',
//                   alignItems: 'center',
//                   textAlign: 'center',
//                   backgroundColor: '#fff',
//                   transition: 'transform 0.3s ease',
//                   '&:hover': { transform: 'translateY(-5px)' },
//                 }}
//               >
//                 {/* Step Icon */}
//                 <Box sx={{ width: 60, height: 60, mb: 2, position: 'relative' }}>
//                   <Image src={step.img} alt={`Step icon: ${step.title}`} fill style={{ objectFit: 'contain' }} />
//                 </Box>

//                 <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
//                   {step.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {step.desc}
//                 </Typography>
//               </Paper>
//             </Box>
//           ))}
//         </Box>
//       </Fade>
//     </Box>
//   );
// }

return (
  <Box
    sx={{
      py: 8,
      px: { xs: 2, sm: 4, md: 6 },
      bgcolor: isSeller ? '#E8F5E9' : '#E3F2FD',
      textAlign: 'center',
      direction: 'rtl',
      transition: 'background-color 0.5s ease',
    }}
  >
    {/* Title */}
    <Typography
      variant="h4"
      component="h2"
      sx={{
        fontWeight: 'bold',
        color: isSeller ? '#2E7D32' : '#1976D2',
        mb: 3,
      }}
    >
      رحلتك تبدأ من هنا
    </Typography>

    {/* Switch Buttons */}
    <Box display="flex" justifyContent="center" gap={2} mb={4} role="group" aria-label="اختر وضع المستخدم">
      <Button
        variant={isSeller ? 'contained' : 'outlined'}
        aria-pressed={isSeller}
        onClick={() => setMode('seller')}
        sx={{
          bgcolor: isSeller ? '#2E7D32' : 'transparent',
          color: isSeller ? '#fff' : '#2E7D32',
          borderColor: '#2E7D32',
          '&:hover': { bgcolor: isSeller ? '#1B5E20' : '#E8F5E9' },
        }}
      >
        أنا بائع
      </Button>
      <Button
        variant={!isSeller ? 'contained' : 'outlined'}
        aria-pressed={!isSeller}
        onClick={() => setMode('buyer')}
        sx={{
          bgcolor: !isSeller ? '#1976D2' : 'transparent',
          color: !isSeller ? '#fff' : '#1976D2',
          borderColor: '#1976D2',
          '&:hover': { bgcolor: !isSeller ? '#1565C0' : '#E3F2FD' },
        }}
      >
        أنا مشتري
      </Button>
    </Box>

    {/* Subtitle */}
    <Typography variant="h6" component="h3" sx={{ mb: 4, fontWeight: 'bold' }}>
      {isSeller ? 'كيف تبيع مشروعك؟' : 'كيف تشتري مشروعك؟'}
    </Typography>

    {/* Steps */}
    <Fade in timeout={500}>
      <Box
        component="ol"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: { xs: 2, sm: 3, md: 2, lg: 3, xl: 4 },
          flexDirection: { xs: 'row-reverse', md: 'row-reverse' },
          p: 0,
          listStyle: 'none',
        }}
      >
        {steps.map((step, index) => (
          <Box
            component="li"
            key={index}
            display="flex"
            alignItems="center"
            sx={{ mb: { xs: 2, md: 0 } }}
          >
            {/* Arrow (decorative) */}
            {index !== steps.length - 1 && (
              <Box
                aria-hidden="true"
                sx={{
                  mx: 2,
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  '@media (min-width:900px) and (max-width:1568px)': {
                    display: 'none',
                  },
                }}
              >
                <Image src="/assets/images/home/arrow.png" alt="" width={40} height={40} />
              </Box>
            )}

            {/* Step Card */}
            <Paper
              elevation={3}
              role="group"
              aria-label={`Step ${index + 1}: ${step.title}`}
              sx={{
                p: 3,
                borderRadius: 3,
                width: 290,
                height: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-5px)' },
              }}
            >
              {/* Step Icon */}
              <Box sx={{ width: 60, height: 60, mb: 2, position: 'relative' }}>
                <Image src={step.img} alt={`Step icon: ${step.title}`} fill style={{ objectFit: 'contain' }} />
              </Box>

              {/* Step Title (fix: specify correct heading level) */}
              <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.desc}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Fade>
  </Box>
);
}
