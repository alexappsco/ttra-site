'use client';

import { Box, Typography } from '@mui/material';

export default function NewProduct() {
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
       فئات <span style={{color: "rgba(193, 154, 107, 1)"}}> المنتجات </span>
      </Typography>
        <Typography
        sx={{
          fontWeight: 500,
          fontSize: 18,
          color: "rgba(193, 154, 107, 1)"
        }}
      >
       تسوق من مجموعة واسعة من المنتجات الأصيلة
      </Typography>
    </Box>
    </Box>
  );
}
