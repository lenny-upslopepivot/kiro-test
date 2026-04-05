import { type Theme } from '@mui/material'

// ─── Props interface ──────────────────────────────────────────────────────────

export interface PricingCardProps {
  planName: string
  price: string
  billingPeriod: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
}

// ─── Styles ───────────────────────────────────────────────────────────────────

export const pricingCardStyles = {
  root: (highlighted: boolean) => (theme: Theme) => ({
    p: 4,
    // TODO(nova): review highlight border color and card elevation treatment
    border: highlighted
      ? `2px solid ${theme.palette.primary.main}`
      : `1px solid ${theme.palette.divider}`,
    borderRadius: 3,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 2,
    position: 'relative' as const,
    transition: 'box-shadow 0.2s ease',
  }),

  badge: (theme: Theme) => ({
    position: 'absolute' as const,
    top: -14,
    left: '50%',
    transform: 'translateX(-50%)',
    // TODO(nova): badge background and typography treatment
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    px: 1.5,
    py: 0.5,
    borderRadius: 5,
    whiteSpace: 'nowrap' as const,
  }),

  planName: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1.1rem',
    color: theme.palette.text.primary,
  }),

  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 0.75,
  },

  price: (theme: Theme) => ({
    fontWeight: 800,
    fontSize: '2rem',
    color: theme.palette.primary.main,
    lineHeight: 1,
  }),

  billingPeriod: (theme: Theme) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
  }),

  featureList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 1,
    flexGrow: 1,
  },

  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },

  featureIcon: (theme: Theme) => ({
    color: theme.palette.primary.main,
    flexShrink: 0,
  }),

  featureText: (theme: Theme) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
  }),

  cta: {
    mt: 2,
  },
}
