import react,{useEffect} from 'react'
import './App.css';
import Navbar from './Halpper/navabar';
import Introduction from './Halpper/introduction';
import Education from './Halpper/education';
import Technology from './Halpper/tecnologes'
import Projects from './Halpper/projects'
import logo from './img/logo.jpg'
import ImgeShow from './Halpper/imgshow';
import mainimg from './img/2.jpg'
import timg from './img/tchnology.jpg'
import pimg from './img/project.jpg'

import projectdata from './Data/projects'



function App() {


  return (
    <>
    <header>
      <img className="logo" src={logo}></img>
      <span className="logo-text" id="head">
      Zeel Prajapati's Personal Web Site
      </span>
    </header>
    <Navbar />
      <img className="main-img" src={mainimg}></img>
      <section className="container">
      <Introduction/>
      <Education/>
      <Technology timg={timg} />
      <Projects pimg={pimg}  data={projectdata}/>
      </section>
        
    </>



    
  );
}

export default App;
