/* import req'd components and other assets (professional picture) */
import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js"
import About from "../components/About.js"
import Beach from "../assets/BeachSquare.JPG"
import Footer from "../components/Footer.js"

function Home() {

    return (
        <div>
            <Navbar/>

            <Hero 
                cName="hero"
                title={"Matthew P. Kearney"}
                subtitle={"I'm a computer science student at Stevens Institute of Technology with a major interest in physics and Earth science applications."}
                url="/projects"
                btnClass={"show"}
                buttonText={"View Projects"}
            />

           <About 
           src={Beach}
           txt={"I am currently looking for full-time roles to begin after I graduate in May 2025. I would value an experience where I can be challenged with complex data, software, physical, and environmental problems. "}
           txt1={"Please feel free to view my project experience, work experiences, as well as my literature and opinion pieces. I am very eager to contribute towards dynamic and innovative teams"}
           />

           <Footer/>
        </div>
    )

} 

export default Home;