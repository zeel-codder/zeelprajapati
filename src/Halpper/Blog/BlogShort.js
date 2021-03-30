

const BlogShort = (props) => {

    const { topic, data } = props;


    if (data.length === 0) {

        return (
            <div className="Bloshort-not-found">
                <h1>{topic}</h1>
                <marquee className="alert" behavior="scroll" direction="right">There is no blog found on this topic</marquee>

            </div>
        )
    }


    return(
        <>
    <h1>{topic}</h1>
    <div className="BlogShort">

    {
        data.map((BlogInformation)=>{
            const {id,title,img,url}=BlogInformation;
            return (
                <a href={url} className="blog-a">

                
                <div className="BlogInformation" key={id}>
                    <h2>{title}</h2>
                    <img src={img}  alt='BlogShort Img'/> 
                    <button className="btn" style={{color:'black'}}>Read more
                    </button>
                </div>
                    </a>

            )
        })
    }

    </div>
    </>
    )
}

export default BlogShort;