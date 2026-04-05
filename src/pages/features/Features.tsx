import { Box, Typography } from '@mui/material'
import { PageHeading } from '@/components'
import { featuresStyles, FEATURES } from './features-helpers'

export const Features = () => {
  return (
    <Box sx={featuresStyles.root}>
      <PageHeading />

      <Box sx={featuresStyles.grid}>
        {FEATURES.map(({ icon, title, description }) => (
          <Box key={title} sx={featuresStyles.card}>
            <Typography sx={featuresStyles.cardIcon}>{icon}</Typography>
            <Typography sx={featuresStyles.cardTitle}>{title}</Typography>
            <Typography sx={featuresStyles.cardBody}>{description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
