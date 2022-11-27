import Distance from "components/molecules/home/distance";
import ItemInfo from "components/molecules/home/item_info";
import React from "react";
import { BannerStyle } from "./style";

const AlleyItem = ({
  area,
  title1,
  title2,
  subTitle,
  distance,
}: AlleyItemProps) => {
  return (
    <BannerStyle>
      <Distance distance={distance} />
      <ItemInfo
        area={area}
        title1={title1}
        title2={title2}
        subTitle={subTitle}
      />
    </BannerStyle>
  );
};

interface AlleyItemProps {
  area: string;
  title1: string;
  title2: string;
  subTitle: string;
  distance: string;
}

export default AlleyItem;
