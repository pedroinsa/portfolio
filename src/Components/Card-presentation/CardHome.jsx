import * as React from 'react';
import Card from '@mui/material/Card';
import image from '../../foto.jpg'
import { AiOutlineCheck} from "react-icons/ai";
import './Cardhome.css'

export default function ActionAreaCard({image, title, description}) {
  return (
    <div className='card-home'>
      <img className='img-card' src={image}></img>
      <h2>{title}</h2>
      <p>{description}</p>

    </div>
  );
}
