
'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import Iconify from 'src/components/iconify';
import { usePathname } from 'next/navigation'; // Added for route detection
import { useResponsive } from 'src/hooks/use-responsive';
import {
  Box,
  Card,
  List,
  Stack,
  Drawer,
  AppBar,
  Toolbar,
  Divider,
  ListItem,
  Container,
  IconButton,
  ListItemButton,
  Link as MuiLink,
} from '@mui/material';

// --- Data Definitions for Nav Links and Actions ---

// 1. Desktop Navigation Links (with icons)
const NAV_LINKS = [
  {
    label: 'الرئيسية',
    href: '/',
    iconPath: '/assets/icons/navbar/main_.svg',
  },
  {
    label: 'المشاريع المطروحة',
    href: '/landing-page',
    iconPath: '/assets/icons/navbar/projects.svg',
  },
  {
    label: 'المدونة',
    href: '/landing-page',
    iconPath: '/assets/icons/navbar/note.svg',
  },
  {
    label: 'حمل التطبيق',
    href: '/landing-page',
    iconPath: '/assets/icons/navbar/app.svg',
  },
];

// 2. Action Links (Login/Add) for both desktop and mobile
const ACTION_LINKS = [
  { label: 'أضف', href: '/landing-page', icon: 'mdi:plus-circle-outline' },
  { label: 'تسجيل دخول', href: '/landing-page', icon: 'mdi:account' },
];

// Helper component to render the desktop navigation link with the icon
const NavItem = ({ href, label, iconPath,isHomePage }: { href: string, label: string, iconPath: string,isHomePage:boolean }) => {
  return (
    <MuiLink
      component={NextLink}
      href={href}
      underline="none"
      color="inherit"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        color: isHomePage ? '#fff' : '#367ce5',
      }}

    >
      <Image
        src={iconPath}
        alt={`${label} icon`}
        width={20}
        height={20}
        style={{ width: '20px', height: '20px', display: 'block' }}
      />
      {label}
    </MuiLink>
  );
};

// Back to Home component
const BackToHomeButton = () => {
  return (
    <Box
      component={NextLink}
      href="/"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        textDecoration: 'none',
        px: 2,
        py: 1,
        borderRadius: '8px',

       bgcolor: '#367ce5',
          color:"#fff",
        '&:hover': {
          bgcolor: '#fafafa',
          color:"#367ce5",
        },
      }}
    >
      <Iconify icon="mdi:arrow-right" width={20} sx={{ '&:hover':{ color:"#367ce5" } }}  />
      <span style={{ fontSize: 14, fontWeight: 500,}}>العودة للرئيسية</span>
    </Box>
  );
};


// ----------------------------------------------------

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useResponsive('up', 'md');
  const pathname = usePathname(); // Get current path

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Check if we're on the home page
  const isHomePage = pathname === '/ar/' || pathname === '/en/';

  console.log(pathname);
  // Drawer (for mobile) - Updated to show Back to Home when not on home page
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

      {/* Show Back to Home button when not on home page */}
      {!isHomePage && (
        <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.3)' }} >
          <BackToHomeButton />
        </Box>
      )}

      <List>
        {isHomePage ? (
          // Show all navigation items on home page
          [
            ...NAV_LINKS.map(item => ({ label: item.label, href: item.href, icon: '' })),
            ...ACTION_LINKS,
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
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {item.icon && <Iconify icon={item.icon} width={20} color="#fff" />}
                {item.label}
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          // Show only action links when not on home page
          ACTION_LINKS.map((item) => (
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
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {item.icon && <Iconify icon={item.icon} width={20} color="#fff" />}
                {item.label}
              </ListItemButton>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', minHeight: '100vh',bgcolor: '#fff',
    }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          top: 0,
          bgcolor:  isHomePage?'#367ce5':"#fff",
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              bgcolor: isHomePage ? 'rgba(255,255,255,0.15)' : '#C4D9ED33',
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
                  src={isHomePage ? "/logo/isthwaz_white_logo.svg" : "/logo/logo_blue.svg"}

                  alt="Logo"
                  width={110}
                  height={80}
                  style={{ maxWidth: '100%', height: 'auto',
                   }}
                />
                </Box>

              {/* Center (Navigation Links) - Only visible on desktop and home page */}
              {isDesktop && isHomePage && (
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
                  {NAV_LINKS.map((item) => (
                    <NavItem
                      key={item.label}
                      href={item.href}
                      label={item.label}
                      iconPath={item.iconPath}
                      isHomePage={isHomePage}
                    />
                  ))}
                </Stack>
              )}

              {/* Show Back to Home button on desktop when not on home page */}
              {isDesktop && !isHomePage && (
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                  <BackToHomeButton />
                </Box>
              )}

              {/* Left side (Buttons) */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  flexShrink: 0,
                  ml: { xs: 'auto', md: 0 },
                  mt: { xs: 1, md: 0 },
                  width: { xs: '100%', sm: 'auto' },
                  justifyContent: { xs: 'flex-end', sm: 'flex-end', md: 'flex-start' }
                }}
              >
                {/* Show Add Button only on home page or if you want to keep it always */}
                {isHomePage && (
                  <Box
                    component={NextLink}
                    href="/landing-page"
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
                      textDecoration: 'none',
                      '&:hover': {
                        bgcolor: '#0A58CA',
                      },
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>أضف</span>
                    <Iconify icon="mdi:chevron-down" width={18} color="#fff" />
                  </Box>
                )}

                {/* Notifications - You can choose to hide this too when not on home page */}
                {isHomePage && (
                  <IconButton
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                      borderRadius: '8px',
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
                    }}
                  >
                    <Iconify icon="mdi:bell-outline" width={20} />
                  </IconButton>
                )}

                {/* Vertical Divider - Hide when not on home page */}
                {isHomePage && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: 'rgba(255,255,255,0.4)',
                      height: 28,
                      mx: 1,
                      mt: 0.5,
                      display: { xs: 'none', sm: 'block' }
                    }}
                  />
                )}

                {/* Login - Keep login button visible always, or conditionally show it */}
                {isHomePage && (

                  <Box
                    component={NextLink}
                    href="/landing-page"
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
                      flexShrink: 0,
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.25)',
                      },
                    }}
                  >
                    <Iconify icon="mdi:account" width={18} color="#fff" />
                    <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>تسجيل دخول</span>
                  </Box>
                )}

              </Stack>
            </Toolbar>
          </Card>
        </Container>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            top: 0,
            height: '100%',
          },
        }}
      >
        {mobileDrawer}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, mt: '100px' }}>
        {children}
      </Box>
    </Box>
  );
}