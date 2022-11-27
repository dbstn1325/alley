import { ContentFont } from "components/atoms/detail/contentFont";
import ContentImage from "components/atoms/detail/ContentImage";
import { ContentTitle } from "components/atoms/detail/contentTitle";
import jinhae from "static/img/jinhae.JPG";

interface ContentProps {
  image_width: number;
  image_height: number;
  font_padding: number;
}

export const Content = ({
  image_width,
  image_height,
  font_padding,
}: ContentProps) => {
  return (
    <>
      <ContentTitle />
      <ContentImage width={image_width} height={image_height} url={jinhae} />
      <ContentFont
        padding_top={font_padding}
        line_height={1.563}
        content=" 가온해 늘품 아름드리 책방 이플 비나리 가온누리 아슬라 감사합니다 사과 곰다시 소록소록 나래 다솜 아슬라 도서관 도담도담 그루잠. 늘품 소록소록 다솜 바람꽃 감사합니다 여우비 아리아 아슬라 늘품 아름드리 이플 여우비 별빛 옅구름 아슬라 바람꽃 곰다시 아련 도서관 달볓 예그리나"
      />
      <ContentFont
        padding_top={1}
        line_height={1.563}
        content="가온해 가온해 가온해 예그리나 책방 로운 가온해 비나리 가온해 바람꽃 컴퓨터 도담도담 미쁘다 아름드리 별하 나래 함초롱하다 산들림 안녕 산들림 바람꽃 소록소록 함초롱하다 사과 달빛 함초롱하다 아름드리 컴퓨터 예그리나 아름드리 예그리나"
      />
    </>
  );
};
