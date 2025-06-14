import { Box, Fab, Typography, Container, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
// material ui
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Inicio.css'
import img from "../../assets/img/Exportar_img_all";
import TextAnimation from '../../components/TextAnimation';


function Inicio() {

  
  return (
    <>
      <Container id='inicio' maxWidth="xl" className='container-padre'>
        <Box component='div' className='section container-inicio' sx={{ minHeight: '100vh', scrollMarginTop: '64px' }}>
          <Box component='div' className='container-title-inicio'>
            {/* animatejs */}
            <Box component='div' className='title-inicio'>
              <Typography variant="h4" className='text-perfil' id='text-titles-subtitles' data-aos="fade-up" >Gabriel Rincón Developer</Typography>
              <Typography variant="h6" className='text-perfil text-titles-description' data-aos="fade-up" >🌐Conectar a través del Software🌐</Typography>
              
                <TextAnimation/>
            </Box>
            <Box component='div'>
              <Box component='div' className='link-perfil' data-aos="fade-up">
                  <Tooltip title="Descarga mi currículum para descubrir cómo mis habilidades y experiencia pueden desarrolar tus proyectos web." placement="top" arrow>
                    <a href="https://gab0-developer.github.io/my-portfolio/cv/CV_GABRIEL_RINCON_2025.pdf"
                      download="CV_GABRIEL_RINCON_2025.pdf"
                      target="_blank" rel="noopener noreferrer"
                      style={{color:'#fff',marginBottom:'2px'}}>
                      <Fab variant="extended" color='success' sx={{mr:'0.5rem'}}>
                        <CloudDownloadIcon sx={{ mr: 1 }} color='' />
                          Currículum
                      </Fab>
                    </a>
                  </Tooltip>
                  <Tooltip title="Hola!, si quieres saber más de mí perfil profesional y experiencias, visita mi LinkedIn." placement="top" arrow>
                    <a href="https://www.linkedin.com/in/gabriel-rinconp" target="_blank" rel="noopener noreferrer">
                      <Fab color='primary'>
                        <LinkedInIcon />
                      </Fab>
                    </a>
                  </Tooltip>
                  <Tooltip title="Ey! Podrás ver el codigo fuente de mis proyectos personales y perfil como Web developer." placement="top" arrow>

                    <a href="https://github.com/gab0-developer" target="_blank" rel="noopener noreferrer" style={{margin:'0 0.5rem'}}>
                      <Fab color='default'>
                        <GitHubIcon />
                      </Fab>
                    </a>
                  </Tooltip>
              </Box>
            
            </Box>
          </Box>
        </Box>

      </Container>
    </>
  )
}

export default Inicio
