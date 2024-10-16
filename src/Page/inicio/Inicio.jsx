import { Box, Fab, Typography, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'

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
