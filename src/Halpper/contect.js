/**
 @name:Profile
 @type:React Component
 @param:none
 @returns: JSX of Profile of User details
 @functionality : This Component is use to show The profile of current user in Web.
**/


// Imports
// ====================================
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
// import {Link} from 'react-dom';
import { AiTwotoneMail, AiTwotoneFileText } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdSubject } from 'react-icons/md';
import { useState } from 'react';
// import Loadding from './Loadding'
import { useGlobalContext } from './context';
// ====================================

const Context = () => {

    const { Loading } = useGlobalContext();

    //UseState Used to see Display Loading Component on the screen.
    const [loading, setLoading] = useState(false);

    //=============================
    // @name:MailMe
    // @type:Javascript Function
    // @param:Form Event
    // @return:none
    // @functionality: Function is used to send Email to zeel with the help of email js.
    //=============================

    const MailMe = (e) => {

        e.preventDefault();

        document.documentElement.scrollTop = 0;

        init("user_T7VYY639xcXhhBCzLUUCo");

        setLoading(true);

        emailjs.sendForm('service_50van2j', 'template_ar6zjgw', e.target)
            .then((result) => {
                console.log(result.text);
                alert("Send🙏🙏");
                setLoading(false);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }



    return (
        <>
            {

                loading ? <Loading /> : null

            }

            <div style={{ background: '#55D' }}>


                <form className="form" onSubmit={(e) => { MailMe(e) }}>
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


export default Context;