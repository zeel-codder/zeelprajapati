/* eslint-disable jsx-a11y/no-distracting-elements */
import {useGlobalContext} from '../context'
import {useEffect,useState} from "react"
// import Prism from "prismjs"
import axios from 'axios';
// import Code from '../prisumh'
// import marked from 'marked';
// import file from '../../Blogs/Html/Html4SimpleTages/Html4SimpleTages.md';
// import plugins from '../'
// import img1 from '../../img/home/1.jpg'

const Blog=()=>{

    
    const {BlogMainImg,BlogShort}=useGlobalContext();
    const [data,setdata]=useState([]);



    useEffect(() => {


      //  console.log(process);
     
       axios.get('/.netlify/functions//Blog')
      //  axios.get('/Blog')
                .then((res)=>{
                  const data1=[];
                  const index=[];
                  console.log(typeof(res.data));
                  console.log(res.data);
                  const BlogInfo=JSON.parse(res.data.message);
                  BlogInfo.forEach(element => {
                    let topic=element.topic;
                   //  console.log(topic)
                   if(! (topic in index)){
                     const add={
                     };
                     add['topic']=topic;
                     add['data']=[];
                     index[topic]=data1.length;
                     data1.push(add);
                     // console.log(data1);
                   }
                   data1[index[topic]]['data'].push(element);
                  });
                 //  console.log(data1);
                  setdata(data1);


                })
                .catch((err)=>{console.log(err);})
       
      
      }, [])

    return (
        <article className="blog-container">
          <marquee className="alert" behavior="scroll" direction="right">This page is still in production</marquee>
          <h1>Zeel Prajapati's Blog</h1>

          <img className="img" src={BlogMainImg} alt="blog img"></img>
          <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vitae enim dolor aut reprehenderit rerum. Inventore eaque iste ab ut in placeat quasi et voluptates. Exercitationem voluptate repellat similique? Libero.lo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, est quae repellendus vel placeat odio voluptatum itaque quia sequi ipsa eius quod? Perferendis veniam deserunt fugit earum at consequuntur voluptatum!
          </p>

          <div className="ListOfBlogs">
            {  
              
              
              data.map((page)=>{

                return (<BlogShort {...page} />)
                 
              })

            }
          </div>


        </article>
    )
}

export default Blog;