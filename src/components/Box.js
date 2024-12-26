import "./Boxstyles.css"

function Box(project){


    //use conditional rendering to only link to project title if project.live is not empty
    const projectTitleLink = project.live ? (
        <a href={project.live}>
            {project.title}
        </a>
    ) : (
        project.title
        
    );

    //use conditional rendering for:
    //  1. projects that may have no link... (only can think of 1-2)
    //  2. ideas, don't really have src code (but opt is still there.)
    const projectSourceLink = project.src ? (
            <a href={project.src}>
                View
            </a>
    ) : (
        <br></br>
    );

    //month dictionary
    const months = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
        13: "Present"
    };

    /* conversions go here for dates
    projMonth(month) -> 
    takes 'month', if the project fits into one month return associating string from months' dictionary
    if the project notably went into two+ months, return string Month1-Month2

    */
    function projMonth(month){
        if(typeof(month)==typeof(0)){
            return months[month]
        }
        return months[month[0]] + "-" + months[month[1]]
    }

    const monthDates = projMonth(project.month);

    return (
        <div className="project-box">
            {/* Live link for shared ideas, projects when deployed. Rendered if existent. */}
            <title>{projectTitleLink}</title>

            <i>{project.subtitle}</i>
            
            <><br></br></>
            <><br></br></>

            
            {/* Git will (mostly) always be available. Rendered if existent. */}
            {projectSourceLink}
          
            <><br></br></>
            
            <i>
                {monthDates} {project.year}
            </i>
            
            <i>
                {project.tags.join(', ')}
            </i>
        </div>

    );

} export default Box;