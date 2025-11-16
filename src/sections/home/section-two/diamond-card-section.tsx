'use client';

import React from 'react';
// import Image from 'next/image';
import { Box, styled, useTheme, Typography } from '@mui/material';

interface DiamondCardProps {
  mainIconPath: string;
  title: string;
  description: string;
  hoverIconPath?: string;
  bgColor?: string;
  expanded?: boolean;
  onToggle?: () => void;
  isSmallScreen?: boolean;
}

// const DiamondCardRoot = styled(Box)(({ theme }) => ({

//   width: 260,
//   height: 260,
//   backgroundColor: '#0D6EFD',
//   borderRadius: theme.shape.borderRadius * 2,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   position: 'relative',
//   transform: 'rotate(45deg)',
//   boxShadow: theme.shadows[5],
//   cursor: 'pointer',
//   flexShrink: 0,
//   transition: 'all 0.4s ease',
//   '&:hover': {
//     transform: 'rotate(45deg) scale(1.08)',
//     boxShadow: theme.shadows[8],
//   },

//   [theme.breakpoints.down('sm')]: {
//     width: 95,
//     height: 95,
//     '&:hover': {
//       transform: 'rotate(45deg)', //  منع Hover على الموبايل
//     },
//   },
// }));


const DiamondCardRoot = styled(Box)(({ theme }) => ({
  width: 260,
  height: 260,
  backgroundColor: '#0D6EFD',
  borderRadius: theme.shape.borderRadius * 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  transform: 'rotate(45deg)',
  boxShadow: theme.shadows[5],
  cursor: 'pointer',
  flexShrink: 0,
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'rotate(45deg) scale(1.08)',
    boxShadow: theme.shadows[8],
  },

  // من 0 إلى 600px
  [theme.breakpoints.down('sm')]: {
    width: 95,
    height: 95,
    '&:hover': {
      transform: 'rotate(45deg)', // منع Hover على الموبايل
      boxShadow: 'none',
    },
  },

  // من 600px إلى 960px
  [theme.breakpoints.between('sm', 'md')]: {
    width: 150,
    height: 150,
    '&:hover': {
      transform: 'rotate(45deg) scale(1.05)',
      boxShadow: theme.shadows[6],
    },
  },

  // من 960px إلى 1280px
  [theme.breakpoints.between('md', 'lg')]: {
    width: 200,
    height: 200,
    // '&:hover': {
    //   transform: 'rotate(45deg) scale(1.06)',
    //   boxShadow: theme.shadows[7],
    // },
        '&:hover': {
      transform: 'rotate(45deg) scale(1.08)',
      boxShadow: theme.shadows[8],
    },
  },

  // أكبر من 1280px (xl)
  [theme.breakpoints.up('lg')]: {
    width: 260,
    height: 260,
    '&:hover': {
      transform: 'rotate(45deg) scale(1.08)',
      boxShadow: theme.shadows[8],
    },
  },
}));

const DiamondCardContent = styled(Box)(({ theme }) => ({
  transform: 'rotate(-45deg)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#fff',
  padding: theme.spacing(2),
  width: '100%',
  height: '100%',
}));

export const DiamondCard: React.FC<DiamondCardProps> = ({
  mainIconPath,
  title,
  description,
  hoverIconPath,
  bgColor,
  expanded,
  onToggle,
  isSmallScreen,
}) => {
  const theme = useTheme();
  const finalHoverIconPath = hoverIconPath || mainIconPath;

  return (
    <DiamondCardRoot
      sx={bgColor ? { backgroundColor: bgColor } : {}}
      onClick={isSmallScreen ? onToggle : undefined}
      onMouseEnter={!isSmallScreen ? onToggle : undefined}
      onMouseLeave={!isSmallScreen ? onToggle : undefined}
    >
      <DiamondCardContent>

        {/*  إخفاء الأيقونة عند Expanded */}
        {!expanded && (
          <Box
            sx={{
              transition: 'opacity 0.35s ease, transform 0.35s ease',
              transform: 'scale(1)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          >
            <img
              src={finalHoverIconPath}
              alt={`${title} icon`}
              width={90}
              height={90}
              style={{ height: 'auto' }}
            />
          </Box>
        )}

        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 'bold',
            mt: 1,
            fontSize: { xs: 10, sm: 15 },
          }}

        >
          {title}
        </Typography>

        {/*  Description يظهر فقط لما يكون Expanded */}
        <Typography
          variant="body2"
          sx={{
            opacity: expanded ? 1 : 0,
            maxHeight: expanded ? '200px' : '0px',
            overflow: 'hidden',
            transition: 'opacity 0.35s ease, max-height 0.35s ease',
            fontSize: { xs: 7.5, sm: 13 },
            mt: 0.5,
            width: '90%',
            textAlign: 'center',
          }}
        >
          {description}
        </Typography>

      </DiamondCardContent>
    </DiamondCardRoot>
  );
};

export default DiamondCard;
