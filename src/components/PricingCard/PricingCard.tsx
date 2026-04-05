import { Box, Button, Typography } from '@mui/material'
import { Check } from 'lucide-react'
import { pricingCardStyles, type PricingCardProps } from './pricingCard-helpers'

export const PricingCard = ({
  planName,
  price,
  billingPeriod,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
}: PricingCardProps) => {
  return (
    <Box sx={pricingCardStyles.root(highlighted)}>
      {highlighted && (
        <Box sx={pricingCardStyles.badge}>Most Popular</Box>
      )}

      <Typography sx={pricingCardStyles.planName}>{planName}</Typography>

      <Box sx={pricingCardStyles.priceRow}>
        <Typography sx={pricingCardStyles.price}>{price}</Typography>
        <Typography sx={pricingCardStyles.billingPeriod}>{billingPeriod}</Typography>
      </Box>

      <Box sx={pricingCardStyles.featureList}>
        {features.map((feature) => (
          <Box key={feature} sx={pricingCardStyles.featureItem}>
            <Box sx={pricingCardStyles.featureIcon} component="span" display="flex">
              <Check size={16} aria-hidden="true" />
            </Box>
            <Typography sx={pricingCardStyles.featureText}>{feature}</Typography>
          </Box>
        ))}
      </Box>

      <Button
        component="a"
        href={ctaHref}
        variant={highlighted ? 'contained' : 'outlined'}
        fullWidth
        sx={pricingCardStyles.cta}
      >
        {ctaLabel}
      </Button>
    </Box>
  )
}
