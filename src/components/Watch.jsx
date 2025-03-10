import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { API_KEY } from "../constants/youtube";
import Avatar from "react-avatar";
import ProfileImg from "../assets/profile.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const Watch = () => {
  const [videoData, setVideoData] = useState("");
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getVideoData = async () => {
    try {
      const videoInfo = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      setVideoData(videoInfo?.data?.items[0]);
      // console.log(videoInfo?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideoData();
  }, []);

  console.log(videoData);

  return (
    <div className="ml-4">
      <div>
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title={videoData?.snippet?.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">{videoData?.snippet?.title}</h1>
        <div className="flex items-center justify-between mt-2">
          <div className="flex justify-between w-[35%] ">
            <div className="flex">
              <Avatar
                className="cursor-pointer"
                src={videoData?.snippet?.thumbnails?.high?.url}
                name="John Doe"
                size="32"
                round={true}
              />
              <h1 className="ml-3 py-1 font-medium">
                {videoData?.snippet?.channelTitle}
              </h1>
            </div>
            <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>
          <div className="flex items-center w-[40%]  justify-between">
            <div className="flex  cursor-pointer bg-gray-200 px-3 py-2 rounded-full">
              <AiOutlineLike className="mr-5 size-5" />
              <AiOutlineDislike className="size-5" />
            </div>
            <div className="flex  cursor-pointer bg-gray-200 px-3 py-2 rounded-full">
              <PiShareFat className="mr-2 size-5" />
              <span>Share</span>
            </div>
            <div className="flex  cursor-pointer bg-gray-200 px-3 py-2 rounded-full">
              <FaRegArrowAltCircleDown className="mr-2 size-5" />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Watch;
