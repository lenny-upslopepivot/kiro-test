import { type Theme } from '@mui/material'

// ---------------------------------------------------------------------------
// Hero config — landing-specific copy, kept here as a typed constant
// ---------------------------------------------------------------------------

export interface LandingHeroConfig {
  headline: string
  subheadline: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

export const LANDING_HERO: LandingHeroConfig = {
  headline: 'Ship faster with agentic engineering',
  subheadline:
    'Upslope Pivot gives your team AI-powered workflows that go from ticket to production-ready code — without the ceremony.',
  primaryCtaLabel: 'Get started free',
  primaryCtaHref: '/demo',
  secondaryCtaLabel: 'See the features',
  secondaryCtaHref: '/features',
}

// ---------------------------------------------------------------------------
// CTA Banner config
// ---------------------------------------------------------------------------

export interface LandingCtaConfig {
  headline: string
  subtext: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

export const LANDING_CTA: LandingCtaConfig = {
  headline: 'Ready to ship faster?',
  subtext:
    'Join thousands of engineers already using Upslope Pivot to go from ticket to production-ready code in hours, not weeks.',
  primaryCtaLabel: 'Get started free',
  primaryCtaHref: '/demo',
  secondaryCtaLabel: 'Learn more',
  secondaryCtaHref: '/features',
}

// ---------------------------------------------------------------------------
// Section heading config
// ---------------------------------------------------------------------------

export interface SectionHeadingConfig {
  title: string
  subtitle: string
}

export const FEATURES_SECTION: SectionHeadingConfig = {
  title: 'Built for high-velocity teams',
  subtitle:
    'Six core capabilities that put your engineering team into a different gear.',
}

export const TESTIMONIALS_SECTION: SectionHeadingConfig = {
  title: 'Trusted by engineering teams',
  subtitle: 'Here is what the people building with Upslope have to say.',
}

// ---------------------------------------------------------------------------
// Data types — mirror the shapes of the JSON data files
// ---------------------------------------------------------------------------

export interface FeatureItem {
  title: string
  description: string
  longDescription: string
  icon: string
}

export interface TestimonialItem {
  quote: string
  authorName: string
  authorTitle: string
  avatarUrl?: string
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

export const landingStyles = {
  // Shared section wrapper — constrains content width and sets vertical rhythm
  section: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 1200,
    mx: 'auto',
  },

  // Testimonials section gets a subtle background tint to visually separate it
  testimonialsOuter: (theme: Theme) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.background.paper
        : theme.palette.grey[50],
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  }),

  sectionHeading: (theme: Theme) => ({
    fontSize: { xs: '1.75rem', md: '2.25rem' },
    fontWeight: 800,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: theme.palette.text.primary,
    mb: 1.5,
  }),

  sectionSubheading: (theme: Theme) => ({
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    maxWidth: 560,
    mb: 5,
  }),
}
