import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './Carrousel.css'

export default function Carrousel({image1, image2, image3}) {
    return (
        <Carousel className="carr">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Landing page</h3>
              <p>Una bienvenida e introduccion a la pagina</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Home</h3>
              <p>El lugar central de la App</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Formulario</h3>
              <p>
                Aqui un formulario controlado
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}
