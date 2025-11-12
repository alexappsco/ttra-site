
'use client';

import { Box } from '@mui/material';
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box component="main" sx={{ flexGrow: 1, mt: '100px' }}>
        {children}
      </Box>
    </Box>
  );
}
