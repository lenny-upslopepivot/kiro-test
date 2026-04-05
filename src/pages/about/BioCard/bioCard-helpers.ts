import { type Theme } from '@mui/material'

export interface BioCardProps {
  name: string
  title: string
  initials: string
  bio: string
}

export const bioCardStyles = {
  card: (theme: Theme) => ({
    p: 3,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 3,
    textAlign: 'center' as const,
  }),
  avatar: (theme: Theme) => ({
    width: 56,
    height: 56,
    borderRadius: '50%',
    backgroundColor: theme.palette.mode === 'dark' ? '#312e81' : '#e0e7ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
    mb: 1.5,
  }),
  initials: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1rem',
    color: theme.palette.mode === 'dark' ? '#a5b4fc' : '#4338ca',
    lineHeight: 1,
  }),
  name: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    mb: 0.25,
  }),
  title: (theme: Theme) => ({
    fontSize: '0.8rem',
    color: theme.palette.primary.main,
    fontWeight: 500,
    mb: 1,
  }),
  bio: (theme: Theme) => ({
    fontSize: '0.8rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  }),
}
