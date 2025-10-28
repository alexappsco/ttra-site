
'use client';

import React, { useState } from 'react';
import { paths } from 'src/routes/paths';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import Iconify from 'src/components/iconify';
import { endpoints } from 'src/utils/endpoints';
import { postData } from 'src/utils/crud-fetch-api';
import ConfirmCustomDialog from 'src/components/custom-dialog/confirm-custom-dialog';
import {
  Box,
  Card,
  Chip,
  Stack,
  Dialog,
  Button,
  Avatar,
  Rating,
  TextField,
  Typography,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const statusColors: Record<string, string> = {
  Pending: '#FFAB00',
  Processing: '#00B8D9',
  Shipped: '#9C27B0',
  Delivered: '#1B5E20',
  Canceled: '#C62828',
  Returned: '#963258',
  PartiallyReturned: "#fa16aa"
};
const statusReturnColors: Record<string, string> = {
  InProgress: '#FFAB00',
  Accepted: '#1B5E20',
  Rejected: '#C62828',
};

interface OrderCardProps {
  id: string;
  orderNumber: string;
  amount: number;
  status: string;
  address: string;
  date: string;
  isReturns?: boolean;
  delivery_date?: string;
  returnOrderNumber?: string;
}

export default function OrderCard({
  id,
  orderNumber,
  amount,
  status,
  address,
  date,
  isReturns,
  delivery_date,
  returnOrderNumber,
}: OrderCardProps) {
  const t = useTranslations();
  const router = useRouter();

  // --- State
  const [returnDialog, setReturnDialog] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');

  // --- Rating Dialog
  const [ratingDialog, setRatingDialog] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState<number | null>(0);
  const [packaging, setPackaging] = useState<number | null>(0);
  const [communication, setCommunication] = useState<number | null>(0);
  const [comment, setComment] = useState('');

  // --- Add to cart handler
  const handleAddCart = async (orderId: string) => {
    try {
      const res = await postData(endpoints.orderAgain.create(orderId), {});
      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        enqueueSnackbar(t('Global.Message.Added_To_cart_success'), {
          variant: 'success',
        });
        window.dispatchEvent(new Event('cartUpdated'));
      }
    } catch (error) {
      enqueueSnackbar(
        typeof error === 'string' ? error : (error as Error).message,
        { variant: 'error' }
      );
    }
  };

  // --- Cancel order handler
  const handleCanceledOrder = async (orderId: string, reason: string, note: string) => {
    try {
      const res = await postData(endpoints.order.cancelOrder(orderId), {
        reason,
        note,
      });
      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        enqueueSnackbar(t('Global.Message.returned_order_success'), {
          variant: 'success',
        });
      }
    } catch (error) {
      enqueueSnackbar(
        typeof error === 'string' ? error : (error as Error).message,
        { variant: 'error' }
      );
    }
  };

  // --- Submit rating
  const handleSubmitRating = async () => {
    try {
      const payload = {
        deliveryTime,
        packaging,
        communication,
        comment,
      };
      const res = await postData(endpoints.order.orderRating(id), payload);
      if (typeof res === 'object' && 'error' in res) {
        enqueueSnackbar(res.error, { variant: 'error' });
      } else {
        enqueueSnackbar(t('Global.Message.rating_submitted_successfully'), {
          variant: 'success',
        });
        setRatingDialog(false);
        setDeliveryTime(0);
        setPackaging(0);
        setCommunication(0);
        setComment('');
      }
    } catch (error) {
      enqueueSnackbar(
        typeof error === 'string' ? error : (error as Error).message,
        { variant: 'error' }
      );
    }
  };

  // --- Render Actions
  const renderStatusActions = () => {
    if (status === 'Pending' || status === 'Processing') {
      return (
        <IconButton
          size="small"
          sx={{
            bgcolor: '#2E7D32',
            color: '#fff',
            '&:hover': { bgcolor: '#1B5E20' },
            ml: 'auto',
            width: 54,
            height: 46,
            borderRadius: 2,
          }}
          onClick={() => setReturnDialog(true)}
        >
          <Iconify icon="mdi:close" />
        </IconButton>
      );
    }

    if (status === 'Shipped') {
      return (
        <IconButton
          size="small"
          sx={{
            bgcolor: '#2E7D32',
            color: '#fff',
            ml: 'auto',
            width: 54,
            height: 46,
            borderRadius: 2,
          }}
        >
          <Iconify icon="mdi:map-outline" />
        </IconButton>
      );
    }

    if (status === 'Delivered') {
      return (
        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            sx={{
              bgcolor: '#2E7D32',
              color: '#fff',
              width: 54,
              height: 46,
              borderRadius: 2,
            }}
            onClick={() => handleAddCart(id)}
          >
            <Iconify icon="mdi:reload" />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              bgcolor: '#2E7D32',
              color: '#fff',
              width: 54,
              height: 46,
              borderRadius: 2,
            }}
            onClick={() => setRatingDialog(true)}
          >
            <Iconify icon="mdi:star" />
          </IconButton>
        </Stack>
      );
    }

    return null;
  };

  return (
    <>
      <Card sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Stack spacing={1}>
              <Chip
                label={t(`Pages.Order.Status.${status}`)}
                sx={{
                  bgcolor: isReturns
                    ? statusReturnColors[status] || '#999'
                    : statusColors[status] || '#999',
                  color: '#fff',
                  fontWeight: 'bold',
                  px: 1,
                  alignSelf: 'flex-start',
                }}
                size="small"
              />
              {isReturns ? (
                <>
                  <Stack spacing={0.5}>
                    <Typography
                      variant="subtitle2"
                      color="#447143"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <Box component="span">{t('Pages.Order.order_number')}:</Box>
                      <Box component="span" fontWeight="normal">{orderNumber}</Box>
                    </Typography>

                    {isReturns && returnOrderNumber && (
                      <Typography
                        variant="subtitle2"
                        color="#447143"
                        fontWeight="bold"
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                      >
                        <Box component="span">{t('Pages.Return_Order.return_order_number')}:</Box>
                        <Box component="span" fontWeight="normal">{returnOrderNumber}</Box>
                      </Typography>
                    )}

                    <Typography
                      variant="subtitle2"
                      color="#447143"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <Box component="span">{t('Pages.Return_Order.returned_on')}:</Box>
                      <Box component="span" fontWeight="normal">{date}</Box>
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      color="#447143"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <Box component="span">{t('Pages.Return_Order.deliver_at')}:</Box>
                      <Box component="span" fontWeight="normal">{delivery_date}</Box>
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      color="#447143"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <Box component="span">{t('Pages.Order.address')}:</Box>
                      <Box component="span" fontWeight="normal">{address}</Box>
                    </Typography>
                  </Stack>
                </>
              ) : (
                <>
                  <Stack spacing={0.5}>
                    <Typography
                      variant="subtitle2"
                      color="#447143"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <Box component="span">{t('Pages.Order.order_number')}:</Box>
                      <Box component="span" fontWeight="normal">{orderNumber}</Box>
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      color="#447143"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <Box component="span">{t('Global.Label.order_date')}:</Box>
                      <Box component="span" fontWeight="normal">{date}</Box>
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      color="#447143"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <Box component="span">{t('Pages.Order.address')}:</Box>
                      <Box component="span" fontWeight="normal">{address}</Box>
                    </Typography>
                  </Stack>
                </>
              )}
            </Stack>

          </Box>

          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {amount.toFixed(2)} {t('Pages.Currency.symbol')}
            </Typography>

            <IconButton
              size="small"
              sx={{ bgcolor: '#1565C0', color: '#fff', ml: 'auto', width: 54, height: 46, borderRadius: 2 }}
              onClick={() =>
                router.push(
                  isReturns
                    ? paths.controlPanel.returnOrders.single(id)
                    : paths.controlPanel.orders.single(id)
                )
              }
            >
              <Iconify icon="mdi:eye" />
            </IconButton>

            {renderStatusActions()}
          </Box>
        </Box>
      </Card>

      {/* --- Rating Dialog --- */}
      <Dialog open={ratingDialog} onClose={() => setRatingDialog(false)} fullWidth maxWidth="sm">
        {/* <DialogTitle sx={{ textAlign: 'center', fontWeight: 700 }}>
          {t('Pages.Order.add_rating')}
        </DialogTitle> */}
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: 700,
          }}
        >
          {t('Pages.Order.add_rating')}

          <IconButton
            onClick={() => setRatingDialog(false)}
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'error.main' },
            }}
          >
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ textAlign: 'center' }}>
          <Avatar sx={{ bgcolor: '#E9F4EC', width: 80, height: 80, mx: 'auto', mb: 2 }}>
            <Iconify icon="mdi:account-tie" width={50} color="#447143" />
          </Avatar>
          <Typography sx={{ mb: 2 }}>{t('Pages.Order.driver_name')}</Typography>

          <Stack direction="column" spacing={2} sx={{ alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
              <Typography>{t('Pages.Order.delivery_time')}</Typography>
              <Rating value={deliveryTime} onChange={(_, v) => setDeliveryTime(v)} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
              <Typography>{t('Pages.Order.packaging')}</Typography>
              <Rating value={packaging} onChange={(_, v) => setPackaging(v)} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
              <Typography>{t('Pages.Order.communication')}</Typography>
              <Rating value={communication} onChange={(_, v) => setCommunication(v)} />
            </Box>
          </Stack>

          <TextField
            fullWidth
            sx={{ mt: 3 }}
            multiline
            minRows={3}
            placeholder={t('Pages.Order.add_comment')}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: '#2E7D32',
              color: '#fff',
              height: 45,
              borderRadius: 2,
              '&:hover': { bgcolor: '#1B5E20' },
            }}
            onClick={handleSubmitRating}
          >
            {t('Global.Action.send')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* --- Cancel Reason Dialog --- */}
      <Dialog open={returnDialog} onClose={() => setReturnDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: 700,
          }}
        >{t('Pages.Order.cancel_reason')}
          <IconButton
            onClick={() => setReturnDialog(false)}
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'error.main' },
            }}
          >
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label={t('Pages.Order.reason')}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="dense"
            label={t('Pages.Order.note')}
            multiline
            minRows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setReturnDialog(false)}>{t('Global.Action.cancel')}</Button>
          <Button
            variant="contained"
            onClick={() => {
              setReturnDialog(false);
              setConfirmDialog(true);
            }}
          >
            {t('Global.Action.next')}
          </Button>
        </DialogActions>
      </Dialog>

      {/* --- Confirm Cancel Dialog --- */}
      <ConfirmCustomDialog
        title={t('Pages.Order.confirm_canceled')}
        content={t('Pages.Order.are_you_sure_cancel')}
        open={confirmDialog}
        onClose={() => setConfirmDialog(false)}
        onConfirm={() => handleCanceledOrder(id, reason, note)}
        isLoading={false}
      />
    </>
  );
}
