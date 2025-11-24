
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { paths } from 'src/routes/paths';
// import { useRouter } from 'next/navigation';
// import SearchIcon from '@mui/icons-material/Search';
// import { Box, Stack, Button, useTheme, Container, TextField, Typography } from '@mui/material';

// // --- بيانات المشاريع الوهمية ---
// const DUMMY_PROJECTS = [
//   { id: 1, title: 'متجر فيت بودي', imagePath: '/assets/section-four/img3.svg' },
//   { id: 2, title: 'ميني ماركت', imagePath: '/assets/section-four/img2.svg' },
//   { id: 3, title: 'عيادة التوازن للعلاج الطبيعي', imagePath: '/assets/section-four/img1.svg' },
// ];

// export const ProjectShowcaseSection: React.FC = () => {
//   const theme = useTheme();
//   const router = useRouter();

//   return (
//     <Box
//       component="section"
//       sx={{
//         py: { xs: 6, sm: 8, md: 12 },
//         px: { xs: 2, sm: 3, md: 0 },
//         backgroundColor: '#F7F9FA',
//         textAlign: 'center',
//         direction: 'rtl',
//         contentVisibility: 'auto', // تحسين render
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* العنوان والوصف */}
//         <Typography
//           variant="h4"
//           component="h2"
//           sx={{
//             fontWeight: 700,
//             color: '#226EF2',
//             fontSize: { xs: '1.8rem', sm: '2rem', md: '42px' },
//             lineHeight: { xs: 1.2, md: '51px' },
//             mb: { xs: 1.5, md: 2 },
//           }}
//         >
//           أمثلة لعرض المشاريع
//         </Typography>
//         <Typography
//           variant="body1"
//           color="text.secondary"
//           sx={{
//             maxWidth: 700,
//             mx: 'auto',
//             fontSize: { xs: '0.95rem', sm: '1rem' },
//             mb: { xs: 4, sm: 5 },
//           }}
//         >
//           هذه أمثلة لعرض المشاريع المطروحة داخل المنصة — يمكنك الآن تصفح الإعلانات أو بدء طرح مشروعك بكل سهولة.
//         </Typography>

//         {/* شريط البحث */}
//         <Stack
//           direction={{ xs: 'column', sm: 'row' }}
//           spacing={2}
//           justifyContent="center"
//           alignItems="center"
//           mb={{ xs: 5, md: 6 }}
//           sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
//         >
//           <Button
//             variant="contained"
//             sx={{
//               minWidth: { xs: '100%', sm: 100 },
//               height: { xs: 48, sm: 54 },
//               borderRadius: '65px',
//               px: { xs: 2, sm: 3 },
//               fontWeight: 'bold',
//               fontSize: { xs: '0.9rem', sm: '1rem' },
//               bgcolor: '#0095FA',
//               boxShadow: '0px 4px 34px rgba(112, 79, 56, 0.14)',
//               '&:hover': { bgcolor: '#0085E0', boxShadow: '0px 4px 28px rgba(112, 79, 56, 0.18)' },
//             }}
//           >
//             بحث
//           </Button>

//           <TextField
//             fullWidth
//             placeholder="البحث عن الشركات"
//             variant="outlined"
//             size="medium"
//             InputProps={{
//               startAdornment: <SearchIcon sx={{ color: theme.palette.grey[500], mr: 1 }} />,
//               sx: {
//                 borderRadius: 99,
//                 backgroundColor: '#fff',
//                 height: { xs: 48, sm: 54 },
//                 pr: '12px !important',
//               },
//             }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': { borderColor: theme.palette.grey[300] },
//                 '&:hover fieldset': { borderColor: theme.palette.primary.main },
//               },
//             }}
//           />
//         </Stack>

