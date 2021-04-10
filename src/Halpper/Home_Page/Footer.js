import { AiOutlineFacebook , AiFillGithub ,AiFillLinkedin ,AiFillTwitterCircle } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';

const Footer=()=>{
    return (
        <div className="footer">
            <p className="footer-para">
                All CopyRight &copy; zeel prajapati
            </p>
        <ul className="footer-ul icons">
        <li><a href="https://www.facebook.com/zeel.prajapati.397/"><AiOutlineFacebook /></a></li>
        <li><a href="https://github.com/zeel-codder"><AiFillGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/zeel-prajapati-4832971a3/"><AiFillLinkedin /></a></li>
        <li><a href="https://twitter.com/ZeelPrajapati15"><AiFillTwitterCircle /></a></li>
        </ul>
    </div>
        )
}
export default Footer;