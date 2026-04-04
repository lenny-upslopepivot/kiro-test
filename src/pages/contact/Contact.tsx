import { Box, Button, TextField, Typography } from '@mui/material'
import { PageHeading } from '@/components'
import { contactStyles } from './contact-helpers'

export const Contact = () => {
  return (
    <Box sx={contactStyles.root}>
      <PageHeading />

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
