import PropTypes from "prop-types";
import { VideoCardDiv } from "../../Style";

const VideoCard = ({ videoData }) => {
  const { id, snippet, statistics } = videoData;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <VideoCardDiv>
      <div className="video-card">
        <img
          className="thumbnail"
          src={thumbnails?.medium?.url}
          alt="thumbnails"
        ></img>
        <div>
          <span style={{ fontWeight: "bold" }}>{title} </span>| {channelTitle} |
          <span style={{ marginLeft: 4, fontWeight: "bold" }}>
            {Math.round(statistics?.viewCount / 100000)} M views
          </span>
        </div>
      </div>
    </VideoCardDiv>
  );
};
VideoCard.propTypes = {
  videoData: PropTypes.array.isRequired,
};
export default VideoCard;
