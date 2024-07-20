import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Hom1 from "../assets/myface.jpg";
import Treatment from "../Components/homeabout";
import projects2 from "../Components/projects2";
import Footer1 from "../Components/Footer1";
function Home1() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimage={Hom1}
        title="It's me Anoysius JOJU"
        buttonname="let's connect"
        url="/Contact"
        buttonclass="show"
      />
      <Treatment />
      <projects2 />
      <Footer1 />
    </>
  );
}
export default Home1;
