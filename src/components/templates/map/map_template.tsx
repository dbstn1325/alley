import Footer from "components/atoms/home/footer";
import MapImage from "components/atoms/map/map_image";
import MapTitle from "components/atoms/map/map_title";
import ResultButton from "components/atoms/map/result_button";
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
      <MapImage />
      <ResultButton />
      <Footer />
    </Container>
  );
};

export default MapTemplate;
