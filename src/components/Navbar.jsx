import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2 } from "react-icons/im";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { RiVideoAddFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import Avatar from "react-avatar";
import ProfileImg from "../assets/profile.jpg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white">
      <nav className="flex w-[96%] justify-between px-0 py-2">
        <div className="flex items-center gap-4">
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="text-2xl cursor-pointer"
          />
          <ImYoutube2 className="size-16 cursor-pointer" />
        </div>
        <div className=" w-[40%] flex items-center  justify-between">
          <div className="flex w-[100%] py-2 px-4 border border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
          </div>
          <button className="py-2 border border-gray-400 rounded-r-full px-4 cursor-pointer">
            <RiSearchLine className="size-6 " />
          </button>
        </div>
        <div className="flex items-center gap-5">
          <IoNotificationsCircleSharp className="size-7 cursor-pointer hover:" />
          <RiVideoAddFill className="size-7 cursor-pointer" />
          <Avatar
            className="cursor-pointer"
            src={ProfileImg}
            name="John Doe"
            size="32"
            round={true}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
