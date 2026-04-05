import { type Theme } from '@mui/material'

export const pageShellStyles = {
  root: (theme: Theme) => ({
    minHeight: '100vh',
    bgcolor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
  }),
  // Spacer that mirrors the AppBar height, required when AppBar is position="fixed"
  headerSpacer: {
    py: 1,
  },
  main: {
    flex: 1,
  },
}
