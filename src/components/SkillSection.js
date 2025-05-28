import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SkillSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const mainControls = useAnimation();
    const [activeTab, setActiveTab] = useState("Languages");

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView]);

    const skillsData = {
        Languages: [
            "Java", "Python", "JavaScript", "TypeScript", "Kotlin", "C", "SQL (MSSQL, Azure SQL)", "MongoDB"
        ],
        "Frameworks/Libraries": [
            "React", "Spring Boot", "Node.js", "Next.js 13", "Numpy", "Pandas", "Scikit-Learn", "Pytorch"
        ],
        "Tools/Cloud": [
            "Azure", "Power BI", "BitBucket", "Jenkins", "Datadog", "Docker", "Kubernetes", "AWS"
        ]
    };

    return (
        <motion.div
            ref={ref}
            id="Skills"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className="skills-container"
        >
            <h1>Skills</h1>
            <h2>My technical expertise</h2>

            {/*Tab Buttons for Mobile */}
            <div className="flex justify-center items-center gap-2 md:hidden mb-6 w-100 flex-wrap">
                {Object.keys(skillsData).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                            activeTab === tab
                                ? "bg-green-500 text-white"
                                : "bg-white text-green-600 border border-green-300"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/*Mobile View: Single Active Tab*/}
            <div className="md:hidden">
                <div className="skills-box">
                    <h1>{activeTab}</h1>
                    <div className="skills-mini">
                        {skillsData[activeTab].map((skill, idx) => (
                            <div key={idx}><h3>{skill}</h3></div>
                        ))}
                    </div>
                </div>
            </div>

            {/*Desktop View: 3 Column Layout*/}
            <div className="skills-section">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="skills-box">
                        <h1>{category}</h1>
                        <div className="skills-mini">
                            {skills.map((skill, idx) => (
                                <div key={idx}><h3>{skill}</h3></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillSection;
