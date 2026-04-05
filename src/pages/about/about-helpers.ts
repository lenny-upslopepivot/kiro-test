import { type Theme } from '@mui/material'
import { Target, Eye, Settings, Users, type LucideIcon } from 'lucide-react'

export interface TeamMember {
  name: string
  title: string
  initials: string
  bio: string
}

export interface ValueItem {
  icon: string
  title: string
  description: string
}

export interface AboutData {
  mission: string
  values: ValueItem[]
}

export const ICON_MAP: Record<string, LucideIcon | undefined> = {
  Target,
  Eye,
  Settings,
  Users,
}

export const aboutStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 860,
    mx: 'auto',
  },
  missionBlock: (theme: Theme) => ({
    mb: 8,
    p: { xs: 3, md: 5 },
    backgroundColor: theme.palette.mode === 'dark' ? '#1e1b4b' : '#eef2ff',
    borderRadius: 3,
    borderLeft: `4px solid ${theme.palette.primary.main}`,
  }),
  missionLabel: (theme: Theme) => ({
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    color: theme.palette.primary.main,
    mb: 1.5,
  }),
  missionText: (theme: Theme) => ({
    fontSize: { xs: '1rem', md: '1.15rem' },
    color: theme.palette.text.primary,
    lineHeight: 1.75,
    fontWeight: 400,
  }),
  sectionTitle: (theme: Theme) => ({
    fontSize: '1.3rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    mb: 3,
  }),
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: 3,
    mb: 8,
  },
  valuesList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 2,
    mb: 8,
  },
  valueItem: (theme: Theme) => ({
    display: 'flex',
    gap: 2.5,
    p: 3,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 3,
    alignItems: 'flex-start',
  }),
  valueIconWrap: (theme: Theme) => ({
    flexShrink: 0,
    width: 40,
    height: 40,
    borderRadius: 2,
    backgroundColor: theme.palette.mode === 'dark' ? '#312e81' : '#e0e7ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
  }),
  valueContent: {
    flex: 1,
  },
  valueTitle: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    mb: 0.5,
  }),
  valueBody: (theme: Theme) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.65,
  }),
}
