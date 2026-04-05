import { type Theme } from '@mui/material'

export const demoStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 680,
    mx: 'auto',
  },
  description: (theme: Theme) => ({
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    mb: 4,
  }),
  placeholder: (theme: Theme) => ({
    p: 6,
    border: `1px dashed ${theme.palette.divider}`,
    borderRadius: 3,
    textAlign: 'center' as const,
    color: theme.palette.text.disabled,
    fontSize: '0.875rem',
  }),
}
