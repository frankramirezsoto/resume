import me from "../assets/foto.jpg";
import AboutCard from "../components/AboutCard";

const About = () => {
  return (
    <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 bg-dark min-h-screen" id="about">
      {/* Photo */}
      <div className="flex justify-center items-center w-full">
        <div className="mask mask-squircle">
          <img src={me} className="w-96 h-96" />
        </div>
      </div>
      {/* About Content */}
      <div className="flex justify-center items-center px-7 w-full text-center lg:text-start">
        <div>
          <h2 className="text-[3rem] border-b-4 w-fit mb-5 border-primary">About Me</h2>
          <p className="text-lg ">
            I am innate geek with a strong passion for technology and innovation.
            With over 6 years of experience in the tech industry and two steps away from becoming a CS Engineer, 
            I bring both hands-on expertise and a dedication to continuous growth.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5 h-24">
          <AboutCard>
              <h4 className="font-extrabold text-xl">+6 years</h4>
              <p className="font-extralight text-sm text-lightgray">of technical experience</p>
          </AboutCard>
          <AboutCard>
              <h4 className="font-extrabold text-xl">2 steps away</h4>
              <p className="font-extralight text-sm text-lightgray">from becoming a CS Engineer</p>
          </AboutCard>
          <AboutCard>
              <h4 className="font-extrabold text-xl">Design thinking</h4>
              <p className="font-extralight text-sm text-lightgray">at every step I take</p>
          </AboutCard>
          <AboutCard>
              <h4 className="font-extrabold text-xl">+6 years</h4>
              <p className="font-extralight text-sm text-lightgray">of technical experience</p>
          </AboutCard>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
