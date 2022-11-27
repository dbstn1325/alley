import styled from "styled-components";

const NavButtonStyle = styled.button<ColorProps>`
  font-family: "PretendardBold";
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #${(props) => props.color};
`;

interface ColorProps {
  color: string;
}

export default NavButtonStyle;
