import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

import PropTypes from "prop-types";

const Nav = ({ openNav }) => {
  return (
    <div className=" h-[12vh] bg-[#2B293D] flex items-center shadow-md fixed top-0 z-[20] w-full">
      <div className="w-[85%] flex items-center justify-between mx-auto  ">
        {/* logo */}
        <h1 className="text-[27px] md:text-[40px] font-[700] text-white">
          Mee
          <span className="text-[16px] md:text-[25px]  font-[700] text-[#FFE047]">
            it
          </span>
        </h1>

        {/* nav links  */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[17px] cursor-pointer transition-all duration-200 text-white hover:text-[#FFE047] hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[17px] cursor-pointer transition-all duration-200 text-white hover:text-[#FFE047] hover:underline">
            <Link to="/">Events</Link>
          </li>
          <li className="text-[17px] cursor-pointer transition-all duration-200 text-white hover:text-[#FFE047] hover:underline">
            <Link to="/">About</Link>
          </li>
          <li className="text-[17px] cursor-pointer transition-all duration-200 text-white hover:text-[#FFE047] hover:underline">
            <Link to="/">Contact</Link>
          </li>
        </ul>

        {/* login  */}
        <div className="flex items-center space-x-4">
          <div className=" hidden  lg:flex items-center space-x-4">
            <Button
              asChild
              variant="link"
              className="text-[17px]  text-white px-6 py-2 rounded-md transition-all duration-200 hover:text-[#FFE047]">
              <Link to="/">Create Event</Link>
            </Button>
            <Button
              asChildss
              variant="link"
              className="text-[17px]  text-white  px-6 py-2 rounded-md transition-all duration-200 hover:text-[#FFE047] ">
              <Link to="/">Login</Link>
            </Button>
            <Button className="text-[17px] overflow-hidden group  text-[#2B293D] px-6 py-2 rounded-md bg-[#FFE047] transition-all duration-200">
              <Link to="/">Sign Up</Link>
            </Button>
          </div>
          {/* nav menu */}

          <Menu
            onClick={openNav}
            className="lg:hidden w-10 h-10 text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
