import React from 'react';
import './Footerstyles.css';
// import ReactLogo from "../assets/logo512.png"
//if we feel like giving creds to react, (totally unnecessary)

function Footer() {
    return (
        <>
            <body>
                <div className="foot">
                    <div className="one">
                        <a href="/">
                            MATT KEARNEY 
                        </a>
                        <br/>
                        <a href="/projects">
                            PROJECTS 
                        </a>
                        <br/>
                        <a href="/ideas">
                            IDEAS
                        </a>
                    </div>
                    <div className="two">
                        <a href="mailto:mkearney703@gmail.com?body=Type your message to Matthew P Kearney here:">
                            CONTACT 
                        </a>
                        <br/>
                        
                            <a href="https://github.com/matthewpkearney" className="hover-trigger">
                                
                                    <i className="fa-brands fa-github"></i>
                                
                            </a>

                            <a href="https://www.linkedin.com/in/matthew-kearney-software-developer/" className="hover-trigger">
                                    <i className="fa-brands fa-linkedin"></i>
                                
                            </a>
            
                           
                        
                    </div>
                </div>
                <p2>
                    Matthew Kearney 2024-2025
                </p2>
                
            </body>
        </>
    );
}

export default Footer;
