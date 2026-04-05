import { type Theme } from '@mui/material'

export const headerStyles = {
  appBar: {
    position: 'fixed' as const,
    elevation: 0,
    sx: {
      backgroundColor: '#0f172a',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    },
  },
  toolbar: {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: { xs: 2, sm: 2, md: 4 },
      py: 1,
    },
  },
  brand: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1.25rem',
    letterSpacing: '-0.02em',
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': { opacity: 0.85 },
  }),
  // Right side container — holds desktop nav, theme toggle, and mobile hamburger
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    ml: 'auto',
  },
  // Desktop nav — hidden on mobile, visible md+
  navLinks: {
    sx: {
      display: { xs: 'none', md: 'flex' },
      gap: 1,
    },
  },
  navLink: (active: boolean) => ({
    color: active ? '#fff' : 'rgba(255,255,255,0.65)',
    fontWeight: active ? 600 : 400,
    fontSize: '0.9rem',
    textDecoration: 'none',
    px: 1.5,
    py: 0.75,
    borderRadius: 1,
    transition: 'all 0.15s ease',
    backgroundColor: active ? 'rgba(255,255,255,0.1)' : 'transparent',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(255,255,255,0.08)',
    },
  }),
  // Theme toggle button — always visible, always on the dark AppBar
  themeToggleButton: {
    color: '#fff',
    p: 1,
    '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
  },
  // Hamburger button — visible on mobile, hidden md+
  hamburgerButton: {
    display: { xs: 'flex', md: 'none' },
    color: '#fff',
    p: 1,
  },
  // Drawer paper
  drawerPaper: {
    backgroundColor: '#0f172a',
    width: 260,
  },
  // Drawer header row (brand + close button)
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 2,
    py: 1.5,
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  drawerBrand: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1.25rem',
    letterSpacing: '-0.02em',
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': { opacity: 0.85 },
  }),
  drawerCloseButton: {
    color: 'rgba(255,255,255,0.7)',
    p: 1,
    '&:hover': { color: '#fff' },
  },
  // Drawer nav list
  drawerNavList: {
    pt: 1,
    px: 1,
  },
  drawerNavItem: (active: boolean) => ({
    borderRadius: 1,
    mb: 0.5,
    backgroundColor: active ? 'rgba(255,255,255,0.1)' : 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.08)',
    },
  }),
  drawerNavText: (active: boolean) => ({
    '& .MuiListItemText-primary': {
      color: active ? '#fff' : 'rgba(255,255,255,0.65)',
      fontWeight: active ? 600 : 400,
      fontSize: '0.95rem',
    },
  }),
}

export interface NavItem {
  label: string
  path: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Demo', path: '/demo' },
]
