

const BlogShort = (props) => {

    const { topic, data } = props;


    if (data.length === 0) {

        return (
            <div className="BlogShort">
                <h1>{topic}</h1>
                <h4>There is no blog found on this topic</h4>
            </div>
        )
    }


    return(
    <div className="BlogShort">
    <h1>{topic}</h1>

    {
        data.map((BlogInformation)=>{
            const {id,title,img,url}=BlogInformation;
            return (
                <div className="BlogInformation" key={id}>
                    <h2>{title}</h2>
                    <img src={img} /> 
                    <button className="btn" style={{color:'black'}}><a href={url}>Read more</a>
                    </button>
                </div>

            )
        })
    }

    </div>
    )
}

export default BlogShort;