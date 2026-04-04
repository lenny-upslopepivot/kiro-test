import { type Theme } from '@mui/material'

export const footerStyles = {
  root: {
    backgroundColor: '#0f172a',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    px: { xs: 2, sm: 4 },
    py: { xs: 4, md: 6 },
  },
  inner: {
    maxWidth: 960,
    mx: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' } as const,
    alignItems: { xs: 'flex-start', md: 'center' },
    justifyContent: 'space-between',
    gap: { xs: 3, md: 0 },
  },
  brand: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1.15rem',
    letterSpacing: '-0.02em',
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': { opacity: 0.85 },
  }),
  nav: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 1,
  },
  navLink: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.875rem',
    textDecoration: 'none',
    px: 1.25,
    py: 0.5,
    borderRadius: 1,
    transition: 'color 0.15s ease',
    '&:hover': {
      color: '#fff',
    },
  },
  copyright: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '0.8rem',
    mt: { xs: 3, md: 0 },
    alignSelf: { xs: 'flex-start', md: 'center' },
    display: 'block',
  },
}
