
'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import Iconify from 'src/components/iconify';
import { usePathname } from 'next/navigation';
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

//  Constants
const NAV_LINKS = [
  { label: 'الرئيسية', href: '/', iconPath: '/assets/icons/navbar/main_.svg' },
  { label: 'المشاريع المطروحة', href: '/landing-page', iconPath: '/assets/icons/navbar/projects.svg' },
  { label: 'المدونة', href: '/landing-page', iconPath: '/assets/icons/navbar/note.svg' },
  { label: 'حمل التطبيق', href: '/landing-page', iconPath: '/assets/icons/navbar/app.svg' },
];

//  Components
const NavItem = ({ href, label, iconPath, isHomePage }: { href: string; label: string; iconPath: string; isHomePage: boolean }) => (
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
    <Image src={iconPath} alt={`${label} icon`} width={20} height={20} />
    {label}
  </MuiLink>
);

const BackToHomeButton = () => (
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
);

//  Main Layout
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useResponsive('up', 'md');
  const pathname = usePathname();

  // تحديد ما إذا كان يجب عرض نافبار الرئيسية (الصفحة الرئيسية + privacy policy)
  const showMainNavbar = pathname === '/' || pathname === '/ar/' || pathname === '/en/' || pathname === '/en/privacy-policy' || pathname === '/ar/privacy-policy/' || pathname === '/privacy-policy';

  // تحديد ما إذا كانت الصفحة الرئيسية الفعلية (للتنسيقات)

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // ---------------------------------------------------------------------------
  //  Drawer (mobile)
  // ---------------------------------------------------------------------------
  const mobileDrawer = (
    <Box sx={{ width: 250, bgcolor: '#0D6EFD', color: '#fff', height: '100%' }}>
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
        {showMainNavbar &&
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

  // ---------------------------------------------------------------------------
  //  Navbar
  // ---------------------------------------------------------------------------
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#fff' }}>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          py: 2,
          boxShadow: 'none',
          bgcolor: showMainNavbar ? '#367ce5' : '#fff',
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              borderRadius: '16px',
              px: 2,
              py: 0.5,
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
              bgcolor: showMainNavbar ? 'rgba(255,255,255,0.15)' : '#C4D9ED33',
              border: '1px solid rgba(255,255,255,0.3)',
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
              {/* --- Right Section (Logo + menu) --- */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {showMainNavbar && (
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' }, color: '#fff' }}
                  >
                    <Iconify icon="eva:menu-2-fill" width={24} />
                  </IconButton>
                )}

                <Image
                  src={showMainNavbar ? '/logo/isthwaz_white_logo.svg' : '/logo/logo_blue.svg'}
                  alt="Logo"
                  width={110}
                  height={80}
                  style={{ height: 'auto', maxWidth: '100%' }}
                />
              </Box>

              {/* --- Center (Nav links on home page desktop) --- */}
              {isDesktop && showMainNavbar && (
                <Stack
                  direction="row"
                  spacing={{ xs: 1, sm: 2, md: 3 }}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexGrow: 1, color: '#fff', fontSize: { xs: 13, sm: 14, md: 15 }, fontWeight: 500 }}
                >
                  {NAV_LINKS.map((item) => (
                    <NavItem key={item.label} {...item} isHomePage={showMainNavbar} />
                  ))}
                </Stack>
              )}

              {/* --- Show Back to Home (when not main navbar) --- */}
              {!showMainNavbar && (
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                  <BackToHomeButton />
                </Box>
              )}

              {/* --- Left Section (Buttons) --- */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  flexShrink: 0,
                  ml: { xs: 'auto', md: 0 },
                  mt: { xs: 1, md: 0 },
                  width: { xs: '100%', sm: 'auto' },
                  justifyContent: { xs: 'flex-end', md: 'flex-start' },
                }}
              >
                {showMainNavbar && (
                  <>
                    {/* Add Button */}
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

                    {/* Divider */}
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        borderColor: 'rgba(255,255,255,0.4)',
                        height: 28,
                        mx: 1,
                        mt: 0.5,
                        display: { xs: 'none', sm: 'block' },
                      }}
                    />

                    {/* Login Button */}
                    <Box
                      component={NextLink}
                      href="/landing-page"
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.2)',
                        px: 2,
                        py: 0.7,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.8,
                        textDecoration: 'none',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.25)' },
                      }}
                    >
                      <Iconify icon="mdi:account" width={18} color="#fff" />
                      <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>تسجيل دخول</span>
                    </Box>
                  </>
                )}
              </Stack>
            </Toolbar>
          </Card>
        </Container>
      </AppBar>

      {/* --- Drawer (Mobile) --- */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        {mobileDrawer}
      </Drawer>

      {/* --- Main Content --- */}
      <Box component="main" sx={{ flexGrow: 1, mt: '100px' }}>
        {children}
      </Box>
    </Box>
  );
}
