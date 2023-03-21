import React from 'react';
import Navbar from '../Navbar/Navbar';
import ActionAreaCard from '../Card-presentation/CardHome';
import Skills from '../Skills/Skills';
import SKillCard from '../Skill-card/Skill-card';
import CardSkills from '../Card-skills/Card-skills';
import image1 from '../../foto.jpg'
import image2 from '../../equipo.jpg'
import image3 from '../../certificado.jpeg'
import './Home.css'

function Home (props){
const cards = [{image: image1, title: "Pedro Insausti", description: " Soy Fullstack developer y bienvenidos a mi portfolio, donde podran conocer algunas de mis skills, mis proyectos y parte de mi vida personal."},{title: "¿Qué significa Henry? ", image: image3, description:"Henry es un bootcamp que me dio herramientas, conocimientos y me intrudujo al mundo IT haciendome conocer una comunidad extraordinaria con una gran calidad humana. Significó un gran paso en mi vida "}]  
return(
    <div className='home'>
        <Navbar/>
      <div className='cards-home'>
        {cards.map(elem => <ActionAreaCard image={elem.image} title={elem.title} description={elem.description}/>) }
        <SKillCard/>
      </div>  
        <Skills/> 
    </div> )
}

export default Home




// {title: "Soft skills",image: image2, description: "El trabajo en equipo por encima de todo. Empatia con el entorno laboral y orientacion a resultados. Fuerte deseo por seguir aprendiendo y aplicando nuevos conocimientos."}