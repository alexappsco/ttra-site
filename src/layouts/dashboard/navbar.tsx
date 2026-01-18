'use client';

import * as React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

import LayoutContainer from 'src/sections/home/views/LayoutContainer';

const NAV_LINKS = [
  { label: 'الرئيسية', href: '/' },
  { label: 'خدماتنا', href: '' },
  { label: 'من نحن', href: '' },
  { label: 'كيف يعمل', href: '' },
  { label: 'المقالات', href: '' },
  { label: 'آراء العملاء', href: '' },
];

const ACTIVE_COLOR = '#F1A68E';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const activeIndex = 0;

  return (
    <>
      {/* Navbar Wrapper (Full Width) */}
      <Box
        sx={{
          width: '100%',
          height: 110,
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          marginTop: '-100px',
          boxShadow: '0px 0px 4px 0px #F1A68E',
        }}
      >
        {/* Unified Container */}
        <LayoutContainer>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Right: Logo + App Name */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { md: 0, lg: 1 },
              }}
            >
              <Image
                src="/logo/logo-scen.svg"
                alt="logo"
                width={98}
                height={79}
                priority
              />
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 500,
                  lineHeight: '100%',
                  whiteSpace: 'nowrap',
                }}
              >
                سكين كير
              </Typography>
            </Box>

            {/* Center: Navigation Links */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'flex' },
                gap: { lg: 10, md: 4 },
                justifyContent: 'center',
                flexGrow: 1,
                mr: { lg: 30, md: 0 },
              }}
            >
              {NAV_LINKS.map((link, index) => (
                <Typography
                  key={link.label}
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    color:
                      index === activeIndex ? ACTIVE_COLOR : '#555',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: ACTIVE_COLOR,
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: '#333',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </LayoutContainer>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            pt: 2,
          },
        }}
      >
        <List>
          {NAV_LINKS.map((link, index) => (
            <ListItemButton key={link.label}>
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  sx: {
                    textAlign: 'left',
                    fontSize: 20,
                    color:
                      index === activeIndex
                        ? ACTIVE_COLOR
                        : '#333',
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
