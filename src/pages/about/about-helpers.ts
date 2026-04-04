import { type Theme } from '@mui/material'

export const aboutStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 860,
    mx: 'auto',
  },
  sectionTitle: (theme: Theme) => ({
    fontSize: '1.3rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    mb: 3,
  }),
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
    gap: 3,
    mb: 8,
  },
  valueCard: (theme: Theme) => ({
    p: 3,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 3,
  }),
  valueTitle: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1rem',
    color: theme.palette.text.primary,
    mb: 0.75,
  }),
  valueBody: (theme: Theme) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.65,
  }),
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: 3,
  },
  teamCard: (theme: Theme) => ({
    p: 3,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 3,
    textAlign: 'center' as const,
  }),
  avatar: (theme: Theme) => ({
    width: 56,
    height: 56,
    borderRadius: '50%',
    backgroundColor: theme.palette.mode === 'dark' ? '#312e81' : '#e0e7ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
    mb: 1.5,
    fontSize: '1.5rem',
  }),
  teamName: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
  }),
  teamRole: (theme: Theme) => ({
    fontSize: '0.8rem',
    color: theme.palette.primary.main,
    fontWeight: 500,
    mb: 0.75,
  }),
  teamBio: (theme: Theme) => ({
    fontSize: '0.8rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  }),
}

export interface ValueItem {
  title: string
  description: string
}

export const VALUES: ValueItem[] = [
  {
    title: 'Precision over speed',
    description:
      'We move fast, but never at the cost of correctness. Every output is type-safe, accessible, and production-hardened before it ships.',
  },
  {
    title: 'Transparency first',
    description:
      'Our agents narrate their work. Every decision, assumption, and trade-off is logged so your team stays fully informed.',
  },
  {
    title: 'Convention over configuration',
    description:
      'We define a clear architecture once and enforce it consistently — so codebases stay predictable as they scale.',
  },
  {
    title: 'Humans in the loop',
    description:
      'Agents propose, humans approve. The pipeline accelerates your team — it does not replace your judgment.',
  },
]

export interface TeamMember {
  emoji: string
  name: string
  role: string
  bio: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    emoji: '🧠',
    name: 'Kiro Tan',
    role: 'Senior Full-Stack Engineer',
    bio: 'Leads architecture and implementation across Next.js and React projects. Obsessively precise.',
  },
  {
    emoji: '🎨',
    name: 'Mara Voss',
    role: 'Design Systems Lead',
    bio: 'Owns the component library and design tokens. Keeps the UI consistent from prototype to production.',
  },
  {
    emoji: '🔧',
    name: 'Eli Strand',
    role: 'Infrastructure & DevOps',
    bio: 'Manages CI/CD pipelines, Vercel deployments, and Firebase environments across all client projects.',
  },
]
