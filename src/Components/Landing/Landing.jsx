import React from 'react';
import { Link } from 'react-router-dom'
import image from '../../perro-ordenador.jpg'
import './Landing.css'

function Landing (props){
return(
    <div className='landing'>
        <h1>Portfolio de Pedro Insausti</h1>
        <img src={image} alt="perro" />
        <Link to ="/home">
            <button>Ingresar</button>
        </Link>

 
    </div> )
}

export default Landing