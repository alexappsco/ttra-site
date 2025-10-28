import { ICONS } from 'src/config-icons';
import { useDebounce } from 'use-debounce';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'src/components/use-query';
import { useLocale, useTranslations } from 'next-intl';
import { Tab, Tabs, Grid2, TextField, IconButton } from '@mui/material';

interface Props {
  subCategory: any[];
}
export default function ListFilters({ subCategory }: Props) {
  const t = useTranslations();
  const locale = useLocale();

  const { values: queries, changeQueries } = useQuery(
    ['page', 'limit', 'status', 'search'],
    true
  );

  // Name filter
  const [search, setSearch] = useState(queries.search || '');
  const [debouncedSearch] = useDebounce(search, 500); // 0.5s delay

  // Category filter
  const [selectedCategory, setSelectedCategory] = useState<string>(
    queries.status || ''
  );

  const handleCategoryChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setSelectedCategory(newValue);
    changeQueries({ status: newValue });
  };

  // Update queries only after debounce
  useEffect(() => {
    changeQueries({ search: debouncedSearch });
  }, [debouncedSearch]);

  return (
    <Grid2 container spacing={2} py={3} px={2} >
      {/* Name Filter */}
      <Grid2 size={{ xs: 12, sm: 5 }}>
        <TextField
          variant="outlined"
          placeholder={t('Global.Label.search') + '...'}
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value); // only update local state
          }}
          value={search}
          slotProps={{
            input: {
              endAdornment: search ? (
                <IconButton
                  onClick={() => {
                    setSearch('');
                  }}
                  sx={{ '& .svg-color': { width: '1rem', height: '1rem' } }}
                >
                  {ICONS.global.x}
                </IconButton>
              ) : null,
            },
          }}
        />
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 7 }}>
        {/* Category Tabs */}
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: '1px solid #ddd' }}
        >
          {/* Default "All" tab */}
          <Tab
            key="all"
            value=""
            label={t('Global.Sections.DeleteDialog.all_sections')}
            sx={{
              textTransform: 'none',
              minHeight: '40px',
              fontWeight: '500',
            }}
          />

          {/* Dynamic subCategory tabs */}
          {subCategory.map((cat) => (
            <Tab
              key={cat.id}
              value={cat.id}
              label={locale === 'ar' ? cat.nameAr : cat.nameEn}
              sx={{
                textTransform: 'none',
                minHeight: '40px',
                fontWeight: '500',
              }}
            />
          ))}
        </Tabs>
      </Grid2>
    </Grid2>
  );
}
