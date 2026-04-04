import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { NAV_ITEMS } from '@/components/header/header-helpers'
import { footerStyles } from './footer-helpers'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={footerStyles.root}>
      <Box sx={footerStyles.inner}>
        {/* Brand */}
        <Typography component={Link} to="/" sx={footerStyles.brand}>
          Upslope
        </Typography>

        {/* Nav links */}
        <Box sx={footerStyles.nav}>
          {NAV_ITEMS.map(({ label, path }) => (
            <Typography
              key={path}
              component={Link}
              to={path}
              sx={footerStyles.navLink}
            >
              {label}
            </Typography>
          ))}
        </Box>

        {/* Copyright */}
        <Typography component="span" sx={footerStyles.copyright}>
          © {year} Upslope. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}
