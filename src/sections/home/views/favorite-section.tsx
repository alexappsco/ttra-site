'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { endpoints } from 'src/utils/endpoints';
import { getData } from 'src/utils/crud-fetch-api';
import { useLocale, useTranslations } from 'next-intl';
import { Box, Button, Typography } from '@mui/material';
import ProductCard from 'src/sections/components/product-card';

// 🔹 Custom Arrow Component
const CustomArrow = (props: any) => {
  const { className, style, onClick, showColored } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: showColored ? '#D7EBD7' : 'transparent',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
};

export default function FavoriteSection() {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  const [items, setItems] = useState<any[]>([]);

  // Fetch favorites
  const fetchFavoriteItems = async () => {
    try {
      const response = await getData<{  items: any }>(
        endpoints.Favorites.list
      );

      if ('error' in response) {
        return;
      }
      setItems(response?.data?.items || []);
    } catch (err) {
      console.error('Error fetching favorites:', err);
    }
  };

  useEffect(() => {
    fetchFavoriteItems();

    // Listen for custom event
    const handleFavoriteUpdated = () => fetchFavoriteItems();

    window.addEventListener('favoriteUpdated', handleFavoriteUpdated);
    return () =>
      window.removeEventListener('favoriteUpdated', handleFavoriteUpdated);
  }, []);

  const showColored = items.length > 4;

  const settings = {
    dots: false,
    infinite: showColored,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow showColored={showColored} />,
    prevArrow: <CustomArrow showColored={showColored} />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Header */}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
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
          {t('Pages.favorite.title')}
        </Typography>

        <Button
          variant="text"
          sx={{
            fontFamily: 'DIN Next LT Arabic',
            fontWeight: 700,
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
            color: '#447143',
            p: 0,
            '&:hover': { background: 'none', color: '#365c36' },
          }}
          onClick={() => router.push(paths.controlPanel.favorite.view)}
          endIcon={
            <Icon
              icon={locale === 'en' ? 'mdi:chevron-right' : 'mdi:chevron-left'}
            />
          }
        >
          {t('Pages.offers.display_all')}
        </Button>
      </Box>

      {/* Favorite Slider */}
      {items && items.length > 0 ? (
        <Slider {...settings}>
          {items.map((item: any) => (
            <Box
              key={item.id}
              sx={{
                px: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ProductCard product={item}  />
            </Box>
          ))}
        </Slider>
      ) : (
        // No favorites placeholder
        <Box
          textAlign="center"
          sx={{
            py: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/assets/images/home/roller-paint.svg"
            alt="لا توجد عناصر مفضلة"
            width={200}
            height={180}
            style={{ marginBottom: '24px' }}
          />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontFamily: 'DIN Next LT Arabic',
              fontWeight: 400,
              fontSize: '18px',
            }}
          >
            {t('Pages.Home.no_favorite_items')}
          </Typography>
        </Box>
      )}
    </>
  );
}
