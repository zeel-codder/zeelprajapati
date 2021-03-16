import {IoMdListBox} from 'react-icons/io'
import { useGlobalContext } from './context';

const Technology=()=>{
    const {timg}=useGlobalContext()
    return (
    <>
    <div className="box">
    <h1>Technology</h1>
        <img className="container-img" src={timg}></img>
    <div className="list-container">
    <ul className="technology-ul">
        <li>
            <IoMdListBox></IoMdListBox> HTML,CSS,JS
        </li>
        <li>
        <IoMdListBox></IoMdListBox> React js
        </li>
        <li>
        <IoMdListBox></IoMdListBox> Node js
        </li>
        <li>
        <IoMdListBox></IoMdListBox> Java
        </li>
        <li>
        <IoMdListBox></IoMdListBox> Python
        </li>
    </ul>
    </div>
    </div>
    </>)
}

export default Technology;