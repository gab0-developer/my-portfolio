import React from 'react'
import { Box,Button, IconButton, Tooltip, Typography } from '@mui/material'
import { GitHub, VideoLibrary } from '@mui/icons-material';
// img.foto_perfil



function Cards({img,title,description,github,urlGithub,urlDemo}) {
  return (
    <>
        <Box component='div' className='container-card' sx={{p:'0.5rem',backgroundColor:'#F1EFEC'}}>
            <Box component='div' className='card'>
                <Box component='div' className='card-img' sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#F1EFEC',width:'70%',margin:'auto'}}>
                    <img src={img} alt="" style={{width:'100%'}} />
                </Box>
                <Box component='div' className='card-content' sx={{height:'100px',overflow:'auto',p:'0.5rem'}}>
                    <Typography variant="h5" id='text-titles-subtitles'><strong>{title}</strong></Typography>
                    <Typography variant="body1" sx={{textAlign:'justify',px:'1rem'}}>{description}</Typography>
                </Box>
            </Box>
                {
                    github === true ? (
                        <Box component='div' className='card-btn' sx={{display:'flex',alignItems:'center',justifyContent:'center',my:'0.5rem'}}>
                            <Box component='div' className='card-img' sx={{mx:'0.5rem'}}>
                                <Tooltip title="Código fuente">
                                    <IconButton 
                                            aria-label="GitHub" 
                                            href={urlGithub}
                                            target="_blank"
                                            color="inherit"
                                        //   sx={{ color: 'white', mx: 1 }}
                                        >
                                        <GitHub fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Box component='div' className='card-content'>
                                <Tooltip title="Video del aplicativo">
                                    <IconButton 
                                        aria-label="GitHub" 
                                        href={urlDemo}
                                        target="_blank"
                                        color="success"
                                        //   sx={{ color: 'white', mx: 1 }}
                                        >
                                        <VideoLibrary fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    ) : (

                        <Box component='div' className='card-btn' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Box component='div' className='card-content'>
                                <Button variant="contained" color="success">
                                    Ver
                                </Button>
                            </Box>
                        </Box>
                    )
                        
                    
                }
            
        </Box> 
    </>
  )
}

export default Cards
