import logo from "../assets/images/logo.png";
// import legumes1 from '../assets/images/legumes1.png';
// import legumes2 from '../assets/images/legumes2.png';
// import legumes3 from '../assets/images/legumes3.png';
// import legumes4 from '../assets/images/legumes4.png';
// import legumes5 from '../assets/images/legumes5.png';
// import legumes6 from '../assets/images/legumes6.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

import Nav from "../components/Nav";
// import { useEffect } from 'react';

const Home = () => {
  // let backgroundImages = null;
  // const isMobile = window.matchMedia(
  //   'only screen and (max-width: 760px)'
  // ).matches;

  // const moveMouse = (e) => {
  //   if (backgroundImages) {
  //     backgroundImages.forEach((img) => {
  //       const movingValue = img.getAttribute('data-value');
  //       const ratioX = (e.clientX / window.innerWidth - 0.5) * 15;
  //       const ratioY = (e.clientY / window.innerHeight - 0.5) * 15;
  //       const x = ratioX * movingValue;
  //       const y = ratioY * movingValue - img.clientHeight / 2;
  //       img.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //     });
  //   }
  // };

  // useEffect(() => {
  //   backgroundImages = document.querySelectorAll('.background .img');
  //   window.addEventListener('mousemove', moveMouse);
  //   return () => window.removeEventListener('mousemove', moveMouse);
  // }, []);
  return (
    <div className="home">
      <Nav />
      <div className="layout index">
        <div className="title-container">
          <img className="logo-text" alt="logo" src={logo} />
          <span className="title1">Bienvenu dans votre restaurant</span>
          <span className="title2">LOON GARDEN</span>
          {/* <span className="title3">RESTAURANT</span> */}
        </div>
        <div className="btn-menu">
          <AnchorLink className="btn-style" href="#menu">
            Decouvrir le menu
          </AnchorLink>
        </div>
      </div>
      {/* <div className={isMobile ? 'mobile background' : 'background'}>
        <img className='img' alt='test' data-value='2' src={legumes1} />
        <img className='img' alt='test' data-value='-4' src={legumes2} />
        <img className='img' alt='test' data-value='5' src={legumes3} />
        <img className='img' alt='test' data-value='3' src={legumes4} />
        <img className='img' alt='test' data-value='-6' src={legumes5} />
        <img className='img' alt='test' data-value='4' src={legumes6} />
      </div> */}
    </div>
  );
};

export default Home;
