import React from 'react'

import Inicio from "./inicio/Inicio";
import Perfil from './perfil/Perfil';
import Proyectos from './proyectos/Proyectos';
import Contacto from './contacto/Contacto';
import Footer from '../components/Footer/Footer';

function Page() {
  return (
    <>
      <Inicio />
      <Perfil />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}

export default Page
