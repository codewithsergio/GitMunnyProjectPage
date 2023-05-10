import "./Home.css";
import blob from "./assets/blob.png";
import happytree from "./assets/happytreemoney.png";
import iphone from "./assets/iphone.png";
import FeatureCard from "./FeatureCard";
import TechUsed from "./TechUsed";

function Home() {
  return (
    <div className="home">
      <div className="front">
        <h1>Budget your cash</h1>
        <p>Made to assist college students in budgeting their expenses</p>
        <a href="https://gitmunny.web.app/login" target="_blank">
          GET STARTED
        </a>
        <p className="green">
          Budget tracking app available on
          <span
            className="green iconify iconifySkills"
            data-icon="ic:baseline-apple"
          ></span>
          <span
            className="green iconify iconifySkills"
            data-icon="material-symbols:android"
          ></span>
        </p>
      </div>
      <div className="weirdShapeContent">
        <div>
          <img id="phone" src={iphone} />
          <img id="happytree" src={happytree} />
        </div>
        <div>
          <p>How it works</p>
          <p id="slogan">
            "Saving money is a form of self-preservation; it may not always feel
            good in the moment, but it will pay off in the long run." - Joshua
            Becker
          </p>
        </div>
      </div>
      <div className="weirdShape"></div>
      <div className="purpose">
        <h1>What We Offer</h1>
        <p>
          An app targeted toward younger audiences to gamify the concept of
          budgeting to help to get them in the habit of making better financial
          decisions and finacial literacy. It's also real world experience for
          us developers to practice managing a used application with real users.
        </p>
        <div className="featureCards">
          <FeatureCard
            feature={"Set Budget"}
            description={
              "Users will be able to plan ahead by setting their monthly budget before the month begins."
            }
            icon={"tabler:report-money"}
          />
          <FeatureCard
            feature={"Add Transactions"}
            description={
              "Users will be able to keep track of everything that they buy whether its cash or purhcased with a credit card."
            }
            icon={"grommet-icons:transaction"}
          />
          <FeatureCard
            feature={"Data Persistence"}
            description={
              "We keep track of user data with a database so they can view their profile later and on different devices."
            }
            icon={"carbon:data-backup"}
          />
          <FeatureCard
            feature={"User Authentication"}
            description={
              "We use google authentication to log users in, so anyone can create an account quickly."
            }
            icon={"mdi:account-security-outline"}
          />
          <FeatureCard
            feature={"Cross Platform"}
            description={
              "We offer our application on web, ios and android so you can view your information on any device you find yourself using."
            }
            icon={"mdi:web"}
          />
          <FeatureCard
            feature={"User-friendly Design"}
            description={
              "UI experience feels quick and smooth with latest technology allowing the application to feel snappy and quick."
            }
            icon={"carbon:gui"}
          />
        </div>
        <TechUsed />
      </div>
    </div>
  );
}

export default Home;
