import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEOS_API, API_KEY } from "../constants/youtube.jsx";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const fetchVideos = async () => {
    try {
      const data = await axios.get(YOUTUBE_VIDEOS_API + API_KEY);
      setVideo(data?.data?.items);
      // console.log(data?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3">
      {video.map((item) => {
        return (
          <Link to={`/watch?v=${item.id}`} key={item.id}>
            <VideoCard item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
