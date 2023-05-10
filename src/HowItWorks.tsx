import "./HowItWorks.css";
import { useState } from "react";
import WebVideo from "./videos/GitMunnyPrezzyRecording.mp4";
import chooseBank from "./assets/mobile-screenshots/choose-bank.png";
import itemView from "./assets/mobile-screenshots/item-view.png";
import mainAccount from "./assets/mobile-screenshots/main-account.png";
import plaidCreate from "./assets/mobile-screenshots/plaid-create.png";
import searchItem from "./assets/mobile-screenshots/search-item.png";

function HowItWorks() {
  const listOfImages: string[] = [
    plaidCreate,
    chooseBank,
    mainAccount,
    searchItem,
    itemView,
  ];
  const [imagesIndex, setImagesIndex] = useState(0);
  const decrementImage = () => {
    if (imagesIndex == 0) {
      setImagesIndex(listOfImages.length - 1);
    } else {
      setImagesIndex(imagesIndex - 1);
    }
  };
  const incrementImage = () => {
    if (imagesIndex == listOfImages.length - 1) {
      setImagesIndex(0);
    } else {
      setImagesIndex(imagesIndex + 1);
    }
  };
  return (
    <div className="How_It_Works">
      <h1>Web Version Demo</h1>
      <iframe
        className="video_player"
        src="https://www.youtube.com/embed/JPix0ENLivc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h1>Images of the project</h1>
      <div className="phone_carousal">
        <div onClick={decrementImage}>
          <span className="iconify" data-icon="ph:arrow-circle-left"></span>
        </div>
        <img src={listOfImages[imagesIndex]} />
        <div onClick={incrementImage}>
          <span className="iconify" data-icon="ph:arrow-circle-right"></span>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
