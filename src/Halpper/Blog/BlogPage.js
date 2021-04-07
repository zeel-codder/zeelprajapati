import {useGlobalContext} from '../context'
import {useEffect,useState} from "react"
import {useParams} from 'react-router-dom';
import Prism from "prismjs";
import Reactmarkdown from 'react-markdown';
import axios from 'axios';
// import Tem from '../../Blogs/Html/Html4SimpleTages/index'
// import { GetBlogInfo } from '../../../../Database/BlogSchema';
// import { response } from 'express';
// import marked from 'marked';
// import  from '';
// import from 
// import file1 from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';

// import file from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';

const Blog=()=>{
  

    
  const {blogname}  = useParams();
  const file=useGlobalContext()[blogname];
  const {Like} =useGlobalContext();

    const [data,setdata]=useState("");
    const [blogInfo,setBlogInfo]=useState(0);
    
    // console.log(BlogData)
    // let dic=BlogData.find((data)=>data.id===1) 


    const GetBlogInfo=()=>{

      axios.get(`/Blog/${blogname}`)
            .then((response)=>response.data)
            .then((data)=>{setBlogInfo(data);})
            .catch((err)=>console.log(err));
    }

    useEffect(() => {
        Prism.highlightAll()


        GetBlogInfo();
        

        
         
        if(!file){
          setdata('<h1 class="alert">404 Not Found</h1>')
          return;
        }
        fetch(file)
        .then(response => {
          
          return response.text()
        })
        .then(text => {
          setdata(
            text
            )
        })
        // setdata(Blog);
        // console.log()
        // setdata([])
        // console.log(slug)
      }, [data, file])
    
      // console.log(blogInfo,'main');
    return (
      <>
        {/* <article className="blog-container" dangerouslySetInnerHTML={{__html: data}}>

        </article> */}
        {/* <Tem></Tem> */}
        <div className=" blog-container">
        <Reactmarkdown source={data}/>
        {
        blogInfo!==0 && <Like className="Share" blogInfo={blogInfo} like={blogInfo.like}></Like>
        }
        </div>
      </>
      
    )
}

export default Blog;