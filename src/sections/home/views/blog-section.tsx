'use client';
import { Box, Grid, Button } from '@mui/material';
import LayoutContainer from './LayoutContainer';
import NewBlog from './new-blog';
import BlogCard from './blog-card';
import Link from 'next/link';
import { Blog } from 'src/_mock/data';

type Props = {
  blogs: Blog[];
  showAll?: boolean;
};

export default function BlogSection({ blogs, showAll = false }: Props) {
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 4);

  return (
    <LayoutContainer>
      <NewBlog />
      
      {showAll && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 4 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                width: 200,
                height: 50,
                borderRadius: 1,
                px: 3,
                py: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                opacity: 1,
                backgroundColor: '#F1A68E',
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: '20px',
                fontWeight: '400',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#E99C70',
                  boxShadow: 'none',
                },
              }}
            >
              الرجوع للصفحة الرئيسية
            </Button>
          </Link>
        </Box>
      )}

      <Grid container spacing={3} mb={10}>
        {displayedBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={3} key={blog.id}>
            <Link href={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
              <BlogCard {...blog} />
            </Link>
          </Grid>
        ))}
      </Grid>

      {!showAll && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Link href="/blog" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                width: 188,
                height: 50,
                borderRadius: 1,
                px: 4,
                py: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                opacity: 1,
                backgroundColor: '#F1A68E',
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: '20px',
                fontWeight: '400',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#E99C70',
                  boxShadow: 'none',
                },
              }}
            >
              عرض جميع المقالات
            </Button>
          </Link>
        </Box>
      )}
    </LayoutContainer>
  );
}