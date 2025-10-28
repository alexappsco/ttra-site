
'use client';

import { useTranslations } from 'next-intl';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Box,
  Card,
  Radio,
  Typography,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material';

interface FormValues {
  PaymentMethodId: string;
}

interface PaymentMethodsProps {
  payment: any[];
  onProcessingFeeChange?: (fee: number) => void; //  new prop
}

export default function PaymentMethods({ payment, onProcessingFeeChange }: PaymentMethodsProps) {
  const t = useTranslations();
  const { control } = useFormContext<FormValues>();

  return (
    <Card sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        {t('Pages.Pay.pay_type')}
      </Typography>
      <FormControl component="fieldset">
        <Controller
          name="PaymentMethodId"
          control={control}
          render={({ field }) => (
            <RadioGroup
              {...field}
              onChange={(e) => {
                const selectedId = e.target.value;
                field.onChange(selectedId);

                //  find the selected payment method
                const selectedMethod = payment.find((m) => m.id === selectedId);
                if (selectedMethod && onProcessingFeeChange) {
                  onProcessingFeeChange(selectedMethod.processingFee);
                }
              }}
            >
              {payment.map((method) => (
                <FormControlLabel
                  key={method.id}
                  value={method.id}
                  control={<Radio sx={{ color: '#447143' }} />}
                  label={
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        component="img"
                        src={method.image}
                        alt={method.name}
                        sx={{ width: 30, height: 30, borderRadius: '50%' }}
                      />
                      <Box>
                        <Typography fontWeight="bold">{method.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {method.description}
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
              ))}
            </RadioGroup>
          )}
        />
      </FormControl>
    </Card>
  );
}
