/* eslint-disable jsx-a11y/alt-text */
// *************************************
// Main.js for Main page or wecan say for zeel prajapati profile
// ***************************************


import { useGlobalContext } from '../context';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const { logo, Navbar, Introduction, Education, Technology, Projects} = useGlobalContext();

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
    for (let i = 0; i < 20; i++) {
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
      <>
        <div className="main1">
          <div className="text1">
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
              }} onTransitionEnd={(e) => {

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
        </>
  );
}

export default App;
