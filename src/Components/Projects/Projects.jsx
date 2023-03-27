import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Project1 from './Project1.jsx';
import './Projects.css'
import image1 from '../../pi1.jpg'
import image2 from '../../pi2.jpg'
import image3 from '../../p3.jpg'
import image4 from '../../pf1.jpg'
import image5 from '../../pf2.jpg'
import image6 from '../../pf3.jpg'

export default function Projects() {
  let array = [{name:"Videogames App",description:"Esta app creada con Javascript, React, Redux, CSS puro, Node, Express, PostgreSQL y Sequelize, trae información de 100 videojuegos desde una API, a partir de los cuales se pueden efectuar filtros de busqueda y ordenamientos. Ademas, permite al cliente agregar videojuegos que no hayan venido con la API originalmente.", image1: image1, image2: image2, image3: image3, github:'https://github.com/pedroinsa/PI-Videogames'},{name:"Henry Books", description: "Henrybooks es un e-commerce de libros que permite que el usuario navegue mediante filtros de busqueda y ordenamientos hasta alcanzar sus libros favoritos. Ademas, permite registrarse como usuario, lo cual es esencial para comprar libros en la plataforma. Trabajo grupal que fue llevado a cabo en 3 semanas.", image1: image4, image2: image5, image3: image6, github: 'https://github.com/scch94/probando-pf'}]
  return (
    <div className='projects-integer'>
       <Navbar/>
      <div className='projects'>
       {array.map(elem => <Project1 name={elem.name} demo={elem.demo} description={elem.description} image1={elem.image1} image2={elem.image2} image3={elem.image3} github={elem.github} />)}
     </div> 
    </div>
  )
}
