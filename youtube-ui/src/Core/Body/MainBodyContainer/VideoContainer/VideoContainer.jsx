import axios from "axios";
import { YOUTUBE_API } from "../../../Constants";
import { useEffect, useState } from "react";
import { VideoContainers } from "../../Style";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  console.log("vide----------------", videoData.length);
  const env = import.meta.env;
  const url = YOUTUBE_API + env.VITE_API_CREDENTIAL;
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await axios.get(url);
    setVideoData(data?.data.items);
  };

  return (
    <VideoContainers>
      {videoData.map((video) => (
        <VideoCard key={video.id} videoData={video} />
      ))}
      {/* <VideoCard videoData={videoData} /> */}
    </VideoContainers>
  );
};

export default VideoContainer;
