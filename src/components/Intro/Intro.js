import React, {useEffect} from 'react';
import './Intro.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="intro" id='intro'>
             <div className="App" >
                 <div 
                    data-aos="fade-right"
                    data-aos-offset="20"
                    data-aos-duration="1000"
                    >
                    <h1>Hi, my name is <span className='title'>Naveen Kumar</span> </h1>
                    <h1>I like to make stuff with code</h1>
                    <div class="container" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
                        <div class="middle">
                        <a class="btn" href='#title'>
                            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                            </svg>
                            <span>KNOW MORE</span>
                        </a>
                        </div>
                    </div>
                 </div>
                
            </div>
        </div>
    );
}

export default Intro;
