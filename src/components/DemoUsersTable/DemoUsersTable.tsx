import { useMemo, useState } from 'react'
import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material'
import {
  demoUsersTableStyles,
  formatJoinedDate,
  formatStatus,
  ROWS_PER_PAGE,
  sortUsers,
  STATUS_CHIP_COLOR,
  type DemoUsersTableProps,
  type SortDirection,
  type SortField,
} from './demoUsersTable-helpers'

export const DemoUsersTable = ({ users }: DemoUsersTableProps) => {
  const [sortField, setSortField] = useState<SortField>('name')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [page, setPage] = useState(0)

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
    setPage(0)
  }

  const sortedUsers = useMemo(
    () => sortUsers(users, sortField, sortDirection),
    [users, sortField, sortDirection],
  )

  const paginatedUsers = useMemo(
    () => sortedUsers.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE),
    [sortedUsers, page],
  )

  if (users.length === 0) {
    return (
      <Box sx={demoUsersTableStyles.emptyState}>
        {/* TODO(nova): replace with designed empty state — illustration, heading, and helper copy */}
        <Typography variant="body2">No users to display.</Typography>
      </Box>
    )
  }

  return (
    <Box sx={demoUsersTableStyles.root}>
      <TableContainer>
        <Table aria-label="Demo users table">
          <TableHead>
            <TableRow sx={demoUsersTableStyles.headerRow}>
              <TableCell sx={demoUsersTableStyles.headerCell}>
                <TableSortLabel
                  active={sortField === 'name'}
                  direction={sortField === 'name' ? sortDirection : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell sx={demoUsersTableStyles.headerCell}>Email</TableCell>
              <TableCell sx={demoUsersTableStyles.headerCell}>Role</TableCell>
              <TableCell sx={demoUsersTableStyles.headerCell}>Status</TableCell>
              <TableCell sx={demoUsersTableStyles.headerCell}>
                <TableSortLabel
                  active={sortField === 'joinedDate'}
                  direction={sortField === 'joinedDate' ? sortDirection : 'asc'}
                  onClick={() => handleSort('joinedDate')}
                >
                  Joined Date
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.id} sx={demoUsersTableStyles.bodyRow}>
                <TableCell sx={demoUsersTableStyles.nameCell}>{user.name}</TableCell>
                <TableCell sx={demoUsersTableStyles.bodyCell}>{user.email}</TableCell>
                <TableCell sx={demoUsersTableStyles.bodyCell}>{user.role}</TableCell>
                <TableCell sx={demoUsersTableStyles.bodyCell}>
                  <Chip
                    label={formatStatus(user.status)}
                    color={STATUS_CHIP_COLOR[user.status]}
                    size="small"
                  />
                </TableCell>
                <TableCell sx={demoUsersTableStyles.bodyCell}>
                  {formatJoinedDate(user.joinedDate)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={sortedUsers.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
        sx={demoUsersTableStyles.pagination}
      />
    </Box>
  )
}
