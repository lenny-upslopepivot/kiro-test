import { type Theme } from '@mui/material'

// ─── Props interface ──────────────────────────────────────────────────────────

export interface TestimonialCardProps {
  quote: string
  authorName: string
  authorTitle: string
  avatarUrl?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Derives up-to-two uppercase initials from a full name. */
export const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

// ─── Styles ───────────────────────────────────────────────────────────────────

export const testimonialCardStyles = {
  // TODO(nova): card elevation, border, and shadow treatment
  root: (theme: Theme) => ({
    p: 3,
    borderRadius: 3,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 2,
  }),

  // TODO(nova): decorative quote mark treatment (size, color, positioning)
  quoteText: (theme: Theme) => ({
    fontSize: '0.9375rem',
    lineHeight: 1.65,
    color: theme.palette.text.primary,
    fontStyle: 'italic',
  }),

  authorRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
  },

  authorName: (theme: Theme) => ({
    fontWeight: 700,
    fontSize: '0.875rem',
    color: theme.palette.text.primary,
    lineHeight: 1.3,
  }),

  authorTitle: (theme: Theme) => ({
    fontSize: '0.8125rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.3,
  }),
}
