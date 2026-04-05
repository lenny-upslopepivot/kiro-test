import { type Theme } from '@mui/material'
import statsJson from '@/assets/data/stats.json'

// ─── Types & Interfaces ───────────────────────────────────────────────────────

export interface StatItem {
  value: string
  label: string
  description?: string
}

export interface StatsBarProps {
  stats: StatItem[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

// Source of truth: /assets/data/stats.json
// TODO(nova): review and finalize all stat values and labels before launch
export const STATS: StatItem[] = statsJson.stats

// ─── Styles ───────────────────────────────────────────────────────────────────

export const statsBarStyles = {
  root: (theme: Theme) => ({
    width: '100%',
    py: { xs: 4, md: 6 },
    px: { xs: 2, sm: 4 },
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  }),

  inner: {
    maxWidth: 960,
    mx: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' } as const,
    alignItems: { xs: 'flex-start', md: 'center' },
    justifyContent: 'space-between',
    gap: { xs: 4, md: 0 },
  },

  statItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 0.5,
    // TODO(nova): add visual dividers between stat items on md+ — coordinate final treatment (pipe, dot, or border)
    px: { xs: 0, md: 3 },
    '&:first-of-type': { pl: 0 },
    '&:last-of-type': { pr: 0 },
  },

  value: (theme: Theme) => ({
    fontSize: { xs: '2rem', md: '2.25rem' },
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    color: theme.palette.text.primary,
  }),

  label: (theme: Theme) => ({
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
    color: theme.palette.text.secondary,
    // TODO(nova): confirm label casing treatment — uppercase vs sentence case per design system
  }),
}
