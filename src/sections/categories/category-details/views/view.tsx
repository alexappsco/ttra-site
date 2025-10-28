'use client'
import React from 'react'
import { paths } from 'src/routes/paths';
import { Product } from 'src/types/product';
import { Card, Container } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ListFilters from './list-filter';
import ListProductsCards from './products-card';

interface Props {
  items: Product[];
  totalCount: number;
    subCategory: any;

}

export default function CategoryDetails({ items,totalCount, subCategory  }: Props) {
  const t=useTranslations()
  const locale = useLocale();
    return (
    <Container>
      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1,mt:4 }}>

         <CustomBreadcrumbs
 links={[
            { name: t('Nav.main'), href: paths.controlPanel.main },
            { name: locale=='ar' ? subCategory[0]?.parentCategory?.nameAr || '' : subCategory[0]?.parentCategory?.nameEn || '' },
          ]}
        heading={locale=='ar' ? subCategory?.nameAr || '' : subCategory?.nameEn || ''}
      />
      <ListFilters subCategory={subCategory} />
      <ListProductsCards items={items} totalCount={totalCount} />
      </Card>
    </Container>
  )

}
