
import {AiTwotoneMail} from 'react-icons/ai';
// import {BsFillPersonFill} from 'react-icons/bs';
import {RiLockPasswordFill} from 'react-icons/ri';
// import {MdSubject} from 'react-icons/md';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
// import { set } from 'mongoose';

import { useGlobalContext } from '../context';

export  const Login=(props)=>{

   
    const [isLoginOpen, setIsLoginOpen] = useState(props.choice!=="Sing In");
    const [issame,setInsane]=useState(false);
    const [isLoadding,setIsLoadding]=useState(false);
    const [passWord,setpassWord]=useState('');
    const [email,setemail]=useState('');
    const [compassWord,setCompassWord]=useState('');
    const {dispatchUser,Loadding}=useGlobalContext();


    const FindUser=async(e)=>{
        e.preventDefault();
        const newUser={
            name:email,
            password:passWord
        }
        axios.post(`.netlify/functions/FindUser`,{...newUser})
        .then((res)=>{
            // console.log(res.);
            // console.log(res.data)
            res=JSON.parse(res.data.message);
            if(res.password===passWord){
                props.closeLogin();
                dispatchUser({type:'UserLogIn',data:res});

            }else{
                alert('Wrong PassWord')
            }
            setIsLoadding(false);
        })
        .catch((error)=>{
            alert('UserName is not valid')
            setIsLoadding(false);
        });

    }


    const AddUser=async(e)=>{
        e.preventDefault();
        // console.log(e)
        if(issame){

            const newUser={
                name:email,
                password:passWord
            }

         axios.post('.netlify/functions/AddUser',newUser)
        .then((res)=>{
            if(res.status===200){
                // console.log(res);
                props.closeLogin();
                dispatchUser({type:'UserLogIn',data:newUser});
            }
            setIsLoadding(false);
        })
        .catch((error)=>{
            console.log(error);
            alert('User Exits');
            setIsLoadding(false);
            // alert('error');
        });
        }else{
            alert('Pass Word Done mathch')
            setIsLoadding(false);
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
                <span onClick={()=>props.closeLogin()} className="close Mybutton">[X]</span>
            </div>

            {
             
             isLoadding ? <Loadding /> :null

            }


            {

            isLoginOpen
            ?
            <form className="form form-login open" onSubmit={(e)=>{
                setIsLoadding(true);    
                FindUser(e)
                
            }}>                
            <div>
            <label for="email"><AiTwotoneMail></AiTwotoneMail>Email</label>
            <input className="form-input" 
            onChange={(e)=>setemail(e.target.value)}  value={email}  
            type="email" name="email" placeholder="Enter Email" required></input>
            </div>
            <div>
            <label for="subject"><RiLockPasswordFill />PassWord</label>
            <input className={`form-input`} 
            
            type="passWord" name="subject"  onChange={(e)=>setpassWord(e.target.value)}  value={passWord} placeholder="Enter PassWord" required></input>
            </div>
            {/* <div> */}
            <button className="btn" type="submit">Log In</button>
            </form>
            :
            <form className="form form-singin open" onSubmit={(e)=>{
                setIsLoadding(true);    
                AddUser(e)
                // FindUser(e)
                // setIsLoadding(false);
                }}>                
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