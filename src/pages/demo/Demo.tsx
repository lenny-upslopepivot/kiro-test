import { Box, Typography } from '@mui/material'
import { PageHeading } from '@/components'
import { demoStyles } from './demo-helpers'

export const Demo = () => {
  return (
    <Box sx={demoStyles.root}>
      <PageHeading />

      <Typography sx={demoStyles.description}>
        See the Upslope agentic pipeline in action. Book a live walkthrough or explore an
        interactive sandbox — coming soon.
      </Typography>

      {/* TODO(nova): replace with interactive demo embed or booking widget */}
      <Box sx={demoStyles.placeholder}>Demo content placeholder</Box>
    </Box>
  )
}
