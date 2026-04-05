import { Avatar, Box, Typography } from '@mui/material'
import { getInitials, testimonialCardStyles, type TestimonialCardProps } from './testimonialCard-helpers'

export const TestimonialCard = ({
  quote,
  authorName,
  authorTitle,
  avatarUrl,
}: TestimonialCardProps) => {
  return (
    <Box sx={testimonialCardStyles.root}>
      {/* TODO(nova): replace plain quote text with styled block quote — add decorative quote marks */}
      <Typography sx={testimonialCardStyles.quoteText}>
        &ldquo;{quote}&rdquo;
      </Typography>

      <Box sx={testimonialCardStyles.authorRow}>
        <Avatar
          src={avatarUrl}
          alt={authorName}
          imgProps={{ referrerPolicy: 'no-referrer' }}
        >
          {!avatarUrl && getInitials(authorName)}
        </Avatar>

        <Box>
          <Typography sx={testimonialCardStyles.authorName}>
            {authorName}
          </Typography>
          <Typography sx={testimonialCardStyles.authorTitle}>
            {authorTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
