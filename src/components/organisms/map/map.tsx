import MapButton from "components/atoms/map/map_button";
import React from "react";
import { MapContainer } from "./style";

const MapButtons = () => {
  return (
    <MapContainer>
      <MapButton text="진해구" isSelected={true} />
      <MapButton text="부산광역시 만덕동" isSelected={false} />
      <MapButton text="하동군 고정면" isSelected={false} />
      <MapButton text="거제시 하청면" isSelected={false} />
    </MapContainer>
  );
};

export default MapButtons;
