import Area from "components/atoms/home/Area";
import SubTitle from "components/atoms/home/sub_title";
import Title from "components/atoms/home/title";
import React from "react";
import { ItemInfoContainer } from "./style";

const ItemInfo = ({ area, title, subTitle }: ItemInfoProps) => {
  return (
    <ItemInfoContainer>
      <Area area={area}></Area>
      <Title title={title} />
      <SubTitle title1={subTitle}></SubTitle>
    </ItemInfoContainer>
  );
};

interface ItemInfoProps {
  area: string;
  title: string;
  subTitle: string;
}

export default ItemInfo;
