import react from 'react'
// import {Link} from 'react-dom
import { Link } from 'react-router-dom';
import Navadata from '../../Data/Home/data'
import { AiOutlineFacebook , AiFillGithub ,AiFillLinkedin ,AiFillTwitterCircle } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';
import { VscListFlat } from 'react-icons/vsc'
import React, { useState, useRef, useEffect } from 'react';
import {useGlobalContext} from '../context';

function Navabar(){
    const [showLinks,setLinkopen]=useState(false)
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const linksRefs = useRef(null);
    const first = useRef(true);
    const {isLoging}=useGlobalContext();




    const NavabarDisplay=()=>{
        document.querySelector(".icon").classList.toggle("rotetor")
        setLinkopen(!showLinks)    
    }
    useEffect(() => {
        if(!first.current){

            const linksHeight = linksRef.current.getBoundingClientRect().height;
            // const linksHeight1 = linksRefs.current.getBoundingClientRect().height;
            if (showLinks) {
                linksContainerRef.current.style.height = `${linksHeight}px`;
            } else {
                linksContainerRef.current.style.height = '0px';
            }
        }else{
            first.current=false
        }
        // console.log('cc')
    }, [showLinks])
    // console.log("zz")
    
    return (
        <div className="navbar">
                <div className={`icon`} onClick={NavabarDisplay}> <VscListFlat></VscListFlat></div>
         <div className="navbar-item" ref={linksContainerRef}>

    <ul className="navabar-ul" ref={linksRef}>
        <div>

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
        </div>
    <li className="Login-Page"  ref={linksRefs}>
        <li className="login"><Link to="/login">Sing In</Link></li>
        <li className="login"><Link to="/login">Log In</Link></li>
    </li>
    </ul>
            </div>
    </div>

    );
}

export default Navabar;