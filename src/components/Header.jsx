import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileDrop from "./ProfileDrop";

// icon
import XIcon from "../assets/images/x.svg";
import MenuIcon from "../assets/images/menu.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const closeButtonRef = useRef(null);

  // handle click outside of hambergur menu
  const handleClickOutside = (e) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(e.target) &&
      !closeButtonRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="flex flex-row-reverse justify-between pt-5 items-center text-dark-gray">
      <div className="flex flex-row-reverse items-center gap-10">
        <h1 className="font-extrabold tracking-widest text-navy text-2xl">
          SHOESLAND
        </h1>
        <ul className="hidden md:flex flex-row-reverse gap-5 items-center font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive && "border-b-2 border-primary-blue text-primary-blue font-semibold"
            }
          >
            <li>خونه</li>
          </NavLink>
          <NavLink to="/men">
            <li>مردانه</li>
          </NavLink>
          <NavLink to="/women">
            <li>زنانه</li>
          </NavLink>
          <NavLink to="/kids">
            <li>بچگانه</li>
          </NavLink>
        </ul>
        {/* Mobile menu */}
        <div
          className={`${!menuOpen && "hidden"} md:hidden absolute bg-gray-500/50 w-screen h-screen top-0 left-0 z-10 flex justify-end`}
        >
          <ul
            className="w-1/2 flex md:hidden flex-col items-end bg-white font-medium"
            ref={mobileMenuRef}
          >
            <img
              className="w-10 m-5 cursor-pointer"
              src={XIcon}
              alt="exit menu icon"
              onClick={() => setMenuOpen(false)}
              ref={closeButtonRef}
            />
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-light-blue/50 p-5 text-right w-full"
                  : "p-5 w-full text-right hover:bg-light-blue/30"
              }
            >
              <li>خونه</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-light-blue/50 p-5 text-right w-full"
                  : "p-5 w-full text-right hover:bg-light-blue/30"
              }
              to="/men"
            >
              <li>مردانه</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-light-blue/50 p-5 text-right w-full"
                  : "p-5 w-full text-right hover:bg-light-blue/30"
              }
              to="/women"
            >
              <li>زنانه</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-light-blue/50 p-5 text-right w-full"
                  : "p-5 w-full text-right hover:bg-light-blue/30"
              }
              to="/kids"
            >
              <li>بچگانه</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <button className="w-7 md:hidden cursor-pointer" onClick={() => setMenuOpen(true)}>
        <img src={MenuIcon} alt="menu icon" />
      </button>
      <div className="hidden md:block">
        <ProfileDrop />
      </div>
    </div>
  );
}

export default Header;
