// import React, { useState, useContext } from 'react';

// import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Home_Page/navabar';
import Introduction from './Home_Page/introduction';
import Education from './Home_Page/education';
import Technology from './Home_Page/tecnologes'
import Projects from './Home_Page/projects'
import Footer from './Home_Page/Footer'
import Contect from './contect'
import logo from '../img/home/logo.jpg'
import ImgeShow from './Home_Page/imgshow';
import mainimg from '../img/home/4.jpg'
import timg from '../img/home/tchnology.svg'
import pimg from '../img/home/project.svg'
import projectdata from '../Data/Home/projects'
import logo_edu from "../img/home/education.svg"
import logo_intro from "../img/home/introimg.svg"
import Loadding from './Home_Page/Loadding'
import Navadata from '../Data/Home/data'
import imgdic from '../Data/Home/Imgedata'
import thor_logo from '../img/home/start_logo.png'
import Blog from './Blog/Blog'
// import BlogData from '../Data/Home/Blog_data'
import Main from './Home_Page/Main'

// import projectdata from '../../Data/projects'

import React, {
  useContext
} from 'react';

const AppContext = React.createContext();

const AppProvider = ({
  children
}) => {


  return ( <
    AppContext.Provider value = {
      {
        Navbar,
        Introduction,
        Education,
        Technology,
        Projects,
        Footer,
        Contect,
        ImgeShow,
        Loadding,
        Blog,
        Main,
        imgdic,
        logo,
        mainimg,
        timg,
        pimg,
        projectdata,
        logo_edu,
        logo_intro,
        Navadata,
        projectdata,
        thor_logo,


      }
    } >
    {
      children
    } </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {
  AppContext,
  AppProvider
};