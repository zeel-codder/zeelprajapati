
// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action)=>{

    if(action.type==="UserLogIn"){

        console.log({...state,isUserIn:true,UserInfo:action.data});

        return {...state,isUserIn:true,UserInfo:action.data};
    }

    return {...state};

}