import { type Theme } from '@mui/material'

export const pricingStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 860,
    mx: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: 3,
  },
  card: (theme: Theme) => ({
    p: 4,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 3,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 2,
  }),
  planName: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1.1rem',
    color: theme.palette.text.primary,
  }),
  planPrice: (theme: Theme) => ({
    fontWeight: 800,
    fontSize: '2rem',
    color: theme.palette.primary.main,
    lineHeight: 1,
  }),
  planDescription: (theme: Theme) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  }),
}

export interface PricingPlan {
  name: string
  price: string
  description: string
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for solo developers exploring the Upslope pipeline on small projects.',
  },
  {
    name: 'Team',
    price: '$99/mo',
    description: 'For growing teams that want consistent, production-grade output across every ticket.',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full pipeline integration, dedicated support, and custom agent personas for large orgs.',
  },
]
