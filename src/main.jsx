import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, Container } from '@mui/material';
import { HashRouter  as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Container maxWidth="xl"> */}
      {/* <CssBaseline> */}
        <App />
      {/* </CssBaseline> */}
    {/* </Container> */}
  </StrictMode>,
)
