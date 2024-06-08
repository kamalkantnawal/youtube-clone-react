import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { IMG, Wrapper } from "./Style";
import { updateProperty } from "../../Store/Reducers/AppState";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const flag = useSelector((store) => store.appState.toggleState);
  const iconClicked = () => {
    dispatch(
      updateProperty({
        path: "toggleState",
        value: !flag,
      })
    );
  };
  return (
    <Wrapper>
      <div className="left-nav">
        <IMG
          onClick={iconClicked}
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />

        <IMG src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" />
      </div>
      <div className="mid-nav">
        <Search />
      </div>
      <div className="right-nav">
        <FaRegUserCircle style={{ marginTop: 13 }} size={24} />
      </div>
    </Wrapper>
  );
};

export default Header;
