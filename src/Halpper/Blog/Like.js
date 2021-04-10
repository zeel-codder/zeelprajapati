import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
// import { response } from 'express';


const Like=(props)=>{
    
    const {blogInfo,isBlogShort}=props;
    // console.log(props);
    const [isLike,setIsLike]=useState(false);
    const [Like,setLike]=useState(props.like);

  


    const UpdateLike=async (old,newData)=>{
        
        // console.log({...old},{...old,...newData});

        // await axios({
        //     method: 'post',
        //     url: '/Blog/Update',
        //     filter:{...old},
        //     update:{...old,...newData},
        //   })


          axios.post('/api/BlogInfoUpdate',{ filter:{...old},
        //   axios.post('/BlogInfoUpdate',{ filter:{...old},
          update:{...old,...newData},}).then((response)=>console.log(response));

    }

    const PostLike=()=>{
        let like=0;
        if(!isLike){
            like=Like+1;
        }else{
            if(Like!==0)
            {
                like=Like-1;
               
            }else{
                like=Like;
            }
        }
        setIsLike(!isLike);
        setLike(like);

        const odd={...blogInfo}
        const new_data={like}

        UpdateLike(odd,new_data);
    }


    if(isBlogShort){

        // const {like}=props;

        return(
            <h2 className="Like">Like:
            <span className="Link-Page" onClick={PostLike}>
            <FcLike className="like-icon"/>
            {Like}
            </span>
            </h2>
        )
    }

    return (
        <h2 className="Like">Like:
        <span className="Like-Page" onClick={PostLike}>
        {
            
            !isLike? <FcLikePlaceholder className="like-icon"/>: <FcLike className="like-icon"/>
        }
        {Like}
        </span>
        </h2>
    )
}

export default Like;