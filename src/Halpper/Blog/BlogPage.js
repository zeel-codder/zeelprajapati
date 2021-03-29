import {useGlobalContext} from '../context'
import {useEffect,useState} from "react"
import {useParams} from 'react-router-dom';
import Prism from "prismjs"
import marked from 'marked';

// import file from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';

const Blog=()=>{
  

    
    const {BlogData}=useGlobalContext();
    const {blogname}  = useParams();
    const [data,setdata]=useState("");
    
    // console.log(BlogData)
    // let dic=BlogData.find((data)=>data.id===1) 

    useEffect(() => {
        Prism.highlightAll()
        // fetch(file)
        // .then(response => {
        //   return response.text()
        // })
        // .then(text => {
        //   setdata(
        //     marked(`${text}`).trim()
        //     )
        // })
        // console.log()
        // setdata([])
        // console.log(slug)
      }, [data])

    return (
        // <article className="blog-container" dangerouslySetInnerHTML={{__html: data}}>
        <article>
          {blogname}
        </article>
    )
}

export default Blog;