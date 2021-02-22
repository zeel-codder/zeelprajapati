import react from 'react'
import navadata from '../Data/data'


function Navabar(){
    
    return (
    <navbar>   
    <ul className="navabar-ul">
        {
             navadata.map((data)=>{
                const {id,title,link}=data
                return <li key="id"><a href={link}>{title}</a></li>
             })
        }

    </ul>
    </navbar>
    );
}

export default Navabar;