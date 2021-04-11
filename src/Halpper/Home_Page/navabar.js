import react from 'react'
// import {Link} from 'react-dom
import { Link } from 'react-router-dom';
import Navadata from '../../Data/Home/data'
import { AiOutlineFacebook , AiFillGithub ,AiFillLinkedin ,AiFillTwitterCircle } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';
import { VscListFlat } from 'react-icons/vsc'
import React, { useState, useRef, useEffect } from 'react';
import {useGlobalContext} from '../context';
import {FaUserSecret} from 'react-icons/fa';



function Navabar(){
    const [showLinks,setLinkopen]=useState(false);
    const [isLoginOpen,setIsLoginOpen]=useState(false);
    let value=useRef(true);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const linksRefs = useRef(null);
    const first = useRef(true);
    const {Userstate,Login}=useGlobalContext();

    // console.log(Userstate);


    const NavabarDisplay=()=>{
        document.querySelector(".icon").classList.toggle("rotetor")
        setLinkopen(!showLinks)    
    }

    const ShowLogin=(data)=>{
        // console.log(data.textContent);
        value.current=data.textContent;

        setIsLoginOpen(true);

    }

    const closeLogin=()=>{

        setIsLoginOpen(false);
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

        {
        !Userstate.isUserIn 
        ?
        <>
        <li className="login"><a onClick={(e)=>{
            ShowLogin(e.target);
        }}>Sing In</a></li>
        <li className="login"><a onClick={(e)=>{
            ShowLogin(e.target);

        }}>Log In</a></li>
        </>
        :
        <li className="icons"><Link to="/user"><FaUserSecret></FaUserSecret></Link></li>
        }
    </li>
    </ul>
    {
       isLoginOpen && <Login choice={value.current} closeLogin={closeLogin}></Login>

    }
            </div>
    </div>

    );
}

export default Navabar;