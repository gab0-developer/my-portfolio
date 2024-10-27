import React from 'react'

import Inicio from "./inicio/Inicio";
import Perfil from './perfil/Perfil';
import Proyectos from './proyectos/Proyectos';
import Contacto from './contacto/Contacto';
import Navbard from '../components/Navbard';

function Page() {
  return (
    <>
      <Navbard />
      <div id="inicio"><Inicio /></div>
      <div id="perfil"><Perfil /></div>
      <div id="proyectos"><Proyectos /></div>
      <div id="contactos"><Contacto /></div>
      {/* <Inicio />
      <Perfil />
      <Proyectos />
      <Contacto /> */}
    </>
  )
}

export default Page
