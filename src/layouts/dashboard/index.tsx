'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { paths } from 'src/routes/paths';
import { useDebounce } from 'use-debounce';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import Iconify from 'src/components/iconify';
import { endpoints } from 'src/utils/endpoints';
import { getData } from 'src/utils/crud-fetch-api';
import { Notification } from 'src/types/notification';
import { useResponsive } from 'src/hooks/use-responsive';
import { useSearchContext } from 'src/context/SearchContext';
import AccountPopover from 'src/layouts/common/account-popover';
import LanguagePopover from 'src/layouts/common/language-popover';
import Orders from 'public/assets/icons/navbar/ic_order_icon.svg';
import Favorite from 'public/assets/icons/navbar/ic_favorite.svg';
import Location from 'public/assets/icons/navbar/ic_location_icon.svg';
import Returns from 'public/assets/icons/navbar/ic_returned_orders.svg';
import {
  Box,
  List,
  Stack,
  Drawer,
  AppBar,
  Divider,
  Toolbar,
  useTheme,
  ListItem,
  Container,
  InputBase,
  IconButton,
  ListItemIcon,
  ListItemButton,
  Link as MuiLink,
} from '@mui/material';

import NotificationPopover from '../common/notifications-popover/notification-popover';

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const t = useTranslations();
  const theme = useTheme();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [notificationItemCount, setNotificationItemCount] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { searchValue, setSearchValue } = useSearchContext();

  //  Debounce search value for 1 second
  const [debouncedSearch] = useDebounce(searchValue, 1000);

  const isDesktop = useResponsive('up', 'md');
  const isMobile = useResponsive('down', 'sm');

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  //  Navigate automatically after debounce
  useEffect(() => {
    if (typeof debouncedSearch === 'string' && debouncedSearch.trim()) {
      router.push(`${paths.controlPanel.search.view}?q=${encodeURIComponent(debouncedSearch)}`);
    }
  }, [debouncedSearch, router]);

  //  Fetch notifications
  const fetchNotificationItems = async () => {
    const response = await getData<{ totalCount: number; items: Notification[] }>(
      endpoints.Notification.list
    );

    if (!('error' in response)) {
      const items = response.data.items || [];
      const unreadCount = items.filter((item) => !item.isRead).length;
      setNotificationItemCount(unreadCount);
      setNotifications(items);
    } else {
      setNotificationItemCount(0);
      setNotifications([]);
    }
  };

  //  Fetch cart items
  const fetchCartItems = async () => {
    const response = await getData<{ items: any[] }>(endpoints.Carts.list);

    if (!('error' in response)) {
      const totalCount = response.data.items.reduce((sum, item) => sum + item.quantity, 0);
      setCartItemCount(totalCount);
    } else {
      setCartItemCount(0);
    }
  };

  useEffect(() => {
    (async () => {
      await Promise.all([fetchCartItems(), fetchNotificationItems()]);
    })();

    const handleCartUpdated = () => fetchCartItems();
    window.addEventListener('cartUpdated', handleCartUpdated);
    return () => window.removeEventListener('cartUpdated', handleCartUpdated);
  }, []);

  const navLinks = [
    { href: '/favorite', label: t('Pages.favorite.title'), icon: Favorite },
    { href: '/location', label: t('Pages.SetLocation.title1'), icon: Location },
    { href: '/order', label: t('Nav.orders'), icon: Orders },
    { href: '/return-order', label: t('Pages.Return_Order.title'), icon: Returns },
  ];

  // --- Desktop Navigation Links ---
  const renderNavLinksDesktop = (textColor = '#fff') =>
    navLinks.map((link) => (
      <MuiLink
        key={link.label}
        component={NextLink}
        href={link.href}
        underline="none"
        color="inherit"
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Box component={link.icon} />
          <span style={{ color: textColor }}>{link.label}</span>
        </Stack>
      </MuiLink>
    ));

  // --- Mobile Navigation Drawer ---
  const renderNavLinksMobile = (textColor = '#000') =>
    navLinks.map((link) => (
      <ListItem key={link.label} disablePadding>
        <ListItemButton
          component={NextLink}
          href={link.href}
          onClick={handleDrawerToggle}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            lineHeight: '2.2rem',
            px: 2,
          }}
        >
          <Box
            component="span"
            sx={{
              flex: 1,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 500,
              color: textColor,
            }}
          >
            {link.label}
          </Box>
          <Box component={link.icon} sx={{ width: 24, height: 24, flexShrink: 0 }} />
        </ListItemButton>
      </ListItem>
    ));

  const mobileDrawer = (
    <Box
      sx={{
        textAlign: 'center',
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'Green.100',
      }}
    >
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          background: 'Green.500',
        }}
      >
        <Image src="/logo/sinwan_footr_logo.svg" alt="Logo" width={150} height={110} />
      </Box>
      <Divider />
      <List sx={{ flex: 1 }}>
        {renderNavLinksMobile()}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Iconify icon="mdi:translate" width={24} />
            </ListItemIcon>
            <LanguagePopover />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: '#fff',
      }}
    >
      {/* Top info bar - Desktop only */}
      {isDesktop && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          bgcolor="Green.500"
          borderBottom={1}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.appBar + 1,
            height: '44px',
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              height="44px"
              sx={{
                overflowX: 'auto',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
              }}
            >
              {renderNavLinksDesktop()}
              <LanguagePopover />
            </Stack>
          </Container>
        </Stack>
      )}

      {/* Main AppBar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'Green.100',
          boxShadow: 0,
          top: isDesktop ? '44px' : 0,
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              height: { xs: 56, md: 64 },
              display: 'flex',
              justifyContent: 'space-between',
              gap: { xs: 1, md: 2 },
              flexWrap: isMobile ? 'wrap' : 'nowrap',
            }}
          >
            {/* Right side */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton
                color="inherit"
                edge="start"
                sx={{ display: { md: 'none' }, mr: 1 }}
                onClick={handleDrawerToggle}
              >
                <Iconify icon="eva:menu-2-fill" width={24} color="#fff" />
              </IconButton>
              <Image
                src="/logo/sinwan_footr_logo.svg"
                alt="Logo"
                width={isMobile ? 50 : 78}
                height={isMobile ? 30 : 48}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <Box
                component="span"
                sx={{
                  fontFamily: `'DIN Next LT Arabic', sans-serif`,
                  fontWeight: 700,
                  fontSize: { xs: 0, sm: '18px', md: '22px', lg: '26px' },
                  lineHeight: '38px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {t('Metadata.title')}
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                mt: 1,
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: '20px',
                px: 2,
                py: 0.5,
                width: '100%',
                bgcolor: 'rgba(255,255,255,0.2)',
              }}
            >

              <Iconify icon="eva:search-outline" width={20} color="#fff" />
              <InputBase
                placeholder="بحث"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{
                  ml: 1,
                  flex: 1,
                  fontSize: 14,
                  color: '#fff',
                  '&::placeholder': { color: 'rgba(255,255,255,0.7)' },
                  textAlign: 'right',
                }}
              />

              {/*  Clear icon (appears only when there's text) */}
              {searchValue && (
                <IconButton
                  size="small"
                  onClick={() => {
                    setSearchValue('');
                    router.push(paths.controlPanel.main);
                  }}
                  sx={{ ml: 0.5, color: '#fff' }}
                >
                  <Iconify icon="eva:close-circle-fill" width={20} />
                </IconButton>
              )}
            </Box>
            {/* Left side */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>


              <NotificationPopover
                notifications={notifications}
                count={notificationItemCount}
                onBadgeClear={() => setNotificationItemCount(0)}
              />

              <IconButton
                onClick={() => {
                  if (cartItemCount === 0) {
                    enqueueSnackbar(t('Pages.Carts.no_items_in_cart'), { variant: 'warning' });
                  } else {
                    router.push('/carts');
                  }
                }}
                sx={{ position: 'relative' }}
              >
                <Iconify icon="mdi:cart" width={26} color="#fff" />
                {cartItemCount > 0 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -4,
                      right: -4,
                      bgcolor: 'error.main',
                      color: '#fff',
                      borderRadius: '50%',
                      fontSize: 10,
                      width: 16,
                      height: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {cartItemCount}
                  </Box>
                )}
              </IconButton>
              <AccountPopover />
            </Box>
          </Toolbar>
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

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: isDesktop ? '108px' : '64px',
          p: { xs: 1, sm: 2 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
