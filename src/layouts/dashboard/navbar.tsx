
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
  Button,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import LayoutContainer from 'src/sections/home/views/LayoutContainer';

const NAV_LINKS = [
  { label: 'الرئيسية', id: 'hero-section' },
  { label: 'من نحن', id: 'who-we-are' },
  { label: 'لماذا تختارنا', id: 'why-choose-us' },
  { label: 'كيف يعمل', id: 'how-it-works' },
  { label: 'الفئات', id: 'product' },
  { label: 'الأسواق', id: 'shop' },
  { label: 'التطبيق', id: 'app-section' },
];

const ACTIVE_COLOR = 'rgba(193, 154, 107, 1)';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Scroll to section
  const handleScroll = (id: string, index: number) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveIndex(index);
    }
    setOpen(false); // close drawer on mobile
  };

  // زر التحميل
  const downloadButton = (
    <Button
      sx={{
        backgroundColor: ACTIVE_COLOR,
        color: '#fff',
        px: 2,
        py: 1,
        borderRadius: '32px',
        fontSize: { md: 10 },
        fontWeight: 600,
        '&:hover': { backgroundColor: '#b18b54' },
      }}
    >
      حمل التطبيق الآن
    </Button>
  );

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
        <LayoutContainer>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Right: Logo + App Name */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 0, lg: 1 } }}>
              <Image
                src="/logo/logo-deira.png"
                alt="logo"
                width={85}
                height={69}
                priority
              />
            </Box>

            {/* Center: Navigation Links (Desktop) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: { lg: 10, md: 4 },
                justifyContent: 'center',
                flexGrow: 1,
                mr: { lg: 5, md: 0 },
                alignItems: 'center',
              }}
            >
              {NAV_LINKS.map((link, index) => (
                <Typography
                  key={link.label}
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    color: index === activeIndex ? ACTIVE_COLOR : '#555',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: ACTIVE_COLOR },
                  }}
                  onClick={() => handleScroll(link.id, index)}
                >
                  {link.label}
                </Typography>
              ))}

              {downloadButton}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#333' }}
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
        PaperProps={{ sx: { width: 260, pt: 2 } }}
      >
        <List>
          {NAV_LINKS.map((link, index) => (
            <ListItemButton
              key={link.label}
              onClick={() => handleScroll(link.id, index)}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  sx: {
                    textAlign: 'left',
                    fontSize: 20,
                    color: index === activeIndex ? ACTIVE_COLOR : '#333',
                  },
                }}
              />
            </ListItemButton>
          ))}

          {/* زر التحميل أسفل الروابط في الموبايل */}
          <Box sx={{ px: 2, pt: 2 }}>
            {downloadButton}
          </Box>
        </List>
      </Drawer>
    </>
  );
}
