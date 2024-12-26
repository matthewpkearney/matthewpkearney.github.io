/*  required imports */
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Thoughts from "../components/Thoughts";
import Footer from "../components/Footer"

/* 
hero button is currently off
can change by turning the Hero component> btnClass from "hide" to "show" in src/pages/Ideas.js
*/


function Ideas() {

  return (
    <div>
      <Navbar/>
      <Hero 
        title="Ideas"
        subtitle="Some of my written work, including essays, articles, op-eds, and more."
        backgroundColor={"#bdbdbd"}
        url="/projects"
        btnClass={"hide"}
        buttonText={"Medium"} /* when content expands */
      />
      <Thoughts/>
      <Footer/>  
    </div>
  );
}
  
export default Ideas;