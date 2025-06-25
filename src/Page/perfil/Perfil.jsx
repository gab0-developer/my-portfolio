import { Box, Fab, Typography, Container } from '@mui/material'

// material ui
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Tooltip from '@mui/material/Tooltip';


import './Perfil.css'
import img from "../../assets/img/Exportar_img_all";
// import img from "";

function Perfil() {
  return (
    <>
      <Box component='div' id='perfil' className='section-portafolio' sx={{ minHeight: '100vh', scrollMarginTop: '64px' }} data-aos="flip-left">
        <Container maxWidth="xl">
          <Box component='div'>
            <Typography variant="h2" className='title-perfil'>
                <strong>Sobre mi</strong>
            </Typography>
          </Box>
          <Box component='div' className='container-perfil'>
            <Box component='div' className='container-description-perfil'>
              <Box component='div' className='description-perfil'>
                <Typography variant="p" className='parrafo-perfil'>
                Soy <strong>Gabriel Rincón</strong> desarrollador web fullstack con experiencia en tecnologías modernas como <strong>ReactJS</strong> y <strong>Laravel</strong>. Me apasiona la colaboración en equipo, solución de problemas y la innovación a través del desarrollo de software. Estoy abierto nuevas oportunidades y desafíos, aprender de otros profesionales y de mis propios logros.
                </Typography>
              </Box>
              <hr/>
              <Box component='div' className='container-skills'>
                <Typography component='h5' className='title-skills'>Mis Habilidades:</Typography>
                <Box component='div' className='skills'>
                  <span><img src={img.logo_laravel} alt="" />Laravel</span>
                  <span><img src={img.logo_reactjs} alt="" />React.js</span>
                  <span><img src={img.logo_nodejs} alt="" />Nodejs</span>
                  <span><img src={img.logo_MaterilUI} alt="" />Material UI</span>
                  <span><img src={img.logo_bootstrap} alt="" />Bootstrap</span>
                  <span><img src={img.logo_postgre} alt="" />Postgres</span>
                  <span><img src={img.logo_mysql} alt="" />MySQL</span>
                  <span><img src={img.logo_oracle} alt="" />PL/Oracle</span>
                </Box>
              </Box>
              <Box component='center' className='cv_perfil'>
                <Tooltip title="Descarga mi currículum..." placement="top" arrow>
                  <a href="../../../public/cv/Síntesis_Curricular_Gabriel-Rincón.pdf" target="_blank" rel="noopener noreferrer"
                    style={{color:'#fff', marginBottom:'2px'}}>
                    <Fab variant="extended" color="success" sx={{mr: '0.5rem'}}>
                      <CloudDownloadIcon sx={{ mr: 1 }} />
                      Currículum
                    </Fab>
                  </a>
                </Tooltip>
              </Box>
            </Box>
            <Box component='div' className='card-perfil-foto'>
              <img src={img.foto_perfil} alt="" />
            </Box>
          </Box>
          
        </Container>
      </Box>
    </>
  )
}

export default Perfil
