import { ContentFont } from "components/atoms/detail/contentFont";
import ContentImage from "components/atoms/detail/ContentImage";
import { StyledAlleyContent, StyledBox } from "components/atoms/detail/styles";
import { Content } from "components/molecules/detail/content";
import jinhae from "static/img/jinhae.JPG";
export const AlleyContent = () => {
  return (
    <StyledAlleyContent>
      <ContentFont
        padding_top={25}
        content="아련 함초롱하다 곰다시 다솜 감사합니다 산들림 예그리나 도서 여우비 나비잠
      별빛 소록소록 나비잠 로운 가온누리 비나리 옅구름 바나나 노트북 포도 미쁘다
      미쁘다 나비잠 그루잠 다솜 비나리 가온해 소솜 함초롱하다 감또개 아리아 사과
      별하 별빛 그루잠 별빛 여우별 비나리 산들림 여우별 여우비 별빛 우리는"
      />
      <Content image_width={100} image_height={32.625} font_padding={1.5} />
      <Content image_width={100} image_height={12} font_padding={1.5} />
      <StyledBox></StyledBox>
      <ContentImage
        width={60}
        height={24.25}
        url={jinhae}
        margin_left={8.688}
      />
    </StyledAlleyContent>
  );
};
