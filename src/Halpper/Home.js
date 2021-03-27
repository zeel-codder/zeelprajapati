/* eslint-disable jsx-a11y/alt-text */
// *************************************
// Home.js for Main page or wecan say for zeel prajapati profile
// ***************************************


import { Route, BrowserRouter as Router } from 'react-router-dom'
import { useGlobalContext } from './context';


function App() {

  const { Navbar,Main, Contect, Footer,  Blog } = useGlobalContext();

 
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
      <Footer></Footer>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
