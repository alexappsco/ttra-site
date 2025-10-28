'use client';
import React from 'react';
import { paths } from 'src/routes/paths';
import { useTranslations } from 'next-intl';
import { Card, Container } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ListFilters from '../my-order/list-filter';
import OrderCard from '../my-order/views/order-card';

interface Props {
  returnsList: any[];
  totalCount: number;
}

export default function ReturnedOrderView({ returnsList, totalCount }: Props) {
  console.log('returnsList', returnsList);

const t=useTranslations();
  return (
     <Container>
      <CustomBreadcrumbs
        links={[
          { name: t('Nav.main'), href: paths.controlPanel.main },
          { name: t('Pages.Return_Order.title2'), href: '' },
        ]}
        heading={t('Pages.Return_Order.title2')}
        sx={{ color: '#447143' }}
      />
<Card>
      <ListFilters items={returnsList} isReturns />
      {returnsList.map((order) => (
        <OrderCard
          key={order.id}
          id={order.id}
          orderNumber={order.orderNumber}
          amount={order.priceDetails?.finalPrice || 0}
          status={order.status}
          address={order.address?.description || ''}
          date={new Date(order.returnDate).toLocaleString('ar-EG', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
          isReturns
        />
      ))}
    </Card>
    </Container>
  );
}
