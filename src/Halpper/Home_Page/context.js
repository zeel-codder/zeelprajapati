// import React, { useState, useContext } from 'react';

// import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './navabar';
import Introduction from './introduction';
import Education from './education';
import Technology from './tecnologes'
import Projects from './projects'
import Footer from './Footer'
import Contect from './contect'
import logo from '../../img/home/logo.jpg'
import ImgeShow from './imgshow';
import mainimg from '../../img/home/4.jpg'
import timg from '../../img/home/tchnology.svg'
import pimg from '../../img/home/project.svg'
import projectdata from '../../Data/projects'
import logo_edu from "../../img/home/education.svg"
import logo_intro from "../../img/home/introimg.svg"
import Loadding from './Loadding'
import Navadata from '../../Data/data'
import imgdic from '../../Data/Imgedata'
import thor_logo from '../../img/home/start_logo.png'
import Blog from '../Blog'
import BlogData from '../../Data/Blog_data'

// import projectdata from '../../Data/projects'

import React, {
  useState,
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
        BlogData,

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