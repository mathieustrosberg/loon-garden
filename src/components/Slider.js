import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.JPEG";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import img12 from "../assets/images/12.jpg";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.jpg";
import img15 from "../assets/images/15.jpg";
import img16 from "../assets/images/16.jpg";

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
        <div data-src={img4} />
        <div data-src={img5} />
        <div data-src={img6} />
        <div data-src={img7} />
        <div data-src={img8} />
        <div data-src={img9} />
        <div data-src={img10} />
        <div data-src={img12} />
        <div data-src={img13} />
        <div data-src={img14} />
        <div data-src={img15} />
        <div data-src={img16} />
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
