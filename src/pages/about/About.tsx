import { Box, Typography } from '@mui/material'
import { aboutStyles, VALUES, TEAM_MEMBERS } from './about-helpers'

export const About = () => {
  return (
    <Box sx={aboutStyles.root}>
      <Typography sx={aboutStyles.eyebrow}>Our story</Typography>
      <Typography variant="h1" sx={aboutStyles.headline}>
        Built by engineers,<br />for engineering teams.
      </Typography>
      <Typography sx={aboutStyles.intro}>
        Upslope Pivot was founded on a simple observation: the best engineering teams
        spend too much time on scaffolding, boilerplate, and repetitive structure work —
        and not enough time on the problems that actually matter. We built an agentic
        development platform to change that ratio.
      </Typography>

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
