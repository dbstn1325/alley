import ResultNav from "components/atoms/result/nav/nav";
import AlleyItem from "components/organisms/home/alley_item";
import React from "react";
import { ResultContainer, ResultNavContainer } from "./style";

const ResultTemplate = () => {
  return (
    <ResultContainer>
      <ResultNav />
      <ResultNavContainer>
        <AlleyItem
          area="진해"
          title="진해에서 만나는 작은 겨울왕국"
          subTitle="따끈한 어묵도 먹을 수 있는 플레이스"
          distance="321m"
          id="0"
        />
      </ResultNavContainer>
      <AlleyItem
        area="진해"
        title="진해에서 만나는 작은 겨울왕국"
        subTitle="살려줘"
        distance="321m"
        id="1"
      />

      <AlleyItem
        area="진해"
        title="진해에서 만나는 작은 겨울왕국"
        subTitle="살려줘"
        distance="321m"
        id="2"
      />
    </ResultContainer>
  );
};

export default ResultTemplate;
