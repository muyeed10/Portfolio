const ProjectBox = ({ elem, index }) => {
    return (
        <div className="project-box">
            {index % 2 === 0 ?
                <>
                    <div className="projectGallery">
                        <img src={elem.images[0]}></img>
                    </div>
                    <div className="projectContent">
                        <div>
                            <h1>{elem.name}</h1>
                            <p>{elem.description}</p>
                        </div>
                        <div className="project-footer">
                            {elem.tools.map((tool) => (
                                <span>{tool}</span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-5">
                            <a style={{ fontSize: '1.4rem', padding: '2%' }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm cursor-pointer"><i className="fa-brands fa-github text-white-500 text-3xl mr-2"></i>Code</a>
                            <a style={{ fontSize: '1.4rem', padding: '2%', paddingTop: '4%' }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm cursor-pointer">Link</a>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="projectContent">
                        <div>
                            <h1>{elem.name}</h1>
                            <p>{elem.description}</p>
                        </div>
                        <div className="project-footer">
                            {elem.tools.map((tool) => (
                                <span>{tool}</span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-5">
                            <a style={{ fontSize: '1.4rem', padding: '2%' }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm cursor-pointer"><i className="fa-brands fa-github text-white-500 text-3xl mr-2"></i>Code</a>
                            <a style={{ fontSize: '1.4rem', padding: '2%', paddingTop: '4%' }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm cursor-pointer">Link</a>
                        </div>
                    </div>
                    <div className="projectGallery">
                        <img src={elem.images[0]}></img>
                    </div>
                </>
            }

        </div>
    )
}

export default ProjectBox