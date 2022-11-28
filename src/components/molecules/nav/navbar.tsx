import NavButton from "components/atoms/nav/nav_button";
import { useLocation, useNavigate } from "react-router-dom";
import { NavContainer } from "./style";
import { Link } from "react-router-dom";
import MyPageButton from "components/atoms/home/mypage_btn";
import MyPageModal from "components/atoms/home/mypage_modal";
import ShopModal from "components/atoms/home/shop_modal";
import styled from "styled-components";
const NavBar = () => {
  const location = useLocation();
 
  return (
    <NavContainer>
      <TopContainer>
        <NavButton
          isSelected={location.pathname === "/" ? true : false}
          text="Magazine"
        ></NavButton>

        <NavButton
          isSelected={location.pathname === "/map" ? true : false}
          text="Map"
        ></NavButton>
      </TopContainer>
      <MyPageButton />

      <MyPageModal />
      <ShopModal />
    </NavContainer>
  );
};

const TopContainer = styled.div`
  display: flex;
`;
export default NavBar;
