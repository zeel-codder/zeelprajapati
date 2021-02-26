import { AiOutlineFacebook , AiFillGithub ,AiFillLinkedin ,AiFillTwitterCircle } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';

const Footer=()=>{
    return (
        <div className="footer">
            <p className="footer-para">
                All CopyRight &copy; zeel prajapati
            </p>
        <ul className="footer-ul icons">
        <li><a href="#"><AiOutlineFacebook /></a></li>
        <li><a href="#"><AiFillGithub /></a></li>
        <li><a href="#"><AiFillLinkedin /></a></li>
        <li><a href="#"><AiFillTwitterCircle /></a></li>
        </ul>
    </div>
        )
}
export default Footer;