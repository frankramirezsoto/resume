import background from "../assets/parallax/background.svg";
import stars from "../assets/parallax/stars.svg";
import lake from "../assets/parallax/lake.svg";
import mountains1 from "../assets/parallax/mountains-1.svg";
import mountains2 from "../assets/parallax/mountains-2.svg";
import rocks1 from "../assets/parallax/rocks-1.svg";
import rocks2 from "../assets/parallax/rocks-2.svg";


const Main = () => {
  return (
    <main className="bg-base-100 min-h-screen bg-cover" style={{backgroundImage:`url(${background})`}}>
        <div className="parallax relative w-full z-10">
          <img className="w-full absolute top-12 stars" src={stars}></img>
          <img className="w-full absolute top-32 mountains-1" src={mountains1}></img>
          <img className="w-full absolute top-32 mountains-2" src={mountains2}></img>
          <img className="w-full absolute top-32 lake" src={lake}></img>
          <img className="w-full absolute top-32 rocks-1" src={rocks2}></img>
          <img className="w-full absolute top-32 rocks-2" src={rocks1}></img>
        </div>
    </main>
  )
}

export default Main