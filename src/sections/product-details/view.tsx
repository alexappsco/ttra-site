'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import { paths } from 'src/routes/paths';
import { useTranslations } from 'next-intl';
import { endpoints } from 'src/utils/endpoints';
import { ProductDetails } from 'src/types/product';
import { postData, deleteData } from 'src/utils/crud-fetch-api';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  Box,
  Paper,
  Grid2,
  Button,
  Container,
  Typography,
  IconButton,
} from '@mui/material';

interface Props {
  product: ProductDetails;
}

export default function ProductDetailsView({ product }: Props) {
  const t = useTranslations();
  const { enqueueSnackbar } = useSnackbar();
  const [selectedImage, setSelectedImage] = useState(product.productImages?.[0]?.url);
  const [isFavourite, setIsFavourite] = useState(product.isFavourite);

  const handleAddToFavorites = async (idProduct: string) => {
    try {
      const res = await postData(endpoints.Favorites.addToFavorites(idProduct), {});
      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error);
      } else {
        setIsFavourite(true);
        enqueueSnackbar(t('Global.Message.Added_To_wishlist_success'));
        window.dispatchEvent(new Event('favoriteUpdated'));
      }
    } catch (error) {
      enqueueSnackbar(typeof error === 'string' ? error : (error as Error).message);
    }
  };

  const handleRemoveFromFavorites = async (idProduct: string) => {
    try {
      const res = await deleteData(endpoints.Favorites.removeFromFavorites(idProduct), {});
      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error);
      } else {
        setIsFavourite(false);
        enqueueSnackbar(t('Global.Message.Removed_From_wishlist_success'));
      }
    } catch (error) {
      enqueueSnackbar(typeof error === 'string' ? error : (error as Error).message);
    }
  };

  const unit = product.productUnitOfMeasures?.[0];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      <CustomBreadcrumbs
        links={[
          { name: t('Nav.main'), href: paths.controlPanel.main },
          {
            name: product.category.name,
            href: paths.controlPanel.category.details(product?.category?.parentCategory?.id || ''),
          },
          { name: product?.name, href: '' },
        ]}
        heading={product?.name}
        sx={{ color: '#447143' }}
      />

      <Paper
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          boxShadow: 1,
          border: '2px solid #E4EDE3',
          mt: 2,
        }}
      >
        <Grid2
          container
          spacing={{ xs: 3, md: 4 }}
          direction={{ xs: 'column', md: 'row' }}
          alignItems="flex-start"
        >
          {/* Left Section: Main Image */}
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                border: '1px solid #E4EDE3',
                borderRadius: 2,
                width: '100%',
                aspectRatio: '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                mx: 'auto',
              }}
            >
              <img
                src={selectedImage}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </Box>

            {/* Thumbnails */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
                mt: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              {product.productImages?.map((img) => (
                <Box
                  key={img.id}
                  sx={{
                    border:
                      selectedImage === img.url
                        ? '2px solid #447143'
                        : '1px solid #E4EDE3',
                    borderRadius: 2,
                    width: { xs: 70, sm: 90, md: 100 },
                    height: { xs: 70, sm: 90, md: 100 },
                    cursor: 'pointer',
                    background: '#fff',
                    overflow: 'hidden',
                  }}
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img
                    src={img.url}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </Box>
              ))}
            </Box>
          </Grid2>

          {/* Right Section: Details */}
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Product Name */}
              <Typography
                variant="h5"
                sx={{
                  color: '#447143',
                  fontWeight: 700,
                  fontFamily: 'DIN Next LT Arabic',
                  mb: 1,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {product.name}
              </Typography>

              {/* Category & Price */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  mb: 2,
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                  }}
                >
                  {product.category.parentCategory && (
                    <Typography
                      variant="subtitle2"
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        background: 'rgba(171, 191, 171, 0.25)',
                        borderRadius: 16,
                        fontSize: 14,
                        color: '#222',
                        fontFamily: 'DIN Next LT Arabic',
                      }}
                    >
                      {product.category.parentCategory.name}
                    </Typography>
                  )}
                  <Typography
                    variant="subtitle2"
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      background: 'rgba(171, 191, 171, 0.25)',
                      borderRadius: 16,
                      fontSize: 14,
                      color: '#222',
                      fontFamily: 'DIN Next LT Arabic',
                    }}
                  >
                    {product.category.name}
                  </Typography>
                </Box>

                {unit && (
                  <Box
                    sx={{
                      background: 'rgba(171, 191, 171, 0.5)',
                      borderRadius: 66,
                      px: 2,
                      py: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: '#222',
                        fontSize: 16,
                        fontFamily: 'DIN Next LT Arabic',
                        textAlign: 'center',
                      }}
                    >
                      <span style={{ color: '#7B8A7A', fontWeight: 400 }}>
                        {unit.unitOfMeasureName} / {t('Pages.Currency.symbol')}
                      </span>{' '}
                      {unit.price}
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* Description */}
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: 'DIN Next LT Arabic',
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#447143',
                  mb: 1,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {t('Pages.ProductDetails.description')}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#222',
                  fontFamily: 'DIN Next LT Arabic',
                  mb: 3,
                  lineHeight: 1.7,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {product.description}
              </Typography>

              {/* Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  mt: 'auto',
                  alignItems: 'center',
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    fontWeight: 700,
                    background: '#447143',
                    color: '#fff',
                    fontSize: 18,
                    height: 48,
                    fontFamily: 'DIN Next LT Arabic',
                    '&:hover': { background: '#365c36' },
                  }}
                  endIcon={<Icon icon="mdi:cart-plus" width={24} height={24} />}
                >
                  {t('Pages.ProductDetails.add_to_cart')}
                </Button>

                <IconButton
                  sx={{
                    border: '2px solid #E4EDE3',
                    borderRadius: 2,
                    width: 48,
                    height: 48,
                    background: '#fff',
                  }}
                  onClick={() =>
                    isFavourite
                      ? handleRemoveFromFavorites(product.id)
                      : handleAddToFavorites(product.id)
                  }
                >
                  <Icon
                    icon={isFavourite ? 'mdi:heart' : 'mdi:heart-outline'}
                    color={isFavourite ? '#e53935' : '#447143'}
                    width={28}
                    height={28}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
}
