import { Box } from '@mui/material'
import { PageHeading } from '@/components'
import { PricingCard } from '@/components/PricingCard'
import { pricingStyles, PRICING_PLANS } from './pricing-helpers'

export const Pricing = () => {
  return (
    <Box sx={pricingStyles.root}>
      <PageHeading />

      <Box sx={pricingStyles.grid}>
        {PRICING_PLANS.map((plan) => (
          <PricingCard
            key={plan.name}
            planName={plan.name}
            price={plan.price}
            billingPeriod={plan.billingPeriod}
            features={plan.features}
            ctaLabel={plan.ctaLabel}
            ctaHref={plan.ctaHref}
            highlighted={plan.highlighted}
          />
        ))}
      </Box>
    </Box>
  )
}
