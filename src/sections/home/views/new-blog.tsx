'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function NewBlog() {
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
          fontWeight: 500,
          fontSize: { xs: 30, md: 40 },
          lineHeight: 1,
        }}
      >
        أحدث المقالات
      </Typography>

      <Image
        src="/assets/images/our-services/Vector 14.png"
        width={180}
        height={15}
        alt="underline"
        style={{ margin: '8px auto 0' }}
      />
    </Box>
    </Box>
  );
}
