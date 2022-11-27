import NavButton from "components/atoms/nav/nav_button";
import { useLocation } from "react-router-dom";
import { NavContainer } from "./style";

const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname === "/shop");
  return (
    <NavContainer>
      <NavButton
        isSelected={location.pathname === "/" ? true : false}
        text="Magazine"
      ></NavButton>
      <NavButton
        isSelected={location.pathname === "/shop" ? true : false}
        text="Shop"
      ></NavButton>
    </NavContainer>
  );
};

export default NavBar;