//         {/* عرض المشاريع */}
//         <Stack
//           direction={{ xs: 'column', sm: 'row' }}
//           flexWrap="wrap"
//           spacing={{ xs: 4, sm: 3 }}
//           justifyContent="center"
//           alignItems="center"
//           mb={{ xs: 5, md: 6 }}
//         >
//           {DUMMY_PROJECTS.map((project) => (
//             <Box
//               key={project.id}
//               sx={{
//                 position: 'relative',
//                 width: { xs: '100%', sm: 320, md: 350 },
//                 borderRadius: 3,
//                 overflow: 'hidden',
//                 boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
//                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                 cursor: 'pointer',
//                 '&:hover': {
//                   transform: 'translateY(-4px)',
//                   boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
//                 },
//               }}
//               onClick={() => router.push(paths.controlPanel.landing.view)}
//             >
//               <Image
//                 src={project.imagePath}
//                 alt={project.title}
//                 width={350}
//                 height={200}
//                 style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
//                 priority={false} // lazy-load تلقائي
//               />
//             </Box>
//           ))}
//         </Stack>

//         {/* زر التصفح */}
//         <Button
//           variant="contained"
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             px: { xs: 2, sm: 3, md: 2.5 },
//             py: { xs: 1, sm: 1.25, md: 1.5 },
//             gap: 1.25,
//             width: { xs: '90%', sm: '80%', md: 623 },
//             height: { xs: 48, sm: 52, md: 58 },
//             bgcolor: '#0095FA',
//             boxShadow: '0px 4px 5px rgba(7, 102, 232, 0.2)',
//             borderRadius: '14px',
//             color: '#fff',
//             fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
//             fontWeight: 'bold',
//             textTransform: 'none',
//             mx: 'auto',
//             '&:hover': { bgcolor: '#0085E0', boxShadow: '0px 4px 8px rgba(7, 102, 232, 0.3)' },
//           }}
//           onClick={() => router.push(paths.controlPanel.landing.view)}
//         >
//           تصفح النشاطات المطروحة
//         </Button>
//       </Container>
//     </Box>
//   );
// };

// export default ProjectShowcaseSection;
'use client';

import React from 'react';
import Image from 'next/image';
import { paths } from 'src/routes/paths';
import { useRouter } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Stack, Button, useTheme, Container, TextField, Typography } from '@mui/material';

// --- بيانات المشاريع الوهمية ---
const DUMMY_PROJECTS = [
  { id: 1, title: 'متجر فيت بودي', imagePath: '/assets/section-four/img3.svg' },
  { id: 2, title: 'ميني ماركت', imagePath: '/assets/section-four/img2.svg' },
  { id: 3, title: 'عيادة التوازن للعلاج الطبيعي', imagePath: '/assets/section-four/img1.svg' },
];

