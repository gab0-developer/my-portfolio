import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Estilos CSS de AOS
import './App.css'

import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import Page from './Page/Page';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const theme = createTheme(); // Tema predeterminado de MUI

  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación en ms
      easing: 'ease-in-out', // Curva de aceleración
      once: true, // Animación solo una vez
      mirror: false, // No animar al hacer scroll hacia arriba
    });
  }, []);

  return (
    <>

    <SnackbarProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Page />
      </ThemeProvider>
    </BrowserRouter>
    </SnackbarProvider>
    </>
  )
}

export default App
