import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import { useSelector } from "react-redux";
// Icons
import TestAcount from "../assets/images/test_account.svg";
import ChevronDown from "../assets/images/chevron-down.svg";
import ChevronUp from "../assets/images/chevron-up.svg";

function ProfileDrop() {
  const [isDropDown, setIsDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // User Information
  const user = useSelector((state) => state.auth);
  console.log(user);

  //   handle drop down stat on click
  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const handleClickOutside = (e) => {
    console.log("hello");

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      !toggleBtnRef.current.contains(e.target)
    ) {
      setIsDropDown(false);
      console.log("done");
    }
  };

  useEffect(() => {
    if (isDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDown]);

  return (
    <div className="relative">
      {user.loading ? (
        <div className="flex items-center bg-gray-300 p-5 rounded-full animate-pulse">
          <div className="mr-7 cursor-pointer w-10 h-10 bg-gray-400 rounded-full"></div>
          <div className="mr-2 w-32 h-8 rounded-full bg-gray-400"></div>
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        </div>
      ) : user.user ? (
        <div className="flex items-center bg-white p-5 rounded-full">
          <div
            className="pr-10 cursor-pointer"
            ref={toggleBtnRef}
            onClick={handleDropDown}
          >
            <img
              className="w-6"
              src={isDropDown ? ChevronUp : ChevronDown}
              alt="chevron down"
            />
          </div>
          <div className="pr-2 truncate">عرفان خدمتی</div>
          <div>
            <img className="w-10" src={TestAcount} alt="profile icon" />
          </div>
        </div>
      ) : (
        // this part will completed later
        <div className="bg-white p-5 rounded-full cursor-pointer hover:bg-primary-blue hover:text-white">
          <Link to="/authentication">ورود به حساب کاربری</Link>
        </div>
      )}

      {/* Hidden menu */}
      <div
        className={`${!isDropDown && "hidden"} absolute top-[120%] left-0 w-full bg-white rounded-2xl`}
        ref={dropdownRef}
      >
        <ul className="text-right">
          <NavLink to="/profile">
            <li className="w-full p-5 rounded-t-2xl hover:bg-light-blue/30">
              حساب کاربری
            </li>
          </NavLink>
          <NavLink to="/cart">
            <li className="w-full p-5 hover:bg-light-blue/30">سبد خرید</li>
          </NavLink>
          <NavLink to="/profile/notification">
            <li className="w-full p-5 hover:bg-light-blue/30">اعلان ها</li>
          </NavLink>
          <NavLink to="/profile">
            <li className="w-full p-5 rounded-b-2xl hover:bg-red-100">خروج</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default ProfileDrop;
