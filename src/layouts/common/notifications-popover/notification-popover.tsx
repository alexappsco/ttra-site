
// 'use client';

// import dayjs from 'dayjs';
// import { useState } from 'react';
// import { Icon } from '@iconify/react';
// import { useTranslations } from 'next-intl';
// import { Notification } from 'src/types/notification';
// import {
//   Box,
//   Stack,
//   Badge,
//   Button,
//   Popover,
//   Divider,
//   Typography,
//   IconButton,
// } from '@mui/material';

// type Props = {
//   notifications: Notification[];
//   count: number;
//   onBadgeClear: () => void; // callback to reset badge
// };

// export default function NotificationPopover({
//   notifications,
//   count,
//   onBadgeClear,
// }: Props) {
//   const t = useTranslations();
//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

//   const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//     onBadgeClear(); // hide badge when popover opened
//   };

//   const handleClose = () => setAnchorEl(null);

//   const open = Boolean(anchorEl);

//   const badgeStyle = {
//     position: 'absolute',
//     top: -4,
//     right: -6,
//     bgcolor: '#FF3B30',
//     color: '#fff',
//     borderRadius: '50%',
//     minWidth: 18,
//     height: 18,
//     fontSize: 11,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 600,
//   };

//   return (
//     <>
//       <Box sx={{ position: 'relative' }}>
//         <IconButton color="inherit" size="small" onClick={handleOpen}>
//           <Badge badgeContent={count} color="error">
//             <Icon icon="mdi:bell-outline" width={26} height={24} color="#fff" />
//           </Badge>
//         </IconButton>

//         {count > 0 && <Box sx={badgeStyle}>{count}</Box>}
//       </Box>

//       <Popover
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'center' }}
//         PaperProps={{
//           sx: {
//             width: 360,
//             maxHeight: 400,
//             borderRadius: 2,
//             boxShadow: 3,
//             p: 1,
//           },
//         }}
//       >
//         <Stack spacing={1}>
//           <Stack
//             direction="row"
//             justifyContent="space-between"
//             alignItems="center"
//             sx={{ px: 1 }}
//           >
//             <Typography fontWeight={700}>
//               {t('Pages.Notifications.title')}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {t('Pages.Notifications.mark_all')}
//             </Typography>
//           </Stack>

//           <Divider />

//           <Box sx={{ maxHeight: 320, overflowY: 'auto', px: 1 }}>
//             {notifications.length > 0 ? (
//               notifications.map((item, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     bgcolor: item.isRead ? '#f9f9f9' : '#e8f5e9',
//                     borderRadius: 2,
//                     p: 1.5,
//                     mb: 1,
//                   }}
//                 >
//                   <Typography variant="body2" fontWeight={600}>
//                     {item.body}
//                   </Typography>
//                   {item.orderNumber && (
//                     <Typography
//                       variant="body2"
//                       color="primary.main"
//                       sx={{ mt: 0.5 }}
//                     >
//                       {t('Pages.Notifications.order_number', {
//                         orderNumber: item.orderNumber,
//                       })}
//                     </Typography>
//                   )}
//                   <Stack direction="row" justifyContent="space-between" mt={1}>
//                     {item.orderId && (
//                       <Button
//                         size="small"
//                         variant="contained"
//                         color="success"
//                         onClick={() => {
//                           handleClose();
//                           // router.push(item.orderId ? paths.controlPanel.orders.single(item.orderId) : paths.controlPanel.orders.list);
//                         }}
//                       >
//                         {t('Pages.Notifications.track_order')}
//                       </Button>
//                     )}
//                     <Typography variant="caption" color="text.secondary">
//                       {dayjs(item.creationTime).format('DD/MM/YYYY hh:mm A')}
//                     </Typography>
//                   </Stack>
//                 </Box>
//               ))
//             ) : (
//               <Typography textAlign="center" py={2} color="text.secondary">
//                 {t('Pages.Notifications.empty')}
//               </Typography>
//             )}
//           </Box>
//         </Stack>
//       </Popover>
//     </>
//   );
// }
