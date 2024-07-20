import "./projects2style.css";
import Treatmentinfodata1 from "./projects2info";
import a1 from "../assets/smart.jpg";
import a2 from "../assets/step2.jpg";
import a3 from "../assets/www.png";

function Treatmentinfo1() {
  return (
    <div className="info">
      <h1>My Projects</h1>
      <p>
        mentioned below are some of my projects
      </p>
      <div className="treatmentcard">
        <Treatmentinfodata1
          test={a1}
          heading="Articulated
Automated
Home"
          text="This project is all about automation of the house using voicecontrols provided by the user using google assistant"
        />
        <Treatmentinfodata1
          test={a3}
          heading="Skin
disease
detector"
          text="This project is about creating a software to detect and report skin diseases and suggesting remdies for those diseases.It wasdeveloped using the concepts like Image processing andMachine learning"
        />
        <Treatmentinfodata1
          test={a2}
          heading="Virtual
Reality
Based
Exposure
Therapy(VRET)"
          text="This project is about VRET.It uses virtual reality to help peopleto confront and manage anxiety or phobias. It offerspersonalized exposure in a safe and immersive environment,guided by a psychiatrist."
        />
      </div>
    </div>
  );
}
export default Treatmentinfo1;
