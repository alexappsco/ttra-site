'use client';

import React from 'react';
import { Card, Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';

type CustomerReviewCardProps = {
  avatar: string;
  name: string;
  review: string;
  rating: number; 
};

export default function CustomerReviewCard({ avatar, name, review, rating }: CustomerReviewCardProps) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 5,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
      }}
    >
      {/* Header: avatar + name + rating */}
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Image
          src={avatar}
          alt={name}
          width={50}
          height={50}
          style={{ borderRadius: '50%' }}
        />

        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: 17 }}>{name}</Typography>

          {/* Stars */}
          <Stack direction="row-reverse" spacing={0.5} mt={0.5}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/assets/Star 12.svg"
                alt="star"
                width={12}
                height={12}
              />
            ))}
          </Stack>
        </Box>
      </Stack>

      {/* Review text */}
      <Typography sx={{ fontSize: 13, color: 'text.secondary', lineHeight: 1.3 }}>
        {review}
      </Typography>
    </Card>
  );
}
