import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { PageHeading } from '@/components'
import {
  type ContactFormState,
  type ContactFormErrors,
  CONTACT_EMAIL,
  INITIAL_FORM_STATE,
  SOCIAL_LINKS,
  validateContactForm,
  contactStyles,
} from './contact-helpers'

export const Contact = () => {
  const [fields, setFields] = useState<ContactFormState>(INITIAL_FORM_STATE)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validateContactForm(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    <Box sx={contactStyles.root}>
      <PageHeading />

      {/* TODO(nova): replace contentWrapper with a two-column Grid layout (form left / info right) */}
      <Box sx={contactStyles.contentWrapper}>
        {/* Form section */}
        <Box sx={contactStyles.formSection}>
          <Typography sx={contactStyles.sectionTitle}>Get in touch</Typography>
          <Typography sx={contactStyles.sectionSubtitle}>
            Have a question or want to learn more? Fill out the form and we&apos;ll get back to you
            shortly.
          </Typography>

          {submitted ? (
            <Box sx={contactStyles.successBox}>
              <Typography sx={contactStyles.successText}>Thanks! We&apos;ll be in touch.</Typography>
            </Box>
          ) : (
            <Box component="form" sx={contactStyles.form} noValidate onSubmit={handleSubmit}>
              <Box>
                <Typography sx={contactStyles.fieldLabel}>Name</Typography>
                <TextField
                  name="name"
                  placeholder="Your full name"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={fields.name}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
              </Box>

              <Box>
                <Typography sx={contactStyles.fieldLabel}>Email</Typography>
                <TextField
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={fields.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Box>

              <Box>
                <Typography sx={contactStyles.fieldLabel}>Message</Typography>
                <TextField
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  fullWidth
                  multiline
                  rows={6}
                  variant="outlined"
                  value={fields.message}
                  onChange={handleChange}
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                />
              </Box>

              <Button type="submit" variant="contained" sx={contactStyles.submitButton}>
                Send message
              </Button>
            </Box>
          )}
        </Box>

        {/* Contact info section */}
        <Box sx={contactStyles.infoSection}>
          <Typography sx={contactStyles.infoTitle}>Contact details</Typography>
          <Box component="a" href={`mailto:${CONTACT_EMAIL}`} sx={contactStyles.emailLink}>
            {CONTACT_EMAIL}
          </Box>

          <Box sx={contactStyles.socialList}>
            <Typography sx={contactStyles.socialLabel}>Follow us</Typography>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <Box key={label} component="a" href={href} sx={contactStyles.socialLink}>
                {label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
