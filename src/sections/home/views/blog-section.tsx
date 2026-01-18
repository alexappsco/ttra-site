'use client';

import { Box, Grid, Button } from '@mui/material';
import LayoutContainer from './LayoutContainer';
import NewBlog from './new-blog';
import BlogCard from './blog-card';

const BLOGS = [
  {
    image: '/assets/blog/Image (1).svg',
    title: 'دليل شامل للعناية اليومية بالبشرة',
    description: 'تعرف على أهم الخطوات اليومية للحفاظ على صحة ونضارة بشرتك.',
    date: 'منذ 5 أيام',
  },
  {
    image: '/assets/blog/Image (2).svg',
    title: 'أفضل المكونات الطبيعية لبشرة نضرة',
    description: 'اكتشف فوائد المكونات الطبيعية وكيفية استخدامها بشكل صحيح.',
    date: 'منذ 6 أيام',
  },
  {
    image: '/assets/blog/Image (3).svg',
    title: 'كيف تتخلص من حب الشباب نهائيًا',
    description: 'نصائح طبية فعالة للتعامل مع حب الشباب ومنع ظهوره.',
    date: 'منذ أسبوع',
  },
  {
    image: '/assets/blog/Image.svg',
    title: 'روتين الصباح المثالي لبشرة مشرقة',
    description: 'ابدأ يومك بروتين بسيط يساعدك على إشراقة تدوم طوال اليوم.',
    date: 'منذ أسبوعين',
  },
];

export default function BlogSection() {
  return (
    <LayoutContainer>
      <NewBlog />

      <Grid container spacing={3}>
        {BLOGS.map((blog, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <BlogCard {...blog} />
          </Grid>
        ))}
      </Grid>

      {/* Button */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
       <Box
  sx={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    mt: 5,
  }}
>
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
      fontSize:"20px",
      fontWeight:"400",
      whiteSpace:"nowrap",
      '&:hover': {
        backgroundColor: '#E99C70',
        boxShadow: 'none',
      },
    }}
  >
    عرض جميع المقالات
  </Button>
</Box>


      </Box>
    </LayoutContainer>
  );
}
