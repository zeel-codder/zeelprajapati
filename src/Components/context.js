/**
 @name:Context
 @type:React Component
 @param:none
 @returns: Store app the components and Blog info in object.
 @functionality : This Component is use to Store Add data of Web App.
**/



import React, {
  useReducer,
  useContext,
} from 'react';


// import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Home_Page/navabar';
import Introduction from './Home_Page/introduction';
import Education from './Home_Page/education';
import Technology from './Home_Page/tecnologes';
import Projects from './Home_Page/projects';
import Footer from './Home_Page/Footer';
import Contact from './contect';
import ImageShow from './Home_Page/imgshow';
import ProjectData from '../Data/Home/projects';
import Loading from './Home_Page/Loadding';
import Navdata from '../Data/Home/data';
import Blog from './Blog/Blog';
import Like from './Blog/Like';
import Profile from './User/UserProfile';
import Login from './UserLoging/Login'
import Main from './Home_Page/Main';
// import BlogInfo from '../Data/BlogData/BlogInfo';
import BlogShort from './Blog/BlogShort';
import BlogPage from './Blog/BlogPage';


//Main Functions info
import reducerForUser from './reducer/reducer';


// ==================================
// All Blogs
import html4simpletages from '../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md'
import top6vscodeextesions from '../Blogs/Tools/Top6VsCodeExtesions/top6vscodeextesions.md';
// import demo from '../Blogs/Html/demo/demo.md'


// ===================================


const AppContext = React.createContext();

const initialStateForLogin={
  isUserIn:false,
  UserInfo:{},
}


const AppProvider = ({
  children
}) => {
  const [UserState, dispatchUser] = useReducer(reducerForUser, initialStateForLogin);





  return ( <
    AppContext.Provider value = {
      {


        // mongoose,
        
        //this is react componts
        Navbar,
        Introduction,
        Education,
        Technology,
        Projects,
        Footer,
        Contact,
        ImgeShow: ImageShow,
        Loading,
        Blog,
        Main,
        BlogShort,
        BlogPage,
        Like,
        Login,
        Profile,
        //this is blog fils imports

        html4simpletages,
        top6vscodeextesions,
        // demo,
        dispatchUser,

        //states
        UserState,
        ProjectData,
        Navdata,
        
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