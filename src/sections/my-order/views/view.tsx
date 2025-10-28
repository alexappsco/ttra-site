'use client';
import React from 'react';
import dayjs from 'dayjs';
import { paths } from 'src/routes/paths';
import { Container } from '@mui/material';
import { useTranslations } from 'next-intl';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import OrderCard from './order-card';
import ListFilters from '../list-filter';

interface Props {
  orders?: any;
}

export default function MyOrderView({ orders }: Props) {
  const t = useTranslations();

  return (
<>
    <Container>
      <CustomBreadcrumbs
        links={[
          { name: t('Nav.main'), href: paths.controlPanel.main },
          { name: t('Metadata.MyOrder.title'), href: '' },
        ]}
        heading={t('Metadata.MyOrder.title')}
        sx={{ color: '#447143' }}
      />
      <ListFilters items={orders} />
      {orders?.map((order: any) => (
        <OrderCard
          key={order.id}
          id={order.id}
          orderNumber={order?.orderNumber}
          amount={order.totalOrderAmount}
          status={order.status}
          address={order.address?.description}
          date={dayjs(order.creationTime).format('dddd, DD/MM/YYYY hh:mm A')}
          delivery_date={dayjs(order.deliveryDate).format('dddd, DD/MM/YYYY hh:mm A')}
        />
      ))}
    </Container>
      </>
  );
}
