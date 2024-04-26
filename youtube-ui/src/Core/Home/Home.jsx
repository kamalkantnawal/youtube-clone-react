import Body from "../Body/Body";
import { Header } from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Wrapper } from "./Style";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Body />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
