import { type Theme } from '@mui/material'

// ─── Types & Interfaces ───────────────────────────────────────────────────────

export interface TrendData {
  direction: 'up' | 'down'
  percentage: string
}

export interface MetricsTileProps {
  label: string
  value: string | number
  trend?: TrendData
}

// ─── Styles ───────────────────────────────────────────────────────────────────

export const metricsTileStyles = {
  tile: (theme: Theme) => ({
    bgcolor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: `${theme.shape.borderRadius * 2}px`,
    p: { xs: 2.5, md: 3 },
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  }),
  label: (theme: Theme) => ({
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: theme.palette.text.secondary,
  }),
  value: (theme: Theme) => ({
    fontSize: { xs: '1.75rem', md: '2rem' },
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: theme.palette.text.primary,
  }),
  trendRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    mt: 0.5,
  },
  // TODO(nova): replace trendText color with theme tokens for positive/negative treatment
  // up → success color, down → error color — coordinate with Nova for color palette decision
  trendText: {
    fontSize: '0.8rem',
    fontWeight: 600,
    lineHeight: 1,
  },
  trendIcon: {
    width: 14,
    height: 14,
    flexShrink: 0,
  },
}
