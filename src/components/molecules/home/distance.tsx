import DistanceDiv from "components/atoms/home/distance";
import React from "react";
import { DistanceContainer } from "./style";

const Distance = ({ distance }: DistanceProps) => {
  return (
    <DistanceContainer>
      <DistanceDiv distance={distance} />
    </DistanceContainer>
  );
};

interface DistanceProps {
  distance: string;
}

export default Distance;
