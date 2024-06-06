import axios from "axios";
import { YOUTUBE_API } from "../../../Constants";
import { VideoContainers } from "../../Style";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProperty } from "../../../../Store/Reducers/AppState";
import ButtonList from "../ButtonList.jsx/ButtonList";
import { useEffect, useState } from "react";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState([]);
  const flag = useSelector((store) => store.appState.toggleState);

  const env = import.meta.env;
  const url = `${YOUTUBE_API}${env.VITE_API_CREDENTIAL}`;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setVideoData(data?.items);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>
      <ButtonList />
      <VideoContainers>
        {videoData?.map((video) => (
          <Link
            key={video?.id}
            to={`/watch?v=${video?.id}`}
            onClick={() => {
              dispatch(updateProperty({ path: "toggleState", value: !flag }));
              dispatch(updateProperty({ path: "bodymarginoff", value: true }));
            }}
          >
            <VideoCard videoData={video} />
          </Link>
        ))}
      </VideoContainers>
    </div>
  );
};

export default VideoContainer;
