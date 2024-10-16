import React from 'react'

import Inicio from "./inicio/Inicio";
import Perfil from './perfil/Perfil';
import Proyectos from './proyectos/Proyectos';
import Contacto from './contacto/Contacto';

function Page() {
  return (
    <>
      <Inicio />
      <Perfil />
      <Proyectos />
      <Contacto />
    </>
  )
}

export default Page
