import { type Theme } from '@mui/material'

export const notFoundStyles = {
  root: {
    py: { xs: 10, md: 16 },
    px: { xs: 2, sm: 4 },
    maxWidth: 480,
    mx: 'auto',
    textAlign: 'center' as const,
  },
  code: (theme: Theme) => ({
    fontSize: '5rem',
    fontWeight: 800,
    lineHeight: 1,
    color: theme.palette.primary.main,
    mb: 2,
  }),
  heading: (theme: Theme) => ({
    fontSize: '1.5rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    mb: 1.5,
  }),
  body: (theme: Theme) => ({
    fontSize: '0.95rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.65,
    mb: 4,
  }),
  link: (theme: Theme) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: '0.95rem',
    textDecoration: 'none',
    '&:hover': { textDecoration: 'underline' },
  }),
}
