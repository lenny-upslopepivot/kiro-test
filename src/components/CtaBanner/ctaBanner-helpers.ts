import { type Theme } from '@mui/material'

// ─── Props interface ──────────────────────────────────────────────────────────

export interface CtaBannerProps {
  headline: string
  subtext: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

// ─── Styles ───────────────────────────────────────────────────────────────────

export const ctaBannerStyles = {
  // TODO(nova): final background treatment — consider gradient, section image overlay, or alternate brand color
  root: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.main,
    py: { xs: 8, md: 12 },
    px: { xs: 2, sm: 4 },
    textAlign: 'center' as const,
  }),

  inner: {
    maxWidth: 640,
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: 2,
  },

  headline: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: { xs: '1.75rem', md: '2.25rem' },
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
    color: theme.palette.primary.contrastText,
  }),

  subtext: (theme: Theme) => ({
    fontSize: '1rem',
    lineHeight: 1.6,
    color: theme.palette.primary.contrastText,
    opacity: 0.85,
    maxWidth: 520,
  }),

  buttonRow: {
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    mt: 1,
  },

  primaryButton: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.dark,
    fontWeight: 700,
    px: 4,
    py: 1.25,
    borderRadius: 2,
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  }),

  secondaryButton: (theme: Theme) => ({
    border: `1.5px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
    px: 4,
    py: 1.25,
    borderRadius: 2,
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      borderColor: theme.palette.primary.contrastText,
    },
  }),
}
