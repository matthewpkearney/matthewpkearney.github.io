/* 
This file returns for:
    -display list of all project components
*/
/* Future updates:
    - search bar with tagging multiselection functionality
    - view more button
*/

//post-deployment update (v0.1)
// import Searchbar from "./Searchbar.js"  //may choose to move searchbar code into <= but for now here
import workData from "../assets/workData.json"
import React from 'react'
import Projbox from "./Box.js"
import "./Boxstyles.css"
import "./Worxstyles.css"

const projData = workData.slice(1).filter(project => project.show); 
//slice(1): everything but first (0th) element
//filter(project => project.show): only show projects where project.show is true/on

/*
 Projbox components should be direct children of the grid container (.Proj)
*/

// need to be able to have a span of years in the "dates"

function Worx(){
    
    return (
        
        <div className="Proj"> 
            {projData.map((project) => (
                <div> 
                    <Projbox 
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
    );
}

export default Worx;