import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { IMG, Wrapper } from "./Style";
import { updateProperty } from "../../Store/Reducers/AppState";

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
        <IMG src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />
      </div>
    </Wrapper>
  );
};

export default Header;
