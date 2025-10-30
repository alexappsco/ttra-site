'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';
import {
  Box,
  Card,
  List,
  Stack,
  Drawer,
  AppBar,
  Toolbar,
  ListItem,
  Container,
  IconButton,
  ListItemButton,
  Link as MuiLink,
} from '@mui/material';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useResponsive('up', 'md');

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Drawer (for mobile)
  const mobileDrawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: '#0D6EFD',
        color: '#fff',
        height: '100%',
      }}
    >
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.3)',
        }}
      >
        <Image src="/logo/isthwaz_white_logo.svg" alt="Logo" width={100} height={80} />
      </Box>
      <List>
        {[
          { label: 'الرئيسية', href: '/' },
          { label: 'المشاريع المطروحة', href: '/projects' },
          { label: 'المدونة', href: '/blog' },
          { label: 'حمل التطبيق', href: '/download' },
          { label: 'تسجيل دخول', href: '/login' },
        ].map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={NextLink}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                py: 1.2,
                color: '#fff',
                fontSize: 15,
                fontWeight: 500,
                textAlign: 'center',
              }}
            >
              {item.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',
    // bgcolor: '#367ce5'
     }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          top: 0,
          bgcolor: '#367ce5',
          py:2
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              bgcolor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              px: 2,
              py: 0.5,
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                minHeight: 60,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                flexWrap: { xs: 'wrap', md: 'nowrap' },
              }}
            >
              {/* Right side (Logo + menu icon) */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  color="inherit"
                  edge="start"
                  sx={{ display: { md: 'none' }, color: '#fff' }}
                  onClick={handleDrawerToggle}
                >
                  <Iconify icon="eva:menu-2-fill" width={24} />
                </IconButton>
                <Image
                  src="/logo/isthwaz_white_logo.svg"
                  alt="Logo"
                  width={110}
                  height={80}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>

              {/* Center (Navigation Links) */}
              {isDesktop && (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{
                    flexGrow: 1,
                    color: '#fff',
                    fontSize: { xs: 13, sm: 14, md: 15 },
                    fontWeight: 500,
                  }}
                >
                  <MuiLink href="/" underline="none" color="inherit">
                    الرئيسية
                  </MuiLink>
                  <MuiLink href="/projects" underline="none" color="inherit">
                    المشاريع المطروحة
                  </MuiLink>
                  <MuiLink href="/blog" underline="none" color="inherit">
                    المدونة
                  </MuiLink>
                  <MuiLink href="/download" underline="none" color="inherit">
                    حمل التطبيق
                  </MuiLink>
                </Stack>
              )}

              {/* Left side (Buttons) */}
              <Stack direction="row" alignItems="center" spacing={1}>
                {/* Login */}
                <Box
                  component={NextLink}
                  href="/login"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    px: 2,
                    py: 0.7,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8,
                    textDecoration: 'none',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.25)',
                    },
                  }}
                >
                  <Iconify icon="mdi:account" width={18} color="#fff" />
                  <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>تسجيل دخول</span>
                </Box>

                {/* Notifications */}
                <IconButton
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    borderRadius: '8px',
                    width: 40,
                    height: 40,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
                  }}
                >
                  <Iconify icon="mdi:bell-outline" width={20} />
                </IconButton>

                {/* Add Button */}
                <Box
                  sx={{
                    bgcolor: '#0B5ED7',
                    px: 2,
                    py: 0.7,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8,
                    cursor: 'pointer',
                    height: 40,
                    '&:hover': {
                      bgcolor: '#0A58CA',
                    },
                  }}
                >
                  <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>أضف</span>
                  <Iconify icon="mdi:chevron-down" width={18} color="#fff" />
                </Box>
              </Stack>
            </Toolbar>
          </Card>
        </Container>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            top: '56px',
          },
        }}
      >
        {mobileDrawer}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, mt: '90px' }}>
        {children}
      </Box>
    </Box>
  );
}
