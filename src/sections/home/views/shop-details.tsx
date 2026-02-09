'use client';
import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import LayoutContainer from './LayoutContainer';
import { Shop } from 'src/_mock/shop';
type Props = { shop: Shop };

export default function ShopDetails({ shop }: Props) {
  return (
    <LayoutContainer>
      <Box mt={-10}>
        {/* Image */}
        <Box
          sx={{
            width: '100%',
            height: { xs: 220, sm: 300, md: 700 },
            maxHeight: 800,
            position: 'relative',
            borderRadius: 3,
            overflow: 'hidden',
            mb: { xs: 3, md: 4 },
          }}
        >
          <Image
            src={shop.image}
            alt={shop.title}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </Box>

        {/* Title */}
        <Typography fontWeight={500} fontSize={{ xs: 22, sm: 26, md: 32 }} mb={1.5}>
          {shop.title}
        </Typography>


        {/* Content */}
        <Typography fontSize={{ xs: 15, md: 16 }} lineHeight={1.9}>
          {shop.content}
        </Typography>

        {/* Back link */}
        <Box sx={{ mt: 6, mb: 20 }}>
          <Link href="/shop" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: 'rgba(193, 154, 107, 1)',
                cursor: 'pointer',
                '&:hover': { color: 'rgba(154, 110, 58, 1)' },
              }}
            >
              ← العودة للاسواق
            </Typography>
          </Link>
        </Box>
      </Box>
    </LayoutContainer>
  );
}
