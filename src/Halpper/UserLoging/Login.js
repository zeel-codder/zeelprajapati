/**
 @name:Login
 @type:React Component
 @param:none
 @returns: JSX of Profile of User details
 @functionality : This Component is use to show The profile of current user in Web.
**/



// Imports
// ====================================
import { AiTwotoneMail } from 'react-icons/ai';
// import {BsFillPersonFill} from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
// import {MdSubject} from 'react-icons/md';
// import { useState } from 'react';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { useGlobalContext } from '../context';
// ==================================== 


/**
 @name:reducer
 @type:Javascript Function
 @param:state ,action
 @returns: Updated State object.
 @functionality : This Reducer of Login Website Hook Reducer UserState.
**/

const reducer = (state, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'changeLoadingTrue':
            // const tem=!state.isLoading;
            return { ...state, isLoading: true };
        case 'changeLoadingFalse':
            return { ...state, isLoading: false ,issame: false,
                isLoading: false,
                passWord: '',
                email: '',
                compassWord: ''};
        case 'changeLoginTrue':
            // const tem=!state.isLoading;
            return { ...state, isLoginOpen: true ,issame: false,
                isLoading: false,
                passWord: '',
                email: '',
                compassWord: ''};
        case 'changeLoginFalse':
            return { ...state, isLoginOpen: false };
        case 'SetSameTrue':
            return { ...state, issame: true };
        case 'SetSameFalse':
            return { ...state, issame: false };
        case 'setEmail':
            return { ...state, email: action.data};
        case 'setPassword':
            return { ...state, passWord: action.data};
        case 'setComPassword':
            return { ...state, compassWord: action.data};

    }
    return { ...state };

}


const Login = (props) => {

    const InitialState = {
        isLoginOpen: props.choice !== "Sing In",
        issame: false,
        isLoading: false,
        passWord: '',
        email: '',
        compassWord: '',
    }

    const [state, Reducer] = useReducer(reducer,InitialState);
    // const [isLoginOpen, setIsLoginOpen] = useState(props.choice!=="Sing In");
    // const [issame,setInsane]=useState(false);
    // const [isLoadding,setIsLoadding]=useState(false);
    // const [passWord,setpassWord]=useState('');
    // const [email,setemail]=useState('');
    // const [compassWord,setCompassWord]=useState('');
    const { dispatchUser, Loading } = useGlobalContext();


    const FindUser = async (e) => {
        e.preventDefault();
        const newUser = {
            name: state.email,
            password: state.passWord
        }
        console.log(newUser);
        axios.post(`.netlify/functions/FindUser`, { ...newUser })
            .then((res) => {
                // console.log(res.);
                // console.log(res.data)
                res = JSON.parse(res.data.message);
                if (res.password === state.passWord) {
                    props.closeLogin();
                    dispatchUser({ type: 'UserLogIn', data: res });

                } else {
                    alert('Wrong PassWord')
                }
                Reducer({ type: 'changeLoadingFalse' });
            })
            .catch((error) => {
                alert('UserName is not valid')
                Reducer({ type: 'changeLoadingFalse' });
            });

    }


    const AddUser = async (e) => {
        e.preventDefault();
        // console.log(e)
        if (state.issame) {

            const newUser = {
                name: state.email,
                password: state.passWord
            }

            axios.post('.netlify/functions/AddUser', newUser)
                .then((res) => {
                    if (res.status === 200) {
                        // console.log(res);
                        props.closeLogin();
                        dispatchUser({ type: 'UserLogIn', data: newUser });
                    }
                    Reducer({ type: 'changeLoadingFalse' });
                })
                .catch((error) => {
                    console.log(error);
                    alert('User Exits');
                    Reducer({ type: 'changeLoadingFalse' });
                    // alert('error');
                });
        } else {
            alert('Pass Word Done mathch')
            Reducer({ type: 'changeLoadingFalse' });
        }


    }

    useEffect(() => {
        if (state.passWord === state.compassWord) {
            Reducer({ type: 'SetSameTrue' });
        } else {

            Reducer({ type: 'SetSameFalse' });
        }

    }, [state.passWord, state.compassWord])

    // console.log(prpos);

    return (

        <div className="blog-container Log">

            <div className="login-choice">
                <span onClick={() => Reducer({ type: 'changeLoginTrue' })} className={state.isLoginOpen && `open`}>Log in</span>
                <span onClick={() => Reducer({ type: 'changeLoginFalse' })} className={state.isLoginOpen || `open`}>Sing in</span>
                <span onClick={() => props.closeLogin()} className="close Mybutton">[X]</span>
            </div>

            {

                state.isLoading ? <Loading /> : null

            }


            {

                state.isLoginOpen
                    ?
                    <form className="form form-login open" onSubmit={(e) => {
                        Reducer({ type: 'changeLoadingTrue' });
                        FindUser(e)

                    }}>
                        <div>
                            <label for="email"><AiTwotoneMail></AiTwotoneMail>Email</label>
                            <input className="form-input"
                                onChange={(e) => Reducer({ type: 'setEmail',data:e.target.value})} value={state.email}
                                type="email" name="email" placeholder="Enter Email" required></input>
                        </div>
                        <div>
                            <label for="subject"><RiLockPasswordFill />PassWord</label>
                            <input className={`form-input`}

                                type="passWord" name="subject" onChange={(e) => Reducer({ type: 'setPassword',data:e.target.value})} value={state.passWord} placeholder="Enter PassWord" required></input>
                        </div>
                        {/* <div> */}
                        <button className="btn" type="submit">Log In</button>
                    </form>
                    :
                    <form className="form form-singin open" onSubmit={(e) => {
                        Reducer({ type: 'changeLoadingTrue' });
                        AddUser(e)
                        // FindUser(e)
                        // setIsLoadding(false);
                    }}>
                        <div>
                            <label for="email"><AiTwotoneMail></AiTwotoneMail>Email</label>
                            <input className="form-input"
                                onChange={(e) => Reducer({ type: 'setEmail',data:e.target.value})} value={state.email}
                                type="email" name="email" placeholder="Enter Email" required></input>
                        </div>
                        {
                            !state.passWord
                                ? <span className="alert">PassWord Must Be Same</span>
                                :
                                !state.issame
                                    ? <span className="alert">PassWord Not Same</span>
                                    : <span className="alert" style={{ color: 'green' }}>PassWord Same</span>
                        }
                        <div>
                            <label for="subject"><RiLockPasswordFill />PassWord</label>
                            <input className={`form-input ${state.issame || 'Wrong'}`}

                                type="passWord" name="subject"  onChange={(e) => Reducer({ type: 'setPassword',data:e.target.value})} value={state.passWord}  placeholder="Enter PassWord" required></input>
                        </div>
                        <div>
                            <label for="subject"><RiLockPasswordFill />Confirm PassWord</label>
                            <input className={`form-input ${state.issame || 'Wrong'}`} type="passWord" name="subject"  onChange={(e) => Reducer({ type: 'setComPassword',data:e.target.value})} value={state.compassWord} placeholder="Enter Confirm Password" required></input>
                        </div>
                        <button className="btn" type="submit">Sing In</button>
                    </form>
            }
        </div>
    )



}

export default Login;