import "./HowItWorks.css";
import WebVideo from "./videos/GitMunnyPrezzyRecording.mp4";

function HowItWorks() {
  return (
    <div className="How_It_Works">
      <h1>Our Product Demo</h1>
      <video
        className="video_player"
        width="750"
        height="500"
        autoPlay
        loop
        muted
      >
        <source src={WebVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default HowItWorks;
