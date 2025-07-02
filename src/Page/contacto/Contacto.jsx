import React, { useEffect, useRef, useState } from 'react'
import './Contacto.css'
import { Alert, Autocomplete, Box, Button, InputLabel, Stack, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';

import { expresionsRegulars, MaxText_number_Expression,Email_Expression } from '../../assets/js/ExpresionRegulares';

// import libreria emailJS
import emailjs from '@emailjs/browser';
// libreria de alertas notistack
import { SnackbarProvider, useSnackbar } from 'notistack';

// Estilo base para los campos
const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey.300', // Borde gris claro
    },
    '&:hover fieldset': {
      borderColor: 'grey.400', // Borde al hacer hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'grey.500', // Borde al estar enfocado
    },
    color: 'grey.300', // Color del texto
    backgroundColor: 'grey.900', // Fondo oscuro para contraste
  },
  '& .MuiInputLabel-root': {
    color: 'grey.400', // Color de la etiqueta
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'grey.500', // Color de la etiqueta al estar enfocado
  },
  '& .MuiFormHelperText-root': {
    color: 'grey.500', // Color del texto de ayuda
  }
};

function Contacto() {
  const { enqueueSnackbar } = useSnackbar();

  const [selectlistPaises,setSelectListPaises] = useState([])
  const [nombreusuario,setNombreusuario] = useState({dato:null,error:false,message:'',color:null,fucosed: null})
  const [correousuario,setCorreousuario] = useState({dato:null,error:false,message:'',color:null,fucosed: null})
  const [mensaje,setMensaje] = useState({dato:null,error:false,message:'',color:null,fucosed: null})
  const [disableSubmitContacto,setDisableSubmitContacto] = useState(true)
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

  const form = useRef();

  const HandleSubmitContacto = (event) =>{
    event.preventDefault()
    const serviceID = 'default_service';
    const templateID = 'template_cu2fqyf';
    const publicKey = import.meta.env.VITE_EMAILJS_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          enqueueSnackbar('su correo fue enviado exitosamente', { variant: 'success' });

        },
        (error) => {
          enqueueSnackbar('Algo fallo al enviar el correo', { variant: 'error' });
          // console.log('FAILED...', error.text);
        },
      );
      // deshabilitar el boton despues de 2s
      setTimeout(() => {
        setDisableSubmitContacto(true)
      }, 2000);
  }
  // campos vacios 
  const validateCorreousuario = (value) => {
    Email_Expression(value,setCorreousuario)
  }
  const validateNombreusuario = (value) => {
    MaxText_number_Expression(value,setNombreusuario)
  }
  const validateMessage = (value) => {
    MaxText_number_Expression(value,setMensaje)
  }

  // validate 
  let select_tipo_pais = document.getElementById('select_tipo_pais')
  useEffect(() =>{
    
    if(
        !expresionsRegulars.emailRegex.test(correousuario.dato) || correousuario.dato === null || correousuario.dato === undefined ||
        !expresionsRegulars.maxtextonumberRegex.test(nombreusuario.dato) || nombreusuario.dato === null || nombreusuario.dato === undefined ||
        !expresionsRegulars.maxtextonumberRegex.test(mensaje.dato) || mensaje.dato === null || mensaje.dato === undefined ||
        selectlistPaises === undefined || selectlistPaises == '' || selectlistPaises == null || select_tipo_pais.value.length === 0|| select_tipo_pais.value.length === null  
      ){
        setDisableSubmitContacto(true)
      } else{
      setDisableSubmitContacto(false)
    } 

  }, [correousuario,nombreusuario,mensaje,selectlistPaises])
  return (
    <>
      <Box component='div' id='contacto' className='section section-contact' sx={{ minHeight: '100vh', scrollMarginTop: '64px' }}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        
        <Box component='div' className='title-contacto'>
          <Typography variant="h3" className='title' id='text-titles-subtitles' sx={{my:'1rem',textAlign:'center'}}>
            Contactame
          </Typography>
        </Box>

        <Box component='div' className='form-contacto' >

          <Box component='form' ref={form} id='form' sx={{width:'100%',height:'100%',p:'0.5rem',borderRadius:'5px'}} onSubmit={HandleSubmitContacto}>
            <Box component='div'>
              <Grid container spacing={2} sx={{mt:1}}>
                                
                <Grid item size={{xs:12, md:12}}>
                  <TextField
                    fullWidth
                    sx={textFieldStyles}
                    type="email"
                    id="correo"
                    label="Correo"
                    name='correo'
                    placeholder='Correo: reclutador,empresa,usuario...'
                    value={correousuario.dato }
                    onChange={(e) => validateCorreousuario(e.target.value)}
                    // onChange={(e) => validateCedulaPoder_empresa(e.target.value)}
                    error={correousuario.error}
                    helperText ={correousuario.message}
                    color={correousuario.color}
                    focused={correousuario.fucosed}
                                                                    
                  />
                </Grid>
                <Grid item size={{xs:12, md:6}}>
                  <TextField
                    fullWidth
                    sx={textFieldStyles}
                    type="text"
                    id="name"
                    label="Nombre"
                    name="name"
                    placeholder='Nombre: reclutador,empresa,usuario...'
                    value={nombreusuario.dato }
                    onChange={(e) => validateNombreusuario(e.target.value)}
                    // onChange={(e) => validateCedulaPoder_empresa(e.target.value)}
                    error={nombreusuario.error}
                    helperText ={nombreusuario.message}
                    color={nombreusuario.color}
                    focused={nombreusuario.fucosed}
                                                                    
                  />
                </Grid>
                <Grid item size={{xs:12, md:6}}>
                  <Autocomplete 
                    sx={{
                      '& .MuiAutocomplete-inputRoot': textFieldStyles['& .MuiOutlinedInput-root'],
                      '& .MuiInputLabel-root': textFieldStyles['& .MuiInputLabel-root'],
                    }}
                    fullWidth
                    id="select_tipo_pais" 
                    name="select_tipo_pais" 
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
                    sx={textFieldStyles}
                    fullWidth
                    type="text"
                    id="mensaje"
                    label="Mensaje"
                    name="message"
                    multiline
                    minRows={5}
                    maxRows={10}
                    placeholder="Ingresar su Mensaje"
                    value={mensaje.dato}
                    onChange={(e) => validateMessage(e.target.value)}
                    error={mensaje.error}
                    helperText ={mensaje.message}
                    color={mensaje.color}
                    focused={mensaje.fucosed}
                    />
                </Grid>
                  
              </Grid>
              <Box component='div' sx={{my:'0.5rem',width:'100%',mx:'auto'}}>
                <Stack sx={{ width: '100%' }} >
                    <Alert variant="filled" severity="warning" sx={{textAlign:'center',display:'flex',alignContent:'center',justifyContent:'center'}}>
                    Ingresa un correo existente o válido al cual yo pueda responderte cuando me hayas contacto.
                    </Alert>
                </Stack>
              </Box>
              <Box 
                    sx={{mt:2,float:'right'}}
                >
                <Button type='submit' variant="contained" color="info" disabled={disableSubmitContacto}>
                    Enviar mensaje
                </Button>
              </Box>
            </Box>
          </Box>

          <Box component='div' className='img-contacto'>
            {/* <img src={img.sendEmail} alt="" style={{width:'100%',borderRadius:'5px'}}/> */}
          </Box>
        </Box>
        
      </Box>
    </>
  )
}

export default Contacto
