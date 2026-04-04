'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useLocale } from 'next-intl';
import LayoutContainer from 'src/sections/home/views/LayoutContainer';

export default function MainHeader() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // الترجمة للروابط
  const navItems = [
    { label: isArabic ? 'الرئيسية' : 'Home', href: '/' },
    { label: isArabic ? 'الخدمات' : 'Services', href: '#services' },
    { label: isArabic ? 'من نحن' : 'About Us', href: '#about' },
    { label: isArabic ? 'تواصل معنا' : 'Contact Us', href: '#contact' },
  ];

  // دالة التمرير السلس
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setOpen(false); // إغلاق القائمة في الموبايل
      }
    }
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'rgba(57, 20, 98, 1)',
      }}
    >
      <LayoutContainer>
        <Toolbar
          disableGutters
          sx={{
            height: 100,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/logo/my-books.png"
                alt="logo"
                width={120}
                height={40}
                style={{ objectFit: 'contain', height: 'auto' }}
                priority
              />
            </Box>
          </Link>

          {/* Desktop Nav */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#fff',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:hover': {
                      color: 'rgba(212, 175, 55, 1)',
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Stack>

          {/* CTA + Mobile Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                borderRadius: '999px',
                px: 4,
                py: 1,
                fontWeight: 600,
                fontSize: 15,
                background: 'linear-gradient(135deg, rgba(212,175,55,1) 0%, rgba(255,215,100,1) 100%)',
                color: '#000',
                boxShadow: '0 4px 14px rgba(212,175,55,0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(255,215,100,1) 0%, rgba(212,175,55,1) 100%)',
                  boxShadow: '0 6px 20px rgba(212,175,55,0.6)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {isArabic ? 'ابدأ الآن' : 'Start Now'}
            </Button>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </LayoutContainer>

      {/* Mobile Drawer */}
      <Drawer anchor={isArabic ? "left" : "right"} open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                onClick={(e: any) => handleScroll(e, item.href)}
              >
                <ListItemText primary={item.label} sx={{ textAlign: isArabic ? 'right' : 'left' }} />
              </ListItemButton>
            ))}
          </List>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              borderRadius: '999px',
              background: 'linear-gradient(135deg, rgba(212,175,55,1) 0%, rgba(255,215,100,1) 100%)',
              color: '#000',
            }}
          >
            {isArabic ? 'ابدأ الآن' : 'Start Now'}
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}