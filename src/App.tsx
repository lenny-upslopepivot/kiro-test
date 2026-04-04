import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Header } from '@/components'
import { Home, About } from '@/pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
