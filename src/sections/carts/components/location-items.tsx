'use client';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { endpoints } from 'src/utils/endpoints';
import { editData } from 'src/utils/crud-fetch-api';
import {
  Box,
  Card,
  Grid2,
  Dialog,
  Typography,
  DialogTitle,
  DialogContent,
  CardActionArea,
  CircularProgress,
} from '@mui/material';

interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  isDefault: boolean;
  userId: string;
}

interface LocationMenuProps {
  locations: Location[];
}

export default function LocationMenu({ locations }: LocationMenuProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const defaultLocation = locations.find((loc) => loc.isDefault) || locations[0];
  const otherLocations = locations.filter((loc) => !loc.isDefault);

  const handleUpdateDefault = async (item: Location) => {
    setLoadingId(item.id);

    const requestData = {
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
      description: item.description,
      isDefault: true,
    };

    const res = await editData(endpoints.Location.edit(item.id), 'PATCH', requestData);

    setLoadingId(null);
    setOpen(false);

    if ('error' in res) {
      enqueueSnackbar(res?.error || 'فشل تحديث الموقع', { variant: 'error' });
    } else {
      enqueueSnackbar('تم تحديث الموقع بنجاح', { variant: 'success' });
      router.refresh();
    }
  };

  return (
    <>
      {/* Main Card */}
      <Card
        sx={{
          p: 2,
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: 1,
        }}
      >
        {/* Arrow back */}
        <Icon
          icon="mdi:chevron-left"
          style={{ fontSize: 24, color: 'var(--mui-palette-text-primary)', cursor: 'pointer' }}
          onClick={() => setOpen(true)}
        />

        {/* Texts */}
        <Box sx={{ textAlign: 'right', flex: 1, pr: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            توصيل إلى: {defaultLocation?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {defaultLocation?.description}
          </Typography>
        </Box>

        {/* Home Icon */}
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: 'var(--mui-palette-primary-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            icon="mdi:home"
            style={{ fontSize: 22, color:'#437143',backgroundColor:"#f1f1f1",borderRadius:8 }}
          />
        </Box>
      </Card>

      {/* Dialog with list of locations */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>اختر موقع التوصيل</DialogTitle>
        <DialogContent>
          <Grid2 container spacing={2}>
            {otherLocations.map((item) => (
              <Grid2 size={{ xs:12,sm:6}} key={item.id}>
                <Card
                  sx={{
                    p: 2,
                    my:2,
                    borderRadius: 2,
                    textAlign: 'center',
                    border: '1px solid #ddd',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  <CardActionArea onClick={() => handleUpdateDefault(item)}>
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
                      <Icon
                        icon={item.name === 'Admin' ? 'mdi:office-building' : 'mdi:home'}
                        style={{ fontSize: 28, color: '#447143' }}
                      />
                    </Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    {loadingId === item.id && (
                      <CircularProgress
                        size={24}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                      />
                    )}
                  </CardActionArea>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </DialogContent>
      </Dialog>
    </>
  );
}
