import React from "react";
import { AreaStyle } from "./style";

const Area = ({ area }: AreaProps) => {
  return <AreaStyle>{area}</AreaStyle>;
};

interface AreaProps {
  area: string;
}
export default Area;
