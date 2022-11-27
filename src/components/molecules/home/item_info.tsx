import Area from "components/atoms/home/Area";
import SubTitle from "components/atoms/home/sub_title";
import Title from "components/atoms/home/title";
import React from "react";
import { ItemInfoContainer } from "./style";

const ItemInfo = ({ area, title1, title2, subTitle }: ItemInfoProps) => {
  return (
    <ItemInfoContainer>
      <Area area={area}></Area>
      <Title title1={title1} title2={title2} />
      <SubTitle title1={subTitle}></SubTitle>
    </ItemInfoContainer>
  );
};

interface ItemInfoProps {
  area: string;
  title1: string;
  title2: string;
  subTitle: string;
}

export default ItemInfo;
