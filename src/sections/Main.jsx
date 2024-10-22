import background from "../assets/parallax/background.svg";
import stars from "../assets/parallax/stars.svg";
import lake from "../assets/parallax/lake.svg";
import mountains1 from "../assets/parallax/mountains-1.svg";
import mountains2 from "../assets/parallax/mountains-2.svg";
import rocks1 from "../assets/parallax/rocks-1.svg";
import rocks2 from "../assets/parallax/rocks-2.svg";

import NorthernLights from "../components/NorthernLights";

import { useScrollPosition } from "../hooks/useScrollPosition";
import Starfield from "../components/Stars";

import ScrollAnimation from "react-animate-on-scroll";

const Main = () => {
  const { scrollY } = useScrollPosition();

  return (
    <main
      className="bg-base-100 min-h-[65vh] md:min-h-screen bg-cover relative flex items-end"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Hero Section Content */}
      <ScrollAnimation
        animateIn="fadeIn"
        duration={3}
        className="absolute w-full h-full flex flex-col items-center justify-center leading-10 md:leading-[0.8] z-[7] md:bottom-14"
      >
        <h2 className="text-[1.5rem] md:text-[4rem] font-extrabold text-center uppercase">
          full-stack developer
        </h2>
        <h1 className="text-[3.5rem] md:text-[8rem] font-extrabold text-center uppercase ">
          frank ramirez
        </h1>
      </ScrollAnimation>
      <div className="w-full h-full overflow-hidden absolute">
        <NorthernLights />
        <Starfield />
      </div>
      {/* Parallax Background */}
      <div className="parallax">
        {/* This element handles the space pending to fill below rocks-1 due to the background
          The element has a height relative to the scrollY obtain with the useScrollPosition  */}
        <div className="w-full h-full flex items-end z-[5]">
          <div
            className="w-full bg-base-100"
            style={{ height: `${scrollY / 10}vh` }}
          ></div>
        </div>
        {/* Parallax images */}
        {/* <img className="w-full stars invisible md:visible" src={stars}></img> */}
        <img className="w-full mountains-1 z-[6]" src={mountains1}></img>
        <img className="w-full mountains-2 z-[8]" src={mountains2}></img>
        <img className="w-full lake z-[8]" src={lake}></img>
        <img className="w-full rocks-2 z-[9]" src={rocks2}></img>
        <img className="w-full rocks-1 z-[10]" src={rocks1}></img>
      </div>
    </main>
  );
};

export default Main;
