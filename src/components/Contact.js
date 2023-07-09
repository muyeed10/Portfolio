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
        <motion.div ref={ref} id="Contact" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className="skills-container">

            <h1>Contact</h1>
            <h2>Feel free to contact me!</h2>

            <div className="contact-container">
                <a className="flex items-start contact-item border border-transparent hover:border-green-500 p-3" href="https://www.linkedin.com/in/muyeedh/">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md bg-white">
                            <i className="fa-brands fa-linkedin text-blue-500 bg-white text-5xl"></i>
                        </div>
                    </div>
                    <div className="ml-4 grow">
                        <p className="mb-2 font-bold dark:text-white">
                            LinkedIn
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                            linkedin/com/in/muyeedh
                        </p>
                    </div>
                </a>
                <a className="flex items-start contact-item border border-transparent hover:border-green-500 p-3" href="https://github.com/muyeed10">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md">
                            <i className="fa-brands fa-github text-green-400 text-5xl"></i>
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                            Github
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                            github.com/muyeed10
                        </p>
                    </div>
                </a>
                <a className="flex items-start contact-item border border-transparent hover:border-green-500 p-3" href="mailto:muyeedh05@gmail.com">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md">
                            <i className="fa fa-envelope text-yellow-400 text-5xl"></i>
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                            E-mail
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                            muyeedh05@gmail.com
                        </p>
                    </div>
                </a>
                <a className="flex items-start contact-item border border-transparent hover:border-green-500 p-3" href="https://muyeed10.github.io/react-portfilio-code/Resume.pdf">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md">
                        <i className="fa-regular fa-file text-5xl"></i>
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                            Resume
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                            My Resume
                        </p>
                    </div>
                </a>
            </div>

        </motion.div >
    )
}

export default Projects