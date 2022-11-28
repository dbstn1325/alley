import React from "react";
import { MapNoResultButtonStyle, MapResultButtonStyle } from "./style";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { mapTitleState } from "states/state";
const ResultButton = () => {
  const [title, setTitle] = useRecoilState(mapTitleState);
  console.log(title == "진해구");

  return (
    <div>
      {title === "진해구" ? (
        <Link to="/result">
          <MapResultButtonStyle>
            3개 이상의 매거진 &nbsp;
            <AiOutlineArrowRight size={25} />
          </MapResultButtonStyle>
        </Link>
      ) : (
        <MapNoResultButtonStyle>Comming Soon..</MapNoResultButtonStyle>
      )}
    </div>
  );
};

export default ResultButton;
