import { styled } from '@mui/material/styles';
import { Box, Card, Button, Typography } from '@mui/material';

// Card container
export const OrderCard = styled(Card)(() => ({
  borderRadius: '12px',
  border: '1px solid #E0E0E0',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  background: '#FFFFFF',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
  },
}));

// Header wrapper
export const HeaderSection = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '8px',
}));

// Title
export const OrderTitle = styled(Typography)(() => ({
  fontFamily: 'DIN Next LT Arabic',
  fontWeight: 700,
  fontSize: '18px',
  color: '#000000',
  lineHeight: '1.3',
}));

// Price
export const PriceText = styled(Typography)(() => ({
  fontFamily: 'DIN Next LT Arabic',
  fontWeight: 700,
  fontSize: '24px',
  color: '#000000',
  lineHeight: '1.2',
}));

// Date
export const DateTimeText = styled(Typography)(() => ({
  fontFamily: 'DIN Next LT Arabic',
  fontWeight: 400,
  fontSize: '14px',
  color: '#666666',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginBottom: '16px',
}));

// Items
export const ItemsText = styled(Typography)(() => ({
  fontFamily: 'DIN Next LT Arabic',
  fontWeight: 400,
  fontSize: '16px',
  color: '#333333',
  lineHeight: '1.8',
  textAlign: 'right',
  direction: 'rtl',
  marginBottom: '16px',
  flex: 1,
}));

// Product images container
export const ImagesContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
  minHeight: '60px',
}));

// Single product image
export const ProductImage = styled(Box)(() => ({
  position: 'relative',
  width: '50px',
  height: '50px',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '2px solid #F5F5F5',
}));

// +More images
export const MoreImagesIndicator = styled(Box)(() => ({
  width: '50px',
  height: '50px',
  borderRadius: '8px',
  backgroundColor: '#447143',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'DIN Next LT Arabic',
  fontWeight: 600,
  fontSize: '14px',
}));

// Reorder button
export const ReorderButton = styled(Button)(() => ({
  fontFamily: 'DIN Next LT Arabic',
  fontWeight: 600,
  fontSize: '16px',
  backgroundColor: '#447143',
  color: '#FFFFFF',
  borderRadius: '8px',
  padding: '12px 24px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  marginTop: 'auto',
  width: '100%',
  '&:hover': {
    backgroundColor: '#365c30',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 8px rgba(68, 113, 67, 0.3)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));
