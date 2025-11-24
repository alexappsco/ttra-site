
// 'use client';

// import Image from 'next/image';
// import { paths } from 'src/routes/paths';
// import { useRouter } from 'next/navigation';
// import Iconify from 'src/components/iconify';
// import { useMemo, useState, useEffect } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { useRequireAuth } from 'src/hooks/use-require-auth';

// const staticBanners = [
//   { id: 1, url: '/assets/background/img_1.webp' },
//   { id: 2, url: '/assets/background/img_2.webp' },
//   { id: 3, url: '/assets/background/img_3.webp' },
//   { id: 4, url: '/assets/background/img_4.webp' },
// ];

// const slides = [
//   '/assets/slide_img_1.svg',
//   '/assets/slide_img_1.svg',
//   '/assets/slide_img_1.svg',
// ];

// export default function InvestmentHero() {
//   const [bgIndex, setBgIndex] = useState(0);
//   const [slideIndex, setSlideIndex] = useState(0);
//   const router = useRouter();
//   const { requireAuth } = useRequireAuth();

//   // Background rotation
//   useEffect(() => {
//     const bgInterval = setInterval(
//       () => setBgIndex((prev) => (prev + 1) % staticBanners.length),
//       10000
//     );
//     return () => clearInterval(bgInterval);
//   }, []);

//   // Slides rotation
//   useEffect(() => {
//     const slideInterval = setInterval(
//       () => setSlideIndex((prev) => (prev + 1) % slides.length),
//       3000
//     );
//     return () => clearInterval(slideInterval);
//   }, []);

//   const backgroundImages = useMemo(() => {
//     const current = staticBanners[bgIndex];
//     const next = staticBanners[(bgIndex + 1) % staticBanners.length];
//     return [current, next];
//   }, [bgIndex]);

//   const getSlidePosition = (index: number) => {
//     const diff = (index - slideIndex + slides.length) % slides.length;
//     if (diff === 0) return 'center';
//     if (diff === 1) return 'right';
//     if (diff === 2) return 'left';
//     return 'hidden';
//   };

//   const renderedSlides = useMemo(() => {
//     return slides.map((img, index) => {
//       const pos = getSlidePosition(index);
//       if (pos === 'hidden') return null;

//       const styleMap: Record<string, { transform: string; opacity: number; zIndex: number }> =
//         {
//           center: { transform: 'scale(1) translateX(0)', opacity: 1, zIndex: 4 },
//           left: { transform: 'scale(0.9) translateX(-150px)', opacity: 0.6, zIndex: 2 },
//           right: { transform: 'scale(0.9) translateX(150px)', opacity: 0.6, zIndex: 2 },
//         };

//       const { transform, opacity, zIndex } = styleMap[pos];

//       return (
//         <Box
//           key={index}
//           sx={{
//             position: 'absolute',
//             width: { xs: 180, md: 320 },
//             height: 'auto',
//             borderRadius: 3,
//             boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
//             transform,
//             opacity,
//             zIndex,
//             transition: 'all 0.8s ease-in-out',
//           }}
//         >
//           <Image
//             src={img}
//             alt={`شريحة ${index + 1}`}
//             width={320}
//             height={200}
//             sizes="(max-width: 900px) 180px, 320px"
//             priority={pos === 'center'}
//             loading={pos === 'center' ? 'eager' : 'lazy'}
//             style={{ width: '100%', height: 'auto', borderRadius: 12 }}
//           />
//         </Box>
//       );
//     });
//   }, [slideIndex]);

//   const handleAdd = () => router.push(paths.controlPanel.main);

//   return (
//     <Box
//       component="section"
//       aria-label="قسم البطل الاستثماري"
//       sx={{
//         position: 'relative',
//         width: '100%',
//         height: { xs: 500, md: 600 },
//         overflow: 'hidden',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       {/* Background */}
//       <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
//         {backgroundImages.map((banner, index) => {
//           const isCurrent = index === 0;
//           return (
//             <Box
//               key={banner.id}
//               sx={{
//                 position: 'absolute',
//                 inset: 0,
//                 opacity: isCurrent ? 1 : 0,
//                 transition: 'opacity 1.2s ease-in-out',
//               }}
//             >
//               <Image
//                 src={banner.url}
//                 alt="خلفية البطل الاستثماري"
//                 fill
//                 sizes="100vw"
//                 priority={isCurrent}
//                 loading={isCurrent ? 'eager' : 'lazy'}
//                 style={{ objectFit: 'cover' }}
//               />
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   inset: 0,
//                   background:
//                     'linear-gradient(to right, rgba(0,72,181,0.75), rgba(0,72,181,0.4))',
//                 }}
//               />
//             </Box>
//           );
//         })}
//       </Box>

