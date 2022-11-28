import Address from "components/atoms/home/address";

import { FooterContainer } from "components/atoms/home/style";
import Distance from "components/molecules/home/distance";
import NavBar from "components/molecules/nav/navbar";
import AlleyItem from "components/organisms/home/alley_item";

import { Container } from "./style";
import styled from "styled-components";

import { useCallback, useEffect, useRef, useState } from "react";
import MapButton from "components/atoms/home/map_button";

import MyPageModal from "components/atoms/home/mypage_modal";
import ShopModal from "components/atoms/home/shop_modal";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { alleyInfoQuery } from "recoil/states/detail-atoms";
import main1_1 from "static/img/main1_1.jpg";
import main2_1 from "static/img/main2_1.jpg";
import main3_1 from "static/img/main3_1.jpg";
const HomeTemplate = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  const param = useParams();
  let alleyId = 0;
  if (param.id) {
    alleyId = parseInt(param.id);
  }

  const alley = useRecoilValue(alleyInfoQuery(alleyId));
  return (
    <Container>
      <NavBar></NavBar>
      <Address></Address>

      <AlleyItem
        area="진해"
        title="시와 시간이 만나는 공간"
        subTitle="나는 조그마한 샘물을 들여다보며 조그마한 지..."
        distance="6.6 km"
        id="0"
        imageUrl={main1_1}
      />

      <AlleyItem
        area="진해"
        title="추억이 묻은 그곳, 김씨공작소"
        subTitle="앱으로 부른 택시 기사님이 말하길 스시마을 인..."
        distance="6.7 km"
        id="1"
        imageUrl={main2_1}
      />

      <AlleyItem
        area="진해"
        title="새벽 녘의 희망 곡 그 때의 노래"
        subTitle="타자기, 풍금 등은 4차 산업혁명 시대라고 불리..."
        distance="49.8 km"
        id="2"
        imageUrl={main3_1}
      />


      <MapButton />

      <FooterContainer />
    </Container>
  );
};

export default HomeTemplate;
