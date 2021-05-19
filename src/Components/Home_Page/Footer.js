/**
 * This is Footer page of zeel-codder web site.
 * Functions:
 * @name:Footer
 * @type:React Component
 * @param:none
 * @returns:JSX of footer component.
 * @functionality : This Component is use to show Footer of website.
 */

// Imports
// ====================================
import { AiOutlineFacebook , AiFillGithub ,AiFillLinkedin ,AiFillTwitterCircle } from 'react-icons/ai';
// import { FaBeer } from 'react-icons/fa';
// ====================================




const Footer=()=>{
    return (
        <div className="footer">
            <p className="footer-para">
                All CopyRight &copy; zeel prajapati
            </p>
        <ul className="footer-ul icons Footer-icons">
        <li><a href="https://www.facebook.com/zeel.prajapati.397/" title="Facebook"><AiOutlineFacebook /></a></li>
        <li><a href="https://github.com/zeel-codder" title="Github"><AiFillGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/zeel-prajapati-4832971a3/" title="Linkedin"><AiFillLinkedin /></a></li>
        <li><a href="https://twitter.com/ZeelPrajapati15"  title="Twitter"><AiFillTwitterCircle /></a></li>
        </ul>
    </div>
    )
}


export default Footer;