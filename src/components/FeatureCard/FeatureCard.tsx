import { Box, Card, CardContent, Typography } from '@mui/material'
import { featureCardStyles, type FeatureCardProps } from './featureCard-helpers'

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card sx={featureCardStyles.root}>
      <CardContent sx={featureCardStyles.content}>
        {/* TODO(nova): replace with final branded icon set — confirm icon size and color chip treatment */}
        <Box sx={featureCardStyles.iconWrapper}>
          {icon}
        </Box>

        <Typography component="h3" sx={featureCardStyles.title}>
          {title}
        </Typography>

        <Typography sx={featureCardStyles.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
