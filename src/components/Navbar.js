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
            
            targetSection.scrollIntoView({ behavior: 'smooth' });
            closeDropDown(dropDownForm)

        }
        catch (error) {
            alert("Section not found!!")
        }
    }

    const dropDown = (event) => {
        const hamburger = event.currentTarget;
        const dropDownForm = document.querySelector('.dropDownForm');

        hamburger.classList.toggle('active');

        closeDropDown(dropDownForm)
    };

    const closeDropDown = (dropDownForm) => {
        if (dropDownForm.classList.contains('show')) {
            //Trigger hide animation
            dropDownForm.classList.remove('show');
            dropDownForm.classList.add('hide');

            //Wait for animation to finish before actually hiding it
            setTimeout(() => {
                dropDownForm.classList.remove('hide');
                dropDownForm.style.display = 'none';
            }, 300); //match hide animation duration
        } else {
            //Show and animate in
            dropDownForm.style.display = 'flex';
            dropDownForm.classList.remove('hide');
            dropDownForm.classList.add('show');
        }
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
                            <li onClick={handleNavClick}>Experience</li>
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
                                <li onClick={handleNavClick2}><i className="fas fa-home mr-2"></i>Home</li>
                                <li onClick={handleNavClick2}><i className="fas fa-user mr-2"></i>About</li>
                                <li onClick={handleNavClick2}><i className="fas fa-briefcase mr-2"></i>Experience</li>
                                <li onClick={handleNavClick2}><i className="fas fa-code mr-2"></i>Skills</li>
                                <li onClick={handleNavClick2}><i className="fas fa-project-diagram mr-2"></i>Projects</li>
                                <li onClick={handleNavClick2}><i className="fas fa-envelope mr-2"></i>Contact</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar