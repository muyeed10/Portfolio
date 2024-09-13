import React, { userRef, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion'

const SkillSection = () => {

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
        <motion.div ref={ref} id="Skills" variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className="skills-container">

            <h1>Skills</h1>
            <h2>My technical expertise</h2>
{/*
            <div ref={ref} className="skills-section">
                <div className="skills-box">
                    <h1>Front-end development</h1>
                    <div className="skills-mini">
                        <div><i className="fa-brands fa-react text-4xl text-teal-400 mr-2"></i><h3>React</h3></div>
                        <div><h3>Next.js 13</h3></div>
                        <div><i className="fab fa-html5 text-4xl text-orange-500 mr-2"></i><h3>HTML5</h3></div>
                        <div><h3>CSS3</h3></div>
                        <div><h3>TailWind</h3></div>
                        <div><i className="fa-brands fa-bootstrap text-4xl mr-2 text-purple-500"></i><h3>BootStrap</h3></div>
                        <div><h3>ASP.NET</h3></div>
                    </div>
                </div>
                <div className="skills-box">
                    <h1>Back-end development</h1>
                    <div className="skills-mini">
                        <div><i className="fa-brands fa-node text-4xl text-green-400 mr-2"></i><h3>Node.js</h3></div>
                        <div><h3>Django</h3></div>
                        <div><h3>MongoDB</h3></div>
                        <div><h3>Firebase</h3></div>
                        <div><i className="fas fa-database text-blue-600 text-4xl mr-2"></i><h3>PostGress SQL</h3></div>
                        <div><i className="fas fa-database text-yellow-600 text-4xl mr-2"></i><h3>SQL</h3></div>
                        <div><i className="fa-brands fa-php text-purple-600 text-4xl mr-2"></i><h3>PHP</h3></div>
                    </div>
                </div>
                <div className="skills-box">
                    <h1>Software Engineer</h1>
                    <div className="skills-mini">
                        <div><i className="fab fa-python text-4xl text-yellow-400 mr-2"></i><h3>Python</h3></div>
                        <div><i className="fa-brands fa-js text-4xl text-yellow-500 mr-2"></i><h3>JavaScript</h3></div>
                        <div><h3>TypeScript</h3></div>
                        <div><i className="fa-brands fa-java text-orange-600 text-4xl mr-2"></i><h3>Java</h3></div>
                        <div><h3>C</h3></div>
                        <div><h3>Visual Basic</h3></div>
                        <div><h3>C#</h3></div>
                    </div>
                </div>
                <div className="skills-box">
                    <h1>Network Engineering</h1>
                    <div className="skills-mini">
                        <div><h3>L2 Switching Porotols</h3></div>
                        <div><h3>L3 Routing Protocols</h3></div>
                        <div><h3>DHCP Server (Infoblox)</h3></div>
                        <div><h3>Radius Server (Clearpass)</h3></div>
                        <div><h3>WLCs & APs</h3></div>
                        <div><h3>Firewall (Palo Alto)</h3></div>
                        <div><h3>Cisco / Aruba</h3></div>
                    </div>
                </div>
                <div className="skills-box">
                    <h1>Cloud/Tools</h1>
                    <div className="skills-mini">
                        <div><h3>Git, Github</h3></div>
                        <div><h3>MS Azure</h3></div>
                        <div><h3>Dockers</h3></div>
                        <div><h3>Power apps, portals, PVA, automate</h3></div>
                        <div><h3>MS Visio</h3></div>
                        <div><h3>Linux/Unix</h3></div>
                        <div><h3>SQL, NoSQL</h3></div>
                        <div><h3>Netmiko,Paramiko, Numpy</h3></div>
                    </div>
                </div>
            </div>
*/}

            <div ref={ref} className="skills-section">
                <div className="skills-box">
                    <h1>Languages</h1>
                    <div className="skills-mini">
                        <div><h3>Java</h3></div>
                        <div><h3>Python</h3></div>
                        <div><h3>JavaScript</h3></div>
                        <div><h3>TypeScript</h3></div>
                        <div><h3>Kotlin</h3></div>
                        <div><h3>C</h3></div>
                        <div><h3>SQL (MSSQL, Azure SQL)</h3></div>
                        <div><h3>MongoDB</h3></div>
                    </div>
                </div>
                <div className="skills-box">
                    <h1>Frameworks / Libraries</h1>
                    <div className="skills-mini">
                        <div><h3>React</h3></div>
                        <div><h3>Spring Boot</h3></div>
                        <div><h3>Node</h3></div>
                        <div><h3>Next.js 13</h3></div>
                        <div><h3>Numpy</h3></div>
                        <div><h3>Pandas</h3></div>
                        <div><h3>Scikit-Learn</h3></div>
                        <div><h3>Pytorch</h3></div>
                    </div>
                </div>
                <div className="skills-box">
                    <h1>Tools</h1>
                    <div className="skills-mini">
                        <div><h3>Azure</h3></div>
                        <div><h3>Power BI</h3></div>
                        <div><h3>BitBucket</h3></div>
                        <div><h3>Jenkins</h3></div>
                        <div><h3>Datadog</h3></div>
                        <div><h3>Docker</h3></div>
                        <div><h3>Kubernetes</h3></div>
                        <div><h3>Kubernetes</h3></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SkillSection