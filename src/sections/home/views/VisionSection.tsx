// 'use client';

// import { Box, Typography, Stack } from '@mui/material';
// import Image from 'next/image';
// import LayoutContainer from './LayoutContainer';
// import { useLocale } from 'next-intl';
// import { m } from 'framer-motion';
// import Iconify from 'src/components/iconify';

// export default function VisionSection() {
//   const locale = useLocale();
//   const isArabic = locale === 'ar';

//   const topImage = isArabic
//     ? '/assets/slider/slid-ar-1.jpeg'
//     : '/assets/slider/slid-en-1.jpeg';

//   const bottomImage = isArabic
//     ? '/assets/slider/slid-ar-2.jpeg'
//     : '/assets/slider/slid-en-2.jpeg';

//   const cardContent = [
//     {
//       title: isArabic ? "رسالتنا:" : "Our Mission:",
//       icon: "solar:rocket-bold-duotone",
//       desc: isArabic 
//         ? "تمكين الناشرين من إدارة حقوقهم بدقة متناهية، ومنح القراء تجربة استثنائية تجمع بين غزارة المحتوى والحفاظ على صحة العين." 
//         : "Empowering publishers to manage their rights with extreme precision, and providing readers with an exceptional, eye-friendly experience."
//     },
//     {
//       title: isArabic ? "رؤيتنا:" : "Our Vision:",
//       icon: "solar:eye-bold-duotone",
//       desc: isArabic 
//         ? "أن نصبح المنصة الرقمية الأكثر موثوقية وابتكاراً، لنقود التحول نحو قراءة رقمية صحية، عادلة وتفاعلية." 
//         : "To become the most reliable and innovative digital platform, leading the shift towards a healthy, fair, and interactive reading experience."
//     },
//   ];

//   return (
//     <Box sx={{ backgroundColor: 'rgba(57, 20, 98, 1)', overflow: 'hidden' }}>
      
//       <Box
//         sx={{
//           position: 'relative',
//           width: '100%',
//           height: { xs: 260, sm: 320, md: 420, lg: 550 },
//           overflow: 'hidden',
//         }}
//       >
//         <Image
//           src={topImage}
//           alt="vision-top"
//           fill
//           priority
//           style={{ objectFit: 'cover', objectPosition: 'center' }}
//         />
//         <Box
//           sx={{
//             position: 'absolute',
//             inset: 0,
//             background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(57,20,98,1))',
//           }}
//         />
//       </Box>

//       <LayoutContainer>
//         <Box sx={{ mt: { xs: -4, md: -6 }, pb: { xs: 8, md: 12 }, position: 'relative', zIndex: 2 }}>
          
//           <m.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Typography
//               variant="h3"
//               sx={{
//                 color: 'rgba(212, 175, 55, 1)',
//                 textAlign: 'center',
//                 fontWeight: 800,
//                 mb: 6,
//                 fontSize: { xs: '1.8rem', md: '2.8rem' },
//                 textShadow: '0 4px 10px rgba(0,0,0,0.3)'
//               }}
//             >
//               {isArabic ? "الرؤية والرسالة" : "Vision & Mission"}
//             </Typography>
//           </m.div>

//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
//               gap: 4,
//               perspective: '1200px',
//               mb: 10,
//             }}
//           >
//             {cardContent.map((item, i) => (
//               <m.div
//                 key={i}
//                 initial={{ 
//                   opacity: 0, 
//                   rotateY: isArabic ? -45 : 45,
//                   x: i === 0 ? -50 : 50 
//                 }}
//                 whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
//                 transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
//                 viewport={{ once: true }}
//                 style={{ transformOrigin: i === 0 ? 'right' : 'left' }}
//               >
//                 <Box
//                   sx={{
//                     p: { xs: 4, md: 5 },
//                     borderRadius: 4,
//                     background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
//                     backdropFilter: 'blur(12px)',
//                     border: '1px solid rgba(255,255,255,0.15)',
//                     boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
//                     height: '100%',
//                     minHeight: 220,
//                     transition: 'transform 0.3s ease',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&:hover': {
//                       transform: 'translateY(-5px)',
//                       borderColor: 'rgba(255,255,255,0.3)',
//                     }
//                   }}
//                 >
//                   <Stack spacing={2}>
//                     <Stack direction="row" alignItems="center" spacing={1.5}>
//                       <Iconify 
//                         icon={item.icon} 
//                         width={32} 
//                         sx={{ color: '#ce93d8' }} 
//                       />
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           color: '#ce93d8',
//                           fontWeight: 700,
//                           fontSize: { xs: '1.2rem', md: '1.5rem' },
//                         }}
//                       >
//                         {item.title}
//                       </Typography>
//                     </Stack>
                    
//                     <Typography
//                       sx={{
//                         color: 'rgba(255,255,255,0.85)',
//                         fontSize: { xs: 15, md: 17 },
//                         lineHeight: 1.8,
//                         textAlign: isArabic ? 'left' : 'right'
//                       }}
//                     >
//                       {item.desc}
//                     </Typography>
//                   </Stack>
//                 </Box>
//               </m.div>
//             ))}
//           </Box>

