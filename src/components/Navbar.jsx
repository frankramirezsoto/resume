import "./Navbar.css";
import ThemeToggler from "./ThemeToggler.jsx";
import MobileNav from "./MobileNav.jsx";
import useBreakpoint from "../hooks/useBreakpoint";
import { useScrollPosition } from "../hooks/useScrollPosition.js";

const Navbar = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint == "sm" || breakpoint == "md" || breakpoint == "default";
  const { scrollY } = useScrollPosition();
  const userScrolled = scrollY > 100;

  return (
    <div className="w-full fixed top-3 z-20">
      <div className="container mx-auto flex justify-center items-center">
        {/* NAVBAR DEFINITION */}
        <div
          className={`${userScrolled && "bg-dark"}
          text-white 
          flex justify-between 
          rounded-full w-full 
          mx-2 md:mx-auto md:w-[75vw] md:w-[${userScrolled ? '65vw': '35vw'}] py-2 px-4
          transition-all duration-700`}
        >
          {/* LOGO */}
          <div className={`cursor-pointer ${userScrolled ? 'visible' : "invisible"} transition-[visibility]`}>
            <h2 className="font-extrabold logo-effect text-3xl">frank</h2>
          </div>
          {/* Desktop Navbar */}
          {!isMobile && (
            <ul className="list-none flex items-center text-2xl">
                <li>
                <a className="navbar-effect" href="#projects">
                  About
                </a>
              </li>
              <li>
                <a className="navbar-effect" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="navbar-effect" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="navbar-effect" href="#experience">
                  Experience
                </a>
              </li>
            </ul>
          )}
          {/* Mobile Navigation & CTA */}
          <div className="flex items-center">
          <div className="flex items-center me-3"><ThemeToggler /></div>
          {isMobile && <MobileNav />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;