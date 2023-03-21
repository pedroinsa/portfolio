import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import image from '../../equipo.jpg'

import "./Skill-card.css";

// import required modules
import { EffectCards } from "swiper";

export default function SKillCard() {
  return ( 
<div className="skillcard">
    <h2>Descubre mis soft skills!</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper swiper2 swiper-slide2 swiper3"
      >
        <SwiperSlide id="bordo">Trabajo en equipo </SwiperSlide>
        <SwiperSlide id="rojo" >Empatia con el entorno laboral</SwiperSlide>
        <SwiperSlide id="henry">Orientación a resultados</SwiperSlide>
        <SwiperSlide id="gris">Deseo por seguir aprendiendo</SwiperSlide>
        <SwiperSlide id="verde">Adaptación a cambios/situaciones nuevas</SwiperSlide>
      </Swiper>
       
      </div>
  );
}