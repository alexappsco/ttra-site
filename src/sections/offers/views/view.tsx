'use client'
import React from 'react';
import { paths } from 'src/routes/paths';
import { Offer } from 'src/types/offers';
import {  useTranslations } from 'next-intl';
import { Card, Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ListOffersCardsView from './list-offer-cards-view';
interface Props {
  offers: Offer[];
  totalCount: number;
}


export default function OffersView({ offers, totalCount }: Props) {
  const t = useTranslations()
  return (
    <Container>
      <CustomBreadcrumbs
        links={[
          { name: t('Nav.main'), href: paths.controlPanel.main },
          {
            name: t('Pages.offers.featured_offers'), href: ''
          },

        ]}
        heading={t('Pages.Home.best_offer')}
        sx={{ color: '#447143' }}
      />
      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1, mt: 4 }}>

        {/* <ListFilters subCategory={subCategory} />*/}
        <ListOffersCardsView items={offers} totalCount={totalCount} />
      </Card>
    </Container>
  );
}

