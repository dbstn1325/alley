import { useLocation, useNavigate } from "react-router-dom";
import NavButtonStyle from "./style";

const NavButton = ({ text, isSelected }: NavButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <NavButtonStyle
      isMagazine={isSelected ? true : false}
      onClick={() => {
        if (text == "Magazine") {
          navigate(`/`);
        } else {
          navigate("/map");
        }
      }}
    >
      {text}
    </NavButtonStyle>
  );
};

interface NavButtonProps {
  text: string;
  isSelected: boolean;
}
export default NavButton;
