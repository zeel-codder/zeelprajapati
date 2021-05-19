/**
 This page all information about zeel-codder education info.

 @name:Projects
 @type:React Component
 @param:none
 @returns: JSX of Education details
 @functionality : This Component is use to show Project info of zeel in website.
**/


// Imports
// ====================================
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {FaRegHandPointRight} from 'react-icons/fa'
import {useState} from 'react'
import { useGlobalContext } from '../context';
// ====================================




const Projects=()=>{


    const {ProjectData}=useGlobalContext();

    //Store the open ul data
    const [arr,setarr]=useState([]);


    
    //=============================
    // @name:changeIndex
    // @type:Javascript Function
    // @param:none
    // @return:none
    // @functionality: Function is used to show the Text of ul. It item in arr than it nested ul is display in screen other wise not.
    //=============================

    const changeIndex=(index)=>{
        // console.log(index)
        let new_arr=arr;
        if(new_arr.includes(index)){
            new_arr=new_arr.filter((index1)=>index1!==index);
        }else{
           new_arr.push(index);
        }
        // console.log([...new_arr])
        setarr([...new_arr]);
    }


    // console.log('rendee')
    return(
        <>
        <h1>Projects</h1>
        <div className="box row" id="projects">
        {/* <div className="row"> */}

        <img className="container-img" src='/images/home/project.jpg' alt="Project svg"></img>
        <div className="list-container">
        <ul className="project-ul"> 

           {
               ProjectData.map((d,index)=>{
                   let class1="not-show"
                   let class2=""
                   if(arr.includes(index)){
                       class1="show"
                       class2="rotetor"
                    }
                    
                    return (
                        <li key={d.id}  onClick={()=>changeIndex(index)}>
                   <p className="text">
                   <IoIosArrowDroprightCircle className={class2}></IoIosArrowDroprightCircle>  &nbsp;{d.title} , {d.technology}
                   </p>
                   <ul className={class1}>
                   <li><FaRegHandPointRight /> {d.subtitle}</li>
                   <li><FaRegHandPointRight /> Code Link: <a href={d.codelink} style={{padding:1 ,fontSize:'14px'}}>Code</a></li>
                   <li><FaRegHandPointRight /> Project Link: <a href={d.link} style={{padding:1,fontSize:'14px'}}>Link</a></li>
                   </ul>
                   </li>
                   )
                   
                })
            }
        </ul>
        </div>
        </div>
            {/* </div> */}
        </>
    )
}
export default Projects;