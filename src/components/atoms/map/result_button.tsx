import React from "react";
import { MapResultButtonStyle } from "./style";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const ResultButton = () => {
  return (
    <Link to="/result">
      <MapResultButtonStyle>
        3개 이상의 매거진 &nbsp;
        <AiOutlineArrowRight size={25} />
      </MapResultButtonStyle>
    </Link>
  );
};

export default ResultButton;
