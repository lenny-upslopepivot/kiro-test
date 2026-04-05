import { type ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import SpeedOutlined from '@mui/icons-material/SpeedOutlined'
import GroupsOutlined from '@mui/icons-material/GroupsOutlined'
import ExtensionOutlined from '@mui/icons-material/ExtensionOutlined'
import ShieldOutlined from '@mui/icons-material/ShieldOutlined'
import InsightsOutlined from '@mui/icons-material/InsightsOutlined'
import RocketLaunchOutlined from '@mui/icons-material/RocketLaunchOutlined'
import { FeatureCard, CtaBanner } from '@/components'
import featuresData from '@/assets/data/features.json'
import { featuresStyles, FEATURES_HERO, type FeatureItem } from './features-helpers'

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

const features = featuresData.features as FeatureItem[]

export const Features = () => {
  return (
    <>
      <Box sx={featuresStyles.root}>

        {/* Hero header — title + subtitle from FEATURES_HERO config */}
        <Box sx={featuresStyles.hero}>
          <Typography variant="h1" sx={featuresStyles.heroTitle}>
            {FEATURES_HERO.title}
          </Typography>
          <Typography sx={featuresStyles.heroSubtitle}>
            {FEATURES_HERO.subtitle}
          </Typography>
        </Box>

        {/* 2-column grid (desktop) / 1-column (mobile) */}
        <Box sx={featuresStyles.grid}>
          {features.map(({ icon, title, longDescription }) => (
            <FeatureCard
              key={title}
              icon={FEATURE_ICON_MAP[icon]}
              title={title}
              description={longDescription}
            />
          ))}
        </Box>

      </Box>

      <CtaBanner
        headline="See it in action"
        subtext="Every feature you just read about is live and in use today. Get your first ticket shipped in under a day."
        primaryCtaLabel="Get started free"
        primaryCtaHref="/signup"
        secondaryCtaLabel="Request a demo"
        secondaryCtaHref="/demo"
      />
    </>
  )
}
