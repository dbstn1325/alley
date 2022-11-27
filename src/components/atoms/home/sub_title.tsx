import React from "react";
import { SubTitleStyle } from "./style";

const SubTitle = ({ title1, title2 }: SubTitleProps) => {
  return <SubTitleStyle>{title1}</SubTitleStyle>;
};

interface SubTitleProps {
  title1: string;
  title2?: string;
}

export default SubTitle;
