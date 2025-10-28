
'use client'
import React from 'react';
import { paths } from 'src/routes/paths';
import {  useTranslations } from 'next-intl';
import { Card, Grid2, Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ProductCard from '../components/product-card';

interface Props {
  favorites: any;
  totalCount: number;
}

export default function FavoriteView({ favorites, totalCount:_ }: Props) {
  const t = useTranslations();

  return (
    <Container>
      <CustomBreadcrumbs
        links={[
          { name: t('Nav.main'), href: paths.controlPanel.main },
          { name: t('Pages.favorite.title'), href: '' },
        ]}
        heading={t('Pages.favorite.title')}
        sx={{ color: '#447143' }}
      />

      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1, mt: 4 }}>
        <Grid2 container spacing={2}>
          {favorites?.map((product:any) => (
            <Grid2 key={product.id}  size={{xs:12,sm:6,md:4,lg:3}} >
                <ProductCard product={product}  />
            </Grid2>
          ))}
        </Grid2>
      </Card>
    </Container>
  );
}
