
'use client';

import Yup from 'yup';
import Iconify from 'src/components/iconify';
import { RHFTextField } from 'src/components/hook-form';
import { useCurrentLocale } from 'src/utils/locale-utils';
import { Stack, Typography, BoxProps } from '@mui/material';

export default function RHFPhone({
  name,
  label,
}: {
  name: string;
  label?: string;
} & BoxProps) {
  const { dir } = useCurrentLocale();

  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ width: '100%' }}>

      {/* Phone input */}
      {/* <RHFTextField
        name={name}
        label={label}
        placeholder="رقم الهاتف"
        variant="outlined"
        sx={{
          flex: 1,
          '& .MuiInputBase-root': {
            height: 55,
            borderRadius: '12px',
            bgcolor: '#f7f7f7',
          },
          '& .MuiInputBase-input': {
            fontSize: '16px',
            textAlign: dir === 'rtl' ? 'right' : 'left',
            padding: '0 14px',
            direction: 'ltr',
          },
        }}
        slotProps={{
          input: {
            inputProps: {
              inputMode: 'numeric',
              maxLength: 9,
            },
          },
        }}
      /> */}
      <RHFTextField
        name={name}
        label={label}
        placeholder="رقم الهاتف"
        variant="outlined"
        sx={{
          flex: 1,
          '& .MuiInputBase-root': {
            height: 55,
            borderRadius: '12px',
            bgcolor: '#f7f7f7',
            direction: 'rtl', //  make input behave RTL
          },
          '& .MuiInputBase-input': {
            fontSize: '16px',
            textAlign: 'left', //  align placeholder and text to the right
            padding: '0 14px',
          },
        }}
        slotProps={{
          input: {
            inputProps: {
              inputMode: 'numeric',
              maxLength: 9,
            },
          },
        }}
      />

      {/* Country code box */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0.5}
        sx={{
          width: 65,
          height: 55,
          borderRadius: '12px',
          bgcolor: '#f7f7f7',
          border: '1px solid #ddd',
        }}
      >
        {/* <Iconify icon="twemoji:flag-saudi-arabia" width={20} height={20} /> */}
        <Typography color="text.secondary" fontSize="15px">
          966+
        </Typography>
      </Stack>

    </Stack>
  );
}

export const phoneSchema = (
  yup: typeof Yup,
  {
    required,
    onlyDigits,
    min,
    max,
    startWith,
  }: Record<'required' | 'onlyDigits' | 'min' | 'max' | 'startWith', string>
) =>
  yup
    .string()
    .required(required)
    .test('only digits', onlyDigits, (value): boolean | void => !!/^\d+$/.test(value))
    .test('start with 7', startWith, (value): boolean | void => !!value.startsWith('7'))
    .min(9, min)
    .max(9, max);
