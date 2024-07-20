import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import con from "../assets/contact.jpg";
import Contactform from "../Components/Contactform";
import Footer1 from "../Components/Footer1";
function Contact1() {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroimage={con}
        title="Contact me"
        para="Feel free to contact me"
        buttonclass="hide"
      />
      <h1 >Get in touch with me</h1>
      <p>please fill the required fields...</p>
      <Contactform />
      <Footer1 />
    </>
  );
}
export default Contact1;
