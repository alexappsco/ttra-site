
'use client';

import Slider from 'react-slick';
import { Product } from 'src/types/product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslations } from 'next-intl';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import ProductCard from 'src/sections/components/product-card';

interface Props {
  items: Product[];
}

// Custom Arrow Component
const Arrow = styled('div')<{ showGreen: boolean }>(({ theme }) => ({
  zIndex: 2,
  '&:before': {
    color:  theme? theme.palette.primary.light : '#ccc', // fallback grey
    fontSize: '28px',
  },
}));

export default function BestSellerView({ items }: Props) {
  const t = useTranslations();
  const showGreen = items.length > 4;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow showGreen={showGreen} />,
    prevArrow: <Arrow showGreen={showGreen} />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Box sx={{ mt: 4, mb: 2 }}>
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
            {t('Pages.Home.best_seller')}
          </Typography>
        </Box>
      </Box>

      <Slider {...settings}>
        {items.map((item) => (
          <Box sx={{ px: 1 }} key={item.id} style={{ padding: '0 8px' }}>
            <ProductCard product={item} />
          </Box>
        ))}
      </Slider>
    </>
  );
}
