

import { Box, Button } from '@mui/material';
import { BLOGS } from 'src/_mock/data';
import BlogSection from 'src/sections/home/views/blog-section';

export default function BlogPage() {
  return <Box sx={{ mt: -13 }}>
    <BlogSection blogs={BLOGS} showAll={true} />
  </Box>
}
