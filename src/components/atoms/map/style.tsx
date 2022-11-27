import styled from "styled-components";

export const TitleStyle = styled.h1`
  font-family: "PretendardBold";
  font-size: 1.3rem;
  color: #3b3b3b;
  margin-bottom: 18px;
`;

export const MapButtonStyle = styled.button<MapButtonProps>`
  border: 1px solid #3b3b3b;
  background-color: ${(props) => (props.isSelected ? "#3B3B3B" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "#3B3B3B")};
  border-radius: 1.4rem;
  padding: 0.488rem 1.3rem 0.488rem 1.3rem;
  font-family: "PretendardRegular";
  font-size: 1rem;
  margin-right: 6px;
  margin-bottom: 5px;
`;

interface MapButtonProps {
  isSelected: boolean;
}
