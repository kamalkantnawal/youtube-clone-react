import { sidebarOptions } from "./Constants";
import { MainDiv, Wrapper } from "./Style";
const Sidebar = () => {
  return (
    <Wrapper>
      {sidebarOptions.map((item) => {
        return (
          <MainDiv key={item.key}>
            <div>
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
  );
};

export default Sidebar;
