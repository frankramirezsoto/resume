import "./Navbar.css";
import ThemeToggler from "./ThemeToggler.jsx";
import MobileNav from "./MobileNav.jsx";
import useBreakpoint from "../hooks/useBreakpoint";

const Navbar = () => {
  const breakpoint = useBreakpoint();
  const isMobile =
    breakpoint == "sm" || breakpoint == "md" || breakpoint == "default";

  return (
    <div className="w-full fixed top-3 z-20">
      <div className="container mx-auto flex justify-center items-center">
        {/* NAVBAR DEFINITION */}
        <div
          className="bg-dark text-white  
                            flex justify-between rounded-full w-full 
                            mx-2 md:w-[75vw] xl:w-[65vw] py-2 px-4"
        >
          {/* LOGO */}
          <div className="cursor-pointer">
            <h2 className="font-extrabold logo-effect text-2xl">frank</h2>
          </div>
          {/* Desktop Navbar */}
          {!isMobile && (
            <ul className="list-none flex items-center">
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
          {/* CTA */}
          <div className="flex items-center">
            <div className="flex items-center me-3"><ThemeToggler /></div>
            {/* Mobile Navigation */}
            {isMobile && <MobileNav />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
