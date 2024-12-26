//patching/v0.1 notes
//this navbar requires responsivity for device/screen size changes (mobile, ipad, varying desktops)
import { Link } from "react-router-dom";
import React from "react";
import "./Navbarstyles.css"


function Navbar(){
    return (

        <div class="navbar">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
            
            <a href="/" className="logo">MATT KEARNEY</a> 
            

            <ul>
               
                <li>
                    <a href="https://github.com/matthewpkearney" class="a left"><i class="fa-brands fa-github"></i></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/matthew-p-kearney/" class="a left"><i class="fa-brands fa-linkedin"></i></a>
                </li>
            </ul>

            <ul className= "nav-links">
                <Link to="/ideas" className="a right">IDEAS</Link>
                <Link to="/projects" className="a right">PROJECTS</Link>
                <Link to="/work" className="a right">WORK</Link>
                
            </ul>
        </div>
    
    );
}

export default Navbar;