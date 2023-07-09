import React from "react";

const Navbar = () => {

    const handleNavClick = (e) => {
        try {
            const targetSection = document.querySelector('.app-container').querySelector(`#${e.target.innerText}`)
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        catch (error) {
            alert("Section not found!!")
        }
    }

    const handleNavClick2 = (e) => {
        try {
            const targetSection = document.querySelector('.app-container').querySelector(`#${e.target.innerText}`)
            const hamburger = document.querySelector('.navbar-icon')
            const dropDownForm = document.querySelector('.dropDownForm')

            hamburger.classList.toggle('active');
            dropDownForm.classList.toggle('inactive')
            
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        catch (error) {
            alert("Section not found!!")
        }
    }

    const dropDown = (event) => {
        const dropDownForm = document.querySelector('.dropDownForm')

        event.currentTarget.classList.toggle('active');
        dropDownForm.classList.toggle('inactive')

    }


    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <nav>
                    <h1 className="text-green-500 font-bold">Portfolio.</h1>
                    <div>
                        <ul className="navClicks">
                            <li onClick={handleNavClick}>Home</li>
                            <li onClick={handleNavClick}>About</li>
                            <li onClick={handleNavClick}>Skills</li>
                            <li onClick={handleNavClick}>Projects</li>
                            <li onClick={handleNavClick}>Contact</li>
                        </ul>
                        <div className="navbar-icon" onClick={dropDown}>
                            <span className='bg-green-500'></span>
                            <span className='bg-green-500'></span>
                            <span className='bg-green-500'></span>
                        </div>
                        <div className='dropDownForm inactive'>
                            <ul className='dropDownUL'>
                                <li onClick={handleNavClick2}>Home</li>
                                <li onClick={handleNavClick2}>About</li>
                                <li onClick={handleNavClick2}>Skills</li>
                                <li onClick={handleNavClick2}>Projects</li>
                                <li onClick={handleNavClick2}>Contact</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar