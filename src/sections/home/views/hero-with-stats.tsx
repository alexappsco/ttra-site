'use client';

import { Box } from '@mui/material';
import HeroSection from './hero-section';


export default function HeroWithStats() {
  return (
    <Box id='hero-section' sx={{ position: 'relative' }}>
      <HeroSection />
      <Box sx={{ marginTop: { xs: '40px', md: '60px' } }}>
      </Box>
    </Box>
  );
}