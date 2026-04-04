export const homeStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 860,
    mx: 'auto',
  },
  hero: {
    mb: 6,
  },
  eyebrow: {
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#6366f1',
    mb: 1.5,
  },
  headline: {
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: '-0.03em',
    color: '#0f172a',
    mb: 2,
  },
  subheadline: {
    fontSize: '1.1rem',
    color: '#475569',
    lineHeight: 1.7,
    maxWidth: 600,
    mb: 4,
  },
  ctaRow: {
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap' as const,
    mb: 8,
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
    border: '1.5px solid #cbd5e1',
    color: '#334155',
    fontWeight: 500,
    px: 3,
    py: 1.25,
    borderRadius: 2,
    textTransform: 'none' as const,
    '&:hover': { borderColor: '#94a3b8', backgroundColor: '#f8fafc' },
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
