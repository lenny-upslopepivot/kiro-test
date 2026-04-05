import { type Theme } from '@mui/material'

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface PricingPlan {
  planName: string
  price: string
  billingPeriod: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
}

export interface FaqEntry {
  question: string
  answer: string
}

// ─── Styles ───────────────────────────────────────────────────────────────────

export const pricingStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 960,
    mx: 'auto',
  },

  sectionHeading: {
    textAlign: 'center' as const,
    mb: 8,
  },

  headline: (theme: Theme) => ({
    fontWeight: 800,
    fontSize: { xs: '2rem', md: '2.75rem' },
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
    color: theme.palette.text.primary,
    mb: 1.5,
  }),

  subheadline: (theme: Theme) => ({
    fontSize: '1.1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    maxWidth: 520,
    mx: 'auto',
  }),

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: 3,
  },

  faqSection: {
    mt: { xs: 8, md: 12 },
  },

  faqHeadline: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: { xs: '1.5rem', md: '2rem' },
    letterSpacing: '-0.02em',
    color: theme.palette.text.primary,
    mb: 4,
    textAlign: 'center' as const,
  }),

  accordion: (theme: Theme) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '8px !important',
    mb: 1.5,
    boxShadow: 'none',
    '&:before': { display: 'none' },
    '&.Mui-expanded': { mt: 0 },
  }),

  accordionSummary: (theme: Theme) => ({
    fontWeight: 600,
    fontSize: '0.9875rem',
    color: theme.palette.text.primary,
    lineHeight: 1.5,
    px: 3,
    py: 0.5,
  }),

  accordionDetails: (theme: Theme) => ({
    fontSize: '0.9375rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    px: 3,
    pb: 2.5,
    pt: 0,
  }),
}
