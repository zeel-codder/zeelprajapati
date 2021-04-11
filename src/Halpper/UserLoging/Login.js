
import {AiTwotoneMail,AiTwotoneFileText} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {RiLockPasswordFill} from 'react-icons/ri';
import {MdSubject} from 'react-icons/md';
import {useState} from 'react';
import {useEffect} from 'react';
// import { set } from 'mongoose';

import { useGlobalContext } from '../context';

export  const Login=(props)=>{


    const [isLoginOpen, setIsLoginOpen] = useState(props.choice!=="Sing In");
    const [issame,setInsane]=useState(false);

    const [passWord,setpassWord]=useState('');
    const [email,setemail]=useState('');
    const [compassWord,setCompassWord]=useState('');
    const {Userstate, dispatchUser}=useGlobalContext();


    const FindUser=async(e)=>{

    }


    const AddUser=async(e)=>{
        e.preventDefault();
        // console.log(e)
        if(issame){

            const newUser={
                name:email,
                password:passWord
            }

            props.closeLogin();
            dispatchUser({type:'UserLogIn',data:newUser});
            

        

        }else{
            alert('Pass Word Done mathch')
        }


    }

    useEffect(() => {
        if(passWord===compassWord){

            
            setInsane(true);
            
        }else{
            
            setInsane(false);
        }

    }, [passWord,compassWord])

    // console.log(prpos);

    return (

        <div className="blog-container Log">

            <div className="login-choice">
                <span onClick={()=>setIsLoginOpen(true)} className={isLoginOpen && `open`}>Log in</span>
                <span onClick={()=>setIsLoginOpen(false)} className={isLoginOpen || `open`}>Sing in</span>
                <span onClick={()=>props.closeLogin()} className="close">[X]</span>
            </div>


            {

            isLoginOpen
            ?
            <form className="form form-login open" onSubmit={(e)=>FindUser(e)}>                
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
            <form className="form form-singin open" onSubmit={(e)=>{AddUser(e)}}>                
            <div>
            <label for="email"><AiTwotoneMail></AiTwotoneMail>Email</label>
            <input className="form-input" 
            onChange={(e)=>setemail(e.target.value)}  value={email}  
            type="email" name="email" placeholder="Enter Email" required></input>
            </div>
            {
               !passWord 
               ? <span className="alert">PassWord Must Be Same</span>
               :
               !issame 
               ? <span className="alert">PassWord Not Same</span>
               : <span className="alert" style={{color:'green'}}>PassWord Same</span>
            }
            <div>
            <label for="subject"><RiLockPasswordFill />PassWord</label>
            <input className={`form-input ${issame || 'Wrong'}`} 
            
            type="passWord" name="subject"  onChange={(e)=>setpassWord(e.target.value)}  value={passWord} placeholder="Enter PassWord" required></input>
            </div>
            <div>
            <label for="subject"><RiLockPasswordFill />Confirm PassWord</label>
            <input className={`form-input ${issame || 'Wrong'}`} type="passWord" name="subject" onChange={(e)=>setCompassWord(e.target.value)}  value={compassWord}  placeholder="Enter Confirm Password" required></input>
            </div>
            <button className="btn" type="submit">Sing In</button>
            </form>
            }
        </div>
    )


    
}