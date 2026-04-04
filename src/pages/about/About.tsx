import { Box, Typography } from '@mui/material'
import { PageHeading } from '@/components'
import { aboutStyles, VALUES, TEAM_MEMBERS } from './about-helpers'

export const About = () => {
  return (
    <Box sx={aboutStyles.root}>
      <PageHeading />

      <Typography sx={aboutStyles.sectionTitle}>What we believe</Typography>
      <Box sx={aboutStyles.valuesGrid}>
        {VALUES.map(({ title, description }) => (
          <Box key={title} sx={aboutStyles.valueCard}>
            <Typography sx={aboutStyles.valueTitle}>{title}</Typography>
            <Typography sx={aboutStyles.valueBody}>{description}</Typography>
          </Box>
        ))}
      </Box>

      <Typography sx={aboutStyles.sectionTitle}>The team</Typography>
      <Box sx={aboutStyles.teamGrid}>
        {TEAM_MEMBERS.map(({ emoji, name, role, bio }) => (
          <Box key={name} sx={aboutStyles.teamCard}>
            <Box sx={aboutStyles.avatar}>{emoji}</Box>
            <Typography sx={aboutStyles.teamName}>{name}</Typography>
            <Typography sx={aboutStyles.teamRole}>{role}</Typography>
            <Typography sx={aboutStyles.teamBio}>{bio}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
