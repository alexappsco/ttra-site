
'use client';
import React from 'react';
import dayjs from 'dayjs';
import { paths } from 'src/routes/paths';
import { BlogItem } from 'src/types/blog';
import Navbar from 'src/layouts/dashboard/navbar';
import { useRouter, useSearchParams } from 'next/navigation';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { Box, Chip, Card, Stack, Grid2, Container, Typography } from '@mui/material';

interface BlogCategory {
  id: string;
  nameAr: string;
  nameEn: string;
}

interface Props {
  blog: any;
  blog_category: any;
  initialCategory?: string;
}

export default function BlogView({ blog, blog_category, initialCategory = 'all' }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Update category filter
  const handleCategoryFilter = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryId === 'all') params.delete('BlogCategoryId');
    else params.set('BlogCategoryId', categoryId);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const currentCategory = searchParams.get('BlogCategoryId') || initialCategory;

  return (
    <>
      <Navbar isHome={true} />

      <Container sx={{ py: 4, direction: 'ltr' }}>
        <CustomBreadcrumbs links={[]} heading={'المدونة'} sx={{ color: '#1D1D1D' }} />

        <Card sx={{ px: 2, pb: 3 }}>
          {/* Categories */}
          <Box sx={{ mb: 4 }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                overflowX: 'auto',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                p: 1,
              }}
            >
              {/* All */}
              <CategoryTab
                onClick={() => handleCategoryFilter('all')}
                active={currentCategory === 'all'}
                label="الكل"
              />

              {/* Categories */}
              {blog_category?.items?.map((cat: BlogCategory) => (
                <CategoryTab
                  key={cat.id}
                  onClick={() => handleCategoryFilter(cat.id)}
                  active={currentCategory === cat.id}
                  label={cat.nameAr}
                />
              ))}
            </Stack>
          </Box>

          {/* Blog Cards */}
          <Grid2 container spacing={3}>
            {blog.items.map((item: BlogItem, index: number) => {
              const isLarge = index < 2;

              return (
               <Grid2
                  key={item.id}
                  size={{
                    xs: 12,
                    sm: isLarge ? 12 : 6,
                    md: isLarge ? 6 : 4,
                    lg: isLarge ? 6 : 4,
                  }}
                >

                  <Card
                    sx={{
                      height: { xs: 260, sm: 300 },
                      borderRadius: 2,
                      overflow: 'hidden',
                      position: 'relative',

                      /* 🔥 Responsive contain on mobile + cover on desktop */
                      backgroundImage: item.attachmentUrl
                        ? `linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.7)), url(${item.attachmentUrl})`
                        : `linear-gradient(135deg,#667eea,#764ba2)`,

                      backgroundSize: { xs: 'contain', md: 'cover' },
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',

                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 3,
                      color: '#fff',
                      cursor: 'pointer',
                      transition: '0.3s',
                      '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                    }}
                    onClick={() => router.push(paths.controlPanel.blog.details(item.id))}
                  >
                    <Chip
                      label={
                        item.blogCategoryName ||
                        blog_category.items.find((c: any) => c.id === item.blogCategoryId)?.nameAr
                      }
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: '#367ce5',
                        fontWeight: 'bold',
                      }}
                    />

                    <Typography
                      variant={isLarge ? 'h5' : 'h6'}
                      sx={{
                        fontWeight: 'bold',
                        lineHeight: 1.3,
                        mb: 2,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        opacity: 0.9,
                        fontSize: '0.8rem',
                        borderTop: '1px solid rgba(255,255,255,0.3)',
                        pt: 1,
                      }}
                    >
                      {dayjs(item.creationTime).format('DD MMMM YYYY')}
                    </Typography>
                  </Card>
                </Grid2>
              );
            })}
          </Grid2>

          {/* No Results */}
          {blog.items.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                لا توجد نتائج للعرض
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
                لم نعثر على أي مدونات في هذا التصنيف
              </Typography>
            </Box>
          )}
        </Card>
      </Container>
    </>
  );
}

function CategoryTab({ label, active, onClick }: any) {
  return (
    <Box
      onClick={onClick}
      sx={{
        px: 3,
        py: 1.5,
        cursor: 'pointer',
        borderRadius: 2,
        whiteSpace: 'nowrap',
        fontWeight: 'bold',
        minWidth: 'fit-content',
        transition: '0.2s',
        backgroundColor: active ? '#59A0F2' : 'transparent',
        color: active ? '#fff' : 'text.primary',
        '&:hover': {
          backgroundColor: active ? '#59A0F2' : 'rgba(89,160,242,0.15)',
        },
      }}
    >
      {label}
    </Box>
  );
}
