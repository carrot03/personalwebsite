import "./navbar.css";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import devpost from "../../images/devpost.svg";
import pdf from "../../images/pdf.svg";

function Navbar({ currentSection }) {
  return (
    <div className="Navbar">
        <div className="Navbar-links">
          <a href="https://github.com/carrot03" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={github} alt="Github logo" ></img></a>
                <a href="https://www.linkedin.com/in/hibatant" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={linkedin} alt="LinkedIn logo"></img></a>
                <a href="https://devpost.com/carrot03" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={devpost} alt="Devpost logo" href="https://devpost.com/carrot03"></img></a>
       
        </div>
        <div>
        <nav className="Navbar-nav">
            
        <a className={`nav ${currentSection === "hero" ? "active" : ""}`} href="#hero">home</a>
      <a className={`nav ${currentSection === "portfolio" ? "active" : ""}`} href="#portfolio">portfolio</a>
      <a className={`nav ${currentSection === "contact" ? "active" : ""}`} href="#contact">contact</a>
            
        </nav>
        </div>

        <div className="Navbar-doc">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <img src={pdf} alt="Download icon" />
            <p>Download Resume</p>
          </a>
        </div>


    </div>
  );
}

export default Navbar;
