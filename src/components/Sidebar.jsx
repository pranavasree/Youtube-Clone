import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <HiOutlineHome size={"24px"} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={"24px"} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={"24px"} />,
      text: "Subscription",
    },
    {
      icon: <HiOutlineHome size={"24px"} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={"24px"} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={"24px"} />,
      text: "Subscription",
    },
    {
      icon: <HiOutlineHome size={"24px"} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={"24px"} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={"24px"} />,
      text: "Subscription",
    },
    {
      icon: <HiOutlineHome size={"24px"} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={"24px"} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={"24px"} />,
      text: "Subscription",
    },
    {
      icon: <HiOutlineHome size={"24px"} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={"24px"} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={"24px"} />,
      text: "Subscription",
    },
    {
      icon: <HiOutlineHome size={"24px"} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={"24px"} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={"24px"} />,
      text: "Subscription",
    },
    {
      icon: <HiOutlineHome size={"24px"} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={"24px"} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={"24px"} />,
      text: "Subscription",
    },
    {
      icon: <HiOutlineHome size={"24px"} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={"24px"} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={"24px"} />,
      text: "Subscription",
    },
    {
      icon: <HiOutlineHome size={"24px"} />,
      text: "Home",
    },
    {
      icon: <SiYoutubeshorts size={"24px"} />,
      text: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions size={"24px"} />,
      text: "Subscription",
    },
  ];

  const open = useSelector((store) => store.app.open);
  return (
    <div
      className={`relative left-1 ${
        open ? "w-[18%]" : "w-[6%]"
      } p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}
    >
      {sidebarItems.map((item, index) => {
        return (
          <div key={index} className="flex my-3 ml-2">
            {item.icon}
            <p className={`ml-5 ${!open ? "hidden" : ""}`}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
