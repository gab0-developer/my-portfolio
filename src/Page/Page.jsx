import React from 'react'

import Inicio from "./inicio/Inicio";
import Perfil from './perfil/Perfil';
import Proyectos from './proyectos/proyectos_personales/Proyectos';
import ProyectoLaboral from './proyectos/proyectos_laborales/ProyectoLaboral';
import Contacto from './contacto/Contacto';
import Footer from '../components/Footer/Footer';

function Page() {
  return (
    <>
      <Inicio />
      <Perfil />
      <Proyectos />
      <ProyectoLaboral />
      <Contacto />
      <Footer />
    </>
  )
}

export default Page
