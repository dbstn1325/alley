import React from "react";
import { MapButtonStyle } from "./style";

const MapButton = ({ text, isSelected }: MapButtonProps) => {
  return <MapButtonStyle isSelected={isSelected}>{text}</MapButtonStyle>;
};

interface MapButtonProps {
  text: string;
  isSelected: boolean;
}

export default MapButton;
