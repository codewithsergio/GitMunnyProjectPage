import "./App.css";
import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import HowItWorks from "./HowItWorks";
import RootLayout from "./RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="howitworks" element={<HowItWorks />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
    /* <div className="git_title">
        <h1 className="title_header">GitMunny</h1>
        <h3>Cross Platform Budgetting Application</h3>
      </div>

      <div className="title">
        <h1 className="title_header">Members</h1>
      </div>

      <div className="members">
        <div>
          <img src={eden} alt="eden" />
          <h2>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/edenrosales"
            >
              Eden Rosales
            </a>
          </h2>
          <p>Scrum Master | Mobile Developer | Designer</p>
        </div>
        <div>
          <img src={dylanmoon} alt="Dylan" />
          <h2>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/edenrosales"
            >
              Dylan Moon
            </a>
          </h2>
          <p>Backend Developer</p>
        </div>
        <div>
          <img src={angeles} alt="Aiesha" />
          <h2>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/aiesha-angeles/"
            >
              Aiesha Angeles
            </a>
          </h2>
          <p>Web & Mobile UI Designer</p>
        </div>
        <div>
          <img src={mourad} alt="Gabriel" />
          <h2>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/GabrielMourad"
            >
              Gabriel Mourad
            </a>
          </h2>
          <p>Web Developer</p>
        </div>
        <div>
          <img src={me} alt="Sergio" />
          <h2>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/codewithsergio"
            >
              Sergio Hernandez
            </a>
          </h2>
          <p>Mobile Developer | Web Developer</p>
        </div>
      </div>

      <div className="title">
        <h1 className="title_header">Introduction</h1>
      </div>

      <div className="introduction">
        <p className="intro_text">
          An app targeted toward younger audiences to gamify the concept of
          budgeting to help to get them in the habit of making better financial
          decisions and finacial literacy. It's also real world experience for
          us developers to practice managing a used application with real users.
          Did we mention financial literacy...
        </p>
      </div>

      <div className="title">
        <h1 className="title_header">Major Features</h1>
      </div>

      <ul className="tech_list">
        <li>Set a budget</li>
        <li>Add a transition</li>
        <li>Data persistence</li>
        <li>User authentication</li>
      </ul>

      <div className="title">
        <h1 className="title_header">Technologies</h1>
      </div>

      <ul className="tech_list">
        <li>React.js</li>
        <li>React Native</li>
        <li>Plaid API</li>
        <li>Firebase</li>
      </ul>

      <div className="title">
        <h1 className="title_header">Skills Used</h1>
      </div>

      <ul className="tech_list">
        <li>App development</li>
        <li>Debugging</li>
        <li>Project Management</li>
        <li>User Authentication</li>
        <li>UI Design</li>
        <li>Database Management</li>
        <li>Mathematics and Finance</li>
        <li>API Integration</li>
      </ul>

      <footer>
        <p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.csun.edu/~xjiang/SeniorDesign/"
          >
            View course page
          </a>
        </p>
        <p>Copyright &copy; California State University, Northridge</p>
      </footer> */
  );
}

export default App;