//       {/* Slides */}
//       <Box
//         sx={{
//           position: 'absolute',
//           right: { xs: '26%', md: '10%' },
//           bottom: { xs: 80, md: 120 },
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: { xs: 165, md: 350 },
//           height: { xs: 45, md: 240 },
//           zIndex: 3,
//         }}
//         aria-live="polite"
//       >
//         {renderedSlides}
//       </Box>

//       {/* Text and button */}
//       <Box
//         sx={{
//           position: 'absolute',
//           left: { xs: 16, md: 80 },
//           top: { xs: '40%', md: '50%' },
//           transform: 'translateY(-50%)',
//           textAlign: 'left',
//           color: '#fff',
//           zIndex: 5,
//           maxWidth: 480,
//         }}
//       >
//         <Typography
//           component="h2"
//           variant="h3"
//           sx={{ fontWeight: 700, lineHeight: 1.3, mb: 2 }}
//         >
//           استحوذ على فرصتك
//           <br />
//           الاستثمارية اليوم
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             opacity: 0.95,
//             mb: 2,
//             fontWeight: 400,
//             fontSize: { xs: 12, md: 18 },
//             width: { md: '330px', lg: 'auto' },
//           }}
//         >
//           اكتشف، قيّم، وتفاوض لشراء أو بيع الأعمال التجارية بسهولة عبر منصة "استحواذ".
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             bgcolor: '#fff',
//             color: '#0048b5',
//             fontWeight: 'bold',
//             borderRadius: 20,
//             px: 4,
//             py: 1.2,
//             fontSize: 16,
//             boxShadow: '0 4px 14px rgba(255,255,255,0.3)',
//             '&:hover': { bgcolor: '#f3f3f3' },
//           }}
//           endIcon={<Iconify icon="mdi:arrow-left" />}
//           onClick={() => requireAuth(handleAdd)}
//           aria-label="ابدأ الآن بالاستثمار"
//         >
//           ابدأ الآن
//         </Button>
//       </Box>
//     </Box>
//   );
// }
'use client';

import Image from 'next/image';
import { paths } from 'src/routes/paths';
import { useRouter } from 'next/navigation';
import Iconify from 'src/components/iconify';
import { useMemo, useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useRequireAuth } from 'src/hooks/use-require-auth';

const staticBanners = [
  { id: 1, url: '/assets/background/img_1.webp' },
  { id: 2, url: '/assets/background/img_2.webp' },
  { id: 3, url: '/assets/background/img_3.webp' },
  { id: 4, url: '/assets/background/img_4.webp' },
  { id: 5, url: '/assets/background/img_5.webp' },

];
const slides = [
  '/assets/slide_img_1.svg',
  '/assets/slide_img_1.svg',
  '/assets/slide_img_1.svg',
];

