import "./TechUsed.css";

function TechUsed() {
  return (
    <div className="tech">
      <h1>Technology Used</h1>
      <div className="techCards">
        <div className="techCard">
          <a href="https://react.dev" target="_blank">
            <span
              className="green iconify iconifySkills"
              data-icon="logos:react"
            ></span>
          </a>
          <div>
            <p>React.js</p>
            <p>
              Our Technology used to create the web version of our application.
            </p>
          </div>
        </div>
        <div className="techCard">
          <a href="https://reactnative.dev" target="_blank">
            <span
              className="green iconify iconifySkills"
              data-icon="tabler:brand-react-native"
            ></span>
          </a>
          <div>
            <p>React Native</p>
            <p>
              Our Technology used to create our mobile verison of the
              application.
            </p>
          </div>
        </div>
        <div className="techCard">
          <a href="https://firebase.google.com" target="_blank">
            <span
              className="green iconify iconifySkills"
              data-icon="vscode-icons:file-type-firebase"
            ></span>
          </a>
          <div>
            <p>Firebase</p>
            <p>
              Firebase stored all of our user data, making it accessible through
              any device.
            </p>
          </div>
        </div>
        <div className="techCard">
          <a href="https://plaid.com/docs/" target="_blank">
            <span
              className="green iconify iconifySkills"
              data-icon="tabler:api"
            ></span>
          </a>
          <div>
            <p>Plaid API</p>
            <p>
              Using Plaid API, we were able to connect users to their bank
              accounts.
            </p>
          </div>
        </div>
      </div>
      <h1 id="skillsUsed">Skills Used</h1>
      <div className="techCards">
        <div className="techCard">
          <span
            className="green iconify iconifySkills"
            data-icon="mdi:github"
          ></span>
          <div>
            <p>Version Control</p>
            <p>Managed different versions of our project.</p>
          </div>
        </div>
        <div className="techCard">
          <span
            className="green iconify iconifySkills"
            data-icon="akar-icons:css-fill"
          ></span>
          <div>
            <p>UI Design</p>
            <p>Designed the look of our site with CSS and Figma.</p>
          </div>
        </div>
        <div className="techCard">
          <span
            className="green iconify iconifySkills"
            data-icon="mdi:password-remove-outline"
          ></span>
          <div>
            <p>User Authentication</p>
            <p>Protected client data with authentication.</p>
          </div>
        </div>
        <div className="techCard">
          <span
            className="green iconify iconifySkills"
            data-icon="codicon:debug-alt-small"
          ></span>
          <div>
            <p>Debugging</p>
            <p>Experience in editing team members code.</p>
          </div>
        </div>
      </div>
      <div className="weirdShape"></div>
      <div className="weirdShape2"></div>
    </div>
  );
}

export default TechUsed;
