import { Box, Button, TextField, Typography } from '@mui/material'
import { contactStyles } from './contact-helpers'

export const Contact = () => {
  return (
    <Box sx={contactStyles.root}>
      <Typography sx={contactStyles.eyebrow}>Get in touch</Typography>
      <Typography variant="h1" sx={contactStyles.headline}>
        We'd love to hear<br />from you.
      </Typography>
      <Typography sx={contactStyles.intro}>
        Have a question about our platform, pricing, or how Upslope Pivot fits
        your team's workflow? Send us a message and we'll get back to you promptly.
      </Typography>

      <Box component="form" sx={contactStyles.form} noValidate>
        <Box>
          <Typography sx={contactStyles.fieldLabel}>Your email</Typography>
          <TextField
            type="email"
            placeholder="you@example.com"
            fullWidth
            variant="outlined"
            size="small"
          />
        </Box>

        <Box>
          <Typography sx={contactStyles.fieldLabel}>Your question</Typography>
          <TextField
            placeholder="Tell us what's on your mind..."
            fullWidth
            multiline
            rows={6}
            variant="outlined"
          />
        </Box>

        <Button type="submit" variant="contained" sx={contactStyles.submitButton}>
          Send message
        </Button>
      </Box>
    </Box>
  )
}
