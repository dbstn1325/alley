import styled from "styled-components";

export const TitleStyle = styled.h1`
  font-family: "PretendardBold";
  font-size: 1.3rem;
  color: #3b3b3b;
  margin-top: 3rem;
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
  margin-bottom: 8px;
  cursor: pointer;
`;

export const MapImageStyle = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 10px;
  background-color: #e6e6e6;
`;

interface MapButtonProps {
  isSelected: boolean;
}
