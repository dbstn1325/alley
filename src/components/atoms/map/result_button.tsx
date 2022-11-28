import React from "react";
import { MapResultButtonStyle } from "./style";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { mapTitleState } from "states/state";
const ResultButton = () => {
  const [title, setTitle] = useRecoilState(mapTitleState);
  return (
    <Link to="/result">
      <MapResultButtonStyle>
        {title}의 매거진 &nbsp;
        <AiOutlineArrowRight size={25} />
      </MapResultButtonStyle>
    </Link>
  );
};

export default ResultButton;
