import React, { userRef, useEffect, useRef } from "react";
import pfp from '../pics/pfp.jpg'
import { motion, useInView, useAnimation } from 'framer-motion'

const AboutMe = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
        else {
            mainControls.start("hidden")
        }
    }, [isInView])


    return (
        <motion.div ref={ref} id="About" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className="aboutMe-container border-b flex justify-center items-center">
            <div className="aboutMe">
                <div className="imageContainer">
                    <div className="z-0 absolute inset-0 bg-gradient-to-r from-green-300 to-green-200 shadow-lg transform -skew-y-6 -rotate-6 rounded-3xl">
                    </div>
                    <div className="z-1 absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 shadow-lg transform -skew-y-2 -rotate-2 rounded-3xl">
                    </div>
                    <img src={pfp} />
                </div>
                <article>
                    <h1>About Me</h1>
                    <h2>Software || Data || Cloud || Networking</h2>
                    <p className="text-stone-500">
                    I’m Muyeed, a passionate software engineer specializing in software development, machine learning, and networking with over 24 months of co-op experience. 
                    I have expertise in a wide range of technologies, from programming languages like Python, Java, and JavaScript to frameworks such as Spring Boot, 
                    React.js, and Node.js. I also have hands-on experience with both relational and non-relational databases like MSSQL, PostgreSQL, and MongoDB, along 
                    with cloud technologies such as Azure, AWS and Kubernetes.
                    <br></br><br></br>
                    I’m driven by solving complex problems and constantly improving my skill set to deliver impactful solutions.
                    <br></br>
                    <br></br>
                    I have worked on 30+ projects, but feel free to check out few of my notable projects in the&nbsp; 
                        <a style={{color:'blue', textDecoration:'underline', cursor:'pointer'}}onClick={() => {
                            const targetSection = document.querySelector('.app-container').querySelector(`#Projects`)
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }}>Projects</a> section.
                        <br /><br />
                        I am open to working in any postion in Software, Data or Cloud field.
                    </p>
                </article>
            </div>
        </motion.div>
    )
}

export default AboutMe