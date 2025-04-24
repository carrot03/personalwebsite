import "./portfolio.css";
import snhackrover from "../../images/snhackrover.svg";
import physiobuddy from "../../images/physiobuddy.jpeg";
import vangogh from "../../images/vangogh.png";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
        <div className="portfolio-content">
            <h1>My Portfolio</h1>
            <p>Here are some of my projects that I have worked on:</p>
            <div className="portfolio-items">
            <div class="card">
              <img className="img" src={snhackrover} alt="Avatar" ></img>
              <div class="container">
                <h4><b>snhack-rover</b></h4>
                <div className="card-text">
                  <p>Snhack-Rover is the solution to many challenges faced by hackers during a 
                    hackathon, including insufficient accommodations and wasted time and energy 
                    in obtaining snacks.</p>
                </div>
                <a type="button" className="btnPortfolio" href="https://devpost.com/software/snhack-rover" target="_blank">Check it out</a>
              </div>
            </div>
            <div class="card">
              <img className="img" src={physiobuddy} alt="Avatar" ></img>
              <div class="container">
                <h4><b>PhysioBuddy</b></h4>
                <p>Making Recovery After Surgery Accessible and Affordable</p>
                <a type="button" className="btnPortfolio" href="https://devpost.com/software/physiobuddy-k049v1" target="_blank">Check it out</a>
              </div>
            </div>
            <div class="card">
              <img className="img" src={vangogh} alt="Avatar" ></img>
              <div class="container">
                <h4><b>Van Gogh Site</b></h4>
                <p>A creative project inspired by Van Gogh’s artistic vision. The idea behind this design was to imagine:
                "What if Van Gogh made a website? How would it look?"</p>
                <a type="button" className="btnPortfolio" href="https://www.figma.com/design/wnAwQIKMYfGMqO6EE8BWYC/Van-Gogh-site?node-id=0-1&t=d0zsrbPvtSRiqQ2F-1" target="_blank">Check it out</a>
              </div>
            </div>
              
            </div>

        </div>
    </div>
  );
}

export default Portfolio;
