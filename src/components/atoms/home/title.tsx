import React from "react";
import { TitleContainer, TitleStyle } from "./style";

const Title = ({ title }: TitleProps) => {
  return (
    <TitleContainer>
      <TitleStyle>{title}</TitleStyle>
    </TitleContainer>
  );
};

interface TitleProps {
  title: string;
}

export default Title;
