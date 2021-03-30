import {useGlobalContext} from '../context'
import {useEffect,useState} from "react"
import {useParams} from 'react-router-dom';
import Prism from "prismjs";
import Reactmarkdown from 'react-markdown';

import Tem from '../../Blogs/Html/Html4SimpleTages/index'
// import marked from 'marked';
// import  from '';
// import from 
// import file1 from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';

// import file from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';

const Blog=()=>{
  

    
  const {blogname}  = useParams();
  const file=useGlobalContext()[blogname];

    const [data,setdata]=useState("");
    
    // console.log(BlogData)
    // let dic=BlogData.find((data)=>data.id===1) 

    useEffect(() => {
        Prism.highlightAll()
    
        // console.log(file)
        // const file=require(__dirname+"/"+link);
         
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

    return (
      <>
        {/* <article className="blog-container" dangerouslySetInnerHTML={{__html: data}}>

        </article> */}
        {/* <Tem></Tem> */}
        <Reactmarkdown className="blog-container"
   source={data}
   
/>
      
  
       
      
      </>
      
    )
}

export default Blog;