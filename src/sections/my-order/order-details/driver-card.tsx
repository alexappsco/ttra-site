
'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import { enqueueSnackbar } from 'notistack';
import { endpoints } from 'src/utils/endpoints';
import { postData } from 'src/utils/crud-fetch-api';
import ConfirmCustomDialog from 'src/components/custom-dialog/confirm-custom-dialog';
import {
  Box,
  Card,
  Stack,
  Button,
  Dialog,
  Avatar,
  Checkbox,
  TextField,
  Typography,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
} from '@mui/material';

import DialogTrackDriver from './dialog-trac-driver';

interface OrderItem {
  id: string;
  productName: string;
  productImage: string;
  unitOfMeasureName: string;
  quantity: number;
  priceAtPurchase: number;
  totalPrice: number;
}

interface DriverCardProps {
  status: 'Shipped' | 'Delivered';
  driverName: string;
  driverPhone?: string | null;
  orderId: string;
  driverProfileImage?: string;
  driverLatitude?: number | null;
  driverLongitude?: number | null;
  address: string;
  isReturnedOrder?: boolean;
  returnedOrderDate?: string | null;
  orderItems?: OrderItem[];
}

export default function DriverCard({
  status,
  driverName,
  driverPhone,
  orderId,
  driverProfileImage,
  driverLatitude,
  driverLongitude,
  address,
  isReturnedOrder,
  returnedOrderDate,
  orderItems = [],
}: DriverCardProps) {
  const t = useTranslations();

  // dialogs
  const [mapDialog, setMapDialog] = useState(false);
  const [returnDialog, setReturnDialog] = useState(false);
  const [selectItemsDialog, setSelectItemsDialog] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);

  const [reason, setReason] = useState('');
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);

  // handle select item
  const handleToggleItem = (id: string) => {
    setSelectedItemIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // select all or clear
  const handleToggleAll = () => {
    if (selectedItemIds.length === orderItems.length) {
      setSelectedItemIds([]);
    } else {
      setSelectedItemIds(orderItems.map((item) => item.id));
    }
  };

  // Return order
  const handleReturnOrder = async () => {
    if (selectedItemIds.length === 0) {
      enqueueSnackbar(t('Pages.Order.select_at_least_one_item'), { variant: 'warning' });
      return;
    }

  //  Build correct payload according to Swagger
  const payload = {
    orderItemIds: selectedItemIds,
    reason: reason,
  };

      const res = await postData(endpoints.returnOders.returnOrderById(orderId),
      payload);

      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        enqueueSnackbar(t('Global.Message.returned_order_success'), { variant: 'success' });
        window.dispatchEvent(new Event('cartUpdated'));
        setConfirmDialog(false);
        setSelectedItemIds([]);
        setReason('');
      }

  };

  // Reorder
  const handleAddCart = async (orderId: string) => {
    try {
      const res = await postData(endpoints.orderAgain.create(orderId), {});
      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        enqueueSnackbar(t('Global.Message.Added_To_cart_success'), { variant: 'success' });
        window.dispatchEvent(new Event('cartUpdated'));
      }
    } catch (error) {
      enqueueSnackbar(typeof error === 'string' ? error : (error as Error).message, { variant: 'error' });
    }
  };

  return (
    <>
      <Card
        sx={{
          p: 2,
          borderRadius: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: '#fff',
        }}
      >
        {/* Right side: driver info */}
        <Box display="flex" alignItems="center" gap={1}>
          <Icon icon="mdi:account-tie" style={{ fontSize: 30, color: '#447143' }} />
          <Box>
            <Typography fontSize={12} color="text.secondary">
              {t('Pages.Order.driver_name')}
            </Typography>
            <Typography fontSize={14} fontWeight="bold">
              {driverName}
            </Typography>

            {/* Returned order date */}
            {isReturnedOrder && returnedOrderDate && (
              <Typography fontSize={13} color="text.secondary" sx={{ mt: 0.5 }}>
                {t('Pages.Return_Order.returned_on')}:&nbsp;
                {new Date(returnedOrderDate).toLocaleString('ar-EG', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Left side buttons */}
        <Box display="flex" gap={1}>
          {status === 'Shipped' && (
            <>
              <IconButton
                sx={{ bgcolor: '#447143', color: '#fff', '&:hover': { bgcolor: '#335933' } }}
                onClick={() => setMapDialog(true)}
              >
                <Icon icon="mdi:map-outline" />
              </IconButton>

              <IconButton
                sx={{ bgcolor: '#447143', color: '#fff', '&:hover': { bgcolor: '#335933' } }}
                component="a"
                href={`tel:${driverPhone}`}
              >
                <Icon icon="mdi:phone" />
              </IconButton>
            </>
          )}

          {status === 'Delivered' && !isReturnedOrder && (
            <>
              <Button
                variant="contained"
                startIcon={<Icon icon="mdi:refresh" />}
                sx={{
                  bgcolor: '#447143',
                  '&:hover': { bgcolor: '#335933' },
                  borderRadius: 1,
                  fontSize: 14,
                }}
                onClick={() => handleAddCart(orderId)}
              >
                {t('Pages.Order.reorder')}
              </Button>

              <Button
                variant="outlined"
                startIcon={<Icon icon="mdi:arrow-left" />}
                sx={{
                  borderColor: '#447143',
                  color: '#447143',
                  borderRadius: 1,
                  fontSize: 14,
                }}
                onClick={() => setReturnDialog(true)}
              >
                {t('Pages.Order.return')}
              </Button>
            </>
          )}
        </Box>
      </Card>

      {/* Step 1: Reason Dialog */}
      <Dialog open={returnDialog} onClose={() => setReturnDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>{t('Pages.Order.return_reason')}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label={t('Pages.Order.reason')}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            error={!reason}
            helperText={!reason ? t('Global.Validation.var_required', { var: t('Pages.Order.reason') }) : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setReturnDialog(false)}>{t('Global.Action.cancel')}</Button>
          <Button
            variant="contained"
            disabled={!reason}
            onClick={() => {
              setReturnDialog(false);
              setSelectItemsDialog(true);
            }}
          >
            {t('Global.Action.next')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Step 2: Select Items Dialog */}
      <Dialog open={selectItemsDialog} onClose={() => setSelectItemsDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>{t('Pages.Order.select_items_to_return')}</DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedItemIds.length === orderItems.length}
                onChange={handleToggleAll}
              />
            }
            label={t('Pages.Order.select_all')}
          />

          <Stack spacing={2} sx={{ mt: 2 }}>
            {orderItems.map((item) => (
              <Box
                key={item.id}
                display="flex"
                alignItems="center"
                gap={2}
                sx={{
                  border: '1px solid #ddd',
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Checkbox
                  checked={selectedItemIds.includes(item.id)}
                  onChange={() => handleToggleItem(item.id)}
                />
                <Avatar src={item.productImage} variant="rounded" sx={{ width: 56, height: 56 }} />
                <Box flex={1}>
                  <Typography fontWeight="bold">{item.productName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.unitOfMeasureName} × {item.quantity} — {item.totalPrice} ر.س
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectItemsDialog(false)}>{t('Global.Action.back')}</Button>
          <Button
            variant="contained"
            onClick={() => {
              setSelectItemsDialog(false);
              setConfirmDialog(true);
            }}
          >
            {t('Global.Action.next')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Step 3: Confirm Dialog */}
      <ConfirmCustomDialog
        title={t('Pages.Order.confirm_return')}
        content={t('Pages.Order.are_you_sure_return')}
        open={confirmDialog}
        onClose={() => setConfirmDialog(false)}
        onConfirm={handleReturnOrder}
        isLoading={false}
      />

      {/* Map Dialog */}
      <DialogTrackDriver
        open={mapDialog}
        onClose={() => setMapDialog(false)}
        driverName={driverName}
        driverPhone={driverPhone}
        driverLatitude={driverLatitude}
        driverLongitude={driverLongitude}
        address={address}
        driverProfileImage={driverProfileImage}
      />
    </>
  );
}
