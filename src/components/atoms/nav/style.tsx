import styled from "styled-components";

const NavButtonStyle = styled.span<ColorProps>`
  font-family: "PretendardBold";
  font-size: 1.5rem;
  margin-right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) =>
    props.isMagazine ? "rgba(59, 59, 59, 1)" : "rgba(59, 59, 59, 0.4)"};
`;

interface ColorProps {
  isMagazine: boolean;
}

export default NavButtonStyle;
