import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box,Button, IconButton, Tooltip, Typography } from '@mui/material'
import { GitHub, VideoLibrary } from '@mui/icons-material';

function Cards({img,title,description,github,urlGithub,urlDemo}) {
  return (
    <>
        <Card sx={{ maxWidth: 345,paddingTop:2,background:'#1c1c1c'}}>
            <Box component='div' className='card-img' sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#F1EFEC',width:'90%',margin:'auto'}}>
                    <img src={img} alt="" style={{width:'100%'}} />
            </Box>
            <CardContent sx={{ height:'100px',overflow:'auto', }}>
                <Typography gutterBottom variant="h5" component="div" sx={{color:'aquamarine'}}>
                {title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff',height:'100px',overflow:'auto'}}>
                {description}
                </Typography>
            </CardContent>
            <CardActions>
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
                                <Button  size="small" variant="contained" color="success">
                                    Ver
                                </Button>
                            </Box>
                        </Box>
                    )
                        
                    
                }
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    </>
  )
}

export default Cards
