'use client';

import { Card, Typography, Stack, Box } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';
type BlogCardProps = {
  id: string
  image: string;
  title: string;
  description: string;
  date: string;
};

export default function BlogCard({id, image, title, description, date }: BlogCardProps) {
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
        <Box sx={{ position: 'relative', width: '100%', paddingTop: '65%', borderRadius: 2, overflow: 'hidden' }}>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </Box>

        <Stack spacing={1.5} sx={{ mt: 2, flexGrow: 1 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, lineHeight: 1.3 }}>{title}</Typography>

          <Typography sx={{ fontSize: 14, color: 'text.secondary', lineHeight: 1.3, flexGrow: 1 }}>
            {description}
          </Typography>

          <Stack direction="row-reverse" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: 13, color: 'text.disabled' }}>{date}</Typography>
            <Stack direction="row" alignItems="center" spacing={0.75} sx={{ cursor: 'pointer', lineHeight: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/assets/Vector.svg" alt="arrow" width={12} height={12} />
              </Box>
                <Typography
                  sx={{ fontSize: 12, fontWeight: 400, lineHeight: 1, cursor: 'pointer',  }}
                >
                  اقرأ المزيد
                </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </m.div>
  );
}
