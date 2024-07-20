import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import serv from "../assets/projects.jpg";
import Footer1 from "../Components/Footer1";
import Projects2 from "../Components/projects2";

function Projects() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimage={serv}
        title="My projects"
        buttonclass="hide"
      />
      <Projects2 />
      <Footer1 />
    </>
  );
}
export default Projects;
