import React from "react";
import { IconStyle, ResultNavStyle, WhiteSpace } from "./style";
import { BsChevronLeft } from "react-icons/bs";
import MapButton from "components/atoms/map/map_button";
import { useRecoilState } from "recoil";
import { mapTitleState } from "states/state";
import { useNavigate } from "react-router-dom";
const ResultNav = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useRecoilState(mapTitleState);
  return (
    <ResultNavStyle>
      <IconStyle>
        <BsChevronLeft size={30} onClick={() => navigate(-1)} />
      </IconStyle>
      <div>
        <MapButton text={title} />의 Magazine
      </div>
    </ResultNavStyle>
  );
};

export default ResultNav;
