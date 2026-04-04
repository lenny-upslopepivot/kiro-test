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
  primaryButton: {
    backgroundColor: '#6366f1',
    color: '#fff',
    fontWeight: 600,
    px: 3,
    py: 1.25,
    borderRadius: 2,
    textTransform: 'none' as const,
    '&:hover': { backgroundColor: '#4f46e5' },
  },
  outlineButton: {
    border: '1.5px solid #334155',
    color: '#1e293b',
    fontWeight: 500,
    px: 3,
    py: 1.25,
    borderRadius: 2,
    textTransform: 'none' as const,
    '&:hover': { borderColor: '#475569', backgroundColor: '#f1f5f9' },
  },
  sectionTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#0f172a',
    mb: 3,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: 3,
  },
  card: {
    p: 3,
    border: '1px solid #e2e8f0',
    borderRadius: 3,
    backgroundColor: '#f8fafc',
  },
  cardIcon: {
    fontSize: '1.75rem',
    mb: 1,
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: '1rem',
    color: '#1e293b',
    mb: 0.5,
  },
  cardBody: {
    fontSize: '0.875rem',
    color: '#64748b',
    lineHeight: 1.6,
  },
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
