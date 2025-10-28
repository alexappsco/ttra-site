import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useTranslations } from 'next-intl';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

interface ConfirmDialogProps {
  title?: string;
  content?: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

export default function ConfirmCustomDialog({
  title,
  content,
  open,
  onClose,
  onConfirm,
  isLoading = false,
}: ConfirmDialogProps) {
  const t = useTranslations();

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      {title && <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>}

      {content && (
        <DialogContent sx={{ typography: 'body2', overflow: 'visible' }}>
          {content}
        </DialogContent>
      )}

      <DialogActions>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          {t('Global.Action.cancel')}
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={onConfirm}
          disabled={isLoading}
        >
          {t('Global.Action.confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
