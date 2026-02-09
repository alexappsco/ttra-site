import { Typography } from '@mui/material'
import React from 'react'
import LayoutContainer from 'src/sections/home/views/LayoutContainer'
function page() {
  return (
    <LayoutContainer>
      <Typography variant="h3" sx={{ mb: 4 }}>
      مركز المساعدة
      </Typography>
    </LayoutContainer>
  )
}

export default page