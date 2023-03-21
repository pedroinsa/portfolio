import React from 'react';
import { Link } from 'react-router-dom'
import { TfiLinkedin, TfiGithub} from "react-icons/tfi";
import './Navbar.css'
import Sills from '../Skills/Skills'
 
function Navbar (props){
return(
    <div className='navbar-div'>
      <Link to="/home">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About me</Link>
      <a href='https://www.linkedin.com/in/pedro-torcuato-insausti/'><TfiLinkedin/></a>
      <a href='https://github.com/pedroinsa'><TfiGithub/></a>
    </div> )
}

export default Navbar