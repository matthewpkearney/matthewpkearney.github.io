/* import req'd components and other assets (professional picture) */
import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js"
import About from "../components/About.js"
import Beach from "../assets/BeachSquare.JPG"
import Footer from "../components/Footer.js"

const str = "Feel free to check out any of my project and literature experiences, and reach out for any collaborative inquiries!";


function Home() {


    
    return (
        <div>
            <Navbar/>

            <Hero 
                cName="hero"
                title={"Matthew P. Kearney"}
                subtitle={"Explorer. Educator. Creator of ideas."}
                url="/projects"
                btnClass={"show"}
                buttonText={"View Projects"}
            />

           <About 
           src={Beach}
           txt={"I'm a computer science graduate with widespread interests across scientific computing, physical modeling, and motivating climate policy and environmental justice. I am grateful for my time at Stevens dedicated to exploring my interests and following my passions. As a research assistant and backend developer in the Stevens' Davidson Laboratory, I gained knowledge about our ocean and atmospheric system, as well as applied skills towards climate modeling operations."}
        //    txt1={"In late June, I began working at Shady Hill Greenhouses and Nursery Center in Londonderry, NH where I have been excited to learn the flow and assist with general operations across growing and irrigation operations, landscape design, and greenhouse maintenance. I'm looking for a position where I can join a well-oiled team to develop data, software, and systems solutions to create a more positive outlook for our Earth system. ${str}"}
            txt1={
            <>
                In late June, I began working at Shady Hill Greenhouses and Nursery Center in Londonderry, NH where I have been learning the flow of nursery operations and assisting with general tasks across growing and irrigation, landscape design, and greenhouse maintenance. Most recently in October, I started as a maintenance technician with Apex Green Roofs where I work with a small and passionate team on the construction and maintenance of green roof projects across New England and upstate NY. 
                <br/><br/>
                In the new year, I'm looking to start a position where I can join on the development of data, software, and systems solutions working towards a more positive outlook for co-habiting with our Earth system. Some particular industries I am interested in include energy and renewables, agriculture, meteorology, and other combinations of scientific computing within environmental application. I am always excited to exchange diverse perspective on these factors and problems impeding our environmental system.
                <br/><br/>

                {str}
                &emsp; Thank you.
            </>
}
           />

           <Footer/>
        </div>
    )

} 

export default Home;