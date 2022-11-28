import ResultNav from "components/atoms/result/nav/nav";
import AlleyItem from "components/organisms/home/alley_item";
import React from "react";
import { ResultContainer, ResultNavContainer } from "./style";
import main1_1 from "static/img/main1_1.jpg";
import main2_1 from "static/img/main2_1.jpg";
import main3_1 from "static/img/main3_1.jpg";

const ResultTemplate = () => {
  return (
    <ResultContainer>
      <ResultNav />
      <ResultNavContainer>
        <AlleyItem
          area="진해"
          title="시와 시간이 만나는 공간"
          subTitle="나는 조그마한 샘물을 들여다보며 조그마한 지..."
          distance="12.1 km"
          id="0"
          imageUrl={main1_1}
        />
      </ResultNavContainer>

      <AlleyItem
        area="진해"
        title="추억이 묻은 그곳, 김씨공작소"
        subTitle="앱으로 부른 택시 기사님이 말하길 스시마을 인..."
        distance="21.5 km"
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
    </ResultContainer>
  );
};

export default ResultTemplate;
