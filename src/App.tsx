import { Button, Container, Typography } from '@mui/material'

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Kiro Test App
      </Typography>
      <Button variant="contained">Hello, Material UI</Button>
    </Container>
  )
}

export default App
