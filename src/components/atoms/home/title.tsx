import React from "react";
import { TitleContainer, TitleStyle } from "./style";

const Title = ({ title1, title2, title3 }: TitleProps) => {
  return (
    <TitleContainer>
      <TitleStyle>{title1}</TitleStyle>
      <TitleStyle>{title2}</TitleStyle>
      <TitleStyle>{title3}</TitleStyle>
    </TitleContainer>
  );
};

interface TitleProps {
  title1: string;
  title2: string;
  title3?: string;
}

export default Title;
