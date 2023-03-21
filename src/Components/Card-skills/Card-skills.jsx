import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { AiOutlineCheck} from "react-icons/ai";
import image from '../../equipo.jpg'

export default function CardSkills() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="Pedro Insausti"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Soft Skills
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AiOutlineCheck/> El trabajo en equipo por encima de todo 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AiOutlineCheck/> Empatia con el entorno laboral 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AiOutlineCheck/> Orientacion a resultados y cumplir objetivos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AiOutlineCheck/> Deseo por seguir aprendiendo y aplicando nuevos conocimientos
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              <AiOutlineCheck/> Pensamiento analítico
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
              <AiOutlineCheck/> Excelente predisposicion a los cambios y situaciones nuevas
            </Typography>
        
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
