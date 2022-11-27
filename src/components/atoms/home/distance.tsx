import React from "react";
import { DistanceStyle } from "./style";

const DistanceDiv = ({ distance }: DistanceProps) => {
  return <DistanceStyle>{distance}</DistanceStyle>;
};

interface DistanceProps {
  distance: string;
}

export default DistanceDiv;
