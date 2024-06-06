import { useSelector } from "react-redux";
import Body from "../Body/Body";
import Header from "../Header/Header";

import Sidebar from "../Sidebar/Sidebar";
import { Wrapper } from "./Style";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "../Body/MainBodyContainer/VideoContainer/VideoContainer";
import WatchPage from "../Body/MainBodyContainer/WatchPage/WatchPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const Home = () => {
  const flag = useSelector((store) => store.appState.toggleState);
  const bodymarginoff = useSelector((store) => store.appState.bodymarginoff);
  return (
    <Wrapper flag={flag} bodymarginoff={bodymarginoff}>
      <Header />
      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <RouterProvider router={appRouter}></RouterProvider>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
