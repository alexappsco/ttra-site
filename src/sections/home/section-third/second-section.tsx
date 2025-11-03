'use client';

import React from 'react';
import { Box, Grid2 } from '@mui/material';

const features = [
  {
    subtitle: "بحث ذهن ومشاريع مميزة",
    description: "بحث عن المشاريع حسب النشاط، المدينة، أو رأس المال، واختر بناءً على بيانات دقيقة لكل مشروع."
  },
  {
    subtitle: "تفاصيل شاملة ومقارنة سهلة",
    description: "استعرض التوظيف العاملي والتمويلية، وخطط المشاريع المفضلة، وقارنها في أي وقت."
  },
  {
    subtitle: "تواصل مباشر",
    description: "ابدأ المحادثات والمفاوضات مع أصحاب المشاريع بكل خصوصية وسرية."
  },
  {
    subtitle: "لوحة تحكم وإشعارات فورية",
    description: "تابع مشاريعك ورسائلك من مكان واحد، وتلق إشعارات فورية عند توفير فرص جديدة تناسبك."
  }
];

export default function SecondSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4, md: 8 },
        bgcolor: '#f9f9f9',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid2
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        direction={{ xs: 'column', md: 'row' }}
      >
        {/* Text Column - Now on the LEFT side */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                px: { xs: 2, sm: 4 },
                py: 1.5,
                mb: 4,
                textAlign: 'right',
              }}
            >
              <Box
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 20, sm: 26 },
                  color: 'rgb(0,72,181)',
                  margin: 0,
                }}
              >
                استشف فرصك الاستثمارية بثقة
              </Box>
            </Box>

            {/* Features Grid */}
            <Grid2 container spacing={2}>
              {features.map((feature, index) => (
                <Grid2 size={{ xs: 12 }} key={index}>
                  <Box
                    sx={{
                      px: { xs: 2, sm: 3 },
                      py: { xs: 1.5, sm: 2 },
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexDirection: 'row-reverse',
                      gap: 2,
                      bgcolor: 'white',
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  >
                       <Box
                      component="img"
                      src="/assets/Right.svg"
                      alt=""
                      sx={{
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Box
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: 16, sm: 18 },
                          color: 'rgb(0,72,181)',
                          textAlign: 'right',
                          margin: 0,
                          mb: 1,
                        }}
                      >
                        {feature.subtitle}
                      </Box>
                      <Box
                        component="p"
                        sx={{
                          fontSize: { xs: 14, sm: 16 },
                          color: '#000',
                          textAlign: 'right',
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {feature.description}
                      </Box>
                    </Box>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Grid2>

        {/* Image Column - Now on the RIGHT side */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/assets/office.svg"
            alt="Office Illustration"
            sx={{
              width: '100%',
              height: 'auto',
              maxWidth: 500,
              objectFit: 'contain',
              display: 'block',
              mx: 'auto'
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}