// 'use client';

// import { Box, Typography, Grid } from '@mui/material';
// import Image from 'next/image';
// import { m } from 'framer-motion';
// import LayoutContainer from './LayoutContainer';

// export default function WhoWeAre() {
//   /* ===== CONTAINER ===== */
//   const containerMotion = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   /* ===== TEXT (FROM RIGHT) ===== */
//   const textMotion = {
//     hidden: { opacity: 0, x: 60 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   };

//   /* ===== FEATURES (FROM RIGHT) ===== */
//   const featureMotion = {
//     hidden: { opacity: 0, x: 40 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   /* ===== IMAGE (FROM LEFT) ===== */
//   const imageMotion = {
//     hidden: { opacity: 0, x: -80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.9, ease: 'easeOut' },
//     },
//   };

//   return (
//     <Box id="who-we-are" sx={{ width: '100%', py: { xs: 6, md: 10 }, overflowX: 'hidden' }}>
//       {/* ===== TITLE ===== */}
//       <m.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={textMotion}
//       >
//         <Typography
//           sx={{
//             textAlign: 'center',
//             fontSize: { xs: 26, md: 40 },
//             fontWeight: 700,
//             color: 'rgba(193, 154, 107, 1)',
//             mb: { xs: 4, md: 6 },
//           }}
//         >
//           من نحن
//         </Typography>
//       </m.div>

//       {/* ===== CONTENT ===== */}
//       <LayoutContainer>
//         <m.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerMotion}
//         >
//           <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
//             {/* ===== TEXT ===== */}
//             <Grid item xs={12} md={7}>
//               <m.div variants={textMotion}>
//                 <Typography
//                   sx={{
//                     fontSize: { xs: 22, md: 40 },
//                     fontWeight: 700,
//                     mb: 1,
//                     color: '#1F1F1F',
//                   }}
//                 >
//                   نيو ديرة –{' '}
//                   <span style={{ color: '#C9A063' }}>
//                     جسر بين الماضي والحاضر
//                   </span>
//                 </Typography>

//                 <Typography
//                   sx={{
//                     fontWeight: 600,
//                     fontSize: { xs: 16, md: 24 },
//                     lineHeight: 1.5,
//                     color: '#4A4A4A',
//                     textAlign: 'justify',
//                     mb: 1,
//                   }}
//                 >
//                   نيو ديرة هو تطبيق تسوق وتوصيل سعودي يجمع بين روح سوق الديرة التقليدي
//                   وسهولة التسوق الرقمي. نتيح لك تصفح وشراء منتجات مختارة بعناية من أشهر
//                   الأسواق الشعبية في الرياض، مع توصيلها مباشرة إلى باب منزلك.
//                 </Typography>

//                 <Typography
//                   sx={{
//                     fontWeight: 600,
//                     fontSize: { xs: 16, md: 24 },
//                     lineHeight: 1.5,
//                     color: '#4A4A4A',
//                     mb: 3,
//                     textAlign: 'justify',
//                   }}
//                 >
//                   من البهارات العطرية والمنتجات اليومية، إلى الحرف اليدوية، التمور
//                   الفاخرة والعطور العربية. نحرص في نيو ديرة على اختيار منتجاتنا من تجار
//                   موثوقين مع تجربة شراء حديثة وآمنة.
//                 </Typography>

//                 {/* ===== FEATURES ===== */}
//                 {[
//                   {
//                     icon: '/assets/icons/app/who-we-are/Vector (10).svg',
//                     title: 'تراث أصيل',
//                     description:
//                       'نحافظ على هوية الأسواق التقليدية وروح الديرة العريقة',
//                   },
//                   {
//                     icon: '/assets/icons/app/who-we-are/Icon.svg',
//                     title: 'جودة مضمونة',
//                     description:
//                       'نختار لك أفضل المنتجات من تجار موثوقين',
//                   },
//                   {
//                     icon: '/assets/icons/app/who-we-are/Icon (1).svg',
//                     title: 'تجربة آمنة',
//                     description:
//                       'معاملات آمنة وتوصيل سريع إلى باب منزلك',
//                   },
//                 ].map((item, index) => (
//                   <m.div key={index} variants={featureMotion}>
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'flex-start',
//                         gap: 2,
//                         mb: 3,
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           width: 55,
//                           height: 55,
//                           borderRadius: '16px',
//                           backgroundColor: 'rgba(232, 221, 208, 1)',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           flexShrink: 0,
//                         }}
//                       >
//                         <Image
//                           src={item.icon}
//                           alt="icon"
//                           width={22}
//                           height={22}
//                         />
//                       </Box>

//                       <Box>
//                         <Typography
//                           sx={{
//                             fontWeight: 600,
//                             fontSize: 18,
//                             color: '#1F1F1F',
//                             mb: 0.5,
//                           }}
//                         >
//                           {item.title}
//                         </Typography>

