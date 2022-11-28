import React from "react";
import { useRecoilState } from "recoil";
import { imageUrlState } from "states/state";
import { MapImageStyle } from "./style";

const MapImage = () => {
  const [imageUrl, setImageUrl] = useRecoilState(imageUrlState);
  return <MapImageStyle mapImageUrl={imageUrl}></MapImageStyle>;
};

export default MapImage;
