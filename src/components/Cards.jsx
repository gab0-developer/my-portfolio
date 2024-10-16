import React from 'react'
import { Box,Button, Typography } from '@mui/material'

import img from '../assets/img/Exportar_img_all'
// img.foto_perfil

function Cards({img,title,description,github}) {
  return (
    <>
        <Box component='div' className='container-card' sx={{p:'0.5rem'}}>
            <Box component='div' className='card'>
                <Box component='div' className='card-img' sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#111111'}}>
                    <img src={img} alt="" style={{width:'40%'}} />
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
                                <Button variant="outlined" color="inherit">
                                    github
                                </Button>
                            </Box>
                            <Box component='div' className='card-content'>
                                <Button variant="contained" color="success">
                                    Ver
                                </Button>
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
