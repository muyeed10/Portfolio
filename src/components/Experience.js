import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const timelineData = [
    {
        company: "PointClickCare",
        role: "Software Engineer Intern",
        date: "May 2024 – Sep 2024"
    },
    {
        company: "Ontario Public Services",
        role: "Software Developer Intern",
        date: "May 2023 – Dec 2023"
    },
    {
        company: "AMD",
        role: "Network Engineer Intern",
        date: "May 2022 – May 2023"
    }
];

const ExperienceTimeline = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView]);

    
    return (
        <motion.div
            ref={ref}
            id="Experience"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className="skills-container"
        >
            <h1>Work Experience</h1>
            <h2>Where I have worked</h2>

            <div className="relative border-l-4 border-green-400 pl-6 space-y-10 max-w-2xl mx-auto">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <div className="absolute left-[-1.15rem] top-1 w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                        <h3 className="text-lg font-semibold text-green-700">{item.role}</h3>
                        <p className="text-sm text-gray-600">{item.company}</p>
                        <span className="text-xs text-gray-400">{item.date}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ExperienceTimeline;
