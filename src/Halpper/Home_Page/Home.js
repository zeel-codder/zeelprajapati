// *************************************
// Home.js for Main page or wecan say for zeel prajapati profile
// ***************************************


import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './navabar';
import Introduction from './introduction';
import Education from './education';
import Technology from './tecnologes'
import Projects from './projects'
import Footer from './Footer'
import Contect from './contect'
import logo from '../../img/logo.jpg'
import ImgeShow from './imgshow';
import mainimg from '../../img/4.jpg'
import timg from '../../img/tchnology.svg'
import pimg from '../../img/project.svg'

import projectdata from '../../Data/projects'



function App() {

  return (
    <Router>
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
