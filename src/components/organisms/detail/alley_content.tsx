import { ContentFont } from "components/atoms/detail/contentFont";
import ContentImage from "components/atoms/detail/ContentImage";
import { StyledAlleyContent, StyledBox } from "components/atoms/detail/styles";
import { Content } from "components/molecules/detail/content";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  alleyInfoQuery,
  currentAlleyInfoQuery,
} from "recoil/states/detail-atoms";

export const AlleyContent = () => {
  const param = useParams();
  let alleyId = 0;
  if (param.id) {
    alleyId = parseInt(param.id);
  }

  const alley = useRecoilValue(alleyInfoQuery(alleyId));
  return (
    <StyledAlleyContent>
      <ContentFont
        padding_top={25}
        line_height={1.563}
        content={alley.content}
      />
      <Content
        image_width={100}
        image_height={32.625}
        font_padding={1.5}
        isMiddle={true}
        content={alley.firstMiddleContent}
        subTitle={alley.subTitle}
        mainTitle={alley.mainTitle}
      />
      <Content
        image_width={100}
        image_height={14}
        font_padding={1.5}
        content={alley.secondMiddleContent}
        subTitle={alley.subTitle2}
        mainTitle={alley.mainTitle2}
      />
      <StyledBox></StyledBox>
    </StyledAlleyContent>
  );
};
