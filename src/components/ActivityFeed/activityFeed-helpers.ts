import { type Theme } from '@mui/material'

// ─── Types & Interfaces ───────────────────────────────────────────────────────

export type ActivityActionType =
  | 'deployment_triggered'
  | 'integration_added'
  | 'agent_run_completed'
  | 'agent_run_failed'
  | 'invite_sent'
  | 'billing_updated'
  | 'settings_updated'
  | 'login'
  | (string & Record<never, never>) // allow unknown future action types

export interface ActivityEntry {
  timestamp: string
  user: string
  action: ActivityActionType
  details: string
}

export interface ActivityFeedProps {
  entries: ActivityEntry[]
}

// ─── Utilities ────────────────────────────────────────────────────────────────

/**
 * Returns a human-readable relative time string for a given ISO timestamp.
 * e.g. "2 hours ago", "just now", "3 days ago"
 *
 * date-fns is not installed in this project — this is a lightweight replacement.
 */
export const formatRelativeTime = (timestamp: string): string => {
  const diffMs = Date.now() - new Date(timestamp).getTime()
  const diffSeconds = Math.floor(diffMs / 1000)

  if (diffSeconds < 60) return 'just now'

  const diffMinutes = Math.floor(diffSeconds / 60)
  if (diffMinutes < 60) return diffMinutes === 1 ? '1 minute ago' : `${diffMinutes} minutes ago`

  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`

  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 30) return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`

  const diffMonths = Math.floor(diffDays / 30)
  return diffMonths === 1 ? '1 month ago' : `${diffMonths} months ago`
}

// ─── Styles ───────────────────────────────────────────────────────────────────

export const activityFeedStyles = {
  root: (theme: Theme) => ({
    bgcolor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: `${theme.shape.borderRadius * 2}px`,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  }),
  header: (theme: Theme) => ({
    px: 3,
    py: 2,
    borderBottom: `1px solid ${theme.palette.divider}`,
    flexShrink: 0,
  }),
  headerTitle: (theme: Theme) => ({
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: theme.palette.text.secondary,
  }),
  scrollArea: {
    maxHeight: 420,
    overflowY: 'auto' as const,
    overflowX: 'hidden' as const,
  },
  entry: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1.5,
    px: 3,
    py: 2,
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:last-of-type': {
      borderBottom: 'none',
    },
  }),
  iconSlot: {
    flexShrink: 0,
    mt: 0.25,
  },
  entryBody: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 0.25,
  },
  entryMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    flexWrap: 'wrap' as const,
  },
  userName: (theme: Theme) => ({
    fontSize: '0.875rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    lineHeight: 1.4,
  }),
  timestamp: (theme: Theme) => ({
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.4,
    flexShrink: 0,
  }),
  details: (theme: Theme) => ({
    fontSize: '0.8125rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
    wordBreak: 'break-word' as const,
  }),
}
