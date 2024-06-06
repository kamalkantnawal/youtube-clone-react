import { useSelector } from "react-redux";

import { MainDiv, Wrapper } from "./Style";
import { sidebarOptions } from "../Constants";
const Sidebar = () => {
  const flag = useSelector((store) => store.appState.toggleState);
  return !flag ? (
    <Wrapper>
      {sidebarOptions.map((item) => {
        return (
          <MainDiv flag={flag} key={item.key}>
            <div style={{ cursor: "pointer" }}>
              <span className="list-item">{item.icon()}</span>
              {item.label}
            </div>
          </MainDiv>
        );
      })}
      <div style={{ paddingTop: 5 }}>
        <h1 style={{ paddingTop: 5 }}>Subscriptions</h1>
        <ul>
          <li>Games</li>
          <li>Music</li>
          <li>Songs</li>
          <li>New</li>
        </ul>
        <h1 style={{ paddingTop: 5 }}> Live</h1>
        <ul>
          <li>Games</li>
          <li>Music</li>
          <li>Songs</li>
          <li>New</li>
        </ul>
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      {sidebarOptions.map((item) => {
        return (
          <MainDiv flag={flag} key={item.key}>
            <div style={{ cursor: "pointer" }}>
              <span className="list-item">{item.icon()}</span>
            </div>
          </MainDiv>
        );
      })}
    </Wrapper>
  );
};

export default Sidebar;
