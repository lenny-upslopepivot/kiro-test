import { type Theme } from '@mui/material'

export const pageShellStyles = {
  root: (theme: Theme) => ({
    minHeight: '100vh',
    bgcolor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
  }),
  main: {
    flex: 1,
  },
}
