import { Box, Typography } from '@mui/material'
import { bioCardStyles, type BioCardProps } from './bioCard-helpers'

export const BioCard = ({ name, title, initials, bio }: BioCardProps) => {
  return (
    <Box sx={bioCardStyles.card}>
      {/* TODO(nova): replace with proper Avatar component — consider photo support, size variants, border/ring treatment, and focus state */}
      <Box sx={bioCardStyles.avatar}>
        <Typography sx={bioCardStyles.initials}>{initials}</Typography>
      </Box>

      <Typography sx={bioCardStyles.name}>{name}</Typography>
      <Typography sx={bioCardStyles.title}>{title}</Typography>
      <Typography sx={bioCardStyles.bio}>{bio}</Typography>
    </Box>
  )
}
