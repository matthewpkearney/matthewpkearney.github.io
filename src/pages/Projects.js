/* required components */
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projx from "../components/Projx"; //display gridded projets from website/src/assets/projectData.json
import Footer from "../components/Footer";


function Projects() {
  return (
    <div>
      <Navbar/>

      <Hero 
      title="Projects"
      subtitle=""
      url="https://www.github.com/matthewpkearney"
      btnClass="show"
      buttonText="Go To GitHub"
      />

      <Projx />
      
      <Footer />
    </div>
  );
  }
  
export default Projects;