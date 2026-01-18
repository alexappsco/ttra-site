'use client';

import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface LayoutContainerProps {
  children: ReactNode;
}

export default function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1800,     
        mx: 'auto',          
        px: {
          xs: 3,             
          sm: 4,
          md: 6,
          lg: 0,            
        },
      }}
    >
      {children}
    </Box>
  );
}
