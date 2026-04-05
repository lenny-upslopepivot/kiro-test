import { type Theme } from '@mui/material'

// ---------------------------------------------------------------------------
// Hero config — title + subtitle sourced from this constant, not hardcoded in JSX
// ---------------------------------------------------------------------------

export interface FeaturesHeroConfig {
  title: string
  subtitle: string
}

export const FEATURES_HERO: FeaturesHeroConfig = {
  title: 'Everything you need to ship faster',
  subtitle:
    'Explore the full set of capabilities that make Upslope the platform of choice for high-velocity engineering teams.',
}

// ---------------------------------------------------------------------------
// Data types
// ---------------------------------------------------------------------------

export interface FeatureItem {
  title: string
  description: string
  longDescription: string
  icon: string
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

export const featuresStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 1100,
    mx: 'auto',
  },
  hero: {
    mb: 6,
  },
  heroTitle: (theme: Theme) => ({
    fontSize: { xs: '2rem', md: '2.75rem' },
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: '-0.03em',
    color: theme.palette.text.primary,
    mb: 2,
  }),
  heroSubtitle: (theme: Theme) => ({
    fontSize: '1.1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    maxWidth: 640,
  }),
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: 3,
  },
}
