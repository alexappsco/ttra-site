'use client';

import { useTranslations } from 'next-intl';
import { Card, TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface FormValues {
  Note: string;
}

export default function NotesCard() {
  const t = useTranslations();
  const { control } = useFormContext<FormValues>();

  return (
    <Card sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="primary">
        {t("Pages.Pay.notes")}
      </Typography>
      <Controller
        name="Note"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            placeholder={t("Pages.Pay.add_notes_for_order")}
            multiline
            minRows={3}
          />
        )}
      />
    </Card>
  );
}
