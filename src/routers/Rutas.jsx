import { Routes,Route, useNavigate,} from 'react-router-dom'


import { Container } from '@mui/material';
import '../assets/Css/Fondo.css'
// ? -------------------------- CONTEXT--------------------------
import { useContext, useEffect } from 'react'
import { Contextdatos } from '../Context/ContextAutenticacion'
import { PageError404, PageHome, PageLoging, PagePerfilUser, PageRecaudosSolicitud, PageRegister, PageRenovarSolicitud, PageSolicitud, PageTableSolicitud, PageTableSolicitud_Aprobada, PageTableSolicitud_pagoPendiente, PageWebportal } from '../Page/Index';
import { ProtectedRouters } from './ProtectedRouters';
import BodyCambioContrasena from '../Components/FormLogin/BodyCambioContrasena';
import BodyCambioPreguntaSeguridad from '../Components/FormLogin/BodyCambioPreguntaSeguridad';
import Page from '../Page/Page';


function Rutas() {


  


  return (
    
    <>
      
      {/* barra lateral   */}
      
      {/* <Sidebar />  */}
          
      <Container maxWidth='sl' sx={{mt:'1rem'}}>
        
        <Routes>
          <Route index element={<Page/>} /> {/* ruta principal al logearse */}
          <Route path='/Login' element={<PageLoging />} />
          <Route path='/Registrarse' element={<PageRegister />} />
          <Route path='/Portarweb' element={<PageWebportal />} />


          {/* ruta para acceder solo si tiene usuario */}
          {/* <Route element={< ProtectedRouters user={storedUser}/>}>
            <Route path='/Home' element={< PageHome user={storedUser}/>} />
            <Route path='/Perfil' element={< PagePerfilUser user={storedUser}/>} />
          </Route> */}
          
          {/* <Route path='/Home' element={< PageHome user={userLogin}/>} /> */}
          {/* <Route path='/Home' element={< PageHome/>} /> */}
          

          {/* cuando la ruta no exite*/}
          <Route path='*' element={<PageError404/> } />
        </Routes>
        
      </Container>

    </>
    
  )
}

export default Rutas