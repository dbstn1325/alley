import React from "react";
import { IconStyle, ResultNavStyle, WhiteSpace } from "./style";
import { BsChevronLeft } from "react-icons/bs";
import MapButton from "components/atoms/map/map_button";
import { useRecoilState } from "recoil";
import { mapTitleState } from "states/state";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const ResultNav = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useRecoilState(mapTitleState);
  return (
    <ResultNavStyle>
      <IconStyle>
        <BsChevronLeft size={30} onClick={() => navigate(-1)} />
      </IconStyle>
      <div>
        <MapButton text={title} />
        <TextContainer>의 Magazine</TextContainer>
      </div>
    </ResultNavStyle>
  );
};

const TextContainer = styled.span`
  margin-top: 3px;
`;

export default ResultNav;
