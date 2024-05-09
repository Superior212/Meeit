import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const MobileNav = ({ nav, closeNav }) => {
  const navOpenStyles = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`transform  ${navOpenStyles} transition-all duration-500 fixed top-0 left-0 z-[200] h-screen right-0 bottom-0 bg-[#FFE047]`}>
      {/* close icon */}
      <X
        onClick={closeNav}
        className="w-8 h-8 absolute top-8 text-[#2D2C3C] z-[202] right-8"
      />

      {/* navlinks */}
      <ul className="relative z-[201] space-y-10 flex flex-col items-center my-32 h-full">
        <li className="text-[25px] cursor-pointer transition-all duration-200 text-[#2D2C3C] hover:text-[#FFE047] hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="text-[25px] cursor-pointer transition-all duration-200 text-[#2D2C3C] hover:text-[#FFE047] hover:underline">
          <Link to="/">Events</Link>
        </li>
        <li className="text-[25px] cursor-pointer transition-all duration-200 text-[#2D2C3C] hover:text-[#FFE047] hover:underline">
          <Link to="/">About</Link>
        </li>
        <li className="text-[25px] cursor-pointer transition-all duration-200 text-[#2D2C3C] hover:text-[#FFE047] hover:underline">
          <Link to="/">Contact</Link>
        </li>

        <li className="text-[25px] cursor-pointer transition-all duration-200 text-[#2D2C3C] hover:text-[#FFE047] hover:underline">
          <Link to="/">Create Event</Link>
        </li>
        <Button
          asChild
          className="text-[20px] overflow-hidden group  text-[#FFE047] px-10 py-6 rounded-md bg-[#2B293D] transition-all duration-200">
          <Link to="/">Login</Link>
        </Button>
        <li>
          <Button
            asChild
            className="text-[20px] overflow-hidden group  text-[#FFE047] px-8 py-6 rounded-md bg-[#2B293D] transition-all duration-200">
            <Link to="/">Sign Up</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
