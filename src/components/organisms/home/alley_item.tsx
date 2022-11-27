import Distance from "components/molecules/home/distance";
import ItemInfo from "components/molecules/home/item_info";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import React, { useEffect, useRef } from "react";
import { BannerStyle } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
const AlleyItem = ({ area, title, subTitle, distance }: AlleyItemProps) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <ReactScrollWheelHandler
      upHandler={(e) => console.log("scroll up")}
      downHandler={(e) => {
        window.scrollTo(0, 120);
        console.log("scroll down");
      }}
    >
      <BannerStyle data-aos="fade-down">
        <Distance distance={distance} />
        <ItemInfo area={area} title={title} subTitle={subTitle} />
      </BannerStyle>
    </ReactScrollWheelHandler>
  );
};

interface AlleyItemProps {
  area: string;
  title: string;
  subTitle: string;
  distance: string;
}

export default AlleyItem;
