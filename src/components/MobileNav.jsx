import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const MobileNav = () => {
  return (
    <div className="drawer drawer-end">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Trigger button*/}
        <label
          htmlFor="sidebar"
          className="drawer-button cursor-pointer hover:text-secondary"
        >
          <GiHamburgerMenu size={30} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <label
            className="drawer-button cursor-pointer flex justify-end hover:text-primary"
            htmlFor="sidebar"
          >
            <MdClose size={30} />
          </label>
          <li>
            <a className="navbar-effect" href="#about">
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
          <li>
            <a className="navbar-effect" href="#education">
              Education
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
