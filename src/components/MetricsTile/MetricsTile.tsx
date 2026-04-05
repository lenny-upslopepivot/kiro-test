import { Box, Typography } from '@mui/material'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { metricsTileStyles, type MetricsTileProps } from './metricsTile-helpers'

export const MetricsTile = ({ label, value, trend }: MetricsTileProps) => {
  return (
    <Box sx={metricsTileStyles.tile}>
      <Typography sx={metricsTileStyles.label}>{label}</Typography>

      <Typography sx={metricsTileStyles.value}>{value}</Typography>

      {trend && (
        <Box sx={metricsTileStyles.trendRow}>
          {/* TODO(nova): apply success/error color tokens to icon and text based on trend.direction */}
          {trend.direction === 'up' ? (
            <TrendingUp style={metricsTileStyles.trendIcon} />
          ) : (
            <TrendingDown style={metricsTileStyles.trendIcon} />
          )}
          <Typography component="span" sx={metricsTileStyles.trendText}>
            {trend.percentage}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
