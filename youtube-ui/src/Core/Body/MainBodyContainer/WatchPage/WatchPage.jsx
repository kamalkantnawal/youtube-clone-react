import { useSearchParams } from "react-router-dom";
import CommentContainer from "../CommentContainer/CommentContainerWrapper";
const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  return (
    <div>
      <iframe
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        src={`https://www.youtube.com/embed/${id}?si=co0v3siMpm_J_GU6`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div style={{ marginTop: 5 }}>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
