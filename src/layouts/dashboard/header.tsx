'use client';

import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import LayoutContainer from 'src/sections/home/views/LayoutContainer';
import Iconify from 'src/components/iconify';
import LanguagePopover from '../common/language-popover';

export default function Header() {
  const theme = useTheme();

  return (
    <Box 
      component="header" 
      sx={{ 
        width: 1, 
        position: 'fixed', 
        top: 0,            
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar + 100, 
        bgcolor: 'background.paper',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)' 
      }}
    >
      <Box
        sx={{
          bgcolor: '#f3f3f3',
          borderBottom: '1px solid #e5e5e5',
        }}
      >
        <LayoutContainer>
          <Stack
            direction={{ xs: 'column', md: 'row' }} 
            alignItems="center"
            justifyContent="space-between"
            sx={{ 
              minHeight: 40, 
              py: { xs: 1, md: 0 },
              gap: { xs: 1, md: 0 }
            }}
          >
            <Stack 
              direction="row" 
              spacing={{ xs: 1, sm: 2 }} 
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
            >
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Typography fontSize={{ xs: 10, sm: 12, md: 13 }} sx={{ direction: 'ltr' }}>+966556754472</Typography>
                <Iconify icon="solar:phone-calling-bold" width={16} sx={{ color: '#5e35b1' }} />
              </Stack>
              <Box sx={{ width: '1px', height: '14px', bgcolor: '#ccc' }} />
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Typography fontSize={{ xs: 10, sm: 12, md: 13 }}>Support@ttra.sa</Typography>
                <Iconify icon="solar:letter-bold" width={16} sx={{ color: '#5e35b1' }} />
              </Stack>
            </Stack>

            <Stack 
              direction="row" 
              spacing={{ xs: 1, sm: 1.5, md: 2 }} 
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
            >
              <LanguagePopover />
              <Box sx={{ width: '1px', height: '14px', bgcolor: '#ccc' }} />
              <Typography sx={{ cursor: 'pointer', fontSize: { xs: 10, sm: 12, md: 13 } }}>المفضلة</Typography>
              <Box sx={{ width: '1px', height: '14px', bgcolor: '#ccc' }} />
              <Typography sx={{ cursor: 'pointer', fontSize: { xs: 10, sm: 12, md: 13 }, whiteSpace: 'nowrap' }}>
                سياسة الاستبدال أو الاسترجاع
              </Typography>
              <Box sx={{ width: '1px', height: '14px', bgcolor: '#ccc' }} />
              <Typography sx={{ cursor: 'pointer', fontSize: { xs: 10, sm: 12, md: 13 } }}>مكتبتي</Typography>
            </Stack>
          </Stack>
        </LayoutContainer>
      </Box>

      <Box sx={{ py: { xs: 1, md: 1.5 }, bgcolor: '#fff' }}>
        <LayoutContainer>
          <Stack
            direction="row" 
            alignItems="center"
            spacing={{ xs: 1, sm: 2, md: 3 }} 
          >
            <Box sx={{ flexShrink: 0 }}>
              <Image
                src="/logo/my-books.png"
                alt="logo"
                width={160} 
                height={120} 
                style={{ 
                  objectFit: 'contain',
                  width: 'auto', 
                  height: 'clamp(50px, 8vw, 100px)', 
                }}
                priority
              />
            </Box>

            <Box sx={{ flexGrow: 1, maxWidth: 800 }}>
              <TextField
                fullWidth
                placeholder="ابحث عما تريد"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: { xs: 18, md: 20 } }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    bgcolor: '#fafafa',
                    height: { xs: 40, md: 48 }, 
                    fontSize: { xs: 12, md: 14 },
                    '& fieldset': { border: '1px solid #eee' },
                    '&:hover fieldset': { borderColor: '#ddd' },
                  },
                }}
              />
            </Box>
          </Stack>
        </LayoutContainer>
      </Box>
    </Box>
  );
}