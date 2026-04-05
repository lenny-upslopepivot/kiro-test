import { Box, Typography } from '@mui/material'
import { PageHeading, CtaBanner } from '@/components'
import { featuresStyles, FEATURES } from './features-helpers'

export const Features = () => {
  return (
    <>
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

      <CtaBanner
        headline="See it in action"
        subtext="Every feature you just read about is live and in use today. Get your first ticket shipped in under a day."
        primaryCtaLabel="Get started free"
        primaryCtaHref="/signup"
        secondaryCtaLabel="Request a demo"
        secondaryCtaHref="/demo"
      />
    </>
  )
}
