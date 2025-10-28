'use client'
import { paths } from 'src/routes/paths';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import Iconify from 'src/components/iconify';
import { endpoints } from 'src/utils/endpoints';
import React, { useState, useEffect } from 'react'
import { editData } from 'src/utils/crud-fetch-api';
import { FetchTags } from 'src/actions/config-actions';
import { invalidateTag } from 'src/actions/cache-invalidation';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { Box, Card, Grid2, Checkbox, Container, Typography, IconButton } from '@mui/material';

interface Props {
  items: any
}

export default function LocationView({ items }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [localItems, setLocalItems] = useState<any[]>(items);

  // Sync local items when props change
  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const handleUpdateDefault = async (item: any, newDefault: boolean) => {
    if (!newDefault) {
      // Don't allow unchecking the default - at least one should always be default
      enqueueSnackbar(t('Pages.SetLocation.at_least_one_default'), { variant: 'warning' });
      return;
    }

    setLoadingId(item.id);

    // Optimistically update local state
    const updatedItems = localItems.map(location => ({
      ...location,
      isDefault: location.id === item.id
    }));
    setLocalItems(updatedItems);

    const requestData = {
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
      description: item.description,
      isDefault: newDefault,
    };

    try {
      const res = await editData(endpoints.Location.edit(item.id), 'PATCH', requestData);

      if ('error' in res) {
        // Revert optimistic update on error
        setLocalItems(items);
        enqueueSnackbar(res?.error || t('Pages.SetLocation.update_location_failed'), { variant: 'error' });
      } else {
        enqueueSnackbar(t('Pages.SetLocation.update_location_success'), { variant: 'success' });

        // Invalidate cache and refresh AFTER successful update
        await invalidateTag(FetchTags.LocationsList);

        // Use setTimeout to ensure cache is invalidated before refresh
        setTimeout(() => {
          router.refresh();
        }, 100);
      }
    } catch (error) {
      // Revert optimistic update on error
      setLocalItems(items);
      enqueueSnackbar(t('Pages.SetLocation.update_location_failed'), { variant: 'error' });
    } finally {
      setLoadingId(null);
    }
  };

  // const handleEditLocation = (item: any) => {
  //   // Navigate to edit page with item data
  //   router.push(`${paths.auth.setlocation}?edit=${item.id}`);
  // };
  const handleEditLocation = (item: any) => {
  // Pass the item data via query params (encoded JSON)
  const encoded = encodeURIComponent(JSON.stringify(item));
  router.push(`${paths.auth.setlocation}?data=${encoded}`);
};


  return (
    <Container>
      <CustomBreadcrumbs
        links={[
          { name: t('Nav.main'), href: paths.controlPanel.main },
          { name: t('Pages.SetLocation.title1'), href: '' },
        ]}
        heading={t('Pages.SetLocation.title1')}
        actions={[
          {
            children: t('Pages.SetLocation.add_new_location'),
            variant: 'contained',
            endIcon: <Iconify icon="mdi:plus" />,
            onClick: () => {
              router.push(paths.auth.setlocation);
            },
            sx: { minWidth: 120, maxWidth: '100%' },
          }
        ]}
        sx={{ color: '#447143' }}
      />

      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1, mt: 4 }}>
        <Grid2 container spacing={2}>
          {localItems.map((item: any) => (
            <Grid2 key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 1,
                  position: 'relative',
                  bgcolor: item.isDefault ? '#E8F5E9' : 'white',
                  border: item.isDefault ? '1px solid #447143' : '1px solid transparent',
                  opacity: loadingId === item.id ? 0.7 : 1,
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Edit button */}
                <IconButton
                  size="small"
                  sx={{ position: 'absolute', top: 8, left: 8, color: '#447143' }}
                  onClick={() => handleEditLocation(item)}
                  disabled={loadingId === item.id}
                >
                  <Iconify icon="mdi:pencil" />
                </IconButton>

                {/* Checkbox */}
                <Checkbox
                  checked={item.isDefault}
                  disabled={loadingId === item.id}
                  onChange={(e) => handleUpdateDefault(item, e.target.checked)}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: '#447143',
                    '&.Mui-checked': {
                      color: '#447143',
                    },
                  }}
                />

                {/* Icon */}
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    mx: 'auto',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#F1F8F6',
                    borderRadius: '50%',
                  }}
                >
                  <Iconify
                    icon={item.name.toLowerCase().includes('work') || item.name.toLowerCase().includes('office') ? 'mdi:office-building' : 'mdi:home'}
                    width={32}
                    height={32}
                    style={{ color: '#447143' }}
                  />
                </Box>

                {/* Name */}
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{ fontWeight: 'bold', color: '#333' }}
                >
                  {item.name}
                  {item.isDefault && (
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{
                        ml: 0.5,
                        color: '#447143',
                        fontWeight: 'bold'
                      }}
                    >
                      ({t('Pages.SetLocation.default')})
                    </Typography>
                  )}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ color: 'text.secondary', mt: 0.5 }}
                >
                  {item.description || t('Pages.SetLocation.no_description')}
                </Typography>

                {/* Coordinates */}
                <Typography
                  variant="caption"
                  align="center"
                  sx={{ color: 'text.disabled', mt: 1, display: 'block' }}
                >
                  {item.latitude.toFixed(6)}, {item.longitude.toFixed(6)}
                </Typography>

                {/* Loading indicator */}
                {loadingId === item.id && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Iconify icon="mdi:loading" width={24} height={24} style={{ animation: 'spin 1s linear infinite' }} />
                  </Box>
                )}
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Card>

      {/* Add CSS for spinning animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Container>
  )
}