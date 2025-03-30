import React, { useState } from 'react'
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactMailIcon from '@mui/icons-material/ContactMail';


function Navbard() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("inicio"); // Estado para el botón activo

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Función para actualizar el botón activo
    const handleButtonClick = (namebutton) => {
        setActiveButton(namebutton);
    };

    return (
        <>
            <nav className="navbar">
                <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                    <li>
                        <a href="#inicio">
                            <Button
                                variant="outlined"
                                startIcon={
                                    <HomeIcon color={activeButton === "inicio" ? "primary" : "inherit"} />
                                }
                                onClick={() => handleButtonClick("inicio")}
                                color={activeButton === "inicio" ? "primary" : "inherit"}
                            >
                                Inicio
                            </Button>
                        </a>
                    </li>
                    <li>
                        <a href="#perfil">
                            <Button
                                variant="outlined"
                                startIcon={
                                    <PersonPinIcon color={activeButton === "perfil" ? "primary" : "inherit"} />
                                }
                                onClick={() => handleButtonClick("perfil")}
                                color={activeButton === "perfil" ? "primary" : "inherit"}
                            >
                                Perfil
                            </Button>
                        </a>
                    </li>
                    <li>
                        <a href="#proyectos">
                            <Button
                                variant="outlined"
                                startIcon={
                                    <MiscellaneousServicesIcon color={activeButton === "proyectos" ? "primary" : "inherit"} />
                                }
                                onClick={() => handleButtonClick("proyectos")}
                                color={activeButton === "proyectos" ? "primary" : "inherit"}
                            >
                                Proyectos
                            </Button>
                        </a>
                    </li>
                    <li>
                        <a href="#contactos">
                            <Button
                                variant="outlined"
                                startIcon={
                                    <ContactMailIcon color={activeButton === "contactos" ? "primary" : "inherit"} />
                                }
                                onClick={() => handleButtonClick("contactos")}
                                color={activeButton === "contactos" ? "primary" : "inherit"}
                            >
                                Contacto
                            </Button>
                        </a>
                    </li>
                </ul>
                <div className="navbar-toggle">
                    <IconButton aria-label="menu" onClick={toggleMenu}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </nav>
        </>
    );

}

export default Navbard