import React, {useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-tilt';
import projects from './ProjectList';



const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='center flex-column mt5 mb6 w-90'>
            <h1 className='mt4 mb4 title'>Projects</h1>
            {
                projects.map((project, index)=> {
                    return (
                        <div key={index} className='project mt4' >
                            <div 
                                className='project-desc'
                                data-aos="fade-right"
                                data-aos-offset="20"    
                                data-aos-duration="1000"
                                >
                                <h2 >{project.title}</h2>
                                <p>{project.p1}</p>
                                <p>{project.p2}</p>
                                <a 
                                className='f8 fw7 dib pa2 ba no-underline bg-animate hover-bg-light-green hover-white black shadow-3 grow' 
                                href={project.href}>See Live</a>
                            </div>
                            
                            <div >
                                <a href={project.href}>
                                    <Tilt className="Tilt" options={{ max : 15 }} >
                                        <div  className='Tilt-inner'>
                                            <img 
                                                src={project.img} 
                                                className='center shadow-3 pointer' 
                                                alt="Not Found"
                                                data-aos="fade-left"
                                                data-aos-duration="1000"
                                            />
                                        </div>                                 
                                    </Tilt>
                                </a>
                            </div>
                            
                        </div>
                    )
                })
            }
            
           
        </div>
    );
}

export default Projects;
