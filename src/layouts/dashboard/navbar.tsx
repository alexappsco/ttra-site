
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
  Divider,
  ListItem,
  Container,
  IconButton,
  ListItemButton,
  Link as MuiLink,
} from '@mui/material';

// ------------------------------------------------------
// Constants
// ------------------------------------------------------
const NAV_LINKS = [
  { label: 'الرئيسية', href: '/', iconPath: '/assets/icons/navbar/main_.svg' },
  { label: 'المشاريع المطروحة', href: '/landing-page', iconPath: '/assets/icons/navbar/projects.svg' },
  { label: 'المدونة', href: '/landing-page', iconPath: '/assets/icons/navbar/note.svg' },
  { label: 'حمل التطبيق', href: '/landing-page', iconPath: '/assets/icons/navbar/app.svg' },
];

// ------------------------------------------------------
// Sub Components
// ------------------------------------------------------
const NavItem = ({
  href,
  label,
  iconPath,
  isHome,
  isAuth,
  isLanding
}: {
  href: string;
  label: string;
  iconPath: string;
  isHome: boolean;
  isAuth: boolean;
  isLanding: boolean;
}) => {
  // Determine colors based on props
  const textColor = (isHome && isAuth) ? '#000' : (isHome ? '#fff' : '#000');
  const iconFilter = (isHome && isAuth) ? 'invert(0) brightness(1)' : (isHome ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)');

  return (
    <MuiLink
      component={NextLink}
      href={href}
      underline="none"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        color: textColor,
        fontSize: { xs: 13, sm: 14, md: 15 },
        fontWeight: 500,
        '&:hover': {
          color: (isHome && isAuth) ? '#367ce5' : (isHome ? 'rgba(255,255,255,0.8)' : '#367ce5'),
        },
      }}
    >
      <Image
        src={iconPath}
        alt={`${label} icon`}
        width={20}
        height={20}
        style={{
          filter: iconFilter,
          transition: 'filter 0.3s ease'
        }}
      />
      {label}
    </MuiLink>
  );
};

const BackToHomeButton = ({ logo }: { logo: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 2 }}>

    <Image src={logo} alt="Logo" width={80} height={60} />
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
        color: '#fff',
        '&:hover': { bgcolor: '#fafafa', color: '#367ce5', border: '1px solid #367ce5' },
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 500 }}>العودة للرئيسية</span>
      <Iconify icon="mdi:arrow-left" width={20} />
    </Box>
  </Box>
);

// ------------------------------------------------------
// Main Navbar
// ------------------------------------------------------
interface NavbarProps {
  isHome?: boolean;
  isAuth?: boolean;
  isLanding?: boolean;
}

