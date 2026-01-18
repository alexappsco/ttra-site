import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

import Logo from '../logo';

// ----------------------------------------------------------------------

export default function SplashScreen({ sx, ...other }: BoxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <></>
  );
}
