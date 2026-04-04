import { useState } from 'react'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { headerStyles, NAV_ITEMS } from './header-helpers'

export const Header = () => {
  const { pathname } = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <AppBar
        position={headerStyles.appBar.position}
        elevation={headerStyles.appBar.elevation}
        sx={headerStyles.appBar.sx}
      >
        <Toolbar sx={headerStyles.toolbar.sx}>
          {/* Brand */}
          <Typography component={Link} to="/" sx={headerStyles.brand}>
            Upslope
          </Typography>

          {/* Desktop nav — hidden on mobile */}
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

          {/* Hamburger — hidden on desktop */}
          <IconButton
            aria-label="Open navigation menu"
            onClick={openDrawer}
            sx={headerStyles.hamburgerButton}
          >
            <Menu size={22} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        slotProps={{ paper: { sx: headerStyles.drawerPaper } }}
      >
        {/* Drawer header */}
        <Box sx={headerStyles.drawerHeader}>
          <Typography
            component={Link}
            to="/"
            onClick={closeDrawer}
            sx={headerStyles.drawerBrand}
          >
            Upslope
          </Typography>
          <IconButton
            aria-label="Close navigation menu"
            onClick={closeDrawer}
            sx={headerStyles.drawerCloseButton}
          >
            <X size={20} />
          </IconButton>
        </Box>

        {/* Drawer nav links */}
        <List sx={headerStyles.drawerNavList}>
          {NAV_ITEMS.map(({ label, path }) => {
            const active = pathname === path
            return (
              <ListItem key={path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={path}
                  onClick={closeDrawer}
                  sx={headerStyles.drawerNavItem(active)}
                >
                  <ListItemText primary={label} sx={headerStyles.drawerNavText(active)} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
    </>
  )
}
