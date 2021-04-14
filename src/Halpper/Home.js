/**
 @name:Home
 @type:React Component
 @param:none
 @returns: JSX of Home of User details
 @functionality : This Component is main part of web site. Which handle al the routes.
**/


// Imports
// ====================================
// import axios from 'axios';
// import {useState,useEffect} from 'react';
// import { User } from '../../LambdaFunctions/DataBaseConnection';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import { useGlobalContext } from './context';
// ====================================



function Home() {

  const { Navbar,Main, Contact, Footer,  Blog , BlogPage,  Profile} = useGlobalContext();

  // useEffect(() => {
   
  //     axios.get("http://localhost:5001/demo").then((data)=>{
  //       return data['data'];
  //     }).then((data)=>{

  //       console.log(data);
  //     }).catch((err)=>{
  //       console.log('oops ',err);
  //     })
  // }, [])

 
  // console.log(useGlobalContext())
  // console.log(HeightArr);

  return (
    <Router>

      <Navbar />
      {/* <Loadding /> */}
      <Route exact path="/">

        <Main /> 
      
      </Route>
      <Route exact path="/contect">
      
        <Contact />
      
      </Route>
      <Route exact path="/blog">
      
        <Blog />
      
      </Route>
      <Route exact path="/blog/:blogname">
      
        <BlogPage />
      
      </Route>
      <Route exact path="/user/:username">
      
        <Profile />
      
      </Route>
      
      <Footer />
      {/* </Switch> */}
    </Router>
  );
}




export default Home;
