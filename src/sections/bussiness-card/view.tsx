import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { BusinessType } from 'src/types/bussiness';



interface Props {
  business: BusinessType;
  isSelected: boolean;
  onSelect: (business: BusinessType) => void;
}

const BusinessCard = ({ business, isSelected, onSelect }: Props) => (
  <Box
    onClick={() => onSelect(business)}
    sx={{
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: { xs: '8px', sm: '16px' },
      gap: { xs: '4px', sm: '8px' },
      width: { xs: '120px', sm: '176.67px' },
      height: { xs: '48px', sm: '66px' },
      border: isSelected ? '2px solid #1976d2' : '1px solid #CECECE',
      borderRadius: '91px',
      transition: '0.2s',
      backgroundColor: isSelected ? '#EBF3FF' : 'white',
      '&:hover': {
        boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
        transform: 'translateY(-2px)',
      },
    }}
  >
    <Image
      src={business.imageUrl}
      alt={business.nameAr}
      width={34}
      height={34}
      style={{ objectFit: 'contain' }}
    />

    <Typography
      sx={{
        fontWeight: 600,
        fontSize: { xs: '10px', sm: '16px' }, // responsive font size
      }}
    >
      {business.nameAr}
    </Typography>
  </Box>
);

export default BusinessCard;
