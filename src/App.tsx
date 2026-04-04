import { Container, Typography, Button, Box } from '@mui/material'

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Vite + React + Material UI
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Hello MUI
        </Button>
      </Box>
    </Container>
  )
}

export default App
