import NavButton from "components/atoms/nav/nav_button";
import { useLocation } from "react-router-dom";
import { NavContainer } from "./style";
import { Link } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname === "/shop");
  return (
    <NavContainer>
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
    </NavContainer>
  );
};

export default NavBar;
