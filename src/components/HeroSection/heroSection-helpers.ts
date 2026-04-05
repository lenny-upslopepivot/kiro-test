import { type Theme } from '@mui/material'

// ─── Props interface ──────────────────────────────────────────────────────────

export interface HeroSectionProps {
  headline: string
  subheadline: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

// ─── Styles ───────────────────────────────────────────────────────────────────

export const heroSectionStyles = {
  // TODO(nova): apply background treatment here — gradient, hero image, illustration, or
  // animated mesh. Consider using theme palette primary/secondary tokens as base colours.
  root: (theme: Theme) => ({
    position: 'relative' as const,
    width: '100%',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    px: { xs: 2, sm: 4, md: 6 },
    py: { xs: 10, md: 14 },
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden',
  }),

  inner: {
    maxWidth: 760,
    width: '100%',
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    gap: 3,
  },

  headline: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: { xs: '2rem', sm: '2.75rem', md: '3.25rem' },
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
    color: theme.palette.text.primary,
  }),

  subheadline: (theme: Theme) => ({
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: 1.7,
    color: theme.palette.text.secondary,
    maxWidth: 580,
    mx: 'auto',
  }),

  buttonRow: {
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    mt: 1,
  },

  primaryButton: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    px: { xs: 3.5, md: 5 },
    py: 1.5,
    fontSize: '0.9375rem',
    borderRadius: 2,
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),

  secondaryButton: (theme: Theme) => ({
    border: `1.5px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
    fontWeight: 600,
    px: { xs: 3.5, md: 5 },
    py: 1.5,
    fontSize: '0.9375rem',
    borderRadius: 2,
    textTransform: 'none' as const,
    '&:hover': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
    },
  }),
}
