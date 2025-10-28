
'use client';

import { useDebounce } from 'use-debounce';
import { useTranslations } from 'next-intl';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'src/components/use-query';
import { Box, Tab, Tabs, Container, Typography } from '@mui/material';

interface Props {
  items: any;
  isReturns?: boolean;
}

//  Order statuses
const STATUS_OPTIONS_ORDER = [
  { name: 'Pages.Order.Status.all', bgColor: '#ABBFAB40', value: '', color: '#637381' },
  { name: 'Pages.Order.Status.Pending', bgColor: '#FFAB0029', value: 'Pending', color: '#B76E00' },
  { name: 'Pages.Order.Status.Processing', bgColor: '#00B8D929', value: 'Processing', color: '#006C9C' },
  { name: 'Pages.Order.Status.Shipped', bgColor: '#8E33FF29', value: 'Shipped', color: '#5119B7' },
  { name: 'Pages.Order.Status.Delivered', bgColor: '#00A76F29', value: 'Delivered', color: '#007867' },
  { name: 'Pages.Order.Status.Canceled', bgColor: '#FF563029', value: 'Canceled', color: '#B71D18' },
  { name: 'Pages.Order.Status.Returned', bgColor: '#FF33AA29', value: 'Returned', color: '#963258' },
  { name: 'Pages.Order.Status.PartiallyReturned', bgColor: '#FE560329', value: 'PartiallyReturned', color: '#fa16aa' },
];

//  Return order statuses (simplified)
const STATUS_OPTIONS_RETURN_ORDER = [
  { name: 'Pages.Order.Status.all', bgColor: '#ABBFAB40', value: '', color: '#637381' },
  { name: 'Pages.Order.Status.InProgress', bgColor: '#FFAB0029', value: 'InProgress', color: '#B76E00' },
  { name: 'Pages.Order.Status.Accepted', bgColor: '#00A76F29', value: 'Accepted', color: '#007867' },
  { name: 'Pages.Order.Status.Rejected', bgColor: '#FF563029', value: 'Rejected', color: '#B71D18' },
];

export default function ListFilters({ items, isReturns }: Props) {
  const t = useTranslations();
  const [tabValue, setTabValue] = useState(0);

  //  Debounced search for OrderId
  const [orderId, _setOrderId] = useState(items.id || '');
  const [debouncedOrderId] = useDebounce(orderId, 500);

  const { values, changeQueries } = useQuery(
    ['page', 'limit', 'status', 'search', 'PaymentMethodId', 'OrderId', 'OrderDate'],
    true
  );

  //  Update query when order ID changes
  useEffect(() => {
    if (debouncedOrderId !== values.OrderId) {
      changeQueries({ OrderId: debouncedOrderId, page: '1' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedOrderId]);

  // Select correct status options depending on context
  const STATUS_OPTIONS = isReturns ? STATUS_OPTIONS_RETURN_ORDER : STATUS_OPTIONS_ORDER;

  //  Handle status change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    const selectedStatus = STATUS_OPTIONS[newValue]?.value || '';
    changeQueries({ status: selectedStatus, page: '1' });
  };

  return (
    <Container>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: '1px solid #ddd' }}
      >
        {STATUS_OPTIONS.map((option) => (
          <Tab
            key={option.value || 'all'}
            label={
              <Box display="flex" alignItems="center" gap={1} flexDirection="row-reverse">
                <Typography
                  variant="body2"
                  sx={{
                    bgcolor: option.bgColor,
                    color: option.color,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    minWidth: '30px',
                    textAlign: 'center',
                  }}
                >
                  {t(option.name)}
                </Typography>
              </Box>
            }
            sx={{
              textTransform: 'none',
              minHeight: '40px',
              color: '#000',
              fontWeight: 500,
            }}
          />
        ))}
      </Tabs>
    </Container>
  );
}

