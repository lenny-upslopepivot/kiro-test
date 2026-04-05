import { type Theme } from '@mui/material'

export const featuresStyles = {
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

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export const FEATURES: FeatureItem[] = [
  {
    icon: '⚡',
    title: 'Agentic Development',
    description:
      'Autonomous agents handle scaffolding, wiring, and boilerplate so your engineers stay focused on what matters.',
  },
  {
    icon: '🔒',
    title: 'Type-Safe by Default',
    description:
      'Every output is TypeScript strict — interfaces defined before implementation, Zod validation at every boundary.',
  },
  {
    icon: '🎨',
    title: 'Design System Integration',
    description:
      'Components slot directly into your existing design system. Tokens consumed, never invented.',
  },
  {
    icon: '🧩',
    title: 'Composable Architecture',
    description:
      'Modular folder structure with barrel exports keeps your codebase navigable as it scales.',
  },
  {
    icon: '🔄',
    title: 'Continuous Iteration',
    description:
      'Ship a working feature, get feedback, iterate — without accumulating technical debt at every turn.',
  },
  {
    icon: '📋',
    title: 'Full Audit Trail',
    description:
      'Every agent run produces a structured dev notes log posted directly to your Linear ticket.',
  },
]
