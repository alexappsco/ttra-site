'use client';
import React from 'react';
import { Box, Stack, useTheme, Container } from '@mui/material';

import DiamondCard from './diamond-card-section';

export const InteractiveCardSection: React.FC = () => {
  const theme = useTheme();

  const CARD_DATA = [
    {
      title: 'المستثمر',
      description: 'ابحث، اكتشف، وتفاوض على مشروع يحقق طموحك الاستثماري',
      mainIconPath: '/assets/section-two/accountant.svg',
      hoverIconPath: '/assets/section-two/accountant.svg',
      bgColor: '#0D6EFD',
    },
    {
      title: 'البائع',
      description: 'اعرض نشاطك التجاري وابدأ التواصل مع المشترين المحتملين',
      mainIconPath: '/assets/section-two/users.svg',
      hoverIconPath: '/assets/section-two/users.svg',
      bgColor: '#0D6EFD',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, sm: 6, md: 10 },
        px: { xs: 1, sm: 2, md: 0 },
        backgroundColor: '#fff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 2, sm: 4, md: 0 },
        }}
      >
        {/* 🔹 Top Card */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 4, sm: 6, md: 0 },
          }}
        >
          <DiamondCard
            mainIconPath="/assets/section-two/isthwaz.svg"
            title="استحواذ"
            description="منصتك الذكية لعرض وشراء المشاريع التجارية بكل سهولة"
            bgColor="#03A9F4"
            hoverIconPath="/assets/section-two/isthwaz.svg"
          />
        </Box>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="center"
          sx={{
            mt: { xs: 5, sm: 5, md: 8 },
            position: 'relative',
            zIndex: 1,
            rowGap: { xs: 6, sm: 0 }, // ✅ adds vertical gap between cards in column layout
            columnGap: { sm: 6, md: 8 }, // ✅ spacing for horizontal (desktop)
          }}
        >
          {CARD_DATA.map((card, index) => (
            <React.Fragment key={card.title}>
              <DiamondCard {...card} />

              {/* Hide connector on mobile */}
              {index < CARD_DATA.length - 1 && (
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: { sm: '60px', md: '80px' },
                    height: '1px',
                    backgroundColor: theme.palette.grey[400],
                    backgroundSize: '8px 1px',
                    backgroundImage:
                      'linear-gradient(to right, #9e9e9e 33%, rgba(255,255,255,0) 0%)',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'center',
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Stack>

      </Container>
    </Box>
  );
};

export default InteractiveCardSection;
