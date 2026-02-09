

// import { Box, Button } from '@mui/material';
// import { BLOGS } from 'src/_mock/data';
// import ShopSection from 'src/sections/home/views/shops-section';

// export default function page() {
//   return <Box sx={{ mt: -13 }}>
//     <ShopSection blogs={BLOGS} showAll={true} />
//   </Box>
// }
import { Box } from '@mui/material';
import ShopsSection from 'src/sections/home/views/shops-section';
import { Shop } from 'src/_mock/shop';

export default function ShopsPage() {
  return (
    <Box sx={{ mt: -13 }}>
      <ShopsSection shops={Shop} showAll={true} />
    </Box>
  );
}
