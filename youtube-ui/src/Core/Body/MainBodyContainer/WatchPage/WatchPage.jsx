import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  console.log("id", id);
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
    </div>
  );
};

export default WatchPage;