export default function InvestmentHero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const router = useRouter();
  const { requireAuth } = useRequireAuth();

  // Background rotation
  useEffect(() => {
    const bgInterval = setInterval(
      () => setBgIndex((prev) => (prev + 1) % staticBanners.length),
      10000
    );
    return () => clearInterval(bgInterval);
  }, []);

  // Slides rotation
  useEffect(() => {
    const slideInterval = setInterval(
      () => setSlideIndex((prev) => (prev + 1) % slides.length),
      3000
    );
    return () => clearInterval(slideInterval);
  }, []);

  const backgroundImages = useMemo(() => {
    const current = staticBanners[bgIndex];
    const next = staticBanners[(bgIndex + 1) % staticBanners.length];
    return [current, next];
  }, [bgIndex]);

  const getSlidePosition = (index: number) => {
    const diff = (index - slideIndex + slides.length) % slides.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === 2) return 'left';
    return 'hidden';
  };

  const renderedSlides = useMemo(() => {
    return slides.map((img, index) => {
      const pos = getSlidePosition(index);
      if (pos === 'hidden') return null;

      const styleMap: Record<
        string,
        { transform: string; opacity: number; zIndex: number }
      > = {
        center: { transform: 'scale(1) translateX(0)', opacity: 1, zIndex: 4 },
        left: { transform: 'scale(0.9) translateX(-130px)', opacity: 0.55, zIndex: 2 },
        right: { transform: 'scale(0.9) translateX(130px)', opacity: 0.55, zIndex: 2 },
      };

      const { transform, opacity, zIndex } = styleMap[pos];

      return (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            width: { xs: 170, md: 320 },
            height: 'auto',
            borderRadius: 3,
            transform,
            opacity,
            zIndex,
            transition: 'all 0.8s ease-in-out',
          }}
        >
          <Image
            src={img}
            alt={`slide-${index}`}
            width={320}
            height={200}
            quality={60}
            sizes="(max-width: 768px) 170px, 320px"
            priority={pos === 'center'}
            loading={pos === 'center' ? 'eager' : 'lazy'}
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </Box>
      );
    });
  }, [slideIndex]);

  const handleAdd = () => router.push(paths.controlPanel.main);

  return (
    <Box
      component="section"
      aria-label="قسم البطل الاستثماري"
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 480, md: 600 },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {backgroundImages.map((banner, index) => {
          const isCurrent = index === 0;

          return (
            <Box
              key={banner.id}
              sx={{
                position: 'absolute',
                inset: 0,
                opacity: isCurrent ? 1 : 0,
                transition: 'opacity 1.2s ease-in-out',
              }}
            >
              {/* <Image
                src={banner.url}
                alt="خلفية البطل الاستثماري"
                fill
                quality={40}
                sizes="(max-width: 768px) 100vw, 100vw"
                priority={isCurrent}
                loading={isCurrent ? 'eager' : 'lazy'}
                style={{ objectFit: 'cover' }}
              /> */}
              <Image
                src={banner.url}
                alt="خلفية البطل الاستثماري"
                fill
                quality={65}
                sizes="100vw"
                priority={index === 0}        // 🔥 LCP only for FIRST image
                fetchPriority={index === 0 ? "high" : undefined}   // 🔥 مهم جداً
                loading={index === 0 ? "eager" : "lazy"}
                style={{ objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to right, rgba(0,72,181,0.75), rgba(0,72,181,0.4))',
                }}
              />
            </Box>
          );
        })}
      </Box>

      {/* Slides */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: '26%', md: '10%' },
          bottom: { xs: 80, md: 120 },
          width: { xs: 165, md: 350 },
          height: { xs: 45, md: 240 },
          zIndex: 3,
          mb: { xs: 7, md: 1 }
        }}
        aria-live="polite"
      >
        {renderedSlides}
      </Box>

      {/* Text & Button */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 16, md: 80 },
          top: { xs: '40%', md: '50%' },
          transform: 'translateY(-50%)',
          textAlign: 'left',
          color: '#fff',
          zIndex: 5,
          maxWidth: 480,
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          sx={{ fontWeight: 700, lineHeight: 1.3, mb: 2 }}
        >
          استحوذ على فرصتك
          <br />
          الاستثمارية اليوم
        </Typography>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.95,
            mb: 2,
            fontWeight: 400,
            fontSize: { xs: 12, md: 18 },
            width: { md: '330px', lg: 'auto' },
          }}
        >
          اكتشف، قيّم، وتفاوض لشراء أو بيع الأعمال التجارية بسهولة عبر منصة "استحواذ".
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: '#fff',
            color: '#0048b5',
            fontWeight: 'bold',
            borderRadius: 20,
            px: 4,
            py: 1.2,
            fontSize: 16,
          }}
          endIcon={<Iconify icon="mdi:arrow-left" />}
          onClick={() => requireAuth(handleAdd)}
        >
          ابدأ الآن
        </Button>
      </Box>
    </Box>
  );
}
