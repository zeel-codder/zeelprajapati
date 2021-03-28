import {useRef,useEffect} from "react"
import Prism from "prismjs"


const Prisumh=(props)=>{



  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const { code, plugins, language } = props
  // console.log(code);
    return (
      <>


      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code className={`language-${language}`}>
          {code.trim()};
        </code>
      </pre>
      </>
    )
}

export default Prisumh;