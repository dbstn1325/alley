import MapButton from "components/atoms/map/map_button";
import MapTitle from "components/atoms/map/map_title";
import NavBar from "components/molecules/nav/navbar";
import MapButtons from "components/organisms/map/map";
import MapTemplate from "components/templates/map/map_template";
import React, { useEffect } from "react";

const MapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MapTemplate />
    </>
  );
};

export default MapPage;
