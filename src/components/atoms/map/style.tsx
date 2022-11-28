import styled from "styled-components";
import MapImage from "static/img/map.png";
import { useRecoilState } from "recoil";
import { imageUrlState } from "states/state";

export const TitleStyle = styled.h1`
  font-family: "PretendardBold";
  font-size: 1.3rem;
  color: #3b3b3b;
  margin-top: 5rem;
  margin-bottom: 18px;
`;

export const MapButtonStyle = styled.button<MapButtonProps>`
  height: 2.4rem;
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

interface MapImageStyleProps {
  mapImageUrl: string;
}

export const MapImageStyle = styled.div<MapImageStyleProps>`
  width: 100%;
  height: 30rem;
  border-radius: 10px;
  background-image: url(${(props) => props.mapImageUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const MapResultButtonStyle = styled.button`
  position: fixed;

  left: 50%;

  transform: translateX(-50%);

  bottom: 2rem;
  width: 16rem;
  height: 4rem;
  background-color: #3b3b3b;
  color: white;
  font-family: "PretendardRegular";
  font-size: 1.1rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MapNoResultButtonStyle = styled.button`
  position: fixed;

  left: 50%;

  transform: translateX(-50%);

  bottom: 2rem;
  width: 16rem;
  height: 4rem;
  background-color: #d3d3d3;
  border: none;
  color: #808080;
  font-family: "PretendardRegular";
  font-size: 1.1rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface MapButtonProps {
  isSelected: boolean;
}