export default function Navbar({ isHome = false, isAuth = false, isLanding = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useResponsive('up', 'md');

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Determine logo based on props
  const getLogo = () => {
    if (isAuth) return '/logo/black_icon.svg';
    if (isHome) return '/logo/isthwaz_white_logo.svg';
    if (isLanding) return '/logo/logo_blue.svg';
    return '/logo/logo_blue.svg';
  };

  // Determine background colors
  const getBackgroundColor = () => {
    if (isAuth ) return 'Transparent';
    if (isHome) return '#367ce5';
    if (isLanding) return '#fff'; // White background for landing page
    return '#fff';
  };

  const getCardBackground = () => {
    if (isHome && isAuth) return '#C4D9ED33';
    if (isHome) return 'rgba(255,255,255,0.15)';
    if (isLanding) return '#fff'; // White background for landing page
    return '#C4D9ED33';
  };

  // For landing page: show only logo and back button
  const showNavigation = (isHome || isAuth) && !isLanding;
  const showLoginSection = (isHome && isAuth) || (isHome && !isLanding);
  const showBackButton = !isHome && !isAuth && !isLanding;
  const showLandingLayout = isLanding;

  const mobileDrawer = (
    <Box sx={{ width: 250, bgcolor: isAuth?'#000':'#0D6EFD', color:  isAuth?'#000':'#0D6EFD', height: '100%' }}>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.3)',
        }}
      >
        <Image src={getLogo()} alt="Logo" width={100} height={80} />
      </Box>
      <List>
        {showNavigation &&
          NAV_LINKS.map((item) => (
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
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          py: 2,
          boxShadow: 'none',
          bgcolor: getBackgroundColor(),
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              borderRadius: '16px',
              px: 2,
              py: 0.5,
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              backdropFilter: showLandingLayout ? 'none' : 'blur(10px)', // Remove blur for landing
              bgcolor: getCardBackground(),
              border: showLandingLayout ? '1px solid #e0e0e0' : '1px solid rgba(255,255,255,0.3)',
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
              {/* For landing page: Show BackToHomeButton with space-between layout */}
              {showLandingLayout ? (
                <Box sx={{ width: '100%' }}>
                  <BackToHomeButton logo={getLogo()} />
                </Box>
              ) : (
                <>
                  {/* Right Section */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {showNavigation && (
                      <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                          display:  isDesktop?'none':'left' ,
                          color: (isHome ) ? '#fff' :'#000'
                        }}
                      >
                        <Iconify icon="eva:menu-2-fill" width={24} />
                      </IconButton>
                    )}

                    {/* Show regular logo for non-landing pages */}
                    {showBackButton ? (
                      <BackToHomeButton logo={getLogo()} />
                    ) : (
                      <Image
                        src={getLogo()}
                        alt="Logo"
                        width={110}
                        height={80}
                        style={{ height: 'auto', maxWidth: '100%' }}
                      />
                    )}
                  </Box>

                  {/* Center Nav - Hidden for landing page */}
                  {isDesktop && showNavigation && (
                    <Stack
                      direction="row"
                      spacing={{ xs: 1, sm: 2, md: 3 }}
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        flexGrow: 1,
                        fontSize: { xs: 13, sm: 14, md: 15 },
                        fontWeight: 500,
                      }}
                    >
                      {NAV_LINKS.map((item) => (
                        <NavItem
                          key={item.label}
                          {...item}
                          isHome={isHome}
                          isAuth={isAuth}
                          isLanding={isLanding}
                        />
                      ))}
                    </Stack>
                  )}

                  {/* Left Section - Login & Notification - Hidden for landing page */}
                  {showLoginSection && !isLanding && (
                    <Stack direction="row" alignItems="center" spacing={1}>
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
                          height: 40,
                          textDecoration: 'none',
                          '&:hover': { bgcolor: '#0A58CA' },
                        }}
                      >
                        <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>أضف</span>
                        <Iconify icon="mdi:chevron-down" width={18} color="#fff" />
                      </Box>
                      <IconButton
                        sx={{
                          bgcolor: (isHome && isAuth) ? '#fff' : 'rgba(255,255,255,0.2)',
                          borderRadius: '8px',
                          width: 40,
                          height: 40,
                          '&:hover': { bgcolor: (isHome && isAuth) ? '#f5f5f5' : 'rgba(255,255,255,0.3)' },
                        }}
                      >
                        <Iconify
                          icon="mdi:bell-outline"
                          width={20}
                          color={(isHome && isAuth) ? '#367ce5' : '#fff'}
                        />
                      </IconButton>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          bgcolor: (isHome && isAuth) ? '#367ce5' : 'rgba(255,255,255,0.2)',
                          height: 28,
                          mx: 1,
                          mt: 0.5,
                          display: { xs: 'none', sm: 'block' },
                        }}
                      />
                      <Box
                        component={NextLink}
                        href="/landing-page"
                        sx={{
                          bgcolor: (isHome && isAuth) ? '#fff' : 'rgba(255,255,255,0.2)',
                          px: 2,
                          py: 0.7,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.8,
                          textDecoration: 'none',
                          '&:hover': {
                            bgcolor: (isHome && isAuth) ? '#f5f5f5' : 'rgba(255,255,255,0.25)'
                          },
                        }}
                      >
                        <Iconify
                          icon="mdi:account"
                          width={18}
                          color={(isHome && isAuth) ? '#367ce5' : '#fff'}
                        />
                        <span style={{
                          color: (isHome && isAuth) ? '#367ce5' : '#fff',
                          fontSize: 14,
                          fontWeight: 500
                        }}>
                          تسجيل دخول
                        </span>
                      </Box>
                    </Stack>
                  )}
                </>
              )}
            </Toolbar>
          </Card>
        </Container>
      </AppBar>

      {/* Drawer for Mobile - Hidden for landing page */}
      {!isLanding && (
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: 250, boxSizing: 'border-box' },
          }}
        >
          {mobileDrawer}
        </Drawer>
      )}
    </>
  );
}