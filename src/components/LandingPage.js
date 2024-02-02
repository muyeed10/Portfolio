import React from "react";
import Lottie from "lottie-react"
import robot from "../pics/robot-lottie.json"

const LandingPage = () => {

    const options = {
        animationData: robot,
    };

    return (
        <div id="Home" className="landing-container flex justify-center items-center">
            <div className="landing-content">
                <h1>Hi! I am</h1>
                <h1>Muyeed Hossain</h1>
                <p>Software Engineer || Developer</p>
                <div className="mt-8">
                    <a onClick={() => {
                        const targetSection = document.querySelector('.app-container').querySelector(`#About`)
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }}>About Me</a>
                    <a href="http://muyeed10.github.io/Portfolio/Muyeed-Hossain-Resume.pdf">View Resume</a>
                </div>
            </div>
            <div className="animation-container">
                <Lottie
                    animationData={robot}
                />
            </div>
        </div>
    )
}

export default LandingPage