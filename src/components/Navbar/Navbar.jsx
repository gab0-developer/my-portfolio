import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#111111' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <ScrollLink 
            to="inicio" 
            smooth={true} 
            duration={500}
            style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}
          >
            Mi Portafolio
          </ScrollLink>
        </Typography>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <ScrollLink 
              to="inicio" 
              smooth={true} 
              duration={500}
              style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <HomeIcon /> Inicio
            </ScrollLink>
            
            <ScrollLink 
              to="perfil" 
              smooth={true} 
              duration={500}
              style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <AccountCircle /> perfil
            </ScrollLink>
            
            <ScrollLink 
              to="proyecto" 
              smooth={true} 
              duration={500}
              style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <WorkIcon /> Proyectos
            </ScrollLink>
            
            <ScrollLink 
              to="contacto" 
              smooth={true} 
              duration={500}
              style={{ textDecoration: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <EmailIcon /> Contacto
            </ScrollLink>

            {/* Añade más items según necesites */}
          </Box>
        )}

        {/* Versión móvil */}
        {isMobile && (
          <>
            <IconButton onClick={handleMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <ScrollLink 
                  to="inicio" 
                  smooth={true} 
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <HomeIcon /> Inicio
                </ScrollLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ScrollLink 
                  to="perfil" 
                  smooth={true} 
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <AccountCircle /> Perfil
                </ScrollLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ScrollLink 
                  to="proyecto" 
                  smooth={true} 
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <WorkIcon /> Proyecto
                </ScrollLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ScrollLink 
                  to="contacto" 
                  smooth={true} 
                  duration={500}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <EmailIcon /> Contacto
                </ScrollLink>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;