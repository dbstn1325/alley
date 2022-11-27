import React from "react";
import { DistanceStyle } from "./style";

const Distance = ({ distance }: DistanceProps) => {
  return <DistanceStyle>{distance}</DistanceStyle>;
};

interface DistanceProps {
  distance: string;
}

export default Distance;
