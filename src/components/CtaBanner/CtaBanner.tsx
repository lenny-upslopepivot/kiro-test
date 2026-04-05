import { Box, Button, Typography } from '@mui/material'
import { ctaBannerStyles, type CtaBannerProps } from './ctaBanner-helpers'

export const CtaBanner = ({
  headline,
  subtext,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: CtaBannerProps) => {
  return (
    <Box sx={ctaBannerStyles.root}>
      <Box sx={ctaBannerStyles.inner}>
        <Typography component="h2" sx={ctaBannerStyles.headline}>
          {headline}
        </Typography>

        <Typography sx={ctaBannerStyles.subtext}>{subtext}</Typography>

        <Box sx={ctaBannerStyles.buttonRow}>
          <Button
            component="a"
            href={primaryCtaHref}
            variant="contained"
            disableElevation
            sx={ctaBannerStyles.primaryButton}
          >
            {primaryCtaLabel}
          </Button>

          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              component="a"
              href={secondaryCtaHref}
              variant="outlined"
              sx={ctaBannerStyles.secondaryButton}
            >
              {secondaryCtaLabel}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}
