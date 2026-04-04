import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { headerStyles, NAV_ITEMS } from './header-helpers'

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <AppBar position={headerStyles.appBar.position} elevation={headerStyles.appBar.elevation} sx={headerStyles.appBar.sx}>
      <Toolbar sx={headerStyles.toolbar.sx}>
        <Typography
          component={Link}
          to="/"
          sx={headerStyles.brand}
        >
          Upslope
        </Typography>

        <Box sx={headerStyles.navLinks.sx}>
          {NAV_ITEMS.map(({ label, path }) => (
            <Typography
              key={path}
              component={Link}
              to={path}
              sx={headerStyles.navLink(pathname === path)}
            >
              {label}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
