// 'use client';

// import * as React from 'react';
// import { Box, Typography, Stack, TextField } from '@mui/material';
// import Image from 'next/image';

// import LayoutContainer from 'src/sections/home/views/LayoutContainer';
// import LanguagePopover from '../common/language-popover';

// export default function Navbar() {
//   return (
   

//       <Box
//         sx={{
//           background: '#f3f3f3',
//           borderBottom: '1px solid #e5e5e5',
//         }}
//       >
//         <LayoutContainer>
//           <Stack
//             direction="row"
//             alignItems="center"
//             justifyContent="space-between"
//             sx={{
//               height: 40,
//               fontSize: 13,
//             }}
//           >
//             {/* Contact */}

//             <Stack direction="row" spacing={3} alignItems="center">
//               <Stack direction="row" spacing={1} alignItems="center">
//                 <Image
//                   src="/assets/icons/navbar/email.svg"
//                   alt="email"
//                   width={16}
//                   height={16}
//                 />
//                 <Typography fontSize={13}>
//                   Support@ttra.sa
//                 </Typography>
//               </Stack>

//               <Stack direction="row" spacing={1} alignItems="center">
//                 <Image
//                   src="/assets/icons/navbar/call-calling.svg"
//                   alt="call"
//                   width={16}
//                   height={16}
//                 />
//                 <Typography fontSize={13}>
//                   +966556754472
//                 </Typography>
//               </Stack>
//             </Stack>
//             {/* Links */}
//             <Stack direction="row" spacing={3} alignItems="center">
//               <Typography sx={{ cursor: 'pointer' }}>مكتبتي</Typography>
//               <Typography sx={{ cursor: 'pointer' }}>
//                 سياسة الاستبدال أو الاسترجاع
//               </Typography>
//               <Typography sx={{ cursor: 'pointer' }}>
//                 المفضلة
//               </Typography>
//               <LanguagePopover />
//             </Stack>
//           </Stack>
//         </LayoutContainer>
//       {/* ================= NAVBAR ================= */}
//       <Box
//         sx={{
//           background: '#fff',
//           borderBottom: '1px solid #eee',
//         }}
//       >
//         <LayoutContainer>
//           <Stack
//             direction="row"
//             alignItems="center"
//             spacing={2}
//             sx={{
//               height: 70,
//             }}
//           >
//             {/* Logo */}
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Image
//                 src="/logo/my-books.png"
//                 alt="logo"
//                 width={140}
//                 height={50}
//                 style={{
//                   width: 'auto',
//                   height: 'auto',
//                 }}
//                 priority
//               />
//             </Box>
//             {/* Search */}
//             <Box sx={{ flex: 1 }}>
//               <TextField
//                 fullWidth
//                 placeholder="ابحث عما تريد"
//                 size="small"
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: '30px',
//                     height: 42,
//                     background: '#fafafa',
//                   },
//                 }}
//               />
//             </Box>
//           </Stack>
//         </LayoutContainer>
//       </Box>
//     </Box>
//   );
// }



// 'use client';

// import * as React from 'react';
// import { Box, Typography, Stack, TextField, InputAdornment } from '@mui/material';
// import Image from 'next/image';

// import LayoutContainer from 'src/sections/home/views/LayoutContainer';
// import Iconify from 'src/components/iconify'; // تأكد من استيراد أيقونة البحث
// import LanguagePopover from '../common/language-popover';

// export default function Navbar() {
//   return (
//     <Box component="nav">
//       {/* --- Top Bar (القسم العلوي الرمادي) --- */}
//       <Box
//         sx={{
//           background: '#f3f3f3',
//           borderBottom: '1px solid #e5e5e5',
//         }}
//       >
//         <LayoutContainer>
//           <Stack
//             direction="row-reverse" // لضمان ترتيب العناصر من اليمين لليسار حسب الصورة
//             alignItems="center"
//             justifyContent="space-between"
//             sx={{
//               height: 45, // ارتفاع مطابق للصورة الأولى
//               fontSize: 13,
//             }}
//           >
//             {/* جهة اليمين: معلومات التواصل */}
//             <Stack direction="row-reverse" spacing={2} alignItems="center">
//                <Stack direction="row-reverse" spacing={0.5} alignItems="center">
//                 <Iconify icon="solar:phone-calling-bold" width={18} sx={{ color: '#5e35b1' }} />
//                 <Typography fontSize={13} >+966556754472</Typography>
//               </Stack>
              
//               <Box sx={{ width: '1px', height: '15px', bgcolor: '#ccc', mx: 1 }} /> {/* فاصل عمودي */}
              
//               <Stack direction="row-reverse" spacing={0.5} alignItems="center">
//                 <Iconify icon="solar:letter-bold" width={18} sx={{ color: '#5e35b1' }} />
//                 <Typography fontSize={13}>Support@ttra.sa</Typography>
//               </Stack>
//             </Stack>

//             {/* جهة اليسار: الروابط واللغة */}
//             <Stack direction="row-reverse" spacing={2} alignItems="center">
//               <LanguagePopover />
//               <Box sx={{ width: '1px', height: '15px', bgcolor: '#ccc', mx: 1 }} />
//               <Typography sx={{ cursor: 'pointer', color: '#666' }}>المفضلة</Typography>
//               <Box sx={{ width: '1px', height: '15px', bgcolor: '#ccc', mx: 1 }} />
//               <Typography sx={{ cursor: 'pointer', color: '#666' }}>سياسة الاستبدال أو الاسترجاع</Typography>
//               <Box sx={{ width: '1px', height: '15px', bgcolor: '#ccc', mx: 1 }} />
//               <Typography sx={{ cursor: 'pointer', color: '#666' }}>مكتبتي</Typography>
//             </Stack>
//           </Stack>
//         </LayoutContainer>
//       </Box>

//       {/* --- Main Navbar (اللوجو والبحث فقط) --- */}
//       <Box
//         sx={{
//           background: '#fff',
//           py: 2, // إزالة المسافات الضخمة والاكتفاء بـ padding بسيط
//           borderBottom: '1px solid #eee',
//         }}
//       >
//         <LayoutContainer>
//           <Stack
//             direction="row-reverse" // اللوجو يمين، البحث يسار
//             alignItems="center"
//             spacing={3}
//           >
//             {/* Logo - بادي من اليمين تماماً مع اللي فوقه */}
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Image
//                 src="/logo/my-books.png"
//                 alt="logo"
//                 width={120} // تصغير الحجم ليطابق الصورة
//                 height={45}
//                 style={{ objectFit: 'contain' }}
//                 priority
//               />
//             </Box>

//             {/* Search Bar */}
//             <Box sx={{ flex: 1, maxWidth: 600 }}> {/* تحديد عرض البحث ليكون متناسقاً */}
//               <TextField
//                 fullWidth
//                 placeholder="ابحث عما تريد"
//                 size="small"
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: '8px', // حواف أقل حدة حسب الصورة الأولى
//                     height: 45,
//                     background: '#fff',
//                     '& fieldset': { borderColor: '#eee' },
//                   },
//                 }}
//               />
//             </Box>
//           </Stack>
//         </LayoutContainer>
//       </Box>
//     </Box>
//   );
// }
import React from 'react'

function navbar() {
  return (
    <div></div>
  )
}

export default navbar