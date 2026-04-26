import { NavLink } from "react-router-dom";
import ProfileDrop from "./ProfileDrop";

function Header() {
  return (
    <div className="flex flex-row-reverse justify-between pt-5 items-center text-dark-gray">
      <div className="flex flex-row-reverse items-center gap-10">
        <h1 className="font-extrabold tracking-widest text-navy text-2xl">SHOESLAND</h1>
        <ul className="flex flex-row-reverse gap-5 items-center font-medium">
           <NavLink to="/" className={({isActive})=> isActive && "border-b-2 border-primary-blue text-primary-blue font-semibold"}>
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
      </div>
      <ProfileDrop />
    </div>
  );
}

export default Header;
