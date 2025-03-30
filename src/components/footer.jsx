import React from 'react';
import { Box, Typography, Stack, Link, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', p: 3, mt: 4, textAlign: 'center' }}>
            {/* Enlaces de navegación */}
            <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
                <Link href="#inicio" color="inherit" underline="hover">
                    <IconButton aria-label="inicio" color="inherit">
                        <HomeIcon />
                    </IconButton>
                </Link>
                <Link href="#perfil" color="inherit" underline="hover">
                    <IconButton aria-label="perfil" color="inherit">
                        <PersonPinIcon />
                    </IconButton>
                </Link>
                <Link href="#proyectos" color="inherit" underline="hover">
                    <IconButton aria-label="proyectos" color="inherit">
                        <MiscellaneousServicesIcon />
                    </IconButton>
                </Link>
                <Link href="#contactos" color="inherit" underline="hover">
                    <IconButton aria-label="contactos" color="inherit">
                        <ContactMailIcon />
                    </IconButton>
                </Link>
            </Stack>

            {/* Enlaces de redes sociales */}
            <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/gabriel-rinconp"
                    target="_blank"
                    aria-label="LinkedIn"
                    color="inherit"
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://github.com/gab0-developer"
                    target="_blank"
                    aria-label="GitHub"
                    color="inherit"
                >
                    <GitHubIcon />
                </IconButton>
            </Stack>

            {/* Información adicional */}
            <Typography variant="body2" color="gray.400">
                &copy; 2024 Gabriel Rincón. Todos los derechos reservados.
            </Typography>
            {/* <Typography variant="body2" color="gray.400">
                <Link href="mailto:tuemail@dominio.com" color="inherit" underline="hover">
                    tuemail@dominio.com
                </Link>
            </Typography> */}
        </Box>
    );
}

export default Footer;
