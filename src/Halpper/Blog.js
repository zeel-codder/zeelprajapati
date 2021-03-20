import {useGlobalContext} from './Home_Page/context'



const Blog=()=>{

    const {BlogData}=useGlobalContext();
    console.log(BlogData)
    let dic=BlogData.find((data)=>data.id===1)

    return (
        <article className="blog-container">
            {
             dic["Blog"].map((arr)=>{
                if(arr[0]==="title"){
                    return <h1>{arr[1]}</h1>
                }else if(arr[0]==="text"){
                    return <div className="para">
                        {arr[1]}
                    </div>
                }
                return <img src={arr[1]} className="img"></img>
                

             })
            }
        </article>
    )
}

export default Blog;