import Address from "components/atoms/home/address";
import MapButton from "components/atoms/home/map_button";
import { FooterContainer } from "components/atoms/home/style";
import Distance from "components/molecules/home/distance";
import NavBar from "components/molecules/nav/navbar";
import AlleyItem from "components/organisms/home/alley_item";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import { Container } from "./style";

const HomeTemplate = () => {
  return (
    <ScrollContainer>
      <Container>
        <NavBar></NavBar>
        <Address></Address>
        <ScrollPage>
          <Animator animation={batch(FadeIn(), Move(0, -120))}>
            <AlleyItem
              area="진해"
              title1="진해에서 만나는"
              title2="작은 겨울왕국"
              subTitle="따끈한 어묵도 먹을 수 있는 플레이스"
              distance="321m"
            />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(FadeIn())}>
            <AlleyItem
              area="진해"
              title1="ㅁㅇㄹ"
              title2="작은 겨ㅁㅇㄹㅇㅁㄹㅁㅇ울왕국"
              subTitle="살려줘"
              distance="321m"
            />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <AlleyItem
            area="진해"
            title1="ㅁㅇㄹ"
            title2="작은 겨ㅁㅇㄹㅇㅁㄹㅁㅇ울왕국"
            subTitle="살려줘"
            distance="321m"
          />
        </ScrollPage>
        <MapButton />
        <FooterContainer />
      </Container>
    </ScrollContainer>
  );
};

export default HomeTemplate;
