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
                    <h2>Fullstack, Software || Network Engineer</h2>
                    <p className="text-stone-500">Hi, I am Muyeed. Third year CS student at TMU (formerly Ryerson). I am a passionate Computer Science major with expertise in a wide range of
                        technologies and programming languages. I have built numerous full stack applications, each project
                        intuitive, visually appealing, and configured with strong network security controls. In addition I have also built many programs and apps using Python, Java, and C.
                        I have worked on 30+ projects, but feel free to check out few of my notable projects in the&nbsp; 
                        <a style={{color:'blue', textDecoration:'underline', cursor:'pointer'}}onClick={() => {
                            const targetSection = document.querySelector('.app-container').querySelector(`#Projects`)
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }}>Projects</a> section
                        <br /><br />
                        Having worked as a Network Engineer, I also possess in-depth knowledge of network protocols,
                        security, and infrastructure design as well as configuring and managing cisco, aruba and arista devices. I also have experience using
                        Clearpass, AMP, Infoblox, SolarWinds, Palo Alto, etc.
                        <br /><br />
                        I am open to working in any postion to expand my skillset.
                    </p>
                </article>
            </div>
        </motion.div>
    )
}

export default AboutMe