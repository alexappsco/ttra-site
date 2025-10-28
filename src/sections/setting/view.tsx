'use client';

import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { paths } from 'src/routes/paths';
import { useTranslations } from 'next-intl';
import { useRouter } from 'src/routes/hooks';
import Iconify from 'src/components/iconify';
import { endpoints } from 'src/utils/endpoints';
import { useAuthStore } from 'src/auth/auth-store';
import { editData } from 'src/utils/crud-fetch-api';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  Box,
  Card,
  Paper,
  Stack,
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
} from '@mui/material';

// --------------------------------------------
// Types
// --------------------------------------------
interface ProfileData {
  id: string;
  name: string;
  phoneNumber: string;
  profileImage: string | null;
}

interface Props {
  profileData: ProfileData;
}

// --------------------------------------------
// Component
// --------------------------------------------
export default function SettingsEditView({ profileData }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { updateProfile } = useAuthStore(); //  From Auth store

  const [formData, setFormData] = useState({
    name: profileData.name || '',
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(profileData.profileImage);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; profileImage?: string }>({});

  // --------------------------------------------
  // Handle input change
  // --------------------------------------------
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  };

  // --------------------------------------------
  // Handle image upload
  // --------------------------------------------
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, profileImage: 'Please select a valid image file' }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, profileImage: 'Image size should be less than 5MB' }));
      return;
    }

    setProfileImage(file);
    setErrors((prev) => ({ ...prev, profileImage: undefined }));

    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };
  // Remove image
  const handleRemoveImage = () => {
    setProfileImage(null);
    setImagePreview(profileData.profileImage);
    setErrors((prev) => ({ ...prev, profileImage: undefined }));
  };
  // Validate form
  const validateForm = () => {
    const newErrors: { name?: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters long';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Name', formData.name.trim());
      if (profileImage) {
        formDataToSend.append('ProfileImage', profileImage, profileImage.name);
      }

      const res = await editData(endpoints.auth.editProf, 'PATCH', formDataToSend);
      if ('error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        enqueueSnackbar(res.message || 'Profile updated successfully', { variant: 'success' });

        //  Update Auth Store Immediately
        updateProfile({
          name: formData.name.trim(),
          profileImage: imagePreview || profileData.profileImage as any,
        });

        router.push(paths.controlPanel.profile.viewProfile);
      }
    } catch (error: any) {
      enqueueSnackbar(error?.message || 'An error occurred while updating profile', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Cancel button
  const handleCancel = () => {
    router.push(paths.controlPanel.profile.viewProfile);
  };

  // --------------------------------------------
  // JSX
  // --------------------------------------------
  return (
    <Container maxWidth="lg">
      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1, mt: 3 }}>
        <CustomBreadcrumbs
          links={[
            { name: t('Nav.main'), href: paths.controlPanel.main },
            { name: t('Pages.MyProfile.title'), href: paths.controlPanel.profile.viewProfile },
            { name: t('Pages.MyProfile.edit_profile') },
          ]}
          heading={t('Pages.MyProfile.edit_profile')}
          sx={{ color: '#447143' }}
        />

        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 4,
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between',
            gap: 4,
            width: '100%',
            minHeight: '60vh',
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Stack spacing={3}>
              {/* Name */}
              <TextField
                fullWidth
                label={t('Pages.MyProfile.name')}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
                disabled={loading}
                InputLabelProps={{ shrink: true }}
              />

              {/* Phone */}
              <TextField
                fullWidth
                label={t('Pages.MyProfile.phone')}
                value={profileData.phoneNumber || '+966 000 0000'}
                disabled
                helperText={t('Pages.MyProfile.phone_unchangeable')}
                InputLabelProps={{ shrink: true }}
              />

              {/* Upload Image */}
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  {t('Global.Label.profile_image')}
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Button
                    variant="outlined"
                    component="label"
                    disabled={loading}
                    startIcon={<Iconify icon="eva:cloud-upload-fill" />}
                  >
                    {t('Global.Label.upload_photo')}
                    <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                  </Button>

                  {imagePreview && (
                    <IconButton color="error" onClick={handleRemoveImage} disabled={loading}>
                      <Iconify icon="eva:trash-2-outline" />
                    </IconButton>
                  )}
                </Stack>

                {errors.profileImage && (
                  <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
                    {errors.profileImage}
                  </Typography>
                )}

                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  {t('Pages.MyProfile.supported_formats')}
                </Typography>

                {profileImage && (
                  <Typography variant="caption" color="primary" sx={{ mt: 1, display: 'block' }}>
                    {t('Global.Label.selected_file')}: {profileImage.name}
                  </Typography>
                )}
              </Box>

              {/* Buttons */}
              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  startIcon={
                    loading ? <CircularProgress size={16} /> : <Iconify icon="eva:checkmark-circle-2-outline" />
                  }
                  sx={{ minWidth: 140 }}
                >
                  {loading ? 'Updating...' : t('Global.Account-Popover.update_profile')}
                </Button>

                <Button variant="outlined" onClick={handleCancel} disabled={loading}>
                  {t('Global.Action.cancel')}
                </Button>
              </Stack>
            </Stack>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              minWidth: 200,
            }}
          >
            <Avatar
              src={imagePreview || undefined}
              alt={formData.name}
              sx={{
                width: 160,
                height: 160,
                bgcolor: 'grey.300',
                border: profileImage ? '2px solid' : '2px dashed',
                borderColor: profileImage ? 'primary.main' : 'grey.400',
              }}
            />

            <Typography variant="body2" color="text.secondary" textAlign="center">
              {profileImage
                ? t('Pages.MyProfile.new_profile_preview')
                : t('Pages.MyProfile.current_profile_image')}
            </Typography>

            {profileImage && (
              <Typography variant="caption" color="primary" textAlign="center">
                {t('Global.Label.new_image_selected')}
              </Typography>
            )}
          </Box>
        </Paper>
      </Card>
    </Container>
  );
}
