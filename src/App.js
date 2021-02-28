import react,{useEffect} from 'react'
// import {Link} from 'react-dom'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './Halpper/navabar';
import Introduction from './Halpper/introduction';
import Education from './Halpper/education';
import Technology from './Halpper/tecnologes'
import Projects from './Halpper/projects'
import Footer from './Halpper/Footer'
import Contect from './Halpper/contect'
import logo from './img/logo.jpg'
import ImgeShow from './Halpper/imgshow';
import mainimg from './img/4.jpg'
import timg from './img/tchnology.svg'
import pimg from './img/project.svg'

import projectdata from './Data/projects'



function App() {


  return (
    <Router>
      {/* <Switch> */}

    <header>
      <img className="logo" src={logo}></img>
      <span className="logo-text" id="head">
      Zeel Prajapati's Personal Web Site
      </span>
    </header>
    <Navbar />
      <Route exact path="/">
      <img src={mainimg} className="main-img"></img>
      <section className="container">
      <Introduction/>
      <Education/>
      <Technology timg={timg} />
      <Projects pimg={pimg}  data={projectdata}/>
      </section>
      </Route>
      <Route exact path="/contect">
      <Contect />
      </Route>
      <Footer></Footer>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
