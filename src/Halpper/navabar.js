import react from 'react'
import Navadata from '../Data/data'
import { AiOutlineFacebook , AiFillGithub ,AiFillLinkedin ,AiFillTwitterCircle } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';


function Navabar(){
    
    return (
    <div className="navbar">

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