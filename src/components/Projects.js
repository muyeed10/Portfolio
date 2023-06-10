import React, { userRef, useEffect, useRef } from "react";
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
            description: 'Vinto is a visually appealing picture sharing social media app. Users can create account which are authenticated and authorized by firebase services, and information stored in MongoDB servers.' +
            'Many features such as post-sharing, explore page, gallery organizers, user follow are all implemented and tested.',
            tools: ['React', 'CSS', 'Tailwind', 'Firebase', 'MongoDB', 'Node'],
            images: [test1],
            Links: ['github link', 'demo link']
        },
        {
            name: 'Species Catalogue',
            description: 'A model driven app designed to record data of different plant species. Auth required to ensure only admin can access the app dashboard and add/edit/delete the data records.' +
            ' A public route/page is also provided for the client and the public to view different pictures and information of the species in a very friendly gallery-show manner',
            tools: ['React', 'CSS', 'Tailwind', 'Firebase', 'MongoDB', 'Node'],
            images: [test1],
            Links: ['github link', 'demo link']
        },
        {
            name: 'Framework website',
            description: 'Created an attractive, dynamic, and responsive website using semantic UI and CSS with Django to change between pages. Website is a guide for users to learn and use the front-end framework and' 
            + 'back-end framework. Also created an email sending feature as a demo using Django built in functionality. Hosted the website using Heroku.',
            tools: ['HTML', 'CSS', 'Django', 'Semantic UI', 'BootStrap'],
            images: [test1],
            Links: ['github link', 'demo link']
        },
        {
            name: 'Bingo Game',
            description: 'Led a team of 2 to build a Bingo Game final project that displays a bingo card and checks numbers off each time a random number called exists on the' 
            + 'card. Displays the winner when a number in a line is crossed out. Programmed in C, using Structs, Linked Lists, Arrays, Matrix, and stacks to develop an algorithm for functionality. Tho it does look simple,'
            +'it took about 500+ lines of code even after refactoring to match the final requirements.',
            tools: ['UNIX', 'LINUX', 'C'],
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
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 }
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