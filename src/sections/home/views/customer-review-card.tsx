'use client';

import { Card, Box, Typography, Stack } from '@mui/material';

type CustomerReviewCardProps = {
  name: string;
  review: string;
  since: string;
};

export default function CustomerReviewCard({
  name,
  review,
  since,
}: CustomerReviewCardProps) {
  return (
    <Card
      sx={{
        height: 170,
        width: 300,
        borderRadius: '20px',
        background: '#FFFFFF',
        border: '1px solid rgba(232, 221, 208, 1)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        p: 2.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 1.2,
        flexShrink: 0, // يمنع الانكماش
      }}
    >
      {/* Header */}
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: '#F3E8D7',
            color: '#C79A63',
            fontWeight: 700,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {name.charAt(0)}
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 700,
              color: 'rgba(58, 58, 58, 1)',
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: 'rgba(139, 115, 85, 1)',
            }}
          >
            عميل منذ {since}
          </Typography>
        </Box>
      </Stack>

      {/* Review */}
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.8,
          color: '#6F6A65',
        }}
      >
        "{review}"
      </Typography>
    </Card>
  );
}
