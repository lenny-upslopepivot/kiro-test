import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { pageShellStyles } from './pageShell-helpers'

export const PageShell = () => {
  return (
    <Box sx={pageShellStyles.root}>
      <Header />
      <Box component="main" sx={pageShellStyles.main}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
