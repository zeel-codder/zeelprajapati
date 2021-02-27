import react from 'react'
// import {Link} from 'react-dom
import { Link } from 'react-router-dom';
import Navadata from '../Data/data'
import { AiOutlineFacebook , AiFillGithub ,AiFillLinkedin ,AiFillTwitterCircle } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';
import { VscListFlat } from 'react-icons/vsc'


function Navabar(){

    const NavabarDisplay=()=>{
        document.querySelector(".navbar").classList.toggle("navabar-flex")
        document.querySelector(".navabar-ul").classList.toggle("navabar-ul-flex")
        document.querySelector(".icons").classList.toggle("navabar-ico-flex")
        document.querySelector(".icon").classList.toggle("rotetor")
    }
    
    return (
        <div className="navbar">
         <div className="icon" onClick={NavabarDisplay}> <VscListFlat></VscListFlat></div>
    <ul className="navabar-ul">
        {
            Navadata.map((data)=>{
                const {id,title,link}=data
                return (

                    <li key={id}>
                    <Link to={data.link}>
                    
                        {title}
                    
                </Link>
                    </li>
                    )
            })
        }
    </ul>
    <ul className="navabar-ul icons">
        <li><a href="https://www.facebook.com/zeel.prajapati.397/"><AiOutlineFacebook /></a></li>
        <li><a href="https://github.com/zeel-codder"><AiFillGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/zeel-prajapati-4832971a3/"><AiFillLinkedin /></a></li>
        <li><a href="https://twitter.com/ZeelPrajapati15"><AiFillTwitterCircle /></a></li>
    </ul>
    </div>

    );
}

export default Navabar;