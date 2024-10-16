import { Box, Fab, Typography, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'

// material ui
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Perfil.css'
import img from "../../assets/img/Exportar_img_all";
// import img from "";

function Perfil() {
  return (
    <>
      <Box component='div' className='section-portafolio'>
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
                Soy un desarrollador web fullstack con una sólida experiencia en tecnologías frontend y backend, desde HTML/CSS/JavaScript hasta framework como Laravel, Librería como Reactjs y bases de datos SQL, me especializo en construir aplicaciones eficientes y escalables. Mi enfoque en la calidad del código, la solución de problemas creativa y la comunicación efectiva me permite colaborar de manera efectiva en equipos multidisciplinarios. 
                <br /><br />
                  <Typography variant="p" className='parrafo-perfil'>
                    Estoy emocionado por aportar mi habilidad para resolver desafíos técnicos y contribuir al éxito de tu proyecto. ¡Espero conectar pronto para explorar cómo puedo agregar valor a tu equipo!
                  </Typography>
                </Typography>
              </Box>
              <Box component='div' className='link-perfil'>
                <a href="../../../public/cv/Currículum_Vitae_Gabriel Rincón.pdf" target="_blank" rel="noopener noreferrer"
                      style={{color:'#fff',marginBottom:'2px'}}>
                  <Fab variant="extended" color='success' sx={{mr:'0.5rem'}}>
                    <CloudDownloadIcon sx={{ mr: 1 }} color='' />
                      Currículum
                  </Fab>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-rinconp" target="_blank" rel="noopener noreferrer">
                  <Fab color='primary'>
                    <LinkedInIcon />
                  </Fab>
                </a>
              </Box>
            </Box>
            <Box component='div' className='card-perfil-foto'>
              <img src={img.foto_perfil} alt="" />
            </Box>
          </Box>
          <Box component='div' className='container-skills-perfil'>
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
