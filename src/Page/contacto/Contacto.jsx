import React, { useState } from 'react'
import './Contacto.css'
import { Alert, Autocomplete, Box, Button, InputLabel, Stack, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';

import img from "../../assets/img/Exportar_img_all";

function Contacto() {

  const [selectlistPaises,setSelectListPaises] = useState()
  const [listPaises,setListPaises] = useState([
    { "pais": "Afganistán" },
    { "pais": "Albania" },
    { "pais": "Alemania" },
    { "pais": "Andorra" },
    { "pais": "Angola" },
    { "pais": "Antigua y Barbuda" },
    { "pais": "Arabia Saudita" },
    { "pais": "Argelia" },
    { "pais": "Argentina" },
    { "pais": "Armenia" },
    { "pais": "Australia" },
    { "pais": "Austria" },
    { "pais": "Azerbaiyán" },
    { "pais": "Bahamas" },
    { "pais": "Bangladés" },
    { "pais": "Barbados" },
    { "pais": "Baréin" },
    { "pais": "Bélgica" },
    { "pais": "Belice" },
    { "pais": "Benín" },
    { "pais": "Bermuda" },
    { "pais": "Bielorrusia" },
    { "pais": "Bolivia" },
    { "pais": "Bosnia-Herzegovina" },
    { "pais": "Botsuana" },
    { "pais": "Brasil" },
    { "pais": "Brunéi" },
    { "pais": "Bulgaria" },
    { "pais": "Burkina Faso" },
    { "pais": "Burundi" },
    { "pais": "Bután" },
    { "pais": "Cabo Verde" },
    { "pais": "Camboya" },
    { "pais": "Camerún" },
    { "pais": "Canadá" },
    { "pais": "Catar" },
    { "pais": "Chad" },
    { "pais": "Chile" },
    { "pais": "China" },
    { "pais": "Chipre" },
    { "pais": "Colombia" },
    { "pais": "Comoras" },
    { "pais": "Congo, República Democrática del" },
    { "pais": "Congo, República de" },
    { "pais": "Corea del Norte" },
    { "pais": "Corea del Sur" },
    { "pais": "Costa de Marfil" },
    { "pais": "Costa Rica" },
    { "pais": "Croacia" },
    { "pais": "Cuba" },
    { "pais": "Curazao" },
    { "pais": "Dinamarca" },
    { "pais": "Djibouti" },
    { "pais": "Dominica" },
    { "pais": "Ecuador" },
    { "pais": "Egipto" },
    { "pais": "El Salvador" },
    { "pais": "Emiratos Árabes Unidos" },
    { "pais": "Eritrea" },
    { "pais": "Eslovaquia" },
    { "pais": "Eslovenia" },
    { "pais": "España" },
    { "pais": "Estados Unidos" },
    { "pais": "Estonia" },
    { "pais": "Etiopía" },
    { "pais": "Filipinas" },
    { "pais": "Finlandia" },
    { "pais": "Fiyi" },
    { "pais": "Francia" },
    { "pais": "Gabón" },
    { "pais": "Gambia" },
    { "pais": "Georgia" },
    { "pais": "Ghana" },
    { "pais": "Granada" },
    { "pais": "Grecia" },
    { "pais": "Groenlandia" },
    { "pais": "Guam" },
    { "pais": "Guatemala" },
    { "pais": "Guinea" },
    { "pais": "Guinea Ecuatorial" },
    { "pais": "Guinea-Bisáu" },
    { "pais": "Guyana" },
    { "pais": "Haití" },
    { "pais": "Honduras" },
    { "pais": "Hong Kong" },
    { "pais": "Hungría" },
    { "pais": "India" },
    { "pais": "Indonesia" },
    { "pais": "Irak" },
    { "pais": "Irán" },
    { "pais": "Irlanda" },
    { "pais": "Islandia" },
    { "pais": "Islas Caimán" },
    { "pais": "Islas Faroe" },
    { "pais": "Islas Marianas del Norte" },
    { "pais": "Islas Marshall" },
    { "pais": "Islas Salomón" },
    { "pais": "Islas Vírgenes Británicas" },
    { "pais": "Islas Vírgenes de los Estados Unidos" },
    { "pais": "Israel" },
    { "pais": "Italia" },
    { "pais": "Jamaica" },
    { "pais": "Japón" },
    { "pais": "Jordania" },
    { "pais": "Kazajistán" },
    { "pais": "Kenia" },
    { "pais": "Kirguistán" },
    { "pais": "Kiribati" },
    { "pais": "Kosovo" },
    { "pais": "Kuwait" },
    { "pais": "Laos" },
    { "pais": "Lesoto" },
    { "pais": "Letonia" },
    { "pais": "Líbano" },
    { "pais": "Liberia" },
    { "pais": "Libia" },
    { "pais": "Liechtenstein" },
    { "pais": "Lituania" },
    { "pais": "Luxemburgo" },
    { "pais": "Macedonia" },
    { "pais": "Madagascar" },
    { "pais": "Malasia" },
    { "pais": "Malaui" },
    { "pais": "Maldivas" },
    { "pais": "Malí" },
    { "pais": "Malta" },
    { "pais": "Marruecos" },
    { "pais": "Mauricio" },
    { "pais": "Mauritania" },
    { "pais": "México" },
    { "pais": "Micronesia" },
    { "pais": "Moldavia" },
    { "pais": "Mónaco" },
    { "pais": "Mongolia" },
    { "pais": "Montenegro" },
    { "pais": "Mozambique" },
    { "pais": "Myanmar" },
    { "pais": "Namibia" },
    { "pais": "Nauru" },
    { "pais": "Nepal" },
    { "pais": "Nicaragua" },
    { "pais": "Níger" },
    { "pais": "Nigeria" },
    { "pais": "Noruega" },
    { "pais": "Nueva Zelanda" },
    { "pais": "Omán" },
    { "pais": "Países Bajos" },
    { "pais": "Pakistán" },
    { "pais": "Palaos" },
    { "pais": "Palestina" },
    { "pais": "Panamá" },
    { "pais": "Papúa Nueva Guinea" },
    { "pais": "Paraguay" },
    { "pais": "Perú" },
    { "pais": "Polinesia Francesa" },
    { "pais": "Polonia" },
    { "pais": "Portugal" },
    { "pais": "Puerto Rico" },
    { "pais": "Qatar" },
    { "pais": "Reino Unido" },
    { "pais": "República Centroafricana" },
    { "pais": "República Checa" },
    { "pais": "República Democrática del Congo" },
    { "pais": "República Dominicana" },
    { "pais": "Ruanda" },
    { "pais": "Rumania" },
    { "pais": "Rusia" },
    { "pais": "Samoa" },
    { "pais": "Samoa Americana" },
    { "pais": "San Cristóbal y Nieves" },
    { "pais": "San Marino" },
    { "pais": "San Vicente y las Granadinas" },
    { "pais": "Santa Lucía" },
    { "pais": "Santo Tomé y Príncipe" },
    { "pais": "Senegal" },
    { "pais": "Serbia" },
    { "pais": "Seychelles" },
    { "pais": "Sierra Leona" },
    { "pais": "Singapur" },
    { "pais": "Sint Maarten" },
    { "pais": "Siria" },
    { "pais": "Somalia" },
    { "pais": "Sri Lanka" },
    { "pais": "Suazilandia" },
    { "pais": "Sudáfrica" },
    { "pais": "Sudán" },
    { "pais": "Sudán del Sur" },
    { "pais": "Suecia" },
    { "pais": "Suiza" },
    { "pais": "Surinam" },
    { "pais": "Tailandia" },
    { "pais": "Taiwán" },
    { "pais": "Tanzania" },
    { "pais": "Tayikistán" },
    { "pais": "Timor Oriental" },
    { "pais": "Togo" },
    { "pais": "Tonga" },
    { "pais": "Trinidad y Tobago" },
    { "pais": "Túnez" },
    { "pais": "Turkmenistán" },
    { "pais": "Turquía" },
    { "pais": "Tuvalu" },
    { "pais": "Ucrania" },
    { "pais": "Uganda" },
    { "pais": "Uruguay" },
    { "pais": "Uzbekistán" },
    { "pais": "Vanuatu" },
    { "pais": "Vaticano" },
    { "pais": "Venezuela" },
    { "pais": "Vietnam" },
    { "pais": "Yemen" },
    { "pais": "Yibuti" },
    { "pais": "Zambia" },
    { "pais": "Zimbabue" }
  ])

  return (
    <>
      <Box component='div' className='section section-portafolio section-contact'>
        
        <Box component='div' className='title-contacto'>
          <Typography variant="h3" className='title' id='text-titles-subtitles' sx={{my:'1rem',textAlign:'center'}}>
            Contactame
          </Typography>
        </Box>
        <Box component='div' sx={{my:'0.5rem',width:'90%',mx:'auto'}}>
          <Stack sx={{ width: '100%' }} spacing={2} >
              <Alert variant="filled" severity="success" sx={{textAlign:'center',display:'flex',alignContent:'center',justifyContent:'center'}}>
              Transforma tu visión en una realidad digital. Contáctame, estoy listo para transformar tus desafíos en éxitos o formar parte de tu organización.
              </Alert>
          </Stack>
        </Box>

        <Box component='div' className='form-contacto' sx={{width:'90%',margin:'auto',display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'#7777773f',p:'0.5rem',borderRadius:'10px'}} >

          <Box component='form' sx={{width:'100%',height:'100%',p:'0.5rem',borderRadius:'5px'}}>
            <Box component='div'>
              <Grid container spacing={2} sx={{mt:1}}>
                                
                <Grid item size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    id="Nombre"
                    label="Nombre"
                    placeholder='Nombre: reclutador,empresa,usuario...'
                    // value={cedulaPoder.dato }
                    onChange={(e) => e.target.value}
                    // onChange={(e) => validateCedulaPoder_empresa(e.target.value)}
                    // error={cedulaPoder.error}
                    // helperText ={cedulaPoder.message}
                    // color={cedulaPoder.color}
                    // focused={cedulaPoder.fucosed}
                                                                    
                  />
                </Grid>
                <Grid item size={{xs:12, md:6}}>
                  <Autocomplete 
                    fullWidth
                    id="select_tipo_pais" 
                    options={listPaises}
                    onChange={(e,newValue) => {
                      setSelectListPaises({
                          pais: newValue ? newValue.pais : null
                        })
                    }}
                    getOptionLabel={(option) => option.pais}
                    renderInput={(params) => <TextField {...params} label="País desde donde me escribes" variant="outlined" />}
                  />
                </Grid>
                                
                <Grid item size={{xs:12, md:12}}>
                  <TextField 
                    fullWidth
                    id="mensaje"
                    label="Mensaje"
                    multiline
                    minRows={5}
                    maxRows={10}
                    placeholder="Ingresar su Mensaje"
                    // defaultValue={estatus_solicitud}
                    // sx={{ color: '#1dba6cef' }}
                    // color={colorEstatusSolicitud}
                    // color={estatus_solicitud ? "warning" : "primary"}
                    // focused
                    // variant="filled"
                    />
                </Grid>
                  
              </Grid>
              <Box 
                    sx={{mt:2,float:'right'}}
                >
                <Button variant="contained" color="info">
                    Enviar mensaje
                </Button>
              </Box>
            </Box>
          </Box>

          <Box component='div' className='img-contacto'>
            <img src={img.contact} alt="" style={{width:'100%',height:'300px',borderRadius:'5px'}}/>
          </Box>
        </Box>
        
      </Box>
    </>
  )
}

export default Contacto
