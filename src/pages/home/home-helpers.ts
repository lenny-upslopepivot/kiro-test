import { type Theme } from '@mui/material'

export const homeStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 860,
    mx: 'auto',
  },
  ctaRow: {
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap' as const,
    mb: 6,
  },
  primaryButton: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    fontWeight: 600,
    px: 3,
    py: 1.25,
    borderRadius: 2,
    textTransform: 'none' as const,
    '&:hover': { backgroundColor: theme.palette.primary.dark },
  }),
  outlineButton: (theme: Theme) => ({
    border: `1.5px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
    fontWeight: 500,
    px: 3,
    py: 1.25,
    borderRadius: 2,
    textTransform: 'none' as const,
    '&:hover': {
      borderColor: theme.palette.mode === 'dark' ? '#64748b' : '#475569',
      backgroundColor: theme.palette.action.hover,
    },
  }),
  sectionTitle: (theme: Theme) => ({
    fontSize: '1.4rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    mb: 3,
  }),
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: 3,
  },
  card: (theme: Theme) => ({
    p: 3,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 3,
    backgroundColor: theme.palette.background.paper,
  }),
  cardIcon: {
    fontSize: '1.75rem',
    mb: 1,
  },
  cardTitle: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1rem',
    color: theme.palette.text.primary,
    mb: 0.5,
  }),
  cardBody: (theme: Theme) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  }),
}

export interface FeatureCard {
  icon: string
  title: string
  description: string
}

export const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: '⚡',
    title: 'Rapid Iteration',
    description:
      'Ship features in hours, not weeks. Our agentic pipeline cuts boilerplate and keeps your team focused on product decisions.',
  },
  {
    icon: '🔒',
    title: 'Production-Grade Quality',
    description:
      'Every output follows strict TypeScript, accessibility, and performance standards — not just "good enough for a demo".',
  },
  {
    icon: '🧩',
    title: 'Composable by Design',
    description:
      'Components are built to slot into any design system. Swap tokens, override styles, extend behaviour — no rewrites needed.',
  },
]
