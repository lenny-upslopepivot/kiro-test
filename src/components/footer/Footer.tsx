import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { FOOTER_NAV_ITEMS, footerStyles } from './footer-helpers'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={footerStyles.root}>
      {/* TODO(nova): finalise multi-column desktop layout — brand+tagline col, nav col, social/cta col */}
      <Box sx={footerStyles.inner}>

        {/* Brand + tagline */}
        <Box sx={footerStyles.brandGroup}>
          <Typography component={Link} to="/" sx={footerStyles.brand}>
            Upslope
          </Typography>
          {/* TODO(nova): replace with final tagline copy */}
          <Typography sx={footerStyles.tagline}>
            Smarter tools for modern teams.
          </Typography>
        </Box>

        {/* Nav links */}
        <Box sx={footerStyles.nav}>
          {FOOTER_NAV_ITEMS.map(({ label, path }) => (
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
