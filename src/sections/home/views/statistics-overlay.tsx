'use client';

import { Box, Typography } from '@mui/material';
import LayoutContainer from './LayoutContainer';
import CountUp from 'react-countup';
import { m } from 'framer-motion';

export default function StatisticsOverlay() {
  const stats = [
    { value: 50, label: 'مستخدم نشط', suffix: 'K+' },
    { value: 200, label: 'طبيب دولي', suffix: '+' },
    { value: 4.9, label: 'تقييم التطبيق', decimals: 1 },
  ];

  const containerMotion = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '65%', lg: '50%' }, // mobile full width
        px: { xs: 1.5, sm: 0 }, // mobile safety padding
        margin: '0 auto',
        marginTop: { xs: '-10px', sm: '-20px', md: '-60px' },
        zIndex: 10,
      }}
    >
      <LayoutContainer>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerMotion}
        >
          <Box
            sx={{
              backgroundColor: '#F1A68E',
              padding: {
                xs: '10px 12px',
                sm: '24px',
                md: '24px 32px',
                lg: '28px 36px',
              },
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              borderRadius: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'visible',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: { xs: 'space-between', sm: 'space-around' },
                alignItems: 'center',
                textAlign: 'center',
                gap: { xs: 0.5, sm: 0 },
              }}
            >
              {stats.map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: { xs: 1, sm: 'unset' }, 
                    minWidth: { xs: 'unset', sm: 100 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '1.05rem',
                        sm: '2.5rem',
                        md: '2.2rem',
                        lg: '2.4rem',
                      },
                      fontWeight: 500,
                      color: '#fff',
                      lineHeight: 1,
                      mb: { xs: 0.5, sm: 1 },
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix || ''}
                      separator=""
                    />
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: '0.68rem',
                        sm: '1rem',
                        md: '0.95rem',
                        lg: '1rem',
                      },
                      fontWeight: 500,
                      color: '#fff',
                      opacity: 0.95,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </m.div>
      </LayoutContainer>
    </Box>
  );
}
