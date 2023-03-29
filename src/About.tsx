import "./About.css";
import aeisha from "./assets/aeisha.jpeg";
import eden from "./assets/eden.jpeg";
import sergio from "./assets/sergio.png";
import dylan from "./assets/dylan.png";
import gabe from "./assets/gabe.jpeg";

function About() {
  return (
    <div className="about">
      <div className="ourphotos">
        <h1>
          Brains behind deh code <span>Get to Know Us</span>
        </h1>
        <div className="cards">
          <div className="card">
            <div id="longAccent1"></div>
            <img src={sergio} />
            <div>
              <h2>Sergio Hernandez</h2>
              <p>MOBILE / WEB DEVELOPER</p>
            </div>
          </div>
          <div className="card">
            <div id="longAccent2"></div>
            <img src={eden} />
            <div>
              <h2>Eden Rosales</h2>
              <p>MOBILE DEVELOPER | DESIGNER</p>
            </div>
          </div>
          <div className="card">
            <div id="longAccent3"></div>
            <img src={gabe} />
            <div>
              <h2>Gabriel Mourad</h2>
              <p>WEB DEVELOPER</p>
            </div>
          </div>
          <div className="card">
            <img src={aeisha} />
            <div>
              <h2>Aeisha Angeles</h2>
              <p>WEB/MOBILE UI DESIGNER</p>
            </div>
          </div>
          <div className="card">
            <img src={dylan} />
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
