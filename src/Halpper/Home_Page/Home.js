// *************************************
// Home.js for Main page or wecan say for zeel prajapati profile
// ***************************************


import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
// import Navbar from './navabar';
// import Introduction from './introduction';
// import Education from './education';
// import Technology from './tecnologes'
// import Projects from './projects'
// import Footer from './Footer'
// import Contect from './contect'
// // import logo from '../../img/home/logo.jpg'
// import ImgeShow from './imgshow';
// import mainimg from '../../img/home/4.jpg'
// import timg from '../../img/home/tchnology.svg'
// import pimg from '../../img/home/project.svg'

import { useGlobalContext } from './context';
// import projectdata from '../../Data/projects'



function App() {

  const {logo,Navbar,Introduction,Education,Technology,Projects,Contect,Footer,mainimg}=useGlobalContext();
  // console.log(useGlobalContext())

  return (
    <Router>
    <header>
      <img src={logo} className="logo"></img>
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
      <Technology/>
      <Projects/>
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
