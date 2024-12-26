/* 
NOTE: A mistyped JSON will make the entire page white. View note on App.js.
*/

import "./Thoughtsstyles.css";
import Subheader from "./Subheader";
import Workbox from "./Box";
import EssayData from "../assets/essayData.json";

/* 
code efficiency IMPROVEMENT: "componentanize" each DB of project and written etc work for mapping function... 
-"Works.js"     => DB component for ^^^ ==> did not end up using a component for these..  equivalent to Projx.js
Make a component that would handle both Projx.js as well as Thoughts.js and future needs ~ maybe called Grid.js or Work.js (used 3(+)x)
not horribly needed but would be optimally refactored code.
*/

const eData = EssayData.slice(1).filter(project => project.show);

function Thoughts(){
    return (
        <div>
            <Subheader
                big="Literature"
                small="Writing -- publishing."
            />
            

            {/* enforece grid setup via className = Proj, as for Projx.js */}
            {/* Essay DB */}
            <div className="Proj"> 
            
                {eData.map((project) => (
                    <div> 
                        <Workbox 
                            title= {project.title}
                            subtitle={project.subtitle}
                            live={project.live}
                            src={project.src}
                            month={project.month}
                            year={project.year}
                            tags={project.tags || []}
                        />
                    </div>
                    
                ))}
            
             </div>

        </div>
    );

} export default Thoughts;
