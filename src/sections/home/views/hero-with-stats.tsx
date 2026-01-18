'use client';

import { Box } from '@mui/material';
import HeroSection from './hero-section';
import StatisticsOverlay from './statistics-overlay';


export default function HeroWithStats() {
  return (
    <Box sx={{ position: 'relative' }}>
      <HeroSection />
      
      <StatisticsOverlay/>
      
      <Box sx={{ marginTop: { xs: '40px', md: '60px' } }}>
      </Box>
    </Box>
  );
}