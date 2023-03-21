import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import jsimage from '../../js.png';
import htmlimage from '../../html.png'
import cssimage from '../../css.png'
import reactimage from '../../react.png'
import reduximage from '../../redux.png'
import sequelizeimage from '../../sequelize.png'
import nodeimage from '../../node.png'
import postgres from '../../postgres.png'
import './Skills.css'

export default function Skills () {
 let array = [{image: jsimage}, {image: htmlimage},{image: cssimage},{image: nodeimage},{image: reactimage},{image:reduximage},{image: postgres},{image:sequelizeimage}]   
  return (
    <div className='skills-contenedor'>
        <a name="skills"><h2>Conocimientos en:</h2></a>
        <Swiper id="swiper_id"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper swiper-slide3 swiper3"
      >
        <SwiperSlide>
          <img src={jsimage}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={htmlimage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cssimage}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={reactimage}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nodeimage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={reduximage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={postgres} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sequelizeimage}/>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

<h2>Conocimientos en:</h2>
