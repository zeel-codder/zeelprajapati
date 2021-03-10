// import logo from "../../img/home/education.svg"
import { useGlobalContext } from './context';
const Education =(p)=>{

    const {logo_edu}=useGlobalContext()

  
    return (
        <>
    <h1>Education</h1>  
    <div className="revese-box">
        <img className="container-img" src={logo_edu}></img>

    <div className="text-container">
    <p className="para"> 
    I did my 10th in Ankit vidyalaya, kalol, Gujarat in Gujarat Board. Then I finished my 12th in KTKM High School in Science branch. And presently , I am pursuing Computer science B-Tech in Nirma university.
    </p> 
    <table>
        
        <thead>
            <th>Collage/school  name</th>
            <th>Percentile rank/SPI</th>
            <th>Compilation data</th>
            <th>Location</th>
        </thead>

        <tr>
            <th>
            Ankit vidyalaya
            </th>
            <th>
            99.12 PR
            </th>
            <th>
            2017
            </th>
            <th>
            kalol, Gujarat
            </th>
        </tr>
        <tr>
            <th>
            KTKM High School 
            </th>
            <th>
            99.27 PR
            </th>
            <th>
            2019
            </th>
            <th>
            kalol, Gujarat
            </th>
        </tr>
        <tr>
            <th>
            Nirma University
            </th>
            <th>
            -
            </th>
            <th>
            2017
            </th>
            <th>
            Ahmedabad, Gujarat
            </th>
        </tr>
    </table>

    </div>
    </div>
        </>
    )
    }
   export default Education;