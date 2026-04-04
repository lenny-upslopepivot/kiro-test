import { type Theme } from '@mui/material'

export const headerStyles = {
  appBar: {
    position: 'static' as const,
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
      px: { xs: 2, sm: 4 },
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
  navLinks: {
    sx: {
      display: 'flex',
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
}

export interface NavItem {
  label: string
  path: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
]
