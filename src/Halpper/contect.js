
import{ init} from 'emailjs-com';
import emailjs from 'emailjs-com';
import {Link} from 'react-dom'
import {AiTwotoneMail,AiTwotoneFileText} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdSubject} from 'react-icons/md'
import {useState} from 'react'
// import Loadding from './Loadding'
import { useGlobalContext } from './context';

const Contect=()=>{
    
    const {Loadding}=useGlobalContext();
    
    const [loadding,setLoadding]=useState(false);
    
    const mailme=(e)=>{
        e.preventDefault();
        document.documentElement.scrollTop=0
        document.querySelector("#root").classList.add("blur")
        init("user_T7VYY639xcXhhBCzLUUCo");
        setLoadding(true)
        emailjs.sendForm('service_50van2j', 'template_ar6zjgw', e.target)
        .then((result) => {
            console.log(result.text);
            alert("Send🙏🙏")
            document.querySelector("#root").classList.remove("blur")
            setLoadding(false)
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    
    return (
        <>
         {
             
             loadding ? <Loadding /> :null

            }

            <div style={{background:'rgb(55, 197, 216)'}}>

            
            <form className="form" onSubmit={(e)=>{mailme(e)}}>                
            <div>
            <label for="name"><BsFillPersonFill />Name</label>
            <input className="form-input" type="text" name="name" placeholder="Enter Name" required></input>
            </div>
            <div>
            <label for="email"><AiTwotoneMail></AiTwotoneMail>Email</label>
            <input className="form-input" type="email" name="email" placeholder="Enter Email" required></input>
            </div>
            <div>
            <label for="subject"><MdSubject></MdSubject>Subject</label>
            <input className="form-input" type="text" name="subject" placeholder="Enter Subject" required></input>
            </div>
            <div>
            <label for="message"><AiTwotoneFileText />Body</label>
            <input className="form-input" type="text" name="message" placeholder="Enter Message" required></input>
            </div>
            {/* <div>/ */}
                {/* <button className="btn" type="reset">Reset</button> */}
                <button className="btn" type="submit">Send</button>
            {/* </div> */}
        </form>
            
            </div>
        </>
        )
    }
    export default Contect; 