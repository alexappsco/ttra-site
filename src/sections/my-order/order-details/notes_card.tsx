'use client';

import { useTranslations } from 'next-intl';
import { Card, TextField, Typography } from '@mui/material';

interface NotesCardProps {
  note?: string | null;
}

export default function NotesCard({ note }: NotesCardProps) {
  const t = useTranslations();

  return (
    <Card sx={{ p: 2, borderRadius: 2 }}>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        gutterBottom
        color="primary"
      >
        {t('Pages.Pay.notes')}
      </Typography>

      <TextField
        value={note || t('Pages.Order.no_items')}
        fullWidth
        disabled
        multiline
        minRows={3}
      />
    </Card>
  );
}
