import { atom, selector, selectorFamily } from "recoil";
import jinhae from "static/img/jinhae.JPG";
import main1_1 from "static/img/main1_1.jpg";
import main1_2 from "static/img/main1_2.jpg";
import main1_3 from "static/img/main1_3.jpg";
import main2_1 from "static/img/main2_1.jpg";
import main2_2 from "static/img/main2_2.jpg";
import main2_3 from "static/img/main2_3.jpg";
import main3_1 from "static/img/main3_1.jpg";
import main3_2 from "static/img/main3_2.jpg";
import main3_3 from "static/img/main3_3.jpg";

const alleyDummy = [
  {
    area: "진해",
    title: "진해에서 만나는 작은 겨울왕국",
    content:
      "아련 함초롱하다 곰다시 다솜 감사합니다 산들림 예그리나 도서 여우비 나비잠 \
        별빛 소록소록 나비잠 로운 가온누리 비나리 옅구름 바나나 노트북 포도 미쁘다 \
        미쁘다 나비잠 그루잠 다솜 비나리 가온해 소솜 함초롱하다 감또개 아리아 사과 \
        별하 별빛 그루잠 별빛 여우별 비나리 산들림 여우별 여우비 별빛 우리는",
    subTitle: "옛 모습을 그대로 간직한",
    mainTitle: "소사마을&김씨박물관",
    firstMiddleContent:
      "가온해 늘품 아름드리 책방 이플 비나리 가온누리 아슬라 감사합니다 사과 곰다시 소록소록 나래 다솜 아슬라 도서관 도담도담 그루잠. 늘품 소록소록 다솜 바람꽃 감사합니다 여우비 아리아 아슬라 늘품 아름드리 이플 여우비 별빛 옅구름 아슬라 바람꽃 곰다시 아련 도서관 달볓 예그리나",
    secondMiddleContent:
      "가온해 가온해 가온해 예그리나 책방 로운 가온해 비나리 가온해 바람꽃 컴퓨터 도담도담 미쁘다 아름드리 별하 나래 함초롱하다 산들림 안녕 산들림 바람꽃 소록소록 함초롱하다 사과 달빛 함초롱하다 아름드리 컴퓨터 예그리나 아름드리 예그리나",
    url: main1_1,
    url2: main1_2,
    url3: main1_3,
  },
  {
    area: "진해",
    title: "진해의 한적한 마을",
    content:
      "아련 함초롱하다 곰다시 다솜 감사합니다 산들림 예그리나 도서 여우비 나비잠 \
        별빛 소록소록 나비잠 로운 가온누리 비나리 옅구름 바나나 노트북 포도 미쁘다 \
        미쁘다 나비잠 그루잠 다솜 비나리 가온해 소솜 함초롱하다 감또개 아리아 사과 \
        별하 별빛 그루잠 별빛 여우별 비나리 산들림 여우별 여우비 별빛 우리는",
    subTitle: "옛 모습을 그대로 간직한",
    mainTitle: "소사마을&김씨박물관",
    firstMiddleContent:
      "가온해 늘품 아름드리 책방 이플 비나리 가온누리 아슬라 감사합니다 사과 곰다시 소록소록 나래 다솜 아슬라 도서관 도담도담 그루잠. 늘품 소록소록 다솜 바람꽃 감사합니다 여우비 아리아 아슬라 늘품 아름드리 이플 여우비 별빛 옅구름 아슬라 바람꽃 곰다시 아련 도서관 달볓 예그리나",
    secondMiddleContent:
      "가온해 가온해 가온해 예그리나 책방 로운 가온해 비나리 가온해 바람꽃 컴퓨터 도담도담 미쁘다 아름드리 별하 나래 함초롱하다 산들림 안녕 산들림 바람꽃 소록소록 함초롱하다 사과 달빛 함초롱하다 아름드리 컴퓨터 예그리나 아름드리 예그리나",
    url: main2_1,
    url2: main2_2,
    url3: main2_3,
  },
  {
    area: "진해",
    title: "진해의 한적한 마을",
    content:
      "아련 함초롱하다 곰다시 다솜 감사합니다 산들림 예그리나 도서 여우비 나비잠 \
        별빛 소록소록 나비잠 로운 가온누리 비나리 옅구름 바나나 노트북 포도 미쁘다 \
        미쁘다 나비잠 그루잠 다솜 비나리 가온해 소솜 함초롱하다 감또개 아리아 사과 \
        별하 별빛 그루잠 별빛 여우별 비나리 산들림 여우별 여우비 별빛 우리는",
    subTitle: "옛 모습을 그대로 간직한",
    mainTitle: "소사마을&김씨박물관",
    firstMiddleContent:
      "가온해 늘품 아름드리 책방 이플 비나리 가온누리 아슬라 감사합니다 사과 곰다시 소록소록 나래 다솜 아슬라 도서관 도담도담 그루잠. 늘품 소록소록 다솜 바람꽃 감사합니다 여우비 아리아 아슬라 늘품 아름드리 이플 여우비 별빛 옅구름 아슬라 바람꽃 곰다시 아련 도서관 달볓 예그리나",
    secondMiddleContent:
      "가온해 가온해 가온해 예그리나 책방 로운 가온해 비나리 가온해 바람꽃 컴퓨터 도담도담 미쁘다 아름드리 별하 나래 함초롱하다 산들림 안녕 산들림 바람꽃 소록소록 함초롱하다 사과 달빛 함초롱하다 아름드리 컴퓨터 예그리나 아름드리 예그리나",
    url: main3_1,
    url2: main3_2,
    url3: main3_3,
  },
];

const currentAlleyIdState = atom({
  key: "CurrentAlleyId",
  default: null,
});

export const alleyInfoQuery = selectorFamily({
  key: "AlleyInfoQuery",
  get: (contentId: any) => () => {
    return alleyDummy[contentId];
  },
});

export const currentAlleyInfoQuery = selector({
  key: "CurrentAlleyInfoQuery",
  get: ({ get }) => get(alleyInfoQuery(get(currentAlleyIdState))),
});
