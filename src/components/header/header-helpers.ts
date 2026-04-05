import { type Theme } from '@mui/material'

// TODO(nova): review AppBar surface token — may want a distinct header background per brand palette
export const headerStyles = {
  appBar: {
    position: 'fixed' as const,
    elevation: 0,
    sx: (theme: Theme) => ({
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
    }),
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

  // TODO(nova): replace text brand with logo asset once available
  brand: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1.25rem',
    letterSpacing: '-0.02em',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': { opacity: 0.85 },
  }),

  // Right-side container — desktop nav, CTA, theme toggle, mobile hamburger
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    ml: 'auto',
  },

  // Desktop nav — hidden below md breakpoint
  navLinks: {
    sx: {
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      gap: 0.5,
    },
  },

  navLink: (active: boolean) => (theme: Theme) => ({
    color: active ? theme.palette.text.primary : theme.palette.text.secondary,
    fontWeight: active ? 600 : 400,
    fontSize: '0.9rem',
    textDecoration: 'none',
    px: 1.5,
    py: 0.75,
    borderRadius: 1,
    transition: 'all 0.15s ease',
    backgroundColor: active ? theme.palette.action.selected : 'transparent',
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.action.hover,
    },
  }),

  // CTA button — desktop only; hidden below md breakpoint
  ctaButton: {
    display: { xs: 'none', md: 'inline-flex' },
    ml: 1,
  },

  themeToggleButton: (theme: Theme) => ({
    color: theme.palette.text.primary,
    p: 1,
    '&:hover': { backgroundColor: theme.palette.action.hover },
  }),

  // Hamburger — visible on mobile, hidden md+
  hamburgerButton: (theme: Theme) => ({
    display: { xs: 'flex', md: 'none' },
    color: theme.palette.text.primary,
    p: 1,
    '&:hover': { backgroundColor: theme.palette.action.hover },
  }),

  // ─── Mobile drawer ────────────────────────────────────────────────────────

  drawerPaper: (theme: Theme) => ({
    backgroundColor: theme.palette.background.paper,
    width: 260,
  }),

  drawerHeader: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 2,
    py: 1.5,
    borderBottom: `1px solid ${theme.palette.divider}`,
  }),

  // TODO(nova): replace text brand with logo asset once available
  drawerBrand: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1.25rem',
    letterSpacing: '-0.02em',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': { opacity: 0.85 },
  }),

  drawerCloseButton: (theme: Theme) => ({
    color: theme.palette.text.secondary,
    p: 1,
    '&:hover': { color: theme.palette.text.primary },
  }),

  drawerNavList: {
    pt: 1,
    px: 1,
  },

  drawerNavItem: (active: boolean) => (theme: Theme) => ({
    borderRadius: 1,
    mb: 0.5,
    backgroundColor: active ? theme.palette.action.selected : 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }),

  drawerNavText: (active: boolean) => (theme: Theme) => ({
    '& .MuiListItemText-primary': {
      color: active ? theme.palette.text.primary : theme.palette.text.secondary,
      fontWeight: active ? 600 : 400,
      fontSize: '0.95rem',
    },
  }),

  // CTA button wrapper inside the drawer — below the nav list
  drawerCtaWrapper: {
    px: 2,
    pt: 2,
    pb: 1,
  },
}

export interface NavItem {
  label: string
  path: string
}

// Ticket AC: Features, Pricing, About, Contact in the nav
export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

// TODO(nova): confirm final CTA copy — "Request Demo" or "Get Started"
export const CTA_LABEL = 'Get Started'
export const CTA_PATH = '/demo'
