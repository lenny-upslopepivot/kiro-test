import { Box, Typography } from '@mui/material'
import { pageHeadingStyles } from './pageHeading-helpers'

export const PageHeading = () => {
  return (
    <Box sx={pageHeadingStyles.hero}>
      <Typography sx={pageHeadingStyles.eyebrow}>Upslope Pivot</Typography>
      <Typography variant="h1" sx={pageHeadingStyles.headline}>
        Build faster.<br />Ship with confidence.
      </Typography>
      <Typography sx={pageHeadingStyles.subheadline}>
        An agentic development platform that turns well-scoped tickets into
        production-ready code — reviewed, tested, and ready to merge.
      </Typography>
    </Box>
  )
}
