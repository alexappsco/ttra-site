'use client';

import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Blog } from 'src/_mock/data';
import LayoutContainer from './LayoutContainer';

type Props = { blog: Blog };

export default function BlogDetails({ blog }: Props) {
  return (
    <LayoutContainer>
      <Box mt={-10}>
        {/* Image */}
      <Box
  sx={{
    width: '100%',
    height: { xs: 220, sm: 300, md: 700 },
    maxHeight: 800, // optional
    position: 'relative',
    borderRadius: 3,
    overflow: 'hidden',
    mb: { xs: 3, md: 4},
  }}
>
  <Image
    src={blog.image}
    alt={blog.title}
    fill
    priority
    style={{
      objectFit: 'cover',       
      objectPosition: 'top',    
    }}
  />
</Box>


        {/* Title */}
        <Typography
          fontWeight={500}
          fontSize={{ xs: 22, sm: 26, md: 32 }}
          mb={1.5}
        >
          {blog.title}
        </Typography>

        {/* Date */}
        <Stack direction="row" mb={4}>
          <Typography fontSize={14} color="text.disabled">
            {blog.date}
          </Typography>
        </Stack>

        {/* Content */}
        <Typography fontSize={{ xs: 15, md: 16 }} lineHeight={1.9}>
          {blog.content}
        </Typography>

        {/* Back link */}
        <Box sx={{ mt: 6, mb: 20 }}>
          <Link href="/blog" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: '#F1A68E',
                cursor: 'pointer',
                '&:hover': { color: '#E99C70' },
              }}
            >
              ← العودة لجميع المقالات
            </Typography>
          </Link>
        </Box>
      </Box>
    </LayoutContainer>
  );
}
