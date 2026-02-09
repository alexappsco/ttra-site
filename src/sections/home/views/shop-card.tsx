'use client';
import { Card, Typography, Stack, Box } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';

type ShopCardProps = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export default function ShopCard({ id, image, title, description }: ShopCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          p: 2,
          borderRadius: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            paddingTop: '80%',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(0deg, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.2) 50%, rgba(0,0,0,0) 100%)',
            }}
          />
        </Box>

        <Stack spacing={1.5} sx={{ mt: 2, flexGrow: 1 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, lineHeight: 1.3 }}>
            {title}
          </Typography>

          <Typography sx={{ fontSize: 14, color: 'text.secondary', lineHeight: 1.3, flexGrow: 1 }}>
            {description}
          </Typography>
        </Stack>
      </Card>
    </m.div>
  );
}
