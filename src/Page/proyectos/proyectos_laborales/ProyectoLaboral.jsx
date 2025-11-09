import { useState } from "react";
import {
  Box, Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import img from "../../../assets/img/Exportar_img_all";


function ProyectoLaboral() {
   // Estado para controlar qué galería se abre
  const [openProjectIndex, setOpenProjectIndex] = useState(-1);

  const projects = [
    {
      title: "Kiwi Company",
      description:
        "Desarrollo de sistema Administrativo de San Martín de la Patagonia (Argentina) para control y gestión de viajes.",
      cover: img.home, // imagen principal que se muestra en la card
      gallery: [
        { src: img.home, width: 800, height: 600 },
        { src: img.HomeTrip, width: 800, height: 600 },
        { src: img.formTrip, width: 800, height: 600 },
        { src: img.UpdateTrip, width: 800, height: 600 },
        { src: img.ViewTrip, width: 800, height: 600 },
      ],
    },
    {
      title: "Servicio de Contraloria Sanitaria",
      description:
        "Desarrollo de sistema de Gestión y Control para el registro de solicitudes de Contraloria Sanitaria Empresarial, inclyendo el registro de control total para fabricar, envasar e importar productos de consumo humano y garantizar el cumplimiento de los estandes sanitarios.",
      cover: img.Ventana_principal, // imagen principal que se muestra en la card
      gallery: [
        { src: img.Ventana_principal, width: 800, height: 600 },
        { src: img.login_sacs, width: 800, height: 600 },
        { src: img.home_user, width: 800, height: 600 },
        { src: img.register_empresa, width: 800, height: 600 },
        { src: img.regsiter_empresa_success, width: 800, height: 600 },
        { src: img.solicitud_aprobada, width: 800, height: 600 },
        { src: img.solicitud_details, width: 800, height: 600 },
        { src: img.solicitud_generar_pdf, width: 800, height: 600 },
        { src: img.solicitud_pago_credenciales, width: 800, height: 600 },
        { src: img.solicitud_pago_pendiente, width: 800, height: 600 },
        { src: img.solicitud_pdf, width: 800, height: 600 },
        { src: img.solicitud_recaudos, width: 800, height: 600 },
        { src: img.solicitud_rechazada, width: 800, height: 600 },
        { src: img.solicitud_register, width: 800, height: 600 },
        { src: img.solicitud_registered_success, width: 800, height: 600 },
        { src: img.solicitud_registered, width: 800, height: 600 },
        { src: img.solicitud_renovar_confirmar, width: 800, height: 600 },
        { src: img.solicitud_renovar_error, width: 800, height: 600 },
        { src: img.Ventana_principal, width: 800, height: 600 },
      ],
    },
    
  ];

  return (
    <>
      <Container maxWidth="xl">
        <Box component="div" id="proyecto" className="section container-proyectos-laborales">
          <Box component="div" className="title-proyectos" sx={{ my: "1rem" }}>
            <Typography
              variant="h6"
              id="text-titles-subtitles"
              sx={{ py: "1rem", textAlign: "center" }}
            >
              Proyectos Laborales
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {projects.map((project, i) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  onClick={() => setOpenProjectIndex(i)} // abre el proyecto correspondiente
                  style={{ cursor: "pointer" }}
                >
                  <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.cover}
                      alt={project.title}
                      sx={{maxHeight:"200px", bgcolor:"red"}}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ height: "100px", overflow: "auto" }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Lightbox dinámico */}
          {openProjectIndex >= 0 && (
            <Lightbox
              open={openProjectIndex >= 0}
              close={() => setOpenProjectIndex(-1)}
              slides={projects[openProjectIndex].gallery}
            />
          )}
        </Box>
      </Container>
    </>
  )
}

export default ProyectoLaboral
