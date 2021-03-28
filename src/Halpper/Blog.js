import {useGlobalContext} from './context'
import Code from './prisumh'
// import plugins from '../'

const Blog=()=>{

    const code=`
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nirma University</title>
    <link rel="shortcut icon" href="{{ url_for('static', filename='favicon.ico') }}">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="{{ url_for('static', filename='Home.css') }}">
    <link rel="stylesheet" href="../static/Home.css">
</head>
<body>
    <header>
        <div class="top-headding">Nirma
            <span style="color: blue; font-weight: bold;">University</span>
        </div>

        <nav id="navbar">
                <ul>
                    <li class="menu_item"><a href="\\">Home</a></li>
                    <li class="menu_item"><a href="\\branch">SPI</a></li>
                </ul>
        </nav>
    </header>
    <div class="container" id="zeel">
        <div class="text">

            <div class="card-header" id="zee">
                SPI CALCULATOR
            </div>
            <div class="card-body">
                <h2 class="card-title">Well Come to Niram University</h2>
                <p class="card-text">Here you can calculate spi of sem</p>
                <a href="/branch" class="btn btn-primary">Go SPI Caluculation</a>
            </div>
            <div class="card-footer" id="gu">
                Div C
            </div>
        </div>
    </div>
    <footer id="footer">
        <ul>
            <li><a>All copyright &copy; Goes to Zeel,Amir and Jaydeep</a></li>
        </ul>
    </footer>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
crossorigin="anonymous"></script>
</html>`;

    const {BlogData}=useGlobalContext();
    console.log(BlogData)
    let dic=BlogData.find((data)=>data.id===1) 

    return (
        <article className="blog-container">
            {
             dic["Blog"].map((arr)=>{
                if(arr[0]==="title"){
                    return <h1 >{arr[1]}</h1>
                }else if(arr[0]==="text"){
                    return <div className="para">
                        {arr[1]}
                    </div>
                }else if(arr[0]==="code"){
                    return (
                    <>
                    <h1>Html</h1>
                    <Code code={arr[2]}
                    plugins={['line-number']} language={arr[1]}></Code>
                    </>)
                }
                // eslint-disable-next-line jsx-a11y/alt-text
                return <img  src={arr[1]} className="img" />
            
             })
            }
            



{/* <pre><code class="language-css">p { color: red }</code></pre> */}

            
        </article>
    )
}

export default Blog;