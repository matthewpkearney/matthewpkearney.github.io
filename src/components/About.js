/* 
this component provides an img to the left (or top if too small) and information to the right (or bottom)
txt is on the top, and txt1 is on the bottom
can make this dynamic as desired (more paragraphs (txt2), etc)
*/

import "./Aboutstyles.css"

function About(about) {
    return (
        <div className="container"> 

            <div className="image">
                <img src={about.src} alt="na"/>
            </div>
            <div className="content">
                <p>{about.txt}<br/><br/>{about.txt1}</p>
            </div>
        
        </div>
        

    );

} export default About;