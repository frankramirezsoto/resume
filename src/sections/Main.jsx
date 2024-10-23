//Importing SVG images that form the parallax effect
import background from "../assets/parallax/background.svg";
import lake from "../assets/parallax/lake.svg";
import mountains1 from "../assets/parallax/mountains-1.svg";
import mountains2 from "../assets/parallax/mountains-2.svg";
import rocks1 from "../assets/parallax/rocks-1.svg";
import rocks2 from "../assets/parallax/rocks-2.svg";
//Importing animated textures to the background
import NorthernLights from "../components/effects/NorthernLights";
import Starfield from "../components/effects/Stars";
//Importing Hooks
import { useScrollPosition } from "../hooks/useScrollPosition";
import useBreakpoint from "../hooks/useBreakpoint";

const Main = () => {

  const { scrollY } = useScrollPosition();
  
  return (
    <main
      className="bg-base-100 min-h-[65vh] md:min-h-screen bg-cover relative flex items-end"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Hero Section Content */}
      <div
        className="absolute flex flex-col items-center justify-center 
        w-full h-full z-[7] md:bottom-14
        leading-[3.5rem] md:leading-[0.8] 
        font-extrabold lg:text-center uppercase text-hero"
      >
        <h2 className="flex flex-col lg:flex-row text-[3.5rem] lg:text-[3rem] xl:text-[4rem]">
          <span className="lg:me-5">full-stack</span><span> developer</span>
        </h2>
        <h1 className="flex flex-col lg:flex-row text-[9.5rem] lg:text-[6rem] xl:text-[8rem]">
        <span className="text-[6.2rem] lg:text-[7rem] lg:me-5 mt-3 mb-5 md:m-0">frank</span><span className="text-[4.8rem] lg:text-[7rem]"> ramirez</span>
        </h1>
      </div>
      {/* Textures */}
      <div className="w-full h-full overflow-hidden absolute z-[1]">
        <NorthernLights />
        <Starfield />
      </div>
      {/* Parallax Background */}
      <div className="parallax">
        {/* This element handles the space pending to fill below rocks-1 due to the background
          The element has a height relative to the scrollY obtain with the useScrollPosition  */}
        <div className="w-full h-full flex items-end z-[7]">
          <div
            className="w-full bg-base-100"
            style={{ height: `${scrollY / 10}vh` }}
          ></div>
        </div>
        {/* Parallax images */}
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
