import React from "react";

const Navbar = () => {


    const handleNavClick = (e) => {
        try {
            const targetSection = document.querySelector('.app-container').querySelector(`#${e.target.innerText}`)
            targetSection.scrollIntoView({ behavior: 'smooth'});
        }
        catch (error) {
            alert("Section not found!!")
        }
    }


    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <nav>
                    <h1 className="text-green-500 font-bold">Portfolio.</h1>
                    <div>
                        <ul>
                            <li onClick={handleNavClick}>Home</li>
                            <li onClick={handleNavClick}>About</li>
                            <li onClick={handleNavClick}>Skills</li>
                            <li onClick={handleNavClick}>Projects</li>
                            <li onClick={handleNavClick}>Contact</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar