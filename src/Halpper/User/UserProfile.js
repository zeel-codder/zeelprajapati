import { useGlobalContext } from '../context';

const Profile=()=>{

    const {name,password}=useGlobalContext().Userstate.UserInfo;

    return (

        <div className="container">
        <h1>
        name:{name}
        </h1>
        </div>
        )
}

export default Profile;