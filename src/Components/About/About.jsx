import React from 'react';
import Navbar from '../Navbar/Navbar';
import image from '../../about2.jpg'
import './About.css'

function About (props){
return(
    <div>
      <Navbar/>
      <div className='about-contenedor'>
       <div className='about-imagen'>
        <img src={image}></img>
      </div>
      <div className='about-texto'>
        <p>Mi nombre es Pedro y bienvenidos a esta breve descripcion personal. He intentando estudiar distintas carreras, una de ellas Periodismo deportivo, la cual finalicé exitosamente(La foto es de la graduación) pero lamentablemente nunca pude ejercerla profesionalmente.
En 2022 decidí transformar mi vida introduciéndome en el mundo tech, al cual accedí sin conocimientos previos. Estudié en el bootcamp de Henry durante 5 meses, los cuales me forjaron habilidades y conocimientos útiles y necesarios. Espero poder seguir creciendo y desenvolverme profesionalmente en la programación, el cual considero un ambiente asombroso y enorme para seguir descubriendo. Soy una persona de objetivos y me propongo alcanzarlos a corto o largo plazo. Ademas, tengo sobrinos y mascotas con los cuales me gusta compartir mi tiempo. Gracias por llegar hasta aqui </p>
       <span>Pedro Torcuato Insausti</span>
      </div>

      </div>
 
    </div> )
}

export default About