import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import "../Components/Aboutstyle.css";
import Aboutimg from "../assets/about.jpg";
import Footer1 from "../Components/Footer1";
function About1() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimage={Aboutimg}
        title="About"
        buttonclass="hide"
      />
      <h1 className="h1">About education</h1>
      <p className="p1">
      Successfully accquired B.Tech in Computer science from APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY.Completed schooling from St.Annes public school and St.joseph emhss aloor
      </p>

      <h1 className="h2">About Internships</h1>
      <p className="p2">
      <h3>Mobilexion
technologies
private
limited</h3>
<p>01 January 2024-10 May 2024</p>
Worked as a Intern in the field of web development.
<h3>Revertech
IT
Solutions</h3>
<p>02 January 2023 -02 March 2023</p>
Completed 2- months internship on Python, MongoDB and Flask at ReverTech IT Solutions.

      </p>
      <h1 className="h3">Organizations</h1>
      <p className="p3">
      <h3>National
Service
Scheme</h3>
<p>Volunteer</p>
2021 – 2023
<h3>IEEE</h3>
<p>Vice
Chairperson
for
Industrial
Applications
Society</p>
2023 – 2024
<h3>Innovation
and
Entrepreneurship
Development
Centre
(IEDC)</h3>
<p>Execom
member
and
Media
club
member</p>
2022 – 2024
<h3>Computer
Society
of
India</h3>
<p>Member</p>
2022 – 2023
      </p>
      <h1 className="h4">
        activities
      </h1>
      <p className="p4">
      <h3>Altair</h3>
<p>National
Flagship
Event</p>
<p>(11-13 November 2022)</p>
<p>Volunteer at 3 day technical event organized by IEEE Sahrdaya SB.</p>
<h3>SCI
FEST</h3>
<p>(06 July 2022)</p>
Volunteer at annual project exhibition conducted by IEDC.
      </p>
      <h1 className="h5">Languages and hobbies</h1>
      <p className="p5">
      <h3>LANGUAGES</h3>
English
|
Malayalam
|
Tamil
|
Hindi
<h3>INTERESTS</h3>
playing cricket
|
Traveling
|
cycling
      </p>
      <Footer1 />
    </>
  );
}
export default About1;
