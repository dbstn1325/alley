import React from "react";
import { useRecoilState } from "recoil";
import { imageUrlState, mapTitleState } from "states/state";
import { MapButtonStyle } from "./style";
import 거제시하청면 from "static/img/거제시하청면.png";
import 마산합포구 from "static/img/마산합포구.png";
import 부산만덕동 from "static/img/부산만덕동.png";
import 산청군생비량면 from "static/img/산청군생비량면.png";
import 진해구 from "static/img/진해구.png";
import 창원시 from "static/img/창원시.png";
import 하동군고정면 from "static/img/하동군고정면.png";

const mapimageUrl: any = {
  거제시하청면: 거제시하청면,
  마산합포구: 마산합포구,
  부산만덕동: 부산만덕동,
  산청군생비량면: 산청군생비량면,
  진해구: 진해구,
  창원시: 창원시,
  하동군고정면: 하동군고정면,
};
const MapButton = ({ text }: MapButtonProps) => {
  const [title, setTitle] = useRecoilState(mapTitleState);
  const [imageUrl, setImageUrl] = useRecoilState(imageUrlState);
  return (
    <MapButtonStyle
      isSelected={title == text ? true : false}
      onClick={() => {
        setTitle(text);
        text = text.replace(/\s/gi, "");
        setImageUrl(mapimageUrl[text]);
      }}
    >
      {text}
    </MapButtonStyle>
  );
};

interface MapButtonProps {
  text: string;
}

export default MapButton;
