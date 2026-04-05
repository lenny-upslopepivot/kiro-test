import { Box, Typography } from '@mui/material'
import { CtaBanner } from '@/components'
import teamData from '@/assets/data/team.json'
import aboutData from '@/assets/data/about.json'
import { aboutStyles, ICON_MAP, type TeamMember, type AboutData } from './about-helpers'
import { BioCard } from './BioCard'

const team = teamData as TeamMember[]
const about = aboutData as AboutData

export const About = () => {
  return (
    <>
      <Box sx={aboutStyles.root}>
        {/* Mission statement */}
        <Box sx={aboutStyles.missionBlock}>
          <Typography sx={aboutStyles.missionLabel}>Our mission</Typography>
          <Typography sx={aboutStyles.missionText}>{about.mission}</Typography>
        </Box>

        {/* Team grid */}
        <Typography component="h2" sx={aboutStyles.sectionTitle}>
          The team
        </Typography>
        {/* TODO(nova): review team grid layout — consider card height alignment, spacing rhythm, and hover/focus states across breakpoints */}
        <Box sx={aboutStyles.teamGrid}>
          {team.map((member) => (
            <BioCard
              key={member.name}
              name={member.name}
              title={member.title}
              initials={member.initials}
              bio={member.bio}
            />
          ))}
        </Box>

        {/* Company values */}
        <Typography component="h2" sx={aboutStyles.sectionTitle}>
          What we believe
        </Typography>
        <Box sx={aboutStyles.valuesList}>
          {about.values.map((value) => {
            const IconComponent = ICON_MAP[value.icon]
            return (
              <Box key={value.title} sx={aboutStyles.valueItem}>
                <Box sx={aboutStyles.valueIconWrap}>
                  {IconComponent != null && (
                    <IconComponent size={20} aria-hidden="true" />
                  )}
                </Box>
                <Box sx={aboutStyles.valueContent}>
                  <Typography sx={aboutStyles.valueTitle}>{value.title}</Typography>
                  <Typography sx={aboutStyles.valueBody}>{value.description}</Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>

      <CtaBanner
        headline="Ready to see it in action?"
        subtext="Bring your next project to Upslope Pivot and ship production-ready code — reviewed, tested, and ready to merge."
        primaryCtaLabel="Get started free"
        primaryCtaHref="/signup"
        secondaryCtaLabel="Request a demo"
        secondaryCtaHref="/demo"
      />
    </>
  )
}
