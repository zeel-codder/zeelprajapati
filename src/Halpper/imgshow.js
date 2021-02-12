import react,{useState} from 'react'
import {useEffect} from 'react'



const ImgeShow=(props)=>{

    const {imgdic}=props

    const [index,setindex]=useState(0)

    useEffect(()=>{
        let new_index=(index+1)%imgdic.length;
        let y=setInterval(()=>{
            setindex(new_index);
        },5000)
        return (()=>{
            clearInterval(y)
        })

    },[index])
  

    return(
    <div className="imgshow_div">
        {
            imgdic.map((img,imgindex)=>{

                const {id,link}=img
                let position='nextclass'
                if(index-1==imgindex || index==0 && imgdic.length-1==imgindex){
                    position="preclass"
                }else if(index==imgindex){
                    position="activeclass"
                }
                const ans='imgshow '+position

           
   
                return (
                <img src={link} key={id} className={ans} alt="hi"></img>
                 )

            })
        }
        <div className="left" onClick={()=>{
                  if(index==0){
                    setindex(imgdic.length-1);
                }else{
                    setindex(index-1);
                }
            }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
        </svg>
        </div>
        <div className="right" onClick={()=>{
            
            setindex((index+1)%imgdic.length)
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
        </div>
    
        <div className="pointdiv">

            {
                imgdic.map((img,imgindex)=>{
                    let ans="point "
                    if(imgindex==index){
                        ans=ans+"active";
                    }
                    return <span className={ans}></span>
                })
            }

        </div>
    
    </div>
    )
}

export default ImgeShow;