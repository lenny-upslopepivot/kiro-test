import { type Theme } from '@mui/material'
import { type ActivityEntry, type User } from '@/components'
import type { TrendData } from '@/components'
import rawUsers from '@/assets/data/demo-users.json'
import rawActivity from '@/assets/data/demo-activity.json'

// ─── Types & Interfaces ───────────────────────────────────────────────────────

export interface DemoMetric {
  label: string
  value: string
  trend: TrendData
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const DEMO_USERS = rawUsers.users as User[]

export const DEMO_ACTIVITY = rawActivity.activity as ActivityEntry[]

export const DEMO_METRICS: DemoMetric[] = [
  {
    label: 'Total Users',
    value: '1,247',
    trend: { direction: 'up', percentage: '+12%' },
  },
  {
    label: 'Active Today',
    value: '89',
    trend: { direction: 'up', percentage: '+5%' },
  },
  {
    label: 'Revenue This Month',
    value: '$48,320',
    trend: { direction: 'up', percentage: '+18%' },
  },
  {
    label: 'Churn Rate',
    value: '2.4%',
    trend: { direction: 'down', percentage: '-0.3%' },
  },
]

// ─── Styles ───────────────────────────────────────────────────────────────────

export const demoStyles = {
  root: {
    py: { xs: 4, md: 6 },
    px: { xs: 2, sm: 4, lg: 6 },
    maxWidth: 1280,
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: { xs: 3, md: 4 },
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
    gap: { xs: 2, md: 3 },
  },
  ctaBanner: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
    gap: 2,
    p: { xs: 3, md: 4 },
    bgcolor: theme.palette.primary.main,
    borderRadius: `${theme.shape.borderRadius * 2}px`,
  }),
  ctaText: {
    color: 'white',
    fontWeight: 600,
    fontSize: { xs: '1rem', md: '1.125rem' },
  },
  ctaButton: (theme: Theme) => ({
    bgcolor: 'white',
    color: theme.palette.primary.main,
    fontWeight: 700,
    whiteSpace: 'nowrap' as const,
    '&:hover': {
      bgcolor: 'rgba(255,255,255,0.9)',
    },
  }),
}
