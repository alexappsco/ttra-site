import React from 'react';
import { paths } from 'src/routes/paths';
import { useRouter } from 'next/navigation';
import { Category } from 'src/types/categories';
import { useLocale, useTranslations } from 'next-intl';
import { Card, Grid2, CardMedia, Typography, CardContent } from '@mui/material';

interface Props {
  items: Category[];
}

export default function CategoryView({ items }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  return (
    <>
      <Typography
         variant="h6"
          sx={{
            fontFamily: 'DIN Next LT Arabic',
            fontWeight: 700,
            fontSize: { xs: '24px', sm: '28px' },
            color: '#447143',
            mb: 2,
          }}
      >
        {t('Pages.Home.categories')}
      </Typography>
      <Grid2 container spacing={2}>
        {items.map((cat) => (
          <Grid2 key={cat.id} size={{ xs: 6, sm: 4, md: 3, lg: 3 }} >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                borderRadius: 2,
                boxShadow: 1,
                textAlign: 'center',
                cursor: 'pointer', // Add pointer cursor
              }}
                  onClick={() => router.push(paths.controlPanel.category.details(cat.id))}
            >
              <CardMedia
                component="img"
                image={cat.imageUrl}
                alt={cat.nameAr}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: 'cover',
                  borderRadius: 1,
                  mb: 1,
                }}
              />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="body1" fontWeight="medium">
                  {locale === 'ar' ? cat.nameAr : cat.nameEn}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}