/**
 This page all information about zeel-codder education info.

 @name:Technology
 @type:React Component
 @param:none
 @returns: JSX of Education details
 @functionality : This Component is use to show Technology info of zeel in website.
**/


// Imports
// ====================================
import { IoMdListBox } from 'react-icons/io'
// import { useGlobalContext } from '../conte/xt';
// ====================================



const Technology = () => {

    const Info = ['HTML,CSS,JS', 'React js', 'Node js', 'Java', 'Python', 'C']
    return (
        <>
            <div className="box">
                <h1>Technology</h1>
                <img className="container-img" src='/images/home/tchnology.svg' alt='TheologyPhoto'></img>
                <div className="list-container">
                    <ul className="technology-ul">

                        {
                            Info.map((data) => {
                                return (
                                    <li>
                                        <IoMdListBox></IoMdListBox> {data}
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>)
}

export default Technology;