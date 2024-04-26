import { sidebarOptions } from "./Constants";
import { Wrapper } from "./Style";
const Sidebar = () => {
  return (
    <Wrapper>
      {sidebarOptions.map((item) => {
        console.log("item", item);
        return (
          <div className="fill" key={item.key}>
            <span style={{ marginRight: "10px" }}>{item.icon()}</span>
            <span>{item.label}</span>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Sidebar;
