'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function InvestmentHero() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 500, md: 600 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        bgcolor: '#0048b5',
        backgroundImage: 'url(/assets/khobar-bg.jpg)', // 🔹 replace with real background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      {/* Overlay gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,72,181,0.6)',
          zIndex: 1,
        }}
      />

      {/* Cards section */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 1, md: 3 },
          zIndex: 2,
        }}
      >
        {/* Left card */}
        <Box
          component="img"
          src="/assets/slide_img_2.svg"
          alt="left"
          sx={{
            width: { xs: 120, md: 240 },
            opacity: 0.3,
            transform: { md: 'translateX(60px)' },
          }}
        />

        {/* Center card */}
        <Box
          component="img"
          src="/assets/slide_img_1.svg"
          alt="center"
          sx={{
            width: { xs: 180, md: 320 },
            zIndex: 3,
            boxShadow: '0px 10px 30px rgba(0,0,0,0.3)',
            borderRadius: 3,
          }}
        />

        {/* Right card */}
        <Box
          component="img"
          src="/assets/slide_img_3.svg"
          alt="right"
          sx={{
            width: { xs: 120, md: 240 },
            opacity: 0.3,
            transform: { md: 'translateX(-60px)' },
          }}
        />
      </Box>

      {/* Text section */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: 16, md: 80 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          textAlign: 'right',
          maxWidth: 420,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            lineHeight: 1.4,
          }}
        >
          استحوذ على فرصتك الاستثمارية اليوم
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>
          اكتشف، قيّم، وتفاوض لإنشاء أو بيع الأعمال التجارية بسهولة عبر منصة “استحواذ”.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: '#fff',
            color: '#0048b5',
            fontWeight: 'bold',
            borderRadius: 10,
            px: 3,
            py: 1,
            '&:hover': { bgcolor: '#e6e6e6' },
          }}
        >
          التسجيل
        </Button>
      </Box>
    </Box>
  );
}