//                         <Typography
//                           sx={{
//                             fontWeight: 400,
//                             fontSize: 16,
//                             color: 'rgba(154, 110, 58, 1)',
//                           }}
//                         >
//                           {item.description}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </m.div>
//                 ))}
//               </m.div>
//             </Grid>

//             {/* ===== IMAGE ===== */}
//             <Grid item xs={12} md={5}>
//               <m.div variants={imageMotion}>
//                 <Image
//                   src="/assets/background/Container.png"
//                   alt="market"
//                   width={520}
//                   height={640}
//                   style={{
//                     width: '100%',
//                     height: 'auto',
//                     borderRadius: 16,
//                   }}
//                 />
//               </m.div>
//             </Grid>
//           </Grid>
//         </m.div>
//       </LayoutContainer>
//     </Box>
//   );
// }



'use client';

import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';
import LayoutContainer from './LayoutContainer';

export default function WhoWeAre() {
  const containerMotion = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const textMotion = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const featureMotion = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageMotion = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  const FEATURES = [
    { icon: '/assets/icons/app/who-we-are/Vector (10).svg', title: 'تراث أصيل', description: 'نحافظ على هوية الأسواق التقليدية وروح الديرة العريقة' },
    { icon: '/assets/icons/app/who-we-are/Icon.svg', title: 'جودة مضمونة', description: 'نختار لك أفضل المنتجات من تجار موثوقين' },
    { icon: '/assets/icons/app/who-we-are/Icon (1).svg', title: 'تجربة آمنة', description: 'معاملات آمنة وتوصيل سريع إلى باب منزلك' },
  ];

  return (
    <Box id="who-we-are" sx={{ width: '100%', py: { xs: 6, sm: 8, md: 10 }, overflowX: 'hidden' }}>
      <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textMotion}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: { xs: 24, sm: 30, md: 36, lg: 40 },
            fontWeight: 700,
            color: 'rgba(193, 154, 107, 1)',
            mb: { xs: 3, sm: 4, md: 5, lg: 6 },
          }}
        >
          من نحن
        </Typography>
      </m.div>

      <LayoutContainer>
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerMotion}>
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} alignItems="center">
            {/* TEXT */}
            <Grid item xs={12} sm={12} md={7}>
              <m.div variants={textMotion}>
                <Typography
                  sx={{
                    fontSize: { xs: 20, sm: 24, md: 28, lg: 32, xl: 40 },
                    fontWeight: 700,
                    mb: 2,
                    color: '#1F1F1F',
                  }}
                >
                  نيو ديرة – <span style={{ color: '#C9A063' }}>جسر بين الماضي والحاضر</span>
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: 14, sm: 16, md: 18, lg: 20, xl: 24 },
                    lineHeight: 1.6,
                    color: '#4A4A4A',
                    textAlign: 'justify',
                    mb: 2,
                  }}
                >
                  نيو ديرة هو تطبيق تسوق وتوصيل سعودي يجمع بين روح سوق الديرة التقليدي وسهولة التسوق الرقمي. نتيح لك تصفح وشراء منتجات مختارة بعناية من أشهر الأسواق الشعبية في الرياض، مع توصيلها مباشرة إلى باب منزلك.
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: 14, sm: 16, md: 18, lg: 20, xl: 24 },
                    lineHeight: 1.6,
                    color: '#4A4A4A',
                    mb: 3,
                    textAlign: 'justify',
                  }}
                >
                  من البهارات العطرية والمنتجات اليومية، إلى الحرف اليدوية، التمور الفاخرة والعطور العربية. نحرص في نيو ديرة على اختيار منتجاتنا من تجار موثوقين مع تجربة شراء حديثة وآمنة.
                </Typography>

                {/* FEATURES */}
                {FEATURES.map((item, index) => (
                  <m.div key={index} variants={featureMotion}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box
                        sx={{
                          width: { xs: 45, sm: 50, md: 55 },
                          height: { xs: 45, sm: 50, md: 55 },
                          borderRadius: '16px',
                          backgroundColor: 'rgba(232, 221, 208, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Image src={item.icon} alt="icon" width={22} height={22} />
                      </Box>

                      <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: { xs: 16, sm: 17, md: 18 }, color: '#1F1F1F', mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: { xs: 14, sm: 15, md: 16 }, color: 'rgba(154, 110, 58, 1)' }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </m.div>
                ))}
              </m.div>
            </Grid>

            {/* IMAGE */}
            <Grid item xs={12} sm={12} md={5}>
              <m.div variants={imageMotion}>
                <Image
                  src="/assets/background/Container.png"
                  alt="market"
                  width={520}
                  height={640}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 16,
                    maxWidth: '520px',
                  }}
                />
              </m.div>
            </Grid>
          </Grid>
        </m.div>
      </LayoutContainer>
    </Box>
  );
}
