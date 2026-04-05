import { Box, Typography } from '@mui/material'
import { statsBarStyles, type StatsBarProps } from './statsBar-helpers'

export const StatsBar = ({ stats }: StatsBarProps) => {
  return (
    <Box component="section" sx={statsBarStyles.root}>
      <Box sx={statsBarStyles.inner}>
        {stats.map(({ value, label }) => (
          <Box key={label} sx={statsBarStyles.statItem}>
            <Typography component="span" sx={statsBarStyles.value}>
              {value}
            </Typography>
            <Typography component="span" sx={statsBarStyles.label}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
