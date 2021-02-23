import react from 'react'
import navadata from '../Data/data'


function Navabar(){
    
    return (
    <ul className="navabar-ul">
        {
             navadata.map((data)=>{
                const {id,title,link}=data
                return <li key={id}><a href={link}>{title}</a></li>
             })
        }

    </ul>

    );
}

export default Navabar;