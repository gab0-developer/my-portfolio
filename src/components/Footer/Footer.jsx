import React, { useEffect } from 'react';
import { Box, Typography, IconButton, Divider, Tooltip } from '@mui/material';
import { GitHub, LinkedIn, Email, Code } from '@mui/icons-material';
import 'aos/dist/aos.css';
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const portfolioOwner = "Gabriel Rincón"

  return (
    <>
      <Box 
          component="footer"
          id='footer'
          className='container-footer'
          sx={{
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            backgroundColor: 'rgba(17, 25, 40, 0.75)',
            borderTop: '1px solid rgba(255, 255, 255, 0.125)',
            py: 4,
            px: 2,
            textAlign: 'center'
          }}
          data-aos="fade-up"
        >
        {/* Redes sociales con tooltips */}
        <Box sx={{ mb: 2 }}>
          <Tooltip title="GitHub" arrow>
            <IconButton href="https://github.com/gab0-developer" target="_blank" sx={{ color: 'white', mx: 1 }}>
              <GitHub fontSize="medium" />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="LinkedIn" arrow>
            <IconButton href="https://www.linkedin.com/in/gabriel-rinconp" target="_blank" sx={{ color: 'white', mx: 1 }}>
              <LinkedIn fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Box>

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', mb: 2 }} />

        {/* Bloque de derechos de autor */}
        <Box sx={{ mb: 1 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            © {currentYear} {portfolioOwner}
            <Tooltip title="Derechos reservados" arrow>
              <Code fontSize="small" sx={{ ml: 1, color: 'rgba(255,255,255,0.7)' }} />
            </Tooltip>
          </Typography>
        </Box>

        {/* Texto legal adicional (opcional) */}
        <Typography 
          variant="caption" 
          display="block" 
          sx={{ color: 'rgba(255,255,255,0.5)', mt: 1 }}
        >
          Todos los derechos reservados. El contenido de este portafolio es propiedad intelectual de {portfolioOwner}.
        </Typography>
      </Box>
    </>
)
}

export default Footer
