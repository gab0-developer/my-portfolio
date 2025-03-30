import React from 'react';
import { Box, Typography } from '@mui/material';
import './Proyectos.css'
import img from "../../assets/img/Exportar_img_all";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';
import Cards from '../../components/cards';

function Proyectos() {


  return (
    <>
      <Box component='div' id='proyecto' className='section container-proyectos' sx={{ minHeight: '100vh', scrollMarginTop: '64px' }}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Box component='div' className='title-proyectos' sx={{my:'1rem'}}>
          <Typography variant="h3" id='text-titles-subtitles' sx={{py:'1rem',textAlign:'center'}}>
            Portafolio
          </Typography>
          <Typography variant="p" className='description-proyecto' sx={{color:'#ccc',textAlign:'justify',py:'3rem'}}>
          En esta sección, encontrarás una selección de mis trabajos más destacados en el desarrollo web. Cada proyecto refleja mi capacidad para abordar desafíos técnicos y creativos, destacando el desarrollo frontend y backend. Explora cómo he contribuido a mejorar la experiencia del usuario y optimizar los procesos de diversos servicios.
          </Typography>
        </Box>
        <Box component='div' className='container-swiper-proyectos' sx={{textAlign:'justify',py:'3rem'}}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
              },
            }}
            navigation={true}
            modules={[Navigation,Pagination]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              140: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              340: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <Cards
                img={img.citas_medicas}
                title={'Citas medicas'}
                description='Este sistema permite a doctores gestionar citas por especialidad, mientras los administradores controlan y gestionan todo el sistema. Una solución eficiente para clínicas que optimiza la agenda médica y la gestión de datos.'
                github={true}
                urlGithub='https://github.com/gab0-developer/citas_medicas'
                urlDemo='https://youtu.be/wHxD3mhheEg'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                img={img.gestion_libreria}
                title={'Gestión de Libreria'}
                description='Sistema bibliotecario digital: usuarios solicitan libros, bibliotecarios gestionan préstamos y admins gestionan todo el sistema y ven un panel de control.'
                github={true}
                urlGithub='https://github.com/gab0-developer/biblioteca'
                urlDemo='https://youtu.be/EfpxhcAUgXM'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                img={img.administradorTareas}
                title={'Administrador de tareas'}
                description='Aplicacion que permite Registrar, editar y eliminar tareas, con estadísticas para monitorear tu progreso. Ayuda a organizar actividades diarias o laborales de manera sencilla e interactiva.'
                github={true}
                urlGithub='https://github.com/gab0-developer/administrador_tareas'
                urlDemo='https://youtu.be/ulJAH60xTFA'
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  )
}

export default Proyectos
