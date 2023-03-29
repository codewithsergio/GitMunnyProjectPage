import "./Footer.css";
import csun from "./assets/csun.png";

function Footer() {
  return (
    <div className="footer">
      <div className="weirdShapeContent">
        <h2>GitMunny</h2>
        <div className="socials">
          <a
            href="https://www.facebook.com/calstatenorthridge/"
            target="_blank"
          >
            <span
              className="iconify iconifySkills"
              data-icon="ic:baseline-facebook"
            ></span>
          </a>
          <a
            href="https://twitter.com/csunorthridge?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
          >
            <span
              className="iconify iconifySkills"
              data-icon="mdi:twitter"
            ></span>
          </a>
          <a
            href="https://www.linkedin.com/school/california-state-university-northridge/"
            target="_blank"
          >
            <span
              className="iconify iconifySkills"
              data-icon="mdi:linkedin"
            ></span>
          </a>
          <a href="https://www.instagram.com/csun_edu/?hl=en" target="_blank">
            <span
              className="iconify iconifySkills"
              data-icon="mdi:instagram"
            ></span>
          </a>
          <a href="https://www.csun.edu" target="_blank">
            <img src={csun} />
          </a>
        </div>
      </div>
      <div className="weirdShape"></div>
      <div className="underneath">
        <p>Copyright 2023 &copy; California State University, Northridge</p>
        <a
          className="course_page"
          href="https://www.csun.edu/~xjiang/SeniorDesign/"
          target="_blank"
        >
          Course Page
        </a>
      </div>
    </div>
  );
}

export default Footer;
