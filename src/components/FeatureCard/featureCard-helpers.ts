import type { ReactNode } from 'react'
import { type Theme } from '@mui/material'

// ─── Props interface ──────────────────────────────────────────────────────────

export interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

// ─── Styles ───────────────────────────────────────────────────────────────────

export const featureCardStyles = {
  // TODO(nova): final card elevation, border treatment, and background — coordinate with design tokens
  root: (theme: Theme) => ({
    height: '100%',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'box-shadow 0.2s ease',
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
  }),

  content: {
    p: 3,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 1.5,
    // Prevents MUI CardContent from adding extra bottom padding on the last child
    '&:last-child': {
      pb: 3,
    },
  },

  // TODO(nova): finalize icon wrapper size, background chip, and color treatment — coordinate final icon set
  iconWrapper: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    mb: 0.5,
  }),

  title: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '1.0625rem',
    lineHeight: 1.35,
    color: theme.palette.text.primary,
  }),

  description: (theme: Theme) => ({
    fontSize: '0.875rem',
    lineHeight: 1.65,
    color: theme.palette.text.secondary,
  }),
}
