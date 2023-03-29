import "./TechUsed.css";

function TechUsed() {
  return (
    <div className="tech">
      <h1>Technology Used</h1>
      <div className="techCards">
        <div className="techCard">
          <span
            className="green iconify iconifySkills"
            data-icon="logos:react"
          ></span>
          <div>
            <p>React.js</p>
            <p>
              Our Technology used to create the web version of our application.
            </p>
          </div>
        </div>
        <div className="techCard">
          <span
            className="green iconify iconifySkills"
            data-icon="tabler:brand-react-native"
          ></span>
          <div>
            <p>React Native</p>
            <p>
              Our Technology used to create our mobile verison of the
              application.
            </p>
          </div>
        </div>
        <div className="techCard">
          <span
            className="green iconify iconifySkills"
            data-icon="vscode-icons:file-type-firebase"
          ></span>
          <div>
            <p>Firebase</p>
            <p>
              Firebase stored all of our user data, making it accessible through
              any device.
            </p>
          </div>
        </div>
        <div className="techCard">
          <span
            className="green iconify iconifySkills"
            data-icon="tabler:api"
          ></span>
          <div>
            <p>Plaid API</p>
            <p>
              Using Plaid API, we were able to connect users to their bank
              accounts.
            </p>
          </div>
        </div>
      </div>
      <div className="weirdShape"></div>
    </div>
  );
}

export default TechUsed;
