import { Box, Fab, Typography, Container, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
// material ui
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Inicio.css'
import img from "../../assets/img/Exportar_img_all";

// const textgradient ={
//   backgroundImage: 'linear-gradient(to right, #00DFA2, #0079FF)', // Degradado de color
//   WebkitBackgroundClip: 'text', // Establece el área del texto afectada por el fondo
//   color: 'transparent', // Hace el texto transparente para mostrar el degradado de fondo
  
// }
function Inicio() {


  return (
    <>
      <Container maxWidth="xl">
        <Box component='div' className='section container-inicio'>
          <Box component='div' className='container-title-inicio'>
            <Box component='div' className='title-inicio'>
              <Typography variant="h4" className='text-perfil' id='text-titles-subtitles' >Developer</Typography>
            </Box>
            <Box component='div'>
              <Typography variant="h2" className='textanimation-perfil' ></Typography>
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
          {/* image perfil */}
          <Box component='div' className='foto-perfil' >
            <img src={img.perfil_portfolio} alt="" style={{width:'100%'}} />
          </Box>
          
          {/* burbujas */}
          {/* <Box component='div' className='container-burbujas'>
            <Box component='div' className='burbujas'>
              <img src={img.Laravel_Logo} alt="" style={{width:'40px'}} />
            </Box>
            <Box component='div' className='burbujas'>
              <img src={img.logo_reactjs} alt="" style={{width:'20px'}} />
            </Box>
            <Box component='div' className='burbujas'>
              <img src={img.logo_MaterilUI} alt="" style={{width:'20px'}} />
            </Box>
            <Box component='div' className='burbujas'>
              <img src={img.Bootstrap_logo} alt="" style={{width:'20px'}} />
            </Box>
            <Box component='div' className='burbujas'>
              <img src={img.oracle_logo} alt="" style={{width:'20px'}} />
            </Box>
            <Box component='div' className='burbujas'>
              <img src={img.mysql_logo} alt="" style={{width:'15px'}} />
            </Box>
            <Box component='div' className='burbujas'>
              <img src={img.postgre_logo} alt="" style={{width:'20px'}} />
            </Box>
            <Box component='div' className='burbujas'>
              <img src={img.log_vc_code} alt="" style={{width:'15px'}} />
            </Box>
          </Box> */}
        </Box>
        
      </Container>
    </>
  )
}

export default Inicio
