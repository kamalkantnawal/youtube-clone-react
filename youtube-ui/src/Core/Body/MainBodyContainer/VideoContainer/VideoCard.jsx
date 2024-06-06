import PropTypes from "prop-types";
import { VideoCardDiv } from "../../Style";

const VideoCard = ({ videoData }) => {
  console.log("videoData", videoData);
  //console.log("title", videoData?.snippet);
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
      {/* <iframe
              src={`https://www.youtube.com/embed/${id}?si=co0v3siMpm_J_GU6`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
    </VideoCardDiv>
  );
};
VideoCard.propTypes = {
  videoData: PropTypes.array.isRequired,
};
export default VideoCard;
