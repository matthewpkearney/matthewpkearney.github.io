/* necessary imports */
import "./Herostyles.css"
import React from 'react'
import { Link } from "react-router-dom";


function Hero({ title, subtitle, url, btnClass, buttonText}) {

    return ( //control props, a dynamic holder ==> { title, subtitle, url (for button), btnClass (show, hide), buttonText }
        <>
            <div class="hero">
                
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <h3>   
                    <Link to={url} className={btnClass}>
                        {buttonText}      
                    </Link>
                </h3>
            </div>
        </>
    )
}

export default Hero;
