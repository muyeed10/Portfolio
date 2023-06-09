import React, { userRef, useEffect, useRef } from "react";
import test1 from '../pics/test1.png'
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
        <motion.div ref = {ref} id="About" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }} 
            className="aboutMe-container border-b flex justify-center items-center">
            <div className="aboutMe">
                <div className="imageContainer">
                    <img src={test1} />
                </div>
                <article>
                    <h1>About Me</h1>
                    <h2>Fullstack, Software || Network Engineer</h2>
                    <p className="text-stone-500">Hi, I am Muyeed. Third year CS student at TMU (formerly Ryerson). I am a passionate Computer Science major with expertise in a wide range of
                        technologies and programming languages. I have built numerous full stack applications, each project
                        intuitive and visually appealing. I also emphasize the performance and reliability of the back-end, including efficient database designs, and employ caching strategies to enhance the
                        app's responsiveness, minimizing loading times and ensure a smooth user experience, regardless of the device or network conditions.
                        <br /><br />
                        In addition I have also built many programs and apps using Python, Java, C. Having worked as a Network Engineer, 
                        I possess in-depth knowledge of network protocols, security, and infrastructure design.
                    </p>
                </article>
            </div>
        </motion.div>
    )
}

export default AboutMe