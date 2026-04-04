import { type Theme } from '@mui/material'

export const contactStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 680,
    mx: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 3,
  },
  fieldLabel: (theme: Theme) => ({
    fontSize: '0.875rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    mb: 0.75,
  }),
  submitButton: (theme: Theme) => ({
    alignSelf: 'flex-start',
    px: 4,
    py: 1.25,
    fontSize: '0.95rem',
    fontWeight: 600,
    backgroundColor: theme.palette.primary.main,
    textTransform: 'none' as const,
    borderRadius: 2,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: 'none',
    },
  }),
}
