import "./About.css";
import aeisha from "./assets/aeisha.jpeg";
import eden from "./assets/eden.jpeg";
import sergio from "./assets/sergio.png";
import dylan from "./assets/dylan.png";
import gabe from "./assets/gabe.png";

function About() {
  return (
    <div className="about">
      <div className="ourphotos">
        <h1>
          Brains behind the code <span>Get to Know Us</span>
        </h1>
        <div className="cards">
          <div className="card">
            {/* <div id="longAccent1"></div> */}
            <a
              href="https://www.linkedin.com/in/sergio-ehernandez/"
              target="_blank"
            >
              <img src={sergio} />
            </a>
            <div>
              <h2>Sergio Hernandez</h2>
              <p>MOBILE / WEB DEVELOPER</p>
            </div>
          </div>
          <div className="card">
            {/* <div id="longAccent2"></div> */}
            <a
              href="https://www.linkedin.com/in/eden-rosales-588054223/"
              target="_blank"
            >
              <img src={eden} />
            </a>
            <div>
              <h2>Eden Rosales</h2>
              <p>MOBILE DEVELOPER | DESIGNER</p>
            </div>
          </div>
          <div className="card">
            {/* <div id="longAccent3"></div> */}
            <a
              href="https://www.linkedin.com/in/gabriel-mourad-4a4a93242/"
              target="_blank"
            >
              <img src={gabe} />
            </a>
            <div>
              <h2>Gabriel Mourad</h2>
              <p>WEB DEVELOPER</p>
            </div>
          </div>
          <div className="card">
            <a
              href="https://www.linkedin.com/in/aiesha-angeles/"
              target="_blank"
            >
              <img src={aeisha} />
            </a>
            <div>
              <h2>Aeisha Angeles</h2>
              <p>WEB/MOBILE UI DESIGNER</p>
            </div>
          </div>
          <div className="card">
            <a href="https://github.com/DylanMoon" target="_blank">
              <img src={dylan} />
            </a>
            <div>
              <h2>Dylan Moon</h2>
              <p>BACKEND DEVELOPER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
