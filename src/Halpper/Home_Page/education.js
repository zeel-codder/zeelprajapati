/**
 This page all information about zeel-codder education info.

 @name:Education
 @type:React Component
 @param:none
 @returns: JSX of Education details
 @functionality : This Component is use to show Education info of zeel  website.
**/


const Education = () => {
    return (
        <>
            <div className="box">
                <h1>Education</h1>
                <img className="container-img" src='/images/home/education.svg' alt="Education Svg"></img>

                <div className="text-container">
                    <p className="para">
                        I did my 10th in Ankit vidyalaya, kalol, Gujarat in Gujarat Board. Then I finished my 12th in KTKM High School in Science branch. And presently , I am pursuing Computer science B-Tech in Nirma university.
                    </p>
                    <table>

                        <thead>
                            <th>Collage/school  name</th>
                            <th>Percentile rank/SPI</th>
                            <th>Compilation data</th>
                            <th>Location</th>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    Ankit vidyalaya
                                </th>
                                <th>
                                    99.12 PR
                                </th>
                                <th>
                                    2017
                                </th>
                                <th>
                                    kalol, Gujarat
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    KTKM High School
                                </th>
                                <th>
                                    99.27 PR
                                </th>
                                <th>
                                    2019
                                </th>
                                <th>
                                    kalol, Gujarat
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Nirma University
                                </th>
                                <th>
                                    -
                                </th>
                                <th>
                                    2023
                                </th>
                                <th>
                                    Ahmadabad, Gujarat
                                </th>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Education;