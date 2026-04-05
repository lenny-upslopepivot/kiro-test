// TODO(dev): decide if demo uses PageShell or custom layout — currently rendered inside PageShell via App.tsx nested route
import { Alert, Box, Button, Typography } from '@mui/material'
import { ActivityFeed, DemoUsersTable, MetricsTile } from '@/components'
import { DEMO_ACTIVITY, DEMO_METRICS, DEMO_USERS, demoStyles } from './demo-helpers'

export const Demo = () => {
  return (
    <Box sx={demoStyles.root}>
      {/* TODO(nova): decide sidebar vs. top-nav dashboard layout treatment for this page */}

      <Alert severity="info">You're viewing a live demo — data is simulated</Alert>

      <Box sx={demoStyles.metricsGrid}>
        {DEMO_METRICS.map((metric) => (
          <MetricsTile
            key={metric.label}
            label={metric.label}
            value={metric.value}
            trend={metric.trend}
          />
        ))}
      </Box>

      <DemoUsersTable users={DEMO_USERS} />

      <ActivityFeed entries={DEMO_ACTIVITY} />

      <Box sx={demoStyles.ctaBanner}>
        <Typography sx={demoStyles.ctaText}>Ready to use the real thing?</Typography>
        <Button
          component="a"
          href="/contact"
          variant="contained"
          disableElevation
          sx={demoStyles.ctaButton}
        >
          Get Started →
        </Button>
      </Box>
    </Box>
  )
}
