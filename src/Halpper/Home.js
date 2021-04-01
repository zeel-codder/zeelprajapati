/* eslint-disable jsx-a11y/alt-text */
// *************************************
// Home.js for Main page or wecan say for zeel prajapati profile
// ***************************************

import axios from 'axios';
import {useState,useEffect} from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import { useGlobalContext } from './context';


function App() {

  const { Navbar,Main, Contect, Footer,  Blog , BlogPage } = useGlobalContext();

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
      <Route exact path="/">
        <Main /> 
      </Route>
      <Route exact path="/contect">
        <Contect />
      </Route>
      <Route exact path="/blog">
        <Blog></Blog>
      </Route>
      <Route exact path="/blog/:blogname">
        <BlogPage></BlogPage>
        {/* <BlogPost></BlogPost> */}
      </Route>
      <Footer></Footer>
      {/* </Switch> */}
    </Router>
  );
}




export default App;
