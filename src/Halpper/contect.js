
import {Link} from 'react-dom'
import {AiTwotoneMail,AiTwotoneFileText} from 'react-icons/ai'
import {MdSubject} from 'react-icons/md'
export default ()=>{

    return (
        <form className="form">
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