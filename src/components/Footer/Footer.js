import React from 'react';
import gitHub from './github.svg';
import linkedIn from './linkedin.svg';

const Footer = () => {
    const textCenter = {
        justifyContent: 'center'
    }
    
    return (

        <div>
            <footer className="footer w-100 bg-black white center h5 flex flex-column" id='footer' style={textCenter}>
                <a href="#intro" id='toTop'>^</a>
                <p>Designed & Developed by: <strong>Naveen Kumar</strong></p>
                <div>
                    <a href="https://github.com/navinkumar247/"><img src={gitHub} style={{width:'50px'}} alt=""/></a>
                    <a href="https://www.linkedin.com/in/naveenkumar-b-15149346/"><img src={linkedIn} style={{width:'50px'}} alt=""/></a>    
                </div> 
                
            </footer>
        </div>
    );
}


export default Footer;
