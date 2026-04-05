import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { PageHeading, CtaBanner } from '@/components'
import { homeStyles, FEATURE_CARDS } from './home-helpers'

export const Home = () => {
  return (
    <>
      <Box sx={homeStyles.root}>
        <PageHeading />
        <Box sx={homeStyles.ctaRow}>
          <Button component={Link} to="/about" sx={homeStyles.primaryButton}>
            Learn about us
          </Button>
          <Button variant="outlined" sx={homeStyles.outlineButton}>
            View on GitHub
          </Button>
        </Box>

        <Typography sx={homeStyles.sectionTitle}>Why teams choose Upslope</Typography>
        <Box sx={homeStyles.grid}>
          {FEATURE_CARDS.map(({ icon, title, description }) => (
            <Box key={title} sx={homeStyles.card}>
              <Typography sx={homeStyles.cardIcon}>{icon}</Typography>
              <Typography sx={homeStyles.cardTitle}>{title}</Typography>
              <Typography sx={homeStyles.cardBody}>{description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <CtaBanner
        headline="Ready to ship faster?"
        subtext="Join teams already using Upslope Pivot to go from ticket to production-ready code in hours, not weeks."
        primaryCtaLabel="Get started free"
        primaryCtaHref="/signup"
        secondaryCtaLabel="Request a demo"
        secondaryCtaHref="/demo"
      />
    </>
  )
}
