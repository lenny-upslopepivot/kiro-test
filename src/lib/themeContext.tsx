import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from './theme'

type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'upslope-theme-mode'

export interface ThemeModeContextValue {
  mode: ThemeMode
  toggleMode: () => void
}

const ThemeModeContext = createContext<ThemeModeContextValue>({
  mode: 'light',
  toggleMode: () => {},
})

export const useThemeMode = (): ThemeModeContextValue => useContext(ThemeModeContext)

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored === 'dark' ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // localStorage may be unavailable in some environments — fail silently
      }
      return next
    })
  }

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode])

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  )
}
