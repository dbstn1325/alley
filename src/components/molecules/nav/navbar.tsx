import NavButton from "components/atoms/nav/nav_button";
import { useLocation } from "react-router-dom";
import { NavContainer } from "./style";
import { Link } from "react-router-dom";
import MyPageButton from "components/atoms/home/mypage_btn";
import MyPageModal from "components/atoms/home/mypage_modal";
import ShopModal from "components/atoms/home/shop_modal";
const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname === "/shop");
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <NavButton
            isSelected={location.pathname === "/" ? true : false}
            text="Magazine"
          ></NavButton>
        </Link>
        <Link to="/map">
          <NavButton
            isSelected={location.pathname === "/map" ? true : false}
            text="Map"
          ></NavButton>
        </Link>
      </div>
      <MyPageButton />

      <MyPageModal />
      <ShopModal />
    </NavContainer>
  );
};

export default NavBar;
