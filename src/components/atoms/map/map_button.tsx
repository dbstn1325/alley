import React from "react";
import { useRecoilState } from "recoil";
import { mapTitleState } from "states/state";
import { MapButtonStyle } from "./style";

const MapButton = ({ text }: MapButtonProps) => {
  const [title, setTitle] = useRecoilState(mapTitleState);
  return (
    <MapButtonStyle
      isSelected={title == text ? true : false}
      onClick={() => {
        setTitle(text);
      }}
    >
      {text}
    </MapButtonStyle>
  );
};

interface MapButtonProps {
  text: string;
}

export default MapButton;
