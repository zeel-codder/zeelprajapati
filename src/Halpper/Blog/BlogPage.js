import {useGlobalContext} from '../context'
import {useEffect,useState} from "react"
import {useParams} from 'react-router-dom';
import Prism from "prismjs"
import marked from 'marked';
import file1 from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';

// import file from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';

const Blog=()=>{
  

    
    const {BlogInfo}=useGlobalContext();
    const {blogname}  = useParams();
    const [data,setdata]=useState("");
    
    // console.log(BlogData)
    // let dic=BlogData.find((data)=>data.id===1) 

    useEffect(() => {
        Prism.highlightAll()
        let Blog=BlogInfo.find((data1)=>(data1.data).find(value=>value.name===blogname));
        Blog=Blog.data.find(value=>value.name===blogname);
        let file=Blog.link;
        fetch(file1)
        .then(response => {
          return response.text()
        })
        .then(text => {
          setdata(
            marked(`${text}`).trim()
            )
        })
        // setdata(Blog);
        // console.log()
        // setdata([])
        // console.log(slug)
      }, [data])

    return (
        <article className="blog-container" dangerouslySetInnerHTML={{__html: data}}></article>
      
    )
}

export default Blog;