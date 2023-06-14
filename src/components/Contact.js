import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion'



const Projects = () => {

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
        <motion.div ref={ref} id="Projects" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className="skills-container">

            <h1>Contact</h1>
            <h2>Feel free to contact me!</h2>
 
        </motion.div >
    )
}

export default Projects