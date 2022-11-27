import Distance from "components/molecules/home/distance";
import ItemInfo from "components/molecules/home/item_info";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BannerStyle } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

const AlleyItem = ({
  area,
  title,
  subTitle,
  distance,
  id,
  imageUrl,
}: AlleyItemProps) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <Link to={"/" + id}>
      <BannerStyle data-aos="fade-down" url={imageUrl}>
        <Distance distance={distance} />
        <ItemInfo area={area} title={title} subTitle={subTitle} />
      </BannerStyle>
    </Link>
  );
};

interface AlleyItemProps {
  area: string;
  title: string;
  subTitle: string;
  distance: string;
  id: string;
  imageUrl?: any;
}

export default AlleyItem;
