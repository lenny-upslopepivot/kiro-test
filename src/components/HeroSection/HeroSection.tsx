import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { heroSectionStyles, type HeroSectionProps } from './heroSection-helpers'

export const HeroSection = ({
  headline,
  subheadline,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroSectionProps) => {
  return (
    <Box component="section" sx={heroSectionStyles.root}>
      <Box sx={heroSectionStyles.inner}>
        <Typography component="h1" sx={heroSectionStyles.headline}>
          {headline}
        </Typography>

        <Typography sx={heroSectionStyles.subheadline}>{subheadline}</Typography>

        <Box sx={heroSectionStyles.buttonRow}>
          <Button
            component={Link}
            to={primaryCtaHref}
            variant="contained"
            disableElevation
            sx={heroSectionStyles.primaryButton}
          >
            {primaryCtaLabel}
          </Button>

          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              component={Link}
              to={secondaryCtaHref}
              variant="outlined"
              sx={heroSectionStyles.secondaryButton}
            >
              {secondaryCtaLabel}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}
