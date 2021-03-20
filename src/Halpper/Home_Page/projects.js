import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {FaRegHandPointRight} from 'react-icons/fa'
import {useState} from 'react'
import { useGlobalContext } from './context';

const Projects=()=>{
    const {pimg,projectdata}=useGlobalContext()
    const [arr,setarr]=useState([])

    const changeIndex=(index)=>{
        // console.log(index)
        let new_arr=arr
        if(new_arr.includes(index)){
            new_arr=new_arr.filter((index1)=>index1!=index);
        }else{
           new_arr.push(index)
        }
        console.log([...new_arr])
        setarr([...new_arr]);
    }
    // console.log('rendee')
    return(
        <>
        <div className="revese-box">
        <h1>Projects</h1>
            
        <img className="container-img" src={pimg}></img>
        {/* <div className="text-container"> */}
        <div className="list-container">

        <ul className="project-ul"> 
           {
               projectdata.map((d,index)=>{
                   let class1="not-show"
                   let class2=""
                   if(arr.includes(index)){
                       class1="show"
                       class2="rotetor"
                    }
                    
                    return (<li key={d.id}  onClick={()=>changeIndex(index)}>
                   <p className="text">
                   <IoIosArrowDroprightCircle className={class2}></IoIosArrowDroprightCircle>  &nbsp;{d.title} , {d.technology}
                   </p>
                   <ul className={class1}>
                   <li><FaRegHandPointRight /> {d.subtitle}</li>
                   <li><FaRegHandPointRight /> Codelink:<a href={d.codelink}>code</a></li>
                   <li><FaRegHandPointRight /> Projectlink:<a href={d.link}>Link</a></li>
                   </ul>
                   </li>
                   )
                   
                })
            }
        </ul>
        </div>
            {/* </div> */}
            {/* </div> */}
        </div>
        </>
    )
}
export default Projects;