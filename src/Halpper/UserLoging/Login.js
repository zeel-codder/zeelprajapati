
import {AiTwotoneMail,AiTwotoneFileText} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs';
import {RiLockPasswordFill} from 'react-icons/ri'
import {MdSubject} from 'react-icons/md'
import {useState} from 'react'

export  const Login=()=>{


    const [IsLoginOpen, setIsLoginOpen] = useState(false);

    return (

        <div className="blog-container Log">

            <div className="login-choice">
                <span onClick={()=>setIsLoginOpen(true)} className={IsLoginOpen && `open`}>Log in</span>
                <span onClick={()=>setIsLoginOpen(false)} className={IsLoginOpen || `open`}>Sing in</span>
            </div>


            {

            IsLoginOpen
            ?
            <form className="form form-login open">                
            <div>
            <label for="email"><AiTwotoneMail></AiTwotoneMail>Email</label>
            <input className="form-input" type="email" name="email" placeholder="Enter Email" required></input>
            </div>
            <div>
            <label for="subject"><RiLockPasswordFill />PassWord</label>
            <input className="form-input" type="text" name="subject" placeholder="Enter PassWord" required></input>
            </div>
            <button className="btn" type="submit">Log In</button>
            </form>
            :
            <form className="form form-singin open">                
            <div>
            <label for="email"><AiTwotoneMail></AiTwotoneMail>Email</label>
            <input className="form-input" type="email" name="email" placeholder="Enter Email" required></input>
            </div>
            <div>
            <label for="subject"><RiLockPasswordFill />PassWord</label>
            <input className="form-input" type="passWord" name="subject" placeholder="Enter PassWord" required></input>
            </div>
            <div>
            <label for="subject"><RiLockPasswordFill />Confirm PassWord</label>
            <input className="form-input" type="passWord" name="subject" placeholder="Enter Confirm Password" required></input>
            </div>
            <button className="btn" type="submit">Sing In</button>
            </form>
            }
        </div>
    )


    
}