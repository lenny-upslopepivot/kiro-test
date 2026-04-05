import { type Theme } from '@mui/material'

export interface ContactFormState {
  name: string
  email: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

export interface SocialLink {
  label: string
  href: string
}

export const CONTACT_EMAIL = 'hello@upslopepivot.com'

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

export const INITIAL_FORM_STATE: ContactFormState = {
  name: '',
  email: '',
  message: '',
}

export const validateContactForm = (fields: ContactFormState): ContactFormErrors => {
  const errors: ContactFormErrors = {}

  if (!fields.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!fields.email.trim()) {
    errors.email = 'Email is required'
  } else {
    const parts = fields.email.split('@')
    if (parts.length !== 2 || !parts[1].includes('.')) {
      errors.email = 'Please enter a valid email address'
    }
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required'
  }

  return errors
}

export const contactStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 1100,
    mx: 'auto',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 6,
  },
  formSection: {
    maxWidth: 600,
  },
  sectionTitle: (theme: Theme) => ({
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    fontWeight: 700,
    color: theme.palette.text.primary,
    mb: 1,
  }),
  sectionSubtitle: (theme: Theme) => ({
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    mb: 4,
  }),
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 3,
  },
  fieldLabel: (theme: Theme) => ({
    fontSize: '0.875rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    mb: 0.75,
  }),
  submitButton: (theme: Theme) => ({
    alignSelf: 'flex-start',
    px: 4,
    py: 1.25,
    fontSize: '0.95rem',
    fontWeight: 600,
    backgroundColor: theme.palette.primary.main,
    textTransform: 'none' as const,
    borderRadius: 2,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: 'none',
    },
  }),
  successBox: (theme: Theme) => ({
    p: 3,
    borderRadius: 2,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.08)',
    border: `1px solid ${theme.palette.primary.main}`,
  }),
  successText: (theme: Theme) => ({
    fontSize: '1rem',
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
  infoSection: {
    maxWidth: 400,
  },
  infoTitle: (theme: Theme) => ({
    fontSize: '1.25rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    mb: 2,
  }),
  emailLink: (theme: Theme) => ({
    fontSize: '1rem',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 500,
    display: 'block',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  socialList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 1,
    mt: 3,
  },
  socialLabel: (theme: Theme) => ({
    fontSize: '0.875rem',
    fontWeight: 600,
    color: theme.palette.text.secondary,
    mb: 1,
  }),
  socialLink: (theme: Theme) => ({
    fontSize: '0.95rem',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 500,
    display: 'block',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
}
