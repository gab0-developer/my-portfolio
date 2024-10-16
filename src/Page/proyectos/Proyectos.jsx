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
      <Box component='div' className='section container-proyectos'>
        <Box component='div' className='title-proyectos' sx={{my:'1rem'}}>
          <Typography variant="h3" id='text-titles-subtitles' sx={{my:'1rem',textAlign:'center'}}>
            Portafolio
          </Typography>
          <Typography variant="p" className='description-proyecto' sx={{color:'#ccc',textAlign:'justify',my:'1rem'}}>
          En esta sección, encontrarás una selección de mis trabajos más destacados en el desarrollo web. Cada proyecto refleja mi capacidad para abordar desafíos técnicos y creativos, destacando el desarrollo frontend y backend. Explora cómo he contribuido a mejorar la experiencia del usuario y optimizar los procesos de diversos servicios.
          </Typography>
        </Box>
        <Box component='div' className='container-swiper-proyectos'>
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
                img={img.foto_perfil}
                title={'Perfil'}
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta porro dolorem fugit, iure non vitae. Qui eveniet ipsam dolor doloremque, excepturi, autem accusamus laborum vitae commodi, voluptate cupiditate quidem.'
                github={false}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                img={img.Laravel_Logo}
                title={'Laravel'}
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta porro dolorem fugit, iure non vitae. Qui eveniet ipsam dolor doloremque, excepturi, autem accusamus laborum vitae commodi, voluptate cupiditate quidem.'
                github={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                img={img.logo_reactjs}
                title={'Reactjs'}
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta porro dolorem fugit, iure non vitae. Qui eveniet ipsam dolor doloremque, excepturi, autem accusamus laborum vitae commodi, voluptate cupiditate quidem.'
                github={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                img={img.oracle_logo}
                title={'Oracle'}
                description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis soluta porro dolorem fugit, iure non vitae. Qui eveniet ipsam dolor doloremque, excepturi, autem accusamus laborum vitae commodi, voluptate cupiditate quidem.'
                github={true}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  )
}

export default Proyectos
