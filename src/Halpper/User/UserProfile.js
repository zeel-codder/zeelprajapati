import { useGlobalContext } from '../context';

const Profile=()=>{

    const {name,password}=useGlobalContext().Userstate.UserInfo;

    return (

        <>

        <h1>
        name:{name}

    </h1>
        <h1>
        passWord:{password}

    </h1>
        </>
        )
}

export default Profile;