export const ProjectShowcaseSection: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      component="section"
      aria-labelledby="project-showcase-title"
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 0 },
        backgroundColor: '#F7F9FA',
        textAlign: 'center',
        direction: 'rtl',
        contentVisibility: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* العنوان والوصف */}
        <Typography
          id="project-showcase-title"
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            color: '#226EF2',
            fontSize: { xs: '1.8rem', sm: '2rem', md: '42px' },
            lineHeight: { xs: 1.2, md: '51px' },
            mb: { xs: 1.5, md: 2 },
          }}
        >
          أمثلة لعرض المشاريع
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 700,
            mx: 'auto',
            fontSize: { xs: '0.95rem', sm: '1rem' },
            mb: { xs: 4, sm: 5 },
          }}
        >
          هذه أمثلة لعرض المشاريع المطروحة داخل المنصة — يمكنك الآن تصفح الإعلانات أو بدء طرح مشروعك بكل سهولة.
        </Typography>

        {/* شريط البحث */}
        <Stack
          component="form"
          role="search"
          aria-label="البحث عن الشركات"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mb={{ xs: 5, md: 6 }}
          sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          onSubmit={(e) => e.preventDefault()} // placeholder
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              minWidth: { xs: '100%', sm: 120 }, // زودنا العرض قليلاً
              height: { xs: 50, sm: 56 }, // أصبح ≥48px
              borderRadius: '65px',
              px: { xs: 3, sm: 4 },
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.05rem' }, // خط أوضح
              bgcolor: '#0095FA',
              mt: { xs: 1, sm: 0 }, // مسافة عمودية إذا كان التصميم عمودي
              ml: { sm: 1 }, // مساحة بينه وبين حقل البحث في الشاشات الكبيرة
              '&:hover': {
                bgcolor: '#0085E0',
                boxShadow: '0px 4px 28px rgba(112, 79, 56, 0.18)',
              },
            }}
          >
            بحث
          </Button>

          <TextField
            fullWidth
            placeholder="البحث عن الشركات"
            variant="outlined"
            size="medium"
            aria-label="البحث عن الشركات"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: theme.palette.grey[500], mr: 1 }} />,
              sx: {
                borderRadius: 99,
                backgroundColor: '#fff',
                height: { xs: 50, sm: 56 }, // ≥48px
                pr: '14px !important',
              },
            }}
            sx={{
              mr: { sm: 1 }, // مسافة عن الأزرار الأخرى
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: theme.palette.grey[300] },
                '&:hover fieldset': { borderColor: theme.palette.primary.main },
              },
            }}
          />

          {/* <Button
            type="submit"
            variant="contained"
            sx={{
              minWidth: { xs: '100%', sm: 100 },
              height: { xs: 48, sm: 54 },
              borderRadius: '65px',
              px: { xs: 2, sm: 3 },
              fontWeight: 'bold',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              bgcolor: '#0095FA',
              boxShadow: '0px 4px 34px rgba(112, 79, 56, 0.14)',
              '&:hover': { bgcolor: '#0085E0', boxShadow: '0px 4px 28px rgba(112, 79, 56, 0.18)' },
            }}
          >
            بحث
          </Button>

          <TextField
            fullWidth
            placeholder="البحث عن الشركات"
            variant="outlined"
            size="medium"
            aria-label="البحث عن الشركات"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: theme.palette.grey[500], mr: 1 }} />,
              sx: {
                borderRadius: 99,
                backgroundColor: '#fff',
                height: { xs: 48, sm: 54 },
                pr: '12px !important',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: theme.palette.grey[300] },
                '&:hover fieldset': { borderColor: theme.palette.primary.main },
              },
            }}
          /> */}
        </Stack>

        {/* عرض المشاريع */}
        <Stack
          component="ul"
          aria-label="قائمة المشاريع"
          direction={{ xs: 'column', sm: 'row' }}
          flexWrap="wrap"
          spacing={{ xs: 4, sm: 3 }}
          justifyContent="center"
          alignItems="center"
          mb={{ xs: 5, md: 6 }}
          sx={{ p: 0, listStyle: 'none' }}
        >
          {DUMMY_PROJECTS.map((project) => (
            <Box
              component="li"
              key={project.id}
              sx={{ listStyle: 'none' }}
            >
              <Box
                component="a"
                href={paths.controlPanel.landing.view}
                tabIndex={0}
                aria-label={`عرض مشروع: ${project.title}`}
                sx={{
                  display: 'block',
                  position: 'relative',
                  width: { xs: '100%', sm: 320, md: 350 },
                  cursor: 'pointer',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  textDecoration: 'none',
                  '&:hover, &:focus': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
                    outline: 'none',
                  },
                }}
              >
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  width={350}
                  height={200}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </Box>
            </Box>

          ))}
        </Stack>

        {/* زر التصفح */}
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 2, sm: 3, md: 2.5 },
            py: { xs: 1, sm: 1.25, md: 1.5 },
            gap: 1.25,
            width: { xs: '90%', sm: '80%', md: 623 },
            height: { xs: 48, sm: 52, md: 58 },
            bgcolor: '#0095FA',
            boxShadow: '0px 4px 5px rgba(7, 102, 232, 0.2)',
            borderRadius: '14px',
            color: '#fff',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            fontWeight: 'bold',
            textTransform: 'none',
            mx: 'auto',
            '&:hover': { bgcolor: '#0085E0', boxShadow: '0px 4px 8px rgba(7, 102, 232, 0.3)' },
          }}
          onClick={() => router.push(paths.controlPanel.landing.view)}
        >
          تصفح النشاطات المطروحة
        </Button>
      </Container>
    </Box>
  );
};

export default ProjectShowcaseSection;
