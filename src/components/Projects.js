import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion'
import ProjectBox from "./ProjectBox";
import test1 from "../pics/test1.png"

const Projects = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation()

    const projectsArr = [
        {
            name: 'Vinto',
            description: 'Vinto is a picture sharing app with a meticulously crafted user interface and captivating aesthetics, tailor-made for photo enthusiasts and visual storytellers' +
            ' to store user data. Normal social media app features are all implemented alongside album/collection, image filters, and other image related features.' +
            ' MongoDB and firebase cloud storage are used simulatenously to store data',
            tools: ['React', 'CSS', 'Node', 'MongoDB', 'Tailwind', 'Firebase auth & storage'],
            images: [test1],
            Links: ['github link', 'demo link']
        },
        {
            name: 'Species Catalog',
            description: 'A model driven app designed to record data of different plant species. Auth implemented to ensure only admin can access the app dashboard and add/edit/delete the data records.' +
            ' A public route/page is also provided for the client and the public to view different pictures and information of the species in a very friendly gallery-show manner',
            tools: ['React', 'CSS', 'Node', 'MongoDB', 'Tailwind', 'Firebase auth & storage'],
            images: [test1],
            Links: ['github link', 'demo link']
        }, 
        {
            name: 'Dublo',
            description: "Twitter/reddit-like social media app where user's can login and use this platform to share their thoughts." 
            + "Features include: authentication and authorization, post creation, interacting with other user's post by liking or commenting, etc.",
            tools: ['React', 'CSS', 'Firebase', 'MongoDB', 'Node'],
            images: [test1],
            Links: ['github link', 'demo link']
        },
        {
            name: 'Network Switch Data Analyzer',
            description: 'Created a CLI format app using python OOP to automate tasks and acquire critical data for business project management.' 
            + ' Leveraged paramiko, and netmiko python libraries by automating ssh connections and running CLI commands in cisco/aruba network devices. Regex used to filter output and provide data summary.',
            tools: ['Python', 'Netmiko', 'Paramiko', 'Regex'],
            images: [test1],
            Links: ['github link', 'demo link']
        }
    ]

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

            <h1>Projects</h1>
            <h2>Few <span className="text-red-500">Notable</span> Projects</h2>

            {projectsArr.map((elem,index) => (
                <ProjectBox elem={elem} index={index} key={index}/>
            ))}
            
        </motion.div >
    )
}

export default Projects