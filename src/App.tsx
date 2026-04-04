import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Header } from '@/components'
import { Home, About, Contact } from '@/pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
