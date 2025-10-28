'use client';

import Stack from '@mui/material/Stack';
import { useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';
import { TextFieldProps } from '@mui/material/TextField';

type Props = TextFieldProps & {
  name: string;
};

export default function RHFOTP({ name, helperText, ...other }: Props) {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const value = watch(name) || '';
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, input: string) => {
    const newValue = value.split('');
    newValue[index] = input;
    setValue(name, newValue.join(''));

    if (input && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  return (
    <Stack direction="row" justifyContent="center" spacing={2} dir="ltr">
      {[0, 1, 2, 3].map((index) => (
        <TextField
          key={index}
          inputRef={(el: HTMLInputElement) => {
            inputsRef.current[index] = el;
          }}
          variant="outlined"
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e.target.value.replace(/\D/g, '').slice(-1))}
          onKeyDown={(e) => handleKeyDown(index, e as React.KeyboardEvent<HTMLInputElement>)}
          sx={{
            width: 80,
            height: 95,
            '& .MuiInputBase-root': {
              height: '100%',
              fontSize: '40px',
              textAlign: 'center',
              borderRadius: '8px',
            },
            '& .MuiInputBase-input': {
              padding: 0,
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              lineHeight: '95px',
              letterSpacing: '2px',
            },
          }}
          inputProps={{ maxLength: 1 }}
          error={!!errors[name]}
          placeholder="-"
          {...other}
        />
      ))}{' '}
    </Stack>
  );
}
