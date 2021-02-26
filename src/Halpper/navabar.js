import react from 'react'
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
                return <li key={id}><a href={link}>{title}</a></li>
            })
        }
    </ul>
    <ul className="navabar-ul icons">
        <li><a href="#"><AiOutlineFacebook /></a></li>
        <li><a href="#"><AiFillGithub /></a></li>
        <li><a href="#"><AiFillLinkedin /></a></li>
        <li><a href="#"><AiFillTwitterCircle /></a></li>
    </ul>
    </div>

    );
}

export default Navabar;