
import{ init} from 'emailjs-com';
import emailjs from 'emailjs-com';
import {Link} from 'react-dom'
import {AiTwotoneMail,AiTwotoneFileText} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdSubject} from 'react-icons/md'
export default ()=>{
    
    const mailme=(e)=>{
        e.preventDefault();
        console.log(e.target);
        init("user_T7VYY639xcXhhBCzLUUCo");
        emailjs.sendForm('service_50van2j', 'template_ar6zjgw', e.target)
      .then((result) => {
          console.log(result.text);
          alert("send message")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
        <form className="form" onSubmit={(e)=>{mailme(e)}}>
            <div>
            <label for="name"><BsFillPersonFill />Name:</label>
            <input className="form-input" type="text" name="name" placeholder="Enter Name" required></input>
            </div>
            <div>
            <label for="email"><AiTwotoneMail></AiTwotoneMail>Email:</label>
            <input className="form-input" type="email" name="email" placeholder="Enter Email" required></input>
            </div>
            <div>
            <label for="subject"><MdSubject></MdSubject>Subject:</label>
            <input className="form-input" type="text" name="subject" placeholder="Enter Subject" required></input>
            </div>
            <div>
            <label for="message"><AiTwotoneFileText />Body:</label>
            <textarea className="form-input" type="text" cols="1" name="message" placeholder="Enter Message" required></textarea>
            </div>
            <div>
                <button className="btn" type="submit">Send</button>
                <button className="btn" type="reset">Reset</button>
            </div>
        </form>
        )
}