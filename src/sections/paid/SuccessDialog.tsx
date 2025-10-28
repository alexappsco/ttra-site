'use client';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import { enqueueSnackbar } from 'notistack';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Iconify from 'src/components/iconify';
import {
  Box,
  Grid2,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogTitle,
  DialogContent,
} from '@mui/material';


export default function SuccessDialog({
  open,
  paymentUrl,
  onClose,
}: {
  open: boolean;
  paymentUrl: string | null;
  onClose: () => void;
}) {
  const t = useTranslations();
const router=useRouter();
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth sx={{ p: 2, m: 2 }}>
      <DialogTitle>
        {t('Global.Server.Success.var_created', { var: t('Global.Label.order') })}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <Iconify icon="mdi:close" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ textAlign: 'center' }}>
        <Grid2 container spacing={3} sx={{ mt: 2, mb: 2 }}>
          <Image
            src="/assets/images/dialog_img.svg"
            alt="offer"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 24,
            }}
          />
        </Grid2>

        <Typography variant="h6" mt={2} mb={1}>
          {t('Pages.Pay.send_order_success')}
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          mb={3}
          sx={{ wordBreak: 'break-all' }}
        >
          <Typography
            variant="body2"
            color="primary"
            component="a"
            href={paymentUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            {paymentUrl}
          </Typography>

          <IconButton
            size="small"
            onClick={() => {
              if (paymentUrl) {
                navigator.clipboard.writeText(paymentUrl);
                enqueueSnackbar(t('Pages.Pay.is_copy'), { variant: 'info' });
              }
            }}
          >
            <Iconify icon="mdi:content-copy" />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          color="primary"
          href={paymentUrl || '#'}
          target="_blank"
          fullWidth
          sx={{ borderRadius: 2, mb: 2 }}
          onClick={()=>router.push(paths.controlPanel.main)}
        >
          {t('Pages.Pay.go_to_payment')}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
