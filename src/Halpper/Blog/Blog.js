import {useGlobalContext} from '../context'
import {useEffect,useState} from "react"
import Prism from "prismjs"
// import Code from '../prisumh'
import marked from 'marked';
import file from '../../Data/Blogs/First.md'
// import plugins from '../'
import img1 from '../../img/home/1.jpg'

const Blog=()=>{

    
    const {BlogData}=useGlobalContext();
    const [data,setdata]=useState("");

    // console.log(BlogData)
    // let dic=BlogData.find((data)=>data.id===1) 

    useEffect(() => {
        Prism.highlightAll()
        fetch(file)
        .then(response => {
          return response.text()
        })
        .then(text => {
          setdata(
            marked(`${text}`).trim()
            )
        })
      }, [data, setdata])

    return (
        <article className="blog-container" dangerouslySetInnerHTML={{__html: data}}>
            
        </article>
    )
}

export default Blog;