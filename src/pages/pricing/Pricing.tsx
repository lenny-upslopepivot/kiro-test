import { Box, Typography } from '@mui/material'
import { PageHeading } from '@/components'
import { pricingStyles, PRICING_PLANS } from './pricing-helpers'

export const Pricing = () => {
  return (
    <Box sx={pricingStyles.root}>
      <PageHeading />

      <Box sx={pricingStyles.grid}>
        {PRICING_PLANS.map(({ name, price, description }) => (
          <Box key={name} sx={pricingStyles.card}>
            <Typography sx={pricingStyles.planName}>{name}</Typography>
            <Typography sx={pricingStyles.planPrice}>{price}</Typography>
            <Typography sx={pricingStyles.planDescription}>{description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