//           <m.div
//              initial={{ opacity: 0, scale: 0.95 }}
//              whileInView={{ opacity: 1, scale: 1 }}
//              transition={{ duration: 1 }}
//              viewport={{ once: true }}
//           >
//             <Box
//               sx={{
//                 position: 'relative',
//                 width: '100%',
//                 maxWidth: 1000,
//                 mx: 'auto',
//                 height: { xs: 220, sm: 300, md: 400 },
//                 borderRadius: 6,
//                 overflow: 'hidden',
//                 boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
//                 border: '1px solid rgba(255,255,255,0.1)'
//               }}
//             >
//               <Image
//                 src={bottomImage}
//                 alt="vision-bottom"
//                 fill
//                 style={{
//                   objectFit: 'cover',
//                   objectPosition: 'center 60%',
//                 }}
//               />
//             </Box>
//           </m.div>
//         </Box>
//       </LayoutContainer>
//     </Box>
//   );
// }


'use client';

import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import LayoutContainer from './LayoutContainer';
import { useLocale } from 'next-intl';
import { m } from 'framer-motion';
import Iconify from 'src/components/iconify';

export default function VisionSection() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const topImage = isArabic
    ? '/assets/slider/slid-ar-1.jpeg'
    : '/assets/slider/slid-en-1.jpeg';

  const bottomImage = isArabic
    ? '/assets/slider/slid-ar-2.jpeg'
    : '/assets/slider/slid-en-2.jpeg';

  const cardContent = [
    {
      title: isArabic ? "رسالتنا:" : "Our Mission:",
      icon: "solar:rocket-bold-duotone",
      desc: isArabic 
        ? "تمكين الناشرين من إدارة حقوقهم بدقة متناهية، ومنح القراء تجربة استثنائية تجمع بين غزارة المحتوى والحفاظ على صحة العين." 
        : "Empowering publishers to manage their rights with extreme precision, and providing readers with an exceptional, eye-friendly experience."
    },
    {
      title: isArabic ? "رؤيتنا:" : "Our Vision:",
      icon: "solar:eye-bold-duotone",
      desc: isArabic 
        ? "أن نصبح المنصة الرقمية الأكثر موثوقية وابتكاراً، لنقود التحول نحو قراءة رقمية صحية، عادلة وتفاعلية." 
        : "To become the most reliable and innovative digital platform, leading the shift towards a healthy, fair, and interactive reading experience."
    },
  ];

  return (
    <Box sx={{ backgroundColor: 'rgba(57, 20, 98, 1)', overflow: 'hidden' }}>
      
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 260, sm: 320, md: 420, lg: 550 },
          overflow: 'hidden',
        }}
      >
        <Image
          src={topImage}
          alt="vision-top"
          fill
          priority
          style={{ 
            objectFit: 'cover', 
            objectPosition: isArabic ? 'top center' : 'center' 
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(57,20,98,1))',
          }}
        />
      </Box>

      <LayoutContainer>
        <Box sx={{ mt: { xs: -4, md: -6 }, pb: { xs: 8, md: 12 }, position: 'relative', zIndex: 2 }}>
          
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'rgba(212, 175, 55, 1)',
                textAlign: 'center',
                fontWeight: 800,
                mb: 6,
                fontSize: { xs: '1.8rem', md: '2.8rem' },
                textShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }}
            >
              {isArabic ? "الرؤية والرسالة" : "Vision & Mission"}
            </Typography>
          </m.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
              perspective: '1200px',
              mb: 10,
            }}
          >
            {cardContent.map((item, i) => (
              <m.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  rotateY: isArabic ? -45 : 45,
                  x: i === 0 ? -50 : 50 
                }}
                whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: i === 0 ? 'right' : 'left' }}
              >
                <Box
                  sx={{
                    p: { xs: 4, md: 5 },
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                    height: '100%',
                    minHeight: 220,
                    transition: 'transform 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      borderColor: 'rgba(255,255,255,0.3)',
                    }
                  }}
                >
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Iconify 
                        icon={item.icon} 
                        width={32} 
                        sx={{ color: '#ce93d8' }} 
                      />
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#ce93d8',
                          fontWeight: 700,
                          fontSize: { xs: '1.2rem', md: '1.5rem' },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                    
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: { xs: 15, md: 17 },
                        lineHeight: 1.8,
                        textAlign: isArabic ? 'right' : 'left'
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Stack>
                </Box>
              </m.div>
            ))}
          </Box>

          <m.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 1000,
                mx: 'auto',
                height: { xs: 220, sm: 300, md: 400 },
                borderRadius: 6,
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Image
                src={bottomImage}
                alt="vision-bottom"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: isArabic ? 'top center' : 'center 60%',
                }}
              />
            </Box>
          </m.div>
        </Box>
      </LayoutContainer>
    </Box>
  );
}