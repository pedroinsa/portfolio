import React from 'react'
import Carrousel from '../Carrousel/Carrousel'
import { TfiGithub } from "react-icons/tfi";
import './Project1.css'

export default function Project1({name, description, image1, image2, image3, github, demo}) {
  return (
    <div className='project-card'>
      <h2>{name}</h2>
      <p>{description}</p>     
      <Carrousel image1={image1} image2={image2} image3={image3}/>
      <div className='buttons-card'>
         {demo?<a href='https://www.google.com.ar/'><button className='buttonProject'>Demo</button></a> : null}
       <a href={github}> <button className='buttonProject'>Github</button></a>
      </div>
  </div> 
  )
}
