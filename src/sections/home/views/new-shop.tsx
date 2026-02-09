'use client';

import { Box, Typography } from '@mui/material';

export default function NewShop() {
  return (
    <Box id='articles' sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, md: 6 }, textAlign: 'center' }}>
    <Box
      sx={{
        textAlign: 'center',
        mb: 3,
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: 30, md: 50 },
          lineHeight: 1,
          mb:2
        }}
      >
       الأسواق <span style={{color: "rgba(193, 154, 107, 1)"}}> المغطاة </span>
      </Typography>
        <Typography
        sx={{
          fontWeight: 500,
          fontSize: 18,
          color: "rgba(193, 154, 107, 1)"
        }}
      >
       نوصّل من أشهر الأسواق التقليدية في الرياض
      </Typography>
    </Box>
    </Box>
  );
}
