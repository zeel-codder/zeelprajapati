/**
 * This is Footer page of zeel-codder web site.
 * Functions:
 * @name:ImageShow
 * @type:React Component
 * @param:none
 * @returns:JSX of ImageShow component
 * @functionality : This Component is use to show img show on the screen.(Like 1->2->3->4->4)
 */



// Imports
// ====================================
import { useState } from 'react'
import { useEffect } from 'react'
// import { useGlobalContext } from '../context';
// ====================================


const ImageShow = () => {

    const ImageDic = [
        {
            id: 1,
            link: '/images/home/1.jpg'
        },
        {
            id: 2,
            link: '/images/home/2.jpg'

        }

    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        let new_index = (index + 1) % ImageDic.length;
        let y = setInterval(() => {
            setIndex(new_index);
        }, 5000)
        return (() => {
            clearInterval(y)
        })

    }, [ImageDic.length, index])


    return (
        <div className="imgshow_div">
            {
                ImageDic.map((Img, ImageIndex) => {

                    const { id, link } = Img;

                    //default all ImageDiv are next

                    let position = 'nextclass';

                    //let say index=1 than index=0 is prevues and index>=2 is next (index=0 than last index=n-1)
                    if (index - 1 === ImageIndex || (index === 0 && ImageDic.length - 1 === ImageIndex)) {
                        position = "preclass";
                    } else if (index === ImageIndex) {

                        position = "activeclass";
                    }

                    const ans = 'imgshow ' + position

                    return (
                        <img src={link} key={id} className={ans} alt="ImageShowImage" />

                    )

                })
            }
            <div className="left" onClick={() => {
                if (index === 0) {
                    setIndex(ImageDic.length - 1);
                } else {
                    setIndex(index - 1);
                }
            }}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
            </div>

            <div className="right" onClick={() => {

                setIndex((index + 1) % ImageDic.length)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
            </div>


            {/* Bottom Point show */}
            <div className="pointdiv">
                {
                    ImageDic.map((img, imgindex) => {
                        let ans = "point "
                        if (imgindex === index) {
                            ans = ans + "active";
                        }
                        return <span className={ans}></span>
                    })
                }
            </div>
        </div>
    )
}

export default ImageShow;