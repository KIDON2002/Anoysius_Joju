import "./Footer1style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>ANOYSIUS JOJU</h1>
          <p>This is all about me</p>
        </div>
        <div>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-square" />
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram-square" />
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Fast links</h4>
          <a href="/about">about me</a>
          <a href="/projects">my projects</a>
          <a href="/contact">contact me</a>

          <h4>linkedin Profile</h4>
          <a href="https://www.linkedin.com/in/anoysius-joju-297759251/?originalSubdomain=in">
            Anoysius Joju
          </a>

          <h4> Whatsapp contact</h4>

          <a href="https://wa.me/7034597626">Anoysius Joju</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
