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
