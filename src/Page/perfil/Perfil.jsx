import { Box, Fab, Typography, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'

// material ui
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';

import './Perfil.css'
import img from "../../assets/img/Exportar_img_all";
// import img from "";

function Perfil() {
  return (
    <>
      <Box component='div' id='perfil' className='section-portafolio' sx={{ minHeight: '100vh', scrollMarginTop: '64px' }} data-aos="flip-left">
        <Container maxWidth="xl">
          <Box component='div' className='container-perfil'>
            <Box component='div' className='container-description-perfil'>
              <Box component='div' className='description-perfil'>
                <Box component='div'>
                  <Typography variant="h2" className='nombre-perfil'>
                     <strong>Gabriel Rincón</strong>
                  </Typography>
                </Box>
                <Typography variant="p" className='parrafo-perfil'>
                Soy desarrollador web fullstack con experiencia en tecnologías modernas como ReactJS y Laravel. Poseo una sólida competencia en la concepción de interfaces de usuario dinámicas e innovadoras, así como en el desarrollo Backend y el uso de datos SQL. Mi enfoque en la sistematización de servicios me permite crear aplicativos modernos, rápidos y seguros. Siempre dispuesto a aprender y asumir nuevos desafíos. 
                <br /><br />
                  <Typography variant="p" className='parrafo-perfil'>
                    Estoy apacionado por aportar mi habilidad para resolver desafíos técnicos y contribuir al éxito de tu proyecto. ¡Espero conectar pronto para explorar cómo puedo agregar valor a tu equipo!
                  </Typography>
                </Typography>
              </Box>
              <Box component='div' className='link-perfil'>
                <Tooltip title="Descarga mi currículum para descubrir cómo mis habilidades y experiencia pueden desarrolar tus proyectos web." placement="top" arrow>
                  <a href="../../../public/cv/Síntesis_Curricular_Gabriel-Rincón.pdf" target="_blank" rel="noopener noreferrer"
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
            <Box component='div' className='card-perfil-foto'>
              <img src={img.foto_perfil} alt="" />
            </Box>
          </Box>
          <Box component='div' className='container-skills-perfil' data-aos="zoom-in-down">
            <Typography variant="h2" className='skill-title-perfil' id='text-titles-subtitles'>
              Skills
            </Typography>
            <Box component='div' className='skill-perfil'>
              <Box component='div' className='skill-perfil-burbuja'>
                <img src={img.Laravel_Logo} alt="" />
              </Box>
              <Box component='div' className='skill-perfil-burbuja'>
                <img src={img.logo_reactjs} alt="" style={{width:'30px',padding:'0.5rem 1rem'}} />
              </Box>
              <Box component='div' className='skill-perfil-burbuja'>
                <img src={img.logo_MaterilUI} alt="" style={{width:'30px',padding:'0.5rem 1rem'}} />
              </Box>
              <Box component='div' className='skill-perfil-burbuja'>
                <img src={img.Bootstrap_logo} alt="" style={{width:'30px',padding:'0.5rem 1rem'}} />
              </Box>
              <Box component='div' className='skill-perfil-burbuja'>
                <img src={img.oracle_logo} alt="" style={{width:'30px',padding:'0.5rem 1rem'}} />
              </Box>
              <Box component='div' className='skill-perfil-burbuja'>
                <img src={img.postgre_logo} alt="" style={{width:'30px',padding:'0.5rem 1rem'}} />
              </Box>
              <Box component='div' className='skill-perfil-burbuja'>
                <img src={img.mysql_logo} alt="" style={{width:'20px',padding:'0.5rem 1.2rem'}} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Perfil
