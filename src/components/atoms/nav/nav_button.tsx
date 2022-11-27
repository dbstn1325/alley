import NavButtonStyle from "./style";

const NavButton = ({ text, isSelected }: NavButtonProps) => {
  return (
    <NavButtonStyle isMagazine={isSelected ? true : false}>
      {text}
    </NavButtonStyle>
  );
};

interface NavButtonProps {
  text: string;
  isSelected: boolean;
}
export default NavButton;
