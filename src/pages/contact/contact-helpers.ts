export const contactStyles = {
  root: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    maxWidth: 680,
    mx: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 3,
  },
  fieldLabel: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#1e293b',
    mb: 0.75,
  },
  submitButton: {
    alignSelf: 'flex-start',
    px: 4,
    py: 1.25,
    fontSize: '0.95rem',
    fontWeight: 600,
    backgroundColor: '#6366f1',
    textTransform: 'none' as const,
    borderRadius: 2,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#4f46e5',
      boxShadow: 'none',
    },
  },
}
