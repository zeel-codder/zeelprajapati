import {IoMdListBox} from 'react-icons/io'

const Technology=(pops)=>{
    const {timg}=pops
    return (
    <>
    <h1>Technology</h1>
    <div className="box">
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