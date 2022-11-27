import { BackArrow } from "components/atoms/detail/backArrow";
import { NavDate } from "components/atoms/detail/navDate";
import { StyledNavBar } from "components/atoms/detail/styles";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <BackArrow />
      <NavDate />
    </StyledNavBar>
  );
};
