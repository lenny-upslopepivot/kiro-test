import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ChevronDown } from 'lucide-react'
import { CtaBanner, PricingCard } from '@/components'
import pricingData from '@/assets/data/pricing.json'
import faqData from '@/assets/data/faq.json'
import { pricingStyles, type PricingPlan, type FaqEntry } from './pricing-helpers'

const plans = pricingData as PricingPlan[]
const faqs = faqData as FaqEntry[]

export const Pricing = () => {
  return (
    <>
      <Box sx={pricingStyles.root}>
        {/* Section header */}
        <Box sx={pricingStyles.sectionHeading}>
          <Typography component="h1" sx={pricingStyles.headline}>
            Simple, Transparent Pricing
          </Typography>
          <Typography sx={pricingStyles.subheadline}>
            No hidden fees. No surprise overages. Pick the plan that fits your
            team and start shipping today.
          </Typography>
        </Box>

        {/* Pricing cards */}
        <Box sx={pricingStyles.grid}>
          {plans.map((plan) => (
            <PricingCard
              key={plan.planName}
              planName={plan.planName}
              price={plan.price}
              billingPeriod={plan.billingPeriod}
              features={plan.features}
              ctaLabel={plan.ctaLabel}
              ctaHref={plan.ctaHref}
              highlighted={plan.highlighted}
            />
          ))}
        </Box>

        {/* FAQ section */}
        <Box sx={pricingStyles.faqSection}>
          <Typography component="h2" sx={pricingStyles.faqHeadline}>
            Frequently Asked Questions
          </Typography>

          {faqs.map((entry) => (
            <Accordion key={entry.question} sx={pricingStyles.accordion}>
              <AccordionSummary
                expandIcon={<ChevronDown size={18} aria-hidden="true" />}
              >
                <Typography sx={pricingStyles.accordionSummary}>
                  {entry.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={pricingStyles.accordionDetails}>
                  {entry.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      <CtaBanner
        headline="Start building today"
        subtext="No setup fees. No long-term contracts. Pick the plan that fits your team and start shipping in minutes."
        primaryCtaLabel="Get started free"
        primaryCtaHref="/signup"
        secondaryCtaLabel="Talk to sales"
        secondaryCtaHref="/contact"
      />
    </>
  )
}
