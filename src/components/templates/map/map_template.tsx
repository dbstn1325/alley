import MapTitle from "components/atoms/map/map_title";
import NavBar from "components/molecules/nav/navbar";
import MapButtons from "components/organisms/map/map";
import React from "react";
import { Container } from "./style";

const MapTemplate = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <MapTitle />
      <MapButtons />
    </Container>
  );
};

export default MapTemplate;
