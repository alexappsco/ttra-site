
import Image from 'next/image';
import React, { useState } from 'react';
import { Box, styled, useTheme, Typography } from '@mui/material';

interface DiamondCardProps {
  mainIconPath: string;
  title: string;
  description: string;
  hoverIconPath?: string;
  bgColor?: string;
}

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

  // ✅ Responsive resizing
  [theme.breakpoints.down('md')]: {
    width: 200,
    height: 200,
  },
  [theme.breakpoints.down('sm')]: {
    width: 90,
    height: 90,
    fontSize: 12,
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
}) => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  const finalHoverIconPath = hoverIconPath || mainIconPath;

  const isTouchDevice =
    typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleInteraction = () => {
    if (isTouchDevice) setIsActive((prev) => !prev);
  };

  return (
    <DiamondCardRoot
      sx={bgColor ? { backgroundColor: bgColor } : {}}
      onMouseEnter={() => !isTouchDevice && setIsActive(true)}
      onMouseLeave={() => !isTouchDevice && setIsActive(false)}
      onClick={handleInteraction}
    >
      <DiamondCardContent>
        <Box
          sx={{
            transition: 'transform 0.4s ease',
            transform: isActive ? 'scale(1.3)' : 'scale(1)',
          }}
        >
          <Image
            src={isActive ? finalHoverIconPath : mainIconPath}
            alt={`${title} icon`}
            width={isActive ? 50 : 100}
            height={isActive ? 50 : 100}
            // style={{ height: 'auto' }}
            style={{ marginBottom: theme.spacing(1), transition: 'all 0.3s ease', height: 'auto'}}
          />
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            mb: 0.5,
            fontSize: { xs: 12, sm: 8, md: 16 },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            opacity: isActive ? 1 : 0,
            maxHeight: isActive ? '200px' : '0',
            overflow: 'hidden',
            transition: 'opacity 0.4s ease, max-height 0.4s ease',
            fontSize: { xs: 8, sm: 12, md: 13 },
            // lineHeight: 1.5,
          }}
        >
          {description}
        </Typography>
      </DiamondCardContent>
    </DiamondCardRoot>
  );
};

export default DiamondCard;
