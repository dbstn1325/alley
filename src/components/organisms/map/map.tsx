import MapButton from "components/atoms/map/map_button";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { mapTitleState } from "states/state";
import { MapContainer } from "./style";

const MapButtons = () => {
  return (
    <MapContainer>
      <MapButton text="진해구" />
      <MapButton text="마산합포구" />
      <MapButton text="부산 만덕동" />
      <MapButton text="하동군 고정면" />
      <MapButton text="거제시 하청면" />
      <MapButton text="산청군 생비량면" />
      <MapButton text="창원시" />
    </MapContainer>
  );
};

export default MapButtons;
