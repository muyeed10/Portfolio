import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion'
import ProjectBox from "./ProjectBox";
import catalogGallery from "../pics/catalog-gallery.png"
import catalogAdminDashboard from "../pics/catalog-adminDashboard.png"
import catalogcreateNew from "../pics/catalog-createNew.png"
import cataloglongDes from "../pics/catalog-longDescription.png"
import vintologin from "../pics/vinto-loginpage.png"
import vintohome from "../pics/vinto-homepage.png"
import vintoexplore from "../pics/vinto-explorepage.png"
import vintocreate1 from "../pics/vinto-create1.png"
import vintocreate2 from "../pics/vinto-create2.png"
import dubloHomepage from "../pics/dublo-homepage.png"
import dubloHomepage2 from "../pics/dublo-homepage2.png"
import dubloHomepage3 from "../pics/dublo-homepage3.png"
import dubloCreate from "../pics/dublo-create.png"
import dubloAccountPage from "../pics/dublo-accountPage.png"
import errorPic from "../pics/error.png"
import dentalDBMS1 from "../pics/dentalDBMS1.png"



const Projects = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation()

    const projectsArr = [
        {
            name: 'Vinto (In Progess)',
            description: 'Vinto is a picture sharing app with a meticulously crafted user interface and captivating aesthetics, tailor-made for photo enthusiasts and visual storytellers' +
            ' to store user data. Basic social media app features are all implemented alongside album/collection, image filters, and other image related features.' +
            ' MongoDB and firebase cloud storage are used simulatenously to store data',
            tools: ['React', 'CSS', 'Node', 'MongoDB', 'Tailwind', 'Firebase auth & storage'],
            images: [vintoexplore, vintohome, vintocreate1, vintocreate2, vintologin],
            Links: ['', '']
        },
        {
            name: 'Species Catalog',
            description: 'A database management fullstack app designed to record data of different plant species. Auth implemented to ensure only admin can access the app dashboard and add/edit/delete the data records.' +
            ' A public route/page is also provided for the client and the public to view different pictures and information of the species in a very friendly gallery-show manner',
            tools: ['React', 'CSS', 'Node', 'MongoDB', 'Tailwind', 'Firebase auth & storage'],
            images: [catalogGallery, catalogAdminDashboard, catalogcreateNew, cataloglongDes],
            Links: ['', '']
        }, 
        {
            name: 'Dublo',
            description: "Twitter/reddit-like social media app where user's can login and use this platform to share their thoughts." 
            + " Features include: authentication and authorization, post creation, following users, interacting with other user's post by upvoting/downvoting, commenting, etc."
            + " Also includes real time notification feature implemented using socket.io.",
            tools: ['React', 'CSS', 'Firebase', 'MongoDB', 'Node', 'Socket.io', 'Tailwind'],
            images: [dubloHomepage, dubloHomepage2, dubloHomepage3, dubloAccountPage, dubloCreate],
            Links: ['', '']
        },
        {
            name: 'Network Switch Data Analyzer',
            description: 'Created a CLI format app using python OOP to automate tasks and acquire critical data for business project management.' 
            + ' Leveraged paramiko, and netmiko python libraries by automating ssh connections and running CLI commands in cisco/aruba network devices. Regex used to filter output and provide data summary.',
            tools: ['Python', 'Netmiko', 'Paramiko', 'Regex'],
            images: [errorPic],
            Links: ['', '']
        },
        {
            name: 'Dental Clinic DBMS',
            description: 'comprehensive database management solution tailored specifically for dental clinics. It provides a centralized platform to efficiently manage patient records, appointments, treatments,' 
            + 'staff information, inventory, and financial transactions. '
            + 'All the SQL commands were integrated in a Bash Program, which also serves as a command-line interface for users '
            + 'to perform CRUD operations in Linux systems',
            tools: ['SQL', 'Oracle', 'Bash', 'Linux'],
            images: [dentalDBMS1],
            Links: ['', '']
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