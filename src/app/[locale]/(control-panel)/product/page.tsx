

import { Box, Button } from '@mui/material';
import { BLOGS } from 'src/_mock/data';
import ProductSection from 'src/sections/home/views/products-section';

export default function page() {
  return <Box sx={{ mt: -13 }}>
    <ProductSection blogs={BLOGS} showAll={true} />
  </Box>
}
