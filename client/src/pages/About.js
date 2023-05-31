import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        The company itself is a very successful company. We lead
                        being blinded by duties at the time whence reason, flexibility will occur,
                        I will explain the pains and flattery of his times when he endured them
                        as if they are really an option when I open or follow! For labor
                        accusers, and will be received by a wise man! We must lead either
                        for neither did the times benefit him.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About