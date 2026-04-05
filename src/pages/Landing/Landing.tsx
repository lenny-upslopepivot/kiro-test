import { type ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import SpeedOutlined from '@mui/icons-material/SpeedOutlined'
import GroupsOutlined from '@mui/icons-material/GroupsOutlined'
import ExtensionOutlined from '@mui/icons-material/ExtensionOutlined'
import ShieldOutlined from '@mui/icons-material/ShieldOutlined'
import InsightsOutlined from '@mui/icons-material/InsightsOutlined'
import RocketLaunchOutlined from '@mui/icons-material/RocketLaunchOutlined'
import { HeroSection, StatsBar, FeatureCard, TestimonialCard, CtaBanner } from '@/components'
import statsData from '@/assets/data/stats.json'
import featuresData from '@/assets/data/features.json'
import testimonialsData from '@/assets/data/testimonials.json'
import {
  landingStyles,
  LANDING_HERO,
  LANDING_CTA,
  FEATURES_SECTION,
  TESTIMONIALS_SECTION,
  type FeatureItem,
  type TestimonialItem,
} from './landing-helpers'

// ---------------------------------------------------------------------------
// Icon map — resolves icon name strings from features.json to ReactNode elements
// Must live in a .tsx file because it contains JSX
// ---------------------------------------------------------------------------

const FEATURE_ICON_MAP: Record<string, ReactNode> = {
  SpeedOutlined: <SpeedOutlined />,
  GroupsOutlined: <GroupsOutlined />,
  ExtensionOutlined: <ExtensionOutlined />,
  ShieldOutlined: <ShieldOutlined />,
  InsightsOutlined: <InsightsOutlined />,
  RocketLaunchOutlined: <RocketLaunchOutlined />,
}

// Cast JSON imports to typed arrays — JSON has extra fields (description, _todo)
// that are not used here; casting ensures type safety without runtime transformation
const stats = statsData.stats
const features = featuresData.features as FeatureItem[]
const testimonials = testimonialsData.testimonials as TestimonialItem[]

export const Landing = () => {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroSection
        headline={LANDING_HERO.headline}
        subheadline={LANDING_HERO.subheadline}
        primaryCtaLabel={LANDING_HERO.primaryCtaLabel}
        primaryCtaHref={LANDING_HERO.primaryCtaHref}
        secondaryCtaLabel={LANDING_HERO.secondaryCtaLabel}
        secondaryCtaHref={LANDING_HERO.secondaryCtaHref}
      />

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <StatsBar stats={stats} />

      {/* ── Features Grid — 3-col desktop / 1-col mobile ─────────────────── */}
      <Box sx={landingStyles.section}>
        <Typography component="h2" sx={landingStyles.sectionHeading}>
          {FEATURES_SECTION.title}
        </Typography>
        <Typography sx={landingStyles.sectionSubheading}>
          {FEATURES_SECTION.subtitle}
        </Typography>
        <Grid container spacing={3}>
          {features.map(({ icon, title, description }) => (
            <Grid key={title} size={{ xs: 12, md: 6, lg: 4 }}>
              <FeatureCard
                icon={FEATURE_ICON_MAP[icon]}
                title={title}
                description={description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── Testimonials Row — 3-col desktop / 1-col mobile ──────────────── */}
      <Box sx={landingStyles.testimonialsOuter}>
        <Box sx={landingStyles.section}>
          <Typography component="h2" sx={landingStyles.sectionHeading}>
            {TESTIMONIALS_SECTION.title}
          </Typography>
          <Typography sx={landingStyles.sectionSubheading}>
            {TESTIMONIALS_SECTION.subtitle}
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map(({ quote, authorName, authorTitle, avatarUrl }) => (
              <Grid key={authorName} size={{ xs: 12, md: 4 }}>
                <TestimonialCard
                  quote={quote}
                  authorName={authorName}
                  authorTitle={authorTitle}
                  avatarUrl={avatarUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <CtaBanner
        headline={LANDING_CTA.headline}
        subtext={LANDING_CTA.subtext}
        primaryCtaLabel={LANDING_CTA.primaryCtaLabel}
        primaryCtaHref={LANDING_CTA.primaryCtaHref}
        secondaryCtaLabel={LANDING_CTA.secondaryCtaLabel}
        secondaryCtaHref={LANDING_CTA.secondaryCtaHref}
      />
    </>
  )
}
