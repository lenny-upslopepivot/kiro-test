import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { notFoundStyles } from './notFound-helpers'

export const NotFound = () => {
  return (
    <Box sx={notFoundStyles.root}>
      <Typography sx={notFoundStyles.code}>404</Typography>
      <Typography sx={notFoundStyles.heading}>Page not found</Typography>
      <Typography sx={notFoundStyles.body}>
        The page you are looking for does not exist or has been moved.
      </Typography>
      <Typography component={Link} to="/" sx={notFoundStyles.link}>
        ← Back to home
      </Typography>
    </Box>
  )
}
