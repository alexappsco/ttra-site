'use client';

import { Box, Typography } from '@mui/material';
import LayoutContainer from 'src/sections/home/views/LayoutContainer';

export default function Page() {
  return (
    <LayoutContainer>
      <Typography variant="h3" sx={{ mb: 4 }}>
        سياسة الخصوصية
      </Typography>
      <Typography sx={{ mb: 2, fontSize: 16, lineHeight: 1.6 }}>
        هنا تكتب نص سياسة الخصوصية الخاصة بالتطبيق...
      </Typography>
    </LayoutContainer>
   
  );
}
