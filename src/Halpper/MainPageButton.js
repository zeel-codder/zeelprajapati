import react,{useEffect,useState} from 'react';
import { BiLeftTopArrowCircle } from 'react-icons/bi';
import {CgDarkMode} from 'react-icons/cg';
import {DiOpensource} from 'react-icons/di';





function App() {

    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
            
            
              const GOTO=document.querySelector('.Goto_top');
              const Dark=document.querySelector('.DarkMode');
              
              if(GOTO && Dark){
                GOTO.classList.toggle('Goto_top-show');
                Dark.classList.toggle('DarkMode-show');
              }
            

       
    }, [isOpen])


  


  return (
    <div className="MainPageButton" >

    <BiLeftTopArrowCircle className="Goto_top" onClick={()=>{
      window.scrollTo({top:0,behavior: 'smooth'})
    }}></BiLeftTopArrowCircle>

    <CgDarkMode className="DarkMode"  onClick={()=>{

        document.querySelector("#root").classList.toggle("dark");

    }}></CgDarkMode>

    <DiOpensource className="Icon" onClick={()=>setIsOpen(!isOpen)}></DiOpensource>
    </div>
  );
}

export default App;
