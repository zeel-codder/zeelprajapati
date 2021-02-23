import react,{useEffect} from 'react'
import Navbar from './Halpper/navabar';
import Introduction from './Halpper/introduction';
import Education from './Halpper/education';
import './App.css';
import logo from './img/logo.jpg'
import ImgeShow from './Halpper/imgshow';
import imgdic from './Data/Imgedata'



function App() {

  const headdermaker=()=>{
    let data="Zeel_Prajapati's_Personal_Web_Site"
    // let data="Z"
    let ans=document.querySelector("#head");
    for(let i=0;i<data.length;i++){
      let new_span=document.createElement("span")
      new_span.id="ht" 
      new_span.innerHTML=data[i]
      if(ans!==null){
        ans.appendChild(new_span)
      }
    }
  }

  useEffect(headdermaker,[])

  return (
    <>
    <header>
      <img className="logo" src={logo}></img>
      <span className="logo-text" id="head">
      </span>
    </header>
    <Navbar />
      <ImgeShow imgdic={imgdic}></ImgeShow>
      <section className="container">
      <Introduction logo={logo}/>
      <Education logo={logo}/>
      </section>
        
    </>



    
  );
}

export default App;
