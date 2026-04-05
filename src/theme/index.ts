import { createTheme } from '@mui/material/styles'

// ─── Palette tokens ──────────────────────────────────────────────────────────

const PALETTE = {
  primary: {
    light: {
      main: '#6366f1',   // Indigo-500
      light: '#818cf8',  // Indigo-400
      dark: '#4f46e5',   // Indigo-600
      contrastText: '#ffffff',
    },
    dark: {
      main: '#818cf8',   // Indigo-400
      light: '#a5b4fc',  // Indigo-300
      dark: '#6366f1',   // Indigo-500
      contrastText: '#ffffff',
    },
  },
  secondary: {
    light: {
      main: '#0ea5e9',   // Sky-500
      light: '#38bdf8',  // Sky-400
      dark: '#0284c7',   // Sky-600
      contrastText: '#ffffff',
    },
    dark: {
      main: '#38bdf8',   // Sky-400
      light: '#7dd3fc',  // Sky-300
      dark: '#0ea5e9',   // Sky-500
      contrastText: '#0f172a',
    },
  },
  background: {
    light: {
      default: '#f8fafc',  // Slate-50
      paper: '#ffffff',
    },
    dark: {
      default: '#0f172a',  // Slate-900
      paper: '#1e293b',    // Slate-800
    },
  },
  text: {
    light: {
      primary: '#1e293b',   // Slate-800
      secondary: '#64748b', // Slate-500
    },
    dark: {
      primary: '#f1f5f9',   // Slate-100
      secondary: '#94a3b8', // Slate-400
    },
  },
  divider: {
    light: '#e2e8f0',  // Slate-200
    dark: '#334155',   // Slate-700
  },
}

// ─── Typography tokens ────────────────────────────────────────────────────────

const TYPOGRAPHY = {
  fontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  h1: {
    fontSize: '2.5rem',    // 40px
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '2rem',      // 32px
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '-0.015em',
  },
  h3: {
    fontSize: '1.5rem',    // 24px
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontSize: '1.25rem',   // 20px
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.125rem',  // 18px
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: '1rem',      // 16px
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem',      // 16px
    fontWeight: 400,
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',  // 14px
    fontWeight: 400,
    lineHeight: 1.57,
  },
  button: {
    fontWeight: 600,
    textTransform: 'none' as const,
    letterSpacing: '0.01em',
  },
}

// ─── Shape & spacing ──────────────────────────────────────────────────────────

const SHAPE = {
  borderRadius: 8,
}

// ─── Light theme ─────────────────────────────────────────────────────────────

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: PALETTE.primary.light,
    secondary: PALETTE.secondary.light,
    background: PALETTE.background.light,
    text: PALETTE.text.light,
    divider: PALETTE.divider.light,
  },
  typography: TYPOGRAPHY,
  shape: SHAPE,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: SHAPE.borderRadius,
          padding: '8px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: SHAPE.borderRadius * 2,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
})

// ─── Dark theme ──────────────────────────────────────────────────────────────

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: PALETTE.primary.dark,
    secondary: PALETTE.secondary.dark,
    background: PALETTE.background.dark,
    text: PALETTE.text.dark,
    divider: PALETTE.divider.dark,
  },
  typography: TYPOGRAPHY,
  shape: SHAPE,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: SHAPE.borderRadius,
          padding: '8px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: SHAPE.borderRadius * 2,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
        },
      },
    },
  },
})
