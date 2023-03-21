import React from 'react';
import { Switch, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={Landing} /> 
          <Route path="/contact" component={Contact}/>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
       </Switch>
    </div>
  );
}

export default App;
