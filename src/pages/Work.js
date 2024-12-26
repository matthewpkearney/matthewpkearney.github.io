/* required components */
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Worx from "../components/Worx"; //display gridded projets from website/src/assets/projectData.json
import Footer from "../components/Footer";


function Work() {
  return (
    <div>
      <Navbar/>

      <Hero 
      title="Work Experiences"
      subtitle=""
      url="www.linkedin.com/in/matthew-p-kearney"
      btnClass="show"
      buttonText="My LinkedIn Page"
      />

      {/* <Projx /> */}
      <Worx />
      
      <Footer />
    </div>
  );
  }
  
export default Work;