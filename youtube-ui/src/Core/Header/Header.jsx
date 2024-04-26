import { Wrapper } from "./Style";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";

import youtube from "../../assets/youtube.jpg";
import Search from "./Search";

export const Header = () => {
  return (
    <Wrapper>
      <div className="leftSide">
        <div>
          <RxHamburgerMenu size={28} style={{ marginBottom: "12px" }} />
          <span>
            <img
              style={{ width: "100px", marginLeft: "10px" }}
              alt="youtube logo"
              src={youtube}
            ></img>
          </span>
        </div>
      </div>
      <Search />
      <div className="rightSide">
        <FaRegUserCircle size={28} />
      </div>
    </Wrapper>
  );
};
