'use client';

import React from 'react';
import Image from 'src/components/image';
import { Banner } from 'src/types/banner';
import { Product } from 'src/types/product';
import { PastOrders } from 'src/types/order';
import { Box, Grid2, Container } from '@mui/material';

import OfferView from './offer-view';
import BannerSlider from './banner-view';
import CategoryView from './category-view';
import BetSellerView from './best-seller-view';
import FavoriteSection from './favorite-section';
import LastOrdersView from './last-order.tsx/last-orders-view';


interface Props {
  category: any;
  banners: Banner[];
  offers: any;
  bestSellers: Product[];
  pastOrders?: PastOrders[] | [];
  // favorites?: any;
  lastOrderTotal:number;
}

export default function HomeView({ category, banners, offers, bestSellers, pastOrders,lastOrderTotal }: Props) {
  return (
    <Container sx={{ alignItems: "center", justifyContent: "center" }}>
      <BannerSlider items={banners} />
      <Box sx={{my:5}}>
      <CategoryView items={category} />
      </Box>
      <OfferView items={offers} />
      <Box sx={{my:5}}>
       <BetSellerView items={bestSellers} />
      </Box>
      <Grid2 container spacing={3} sx={{ mt: 2, mb: 2 }}>
        <Image
          src="/assets/images/banners/app-banner.svg"
          alt="offer"
          width={'100%'}
          height={200}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: 24,
          }}
        />
      </Grid2>
      <LastOrdersView items={pastOrders} total={lastOrderTotal}/>
       <Box sx={{my:5}}>
      <FavoriteSection />
      </Box>
    </Container>
  );
}
