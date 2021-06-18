import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.JPEG";
import img3 from "../assets/images/3.JPEG";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="container-slider">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        bullets={false}
        buttons={false}
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
