import con from "../assets/grad.jpg";
import co from "../assets1/Anoysius pic(1).jpeg";
import "./homeaboutstyle.css";
const Treatment = () => {
  return (
    <div className="treat">
      <h1>ABOUT ME</h1>

      <div className="first">
        <div className="destext">
          
          <p>
          Looking for opportunities to incorporate my skills. Has an open mind and flair for interacting with people from diversebackgrounds.
          Successfully accquired B.Tech in Computer science from APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY.
          </p>
        </div>

        <div className="ptsddesc">
          <img alt="ptsd and phobia" src={con} />
          <img alt="ptsd and phobia" src={co} />
        </div>
      </div>
      
      <div className="second">
        <div className="destext1">
          <h1>About my skills</h1>
          
          <p>
            <h4>TECHNICAL SKILLS(CODING)</h4>
python, C, Java, MySQL,MongoDB,HTML CSS
</p>
<p>
<h4>TECHNICAL SKILLS(TOOLS)</h4>
Libreoffice impress, Libreoffice Writter,Figma
</p>
<p>
<h4>SOFT SKILLS</h4>
Leadership, Team Management, Communication, Time Management, Adaptable
</p>
         
        </div>

        
      </div>
    </div>
  );
};
export default Treatment;