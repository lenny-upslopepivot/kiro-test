import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Header, Footer } from '@/components'
import { Home, About, Contact } from '@/pages'
import { ThemeContextProvider } from '@/lib'

export const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
