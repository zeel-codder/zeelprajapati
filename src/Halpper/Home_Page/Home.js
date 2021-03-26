/* eslint-disable jsx-a11y/alt-text */
// *************************************
// Home.js for Main page or wecan say for zeel prajapati profile
// ***************************************


import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { useGlobalContext } from './context';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const { logo, Navbar, Introduction, Education, Technology, Projects, Contect, Footer, mainimg, thor_logo, Blog } = useGlobalContext();

  const [HeightArr, setHeighArr] = useState([]);
  // console.log(useGlobalContext())


  // ================================
  // Page Css Animation
  // ================================
  function ScrollAnimtion(e) {
    const arr = document.querySelectorAll(".box")
    const WindowsBottom = window.scrollY + window.innerHeight;
    arr.forEach((box) => {
      const Box = box.offsetTop + box.offsetHeight / 6;
      if (Box < WindowsBottom) {
        box.classList.add("box-show")
      } else {
        box.classList.remove("box-show")

      }
    })
  }

  function AddLine() {

    let height = document.querySelector(".main1").offsetHeight/2;
    let HeightArr = []
    for (let i = 0; i < 15; i++) {
      HeightArr.push(Math.random() * (height)+height);
    }
    setHeighArr(HeightArr);
    console.log(HeightArr);

  }

  useEffect(() => {
    window.addEventListener("scroll", ScrollAnimtion)
    AddLine();
  }, [])

  // console.log(HeightArr);

  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <div className="main1">
          <div className="text">
            <img src={logo} className="logo"></img>
            <span className="logo-text" id="head">
              Zeel Prajapati's Personal Web Site
            </span>
          </div>
          {
            HeightArr.map((data, index) => {
              // console.log(data);
              return (
              <div className="line_div" onMouseEnter={(e) => {
                let target = e.target.childNodes;
                if(target.length!==0){
                  target=target[0];
                }else{
                  target=e.target;
                }
                let height = document.querySelector(".main1").offsetHeight;
                target.style.height = `${height}px`;
              }} onMouseLeave={(e) => {

                let target = e.target.childNodes;
                if(target.length!==0){
                  target=target[0];
                }else{
                  target=e.target;
                }
                const divs = document.querySelectorAll(".line");
                let data=Array.from(divs).indexOf(target);
                target.style.height = `${HeightArr[data]}px`;
                // console.log(HeightArr[data]);
                // console.log(e);
                // console.log("out");
              }}>
               <div  className="line" data={index} style={{ height: `${data}px` }}>
               </div>
              </div>
              )
            })
          }
        </div>
        <section className="container">
          <Introduction />
          <Education />
          <Technology />
          <Projects />
        </section>
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
