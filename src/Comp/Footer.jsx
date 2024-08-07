import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '50vh',
          color:"white"
        }}
      >
        <CssBaseline />
       
        <Box
          component="footer"
          sx={{
            
            py: 3,
            px: 2,
            mt: 'auto',
           backgroundColor:"purple"
          }}
        >
          
        </Box>
      </Box>
    </ThemeProvider>
  );
}
