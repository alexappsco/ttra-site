'use client';

import { paths } from 'src/routes/paths';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { endpoints } from 'src/utils/endpoints';
import { getData } from 'src/utils/crud-fetch-api';
import { Card, Grid2, Container, Typography, Box } from '@mui/material';
import { useSearchContext } from 'src/context/SearchContext';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ProductCard from '../components/product-card';
import Iconify from 'src/components/iconify';

export default function SearchView() {
  const t = useTranslations();
  const { searchValue } = useSearchContext();
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchValue) return;

    const fetchResults = async () => {
      setLoading(true);
      const res = await getData<{ totalCount: number; items: any }>(
        `${endpoints.product.list}?Name=${searchValue}`);
      if (!('error' in res)) setResults(res?.data?.items || []);
      setLoading(false);
      console.log(res)
    };

    fetchResults();
  }, [searchValue]);

  return (
    <Container>
      <CustomBreadcrumbs
        links={[
          { name: t('Nav.main'), href: paths.controlPanel.main },
          { name: t('Pages.Search.title'), href: '' },
        ]}
        heading={t('Pages.Search.title')}
        sx={{ color: '#447143' }}
      />

      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1, mt: 4 }}>
        {loading ? (
          <p>{t('Pages.Common.loading')}</p>
        ) : results.length === 0 ? (
          <Box
            sx={{
              py: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'text.secondary',
            }}
          >
            <Iconify
              icon="mdi:magnify-remove-outline"
              width={80}
              height={80}
              color="#9e9e9e"
              style={{ marginBottom: 16 }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                textAlign: 'center',
                color: '#447143',
              }}
            >
              {t('Pages.Search.no_results')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                mt: 1,
                color: 'text.secondary',
              }}
            >
              {t('Pages.Search.try_different_keywords')}
            </Typography>
          </Box>
        ) : (
          <Grid2 container spacing={2}>
            {results.map((product: any) => (
              <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <ProductCard product={product} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Card>
    </Container>
  );
}
