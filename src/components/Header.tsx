import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CodeIcon from '@mui/icons-material/Code';

export default function Header() {
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <CodeIcon sx={{ mr: 1.5, fontSize: 28 }} />
        <Typography variant="h6" component="div" fontWeight={700} letterSpacing={0.5}>
          Kiro App
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          IRN-31
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
