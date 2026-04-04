import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { homeStyles, FEATURE_CARDS } from './home-helpers'

export const Home = () => {
  return (
    <Box sx={homeStyles.root}>
      <Box sx={homeStyles.hero}>
        <Typography sx={homeStyles.eyebrow}>Upslope Pivot</Typography>
        <Typography variant="h1" sx={homeStyles.headline}>
          Build faster.<br />Ship with confidence.
        </Typography>
        <Typography sx={homeStyles.subheadline}>
          An agentic development platform that turns well-scoped tickets into
          production-ready code — reviewed, tested, and ready to merge.
        </Typography>
        <Box sx={homeStyles.ctaRow}>
          <Button component={Link} to="/about" sx={homeStyles.primaryButton}>
            Learn about us
          </Button>
          <Button variant="outlined" sx={homeStyles.outlineButton}>
            View on GitHub
          </Button>
        </Box>
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
  )
}
