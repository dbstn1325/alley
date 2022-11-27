import { atom, selector, selectorFamily } from "recoil";
import jinhae from "static/img/jinhae.JPG";
import main1_1 from "static/img/main1_1.jpg";
import main1_2 from "static/img/main1_2.jpg";
import main1_3 from "static/img/main1_3.jpg";
import main2_1 from "static/img/main2_1.jpg";
import main2_3 from "static/img/main2_3.jpg";
import main2_4 from "static/img/main2_4.jpg";
import main3_1 from "static/img/main3_1.jpg";
import main3_2 from "static/img/main3_2.jpg";
import main3_4 from "static/img/main3_4.jpg";

const alleyDummy = [
  {
    area: "진해",
    title: "시와 시간이 만나는 공간",
    content:
      "나는 조그마한 샘물을 들여다보며 조그마한 지구의 섬 위에 앉았다.” - 김달진 “샘물",
    subTitle: "김달진의 어릴적을 엿보며",
    mainTitle: "김달진 생가",
    subTitle2: "시와 시간이 만나는 공간",
    mainTitle2: "김달진 문학관",
    firstMiddleContent:
      "소사로59번길에 들어서면 김달진 시인이 웃는 얼굴로 맞이한다. 그 뒤로는 그가 살았던 생가가 그 앞에는 그를 기리는 문학관이 있다. 생가에서는 1907년생인 그가 살았던 시간과 문학관에서는 생전에 남긴 시들과 그가 생전에 쓰던 유품들이 존재한다.",
    secondMiddleContent:
      "그의 생가에서는 그가 살았던 모습을 구경할 수 있는데 이는 마치 과거로 돌아간 것만 같은 느낌을 준다. 또한 김달진 생가의 마당에서는 최근에 김달진문학상을 수상한 사람들과 그들의 시를 볼 수 있었다. 그가 남기고간 자리에서 새로운 문학가들이 다시금 태어나고 있는 것이다. 그렇다 소사로59번길은 시와 시간이 만나는 공간이다.",
    url: main1_1,
    url2: main1_2,
    url3: main1_3,
  },
  {
    area: "진해",
    title: "추억이 묻은 그 곳, 김씨공작소",
    content:
      "앱으로 부른 택시 기사님이 말하길 “스시마을인가? 점심드시러 가시나보네” 라고 말씀하신 장소는 사실 식당과는 거리가 먼 진해 소사마을이었다. 어쩌면 로컬하면 대표적으로 생각나는 택시기사님조차 잘 모르는 장소이지만 에디터만 알기엔 아쉬운 공간이기에 소개해보자 한다. 소사마을은 어릴적 옛 친구를 떠올리게 만들어주고, 괜히 추억을 회상하게 만들어주는 소중한 공간이다. 추억이 묻어나오는 이 곳에는 그 시절 문방구를 떠올리게 해주는 ‘김씨공작소’가 있다.",
    subTitle: "500원의 행복",
    mainTitle: "추억의 과자",
    subTitle2: "한 때의 로망",
    mainTitle2: "미니 피규어",
    firstMiddleContent:
      "꾀돌이, 밭두렁, 이 과자를 아는가? 한 때는 불량식품이라고도 불렸던 이 과자들이 이젠 추억을 상징하게 되었다. 그때의 보다는 가격이 조금 올랐지만 그래도 이곳에서 저렴한 가격에 추억의 과자를 맛 볼 수 있다.",
    secondMiddleContent:
      "소싯적에 피규어를 좋아해본 경험이 있었다면 남녀노소 불문하고 모두가 이곳에서 흥미를 가질것이다. 이곳에 들어서면 아기자기한 피규어들이 줄지어 있고 자동차 덕후들의 심금을 울릴 법한 스포츠카 피규어부터 중장비 트럭 모양의 자동차 모형까지 다양하게 구비되어있다.",
    url: main2_1,
    url2: main2_3,
    url3: main2_4,
  },
  {
    area: "진해",
    title: "새벽 녘의 희망 곡 그 때의 노래",
    content:
      "타자기, 풍금 등은 4차 산업혁명 시대라고 불리는 요즘에는 흔히 볼 수 없는 물건들이다. 하지만 이곳에서는 다르다. 마치 타임머신을 타고 온 것만 같다.",
    subTitle: "옛날 옛적에",
    mainTitle: "라디오를 들으며",
    subTitle2: "그때의 감성",
    mainTitle2: "추억",
    firstMiddleContent:
      "풍금, 타자기부터 비교적 근대에 쓰이던 티비, 라디오, 비디오 플레이어 등을 볼 수 있다. 어떤 물건은 도저히 무엇에 쓰이던 물건인지를 알 수 없는 물건들도 더러 있었다.",
    secondMiddleContent:
      "참고로 옆에 작은 공간에는 전축, 카메라 등이 전시되어있다. 이 또한 에디터가 필름 카메라를 쓰던것, 좋아하던 라디오 방송을 다시 듣기 위해서 녹음 한 것, 좋아하는 노래를 녹음하고 나면 녹음한 테이프를 늘어질때까지 듣고 또 듣고 반복했던 추억이 떠오른다. 그 때처럼 신청해본다. 오후의 희망곡. 카니발의 [그땐 그랬지]",
    url: main3_1,
    url2: main3_2,
    url3: main3_4,
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
