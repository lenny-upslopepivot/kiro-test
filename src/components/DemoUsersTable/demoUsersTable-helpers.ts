import { type Theme } from '@mui/material'

// ─── Types & Interfaces ───────────────────────────────────────────────────────

export type UserStatus = 'active' | 'inactive' | 'suspended'
export type UserRole = 'admin' | 'member' | 'billing' | 'viewer' | (string & Record<never, never>)
export type SortField = 'name' | 'joinedDate'
export type SortDirection = 'asc' | 'desc'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  joinedDate: string
}

export interface DemoUsersTableProps {
  users: User[]
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const ROWS_PER_PAGE = 5

/**
 * Maps a user status to its corresponding MUI Chip color prop.
 * active   → success (green)
 * inactive → default (grey)
 * suspended → warning (amber)
 */
export const STATUS_CHIP_COLOR: Record<UserStatus, 'success' | 'default' | 'warning'> = {
  active: 'success',
  inactive: 'default',
  suspended: 'warning',
}

// ─── Utilities ────────────────────────────────────────────────────────────────

export const formatJoinedDate = (isoDate: string): string =>
  new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

export const formatStatus = (status: string): string =>
  status.charAt(0).toUpperCase() + status.slice(1)

export const sortUsers = (users: User[], field: SortField, direction: SortDirection): User[] =>
  [...users].sort((a, b) => {
    const comparison =
      field === 'name'
        ? a.name.localeCompare(b.name)
        : new Date(a.joinedDate).getTime() - new Date(b.joinedDate).getTime()
    return direction === 'asc' ? comparison : -comparison
  })

// ─── Styles ───────────────────────────────────────────────────────────────────

export const demoUsersTableStyles = {
  root: (theme: Theme) => ({
    bgcolor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: `${theme.shape.borderRadius * 2}px`,
    overflow: 'hidden',
  }),
  headerRow: (theme: Theme) => ({
    bgcolor:
      theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[50],
  }),
  headerCell: (theme: Theme) => ({
    fontSize: '0.6875rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: theme.palette.text.secondary,
    borderBottom: `1px solid ${theme.palette.divider}`,
    whiteSpace: 'nowrap' as const,
    py: 1.5,
  }),
  bodyRow: (theme: Theme) => ({
    transition: 'background-color 150ms ease',
    '&:hover': {
      bgcolor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      borderBottom: 0,
    },
  }),
  bodyCell: (theme: Theme) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.divider}`,
    py: 1.5,
  }),
  nameCell: (theme: Theme) => ({
    fontSize: '0.875rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.divider}`,
    py: 1.5,
  }),
  pagination: (theme: Theme) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    '& .MuiTablePagination-toolbar': {
      minHeight: 48,
    },
  }),
  emptyState: (theme: Theme) => ({
    p: 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    minHeight: 200,
    color: theme.palette.text.secondary,
  }),
}
