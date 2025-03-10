import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const open = useSelector((store) => store.app.open);
  return (
    <div className={`ml-5 mr-5 ${open ? "w-[82%]" : "w-[94%]"}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
