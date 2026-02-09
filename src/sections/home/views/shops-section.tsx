'use client';
import { Box, Grid, Button } from '@mui/material';
import LayoutContainer from './LayoutContainer';
import NewShop from './new-shop';
import Link from 'next/link';
import ShopCard from './shop-card';
import { Shop } from 'src/_mock/shop';

type Props = {
  shops: Shop[];
  showAll?: boolean;
};

export default function ShopsSection({ shops, showAll = false }: Props) {
  const displayedShops = showAll ? shops : shops.slice(0, 4);

  return (
    <LayoutContainer>
      <NewShop />

      {showAll && (
        <Box id="shop" sx={{ display: 'flex', justifyContent: 'flex-start', mb: 4 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                width: 200,
                height: 50,
                borderRadius: 1,
                px: 3,
                py: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                opacity: 1,
                backgroundColor: 'rgba(193, 154, 107, 1)',
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: '20px',
                fontWeight: '400',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: 'rgba(154, 110, 58, 1)',
                  boxShadow: 'none',
                },
              }}
            >
              الرجوع للصفحة الرئيسية
            </Button>
          </Link>
        </Box>
      )}

      <Grid id="shop" container spacing={3} mb={10}>
        {displayedShops.map((shop) => (
          <Grid item xs={12} sm={6} md={3} key={shop.id}>
            <Link href={`/shop/${shop.id}`} style={{ textDecoration: 'none' }}>
              <ShopCard {...shop} />
            </Link>
          </Grid>
        ))}
      </Grid>

      {!showAll && (
        <Box id="shop" sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Link href="/shop" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                width: 200,
                height: 54,
                borderRadius: 3,
                px: 8,
                py: 3,
                mb: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 1,
                backgroundColor: 'rgba(193, 154, 107, 1)',
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: '20px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: 'rgba(154, 110, 58, 1)',
                  boxShadow: 'none',
                },
              }}
            >
              اسكتشف جميع الفئات
            </Button>
          </Link>
        </Box>
      )}
    </LayoutContainer>
  );
}
