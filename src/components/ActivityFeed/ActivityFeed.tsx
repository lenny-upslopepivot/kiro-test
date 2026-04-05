import { Box, Typography } from '@mui/material'
import {
  activityFeedStyles,
  formatRelativeTime,
  type ActivityEntry,
  type ActivityFeedProps,
} from './activityFeed-helpers'

const ActivityFeedEntry = ({ entry }: { entry: ActivityEntry }) => (
  <Box sx={activityFeedStyles.entry}>
    {/* TODO(nova): replace icon slot with action-type icon — e.g. Rocket for deployment_triggered,
        Plug for integration_added, CheckCircle for agent_run_completed, XCircle for agent_run_failed,
        UserPlus for invite_sent, CreditCard for billing_updated, Settings for settings_updated,
        LogIn for login. Apply success/error color tokens for pass/fail states. */}
    <Box sx={activityFeedStyles.iconSlot} aria-hidden="true" />

    <Box sx={activityFeedStyles.entryBody}>
      <Box sx={activityFeedStyles.entryMeta}>
        <Typography sx={activityFeedStyles.userName}>{entry.user}</Typography>
        <Typography
          component="time"
          dateTime={entry.timestamp}
          sx={activityFeedStyles.timestamp}
        >
          {formatRelativeTime(entry.timestamp)}
        </Typography>
      </Box>
      <Typography sx={activityFeedStyles.details}>{entry.details}</Typography>
    </Box>
  </Box>
)

export const ActivityFeed = ({ entries }: ActivityFeedProps) => {
  return (
    <Box sx={activityFeedStyles.root}>
      <Box sx={activityFeedStyles.header}>
        <Typography sx={activityFeedStyles.headerTitle}>Recent Activity</Typography>
      </Box>

      <Box sx={activityFeedStyles.scrollArea} role="feed" aria-label="Activity feed">
        {entries.map((entry, index) => (
          <ActivityFeedEntry key={`${entry.timestamp}-${index}`} entry={entry} />
        ))}
      </Box>
    </Box>
  )
}
