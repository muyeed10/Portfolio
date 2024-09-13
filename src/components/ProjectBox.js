import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectBox = ({ elem, index }) => {

    const pictureChange = (e) => {
        const currentElem = e.currentTarget
        let direction = e.currentTarget.dataset.direction

        const slideImages = currentElem.parentNode.querySelector('[data-slide]')
        const activeSlide = slideImages.querySelector('[data-active]')

        if ([...slideImages.children].length > 1) {
            let index = [...slideImages.children].indexOf(activeSlide)

            if (direction == 'next') {
                index++
            }
            else {
                index--
            }

            if (index < 0) index = slideImages.children.length - 1
            if (index >= slideImages.children.length) index = 0

            slideImages.children[index].dataset.active = true
            delete activeSlide.dataset.active
        }
    }

    const handleLinkClick = (num) => {
        if (num == 1) {
            if (elem.Links[0] === '') {
                toast.error("Link not available at the moment!! Please check again later", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    autoClose: 2000
                })
            }
            else {
                window.location.href = elem.Links[0]
            }
        }
        else {
            if (elem.Links[1] === '') {
                toast.error("Link not available at the moment!! Please check again later", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    autoClose: 2000
                })
            }
            else {
                window.location.href = elem.Links[1]
            }
        }
    }

    return (
        <div className="project-box">
            {index % 2 === 0 ?
                <>
                    <div className="projectGallery">
                        <ul data-slide>
                            {elem.images.map((image, index) => (
                                index === 0 ? <li data-active><img src={image}></img></li> : <li><img src={image}></img></li>
                            ))}
                        </ul>
                        <button type="button" className="absolute top-0 left-0 z-15 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={pictureChange} data-direction='prev'>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-6 h-6 text-black dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-15 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={pictureChange} data-direction='next'>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-6 h-6 text-black dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    <div className="projectContent">
                        <div>
                            <h1 className='mb-2'>{elem.name}</h1>
                            <p>{elem.description}</p>
                        </div>
                        <div className="project-footer">
                            {elem.tools.map((tool) => (
                                <span>{tool}</span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-5">
                            <a onClick={() => handleLinkClick('1')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm cursor-pointer"><i className="fa-brands fa-github text-white-500 text-3xl mr-2"></i>Code</a>
                            <a onClick={() => handleLinkClick('2')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm cursor-pointer"><i className="fa-solid fa-link text-white-500 text-3xl mr-2"></i>Link</a>
                        </div>
                    </div>
                    <ToastContainer />
                </>
                :
                <>
                    <div className="projectContent">
                        <div>
                            <h1 className='mb-2'>{elem.name}</h1>
                            <p>{elem.description}</p>
                        </div>
                        <div className="project-footer">
                            {elem.tools.map((tool) => (
                                <span>{tool}</span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-5">
                            <a onClick={() => handleLinkClick('1')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm cursor-pointer"><i className="fa-brands fa-github text-white-500 text-3xl mr-2"></i>Code</a>
                            <a onClick={() => handleLinkClick('2')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm cursor-pointer"><i className="fa-solid fa-link text-white-500 text-3xl mr-2"></i>Link</a>
                        </div>
                    </div>
                    <div className="projectGallery">
                        <ul data-slide>
                            {elem.images.map((image, index) => (
                                index === 0 ? <li data-active><img src={image}></img></li> : <li><img src={image}></img></li>
                            ))}
                        </ul>
                        <button type="button" className="absolute top-0 left-0 z-15 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={pictureChange} data-direction='prev'>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-6 h-6 text-black dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-15 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={pictureChange} data-direction='next'>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-6 h-6 text-black dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    <ToastContainer />
                </>
            }
        </div>
    )
}

export default ProjectBox