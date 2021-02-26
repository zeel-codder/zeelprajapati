import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {FaRegHandPointRight} from 'react-icons/fa'

const Projects=(props)=>{
    const {pimg,data}=props
    return(
        <>
        <h1>Projects</h1>
        <div className="revese-box">
            
        <img className="container-img" src={pimg}></img>
        <div className="text-continer">
        <ul className="project-ul"> 
           {
               data.map((d)=>{
                   return (<li key={d.id}>
                   <p className="text">
                   <IoIosArrowDroprightCircle></IoIosArrowDroprightCircle>  &nbsp;{d.title} , {d.technology}
                   </p>
                   <ul>
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
        </div>
        </>
    )
}
export default Projects;