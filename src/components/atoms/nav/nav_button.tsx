import React from "react";
import NavButtonStyle from "./style";

const NavButton = ({ text }: NavButtonProps) => {
  return <NavButtonStyle color="3B3B3B">{text}</NavButtonStyle>;
};

interface NavButtonProps {
  text: string;
}
export default NavButton;
