import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer/CommentContainerWrapper";
import { Wrapper } from "./Style";
import LiveChat from "./LiveChat/LiveChat";
const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <iframe
          className="top-left"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          src={`https://www.youtube.com/embed/${id}?si=co0v3siMpm_J_GU6`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="top-right">
          <LiveChat />
        </div>
      </div>

      <div className="bottom-left" style={{ marginTop: 5 }}>
        <CommentContainer />
      </div>
    </Wrapper>
  );
};

export default WatchPage;
