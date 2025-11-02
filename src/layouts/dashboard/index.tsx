
'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import { useLocale } from 'next-intl';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';
import {
  Box,
  Card,
  List,
  Stack,
  Drawer,
  AppBar, // Added for potential use, though Box/Link are currently used
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
    iconPath: '/assets/icons/navbar/main_.svg', // path for الرئيسية
  },
   {
    label: 'المشاريع المطروحة',
    href: '/projects',
    iconPath: '/assets/icons/navbar/projects.svg', // path for المشاريع المطروحة
  },
    {
    label: 'المدونة',
    href: '/blog',
    iconPath: '/assets/icons/navbar/note.svg', // path for المدونة
  },
  {
    label: 'حمل التطبيق',
    href: '/download',
    iconPath: '/assets/icons/navbar/app.svg', // path for حمل التطبيق
  },

];

// 2. Action Links (Login/Add) for both desktop and mobile
const ACTION_LINKS = [
  { label: 'أضف', href: '/add', icon: 'mdi:plus-circle-outline' }, // A separate link/action for 'Add' in mobile drawer
  { label: 'تسجيل دخول', href: '/login', icon: 'mdi:account' },
];

// Helper component to render the desktop navigation link with the icon
const NavItem = ({ href, label, iconPath }: { href: string, label: string, iconPath: string }) => {
  return (
    <MuiLink
      component={NextLink}
      href={href}
      underline="none"
      color="inherit"
      sx={{
        display: 'flex', // To align icon and text
        alignItems: 'center',
        gap: 0.5, // Space between icon and text
      }}
    >
      <Image
        src={iconPath}
        alt={`${label} icon`}
        width={20} // Adjusted to a common icon size
        height={20}
        style={{ width: '20px', height: '20px', display: 'block' }}
      />
      {label}
    </MuiLink>
  );
};

// ----------------------------------------------------

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useResponsive('up', 'md');
  const locale = useLocale();
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Drawer (for mobile) - MODIFIED to use NAV_LINKS and ACTION_LINKS
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
          ...NAV_LINKS.map(item => ({ label: item.label, href: item.href, icon: '' })), // Only label/href needed for mobile text links
          ...ACTION_LINKS, // Add Login/Add
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
                // Add some padding to simulate the design
                justifyContent: 'center',
                gap: 1,
              }}
            >
              {item.icon && <Iconify icon={item.icon} width={20} color="#fff" />}
              {item.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', minHeight: '100vh',
    }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          top: 0,
          bgcolor: '#367ce5',
          py: 2
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
                // Ensures all elements fit horizontally on desktop
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

              {/* Center (Navigation Links) - Only visible on desktop */}
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
                  {NAV_LINKS.map((item) => (
                    <NavItem
                      key={item.label}
                      href={item.href}
                      label={item.label}
                      iconPath={item.iconPath}
                    />
                  ))}
                </Stack>
              )}

              {/* Left side (Buttons) - Always visible (responsive stacking on mobile) */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                // Wrap the buttons to the next line on small screens if they don't fit
                sx={{
                  flexShrink: 0,
                  ml: { xs: 'auto', md: 0 }, // Push to the left on small screens if menu icon is on the right
                  mt: { xs: 1, md: 0 }, // Add margin top on mobile wrap
                  width: { xs: '100%', sm: 'auto' }, // Full width on extra small to fit buttons nicely
                  justifyContent: { xs: 'flex-end', sm: 'flex-end', md: 'flex-start' } // Align to end on mobile
                }}
              >

                {/* Add Button */}
                <Box
                  component={NextLink}
                  href="/add"
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
                    // Ensures button size is consistent on all devices
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>أضف</span>
                  <Iconify icon="mdi:chevron-down" width={18} color="#fff" />
                </Box>

                {/* Notifications - Hidden on small mobile to save space, but kept for this example */}
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

                {/* Vertical Divider - Hidden on mobile wrap to save space */}
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderColor: 'rgba(255,255,255,0.4)',
                    height: 28,
                    mx: 1,
                    mt: 0.5,
                    display: { xs: 'none', sm: 'block' } // Hide on small screens
                  }}
                />

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
                    flexShrink: 0,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.25)',
                    },
                  }}
                >
                  <Iconify icon="mdi:account" width={18} color="#fff" />
                  <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>تسجيل دخول</span>
                </Box>

              </Stack>
            </Toolbar>
          </Card>
        </Container>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        variant="temporary"
        anchor="right" // Changed anchor to 'right' for Arabic/RTL standard
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            // Assuming the AppBar height is around 60px + 2*py (16px) = 92px.
            // Setting a fixed top value might be tricky, let's make it responsive
            top: 0,
            height: '100%',
          },
        }}
      >
        {mobileDrawer}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, mt: '100px' }}> {/* Increased margin to account for larger AppBar */}
        {children}
      </Box>
    </Box>
  );
}