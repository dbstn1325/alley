import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { alleyInfoQuery } from "recoil/states/detail-atoms";
import { FontStyle } from "./fontStyle";
import { StyledContentTitle } from "./styles";

export const ContentTitle = () => {
  const param = useParams();
  let alleyId = 0;
  if (param.id) {
    alleyId = parseInt(param.id);
  }

  const alley = useRecoilValue(alleyInfoQuery(alleyId));
  return (
    <StyledContentTitle>
      <FontStyle
        font_size={1.313}
        font_family="PretendardMedium"
        isTitle={true}
        line_height={2.2}
      >
        {alley.subTitle}
      </FontStyle>
      <FontStyle font_size={2} font_family="PretendardBold" isTitle={true}>
        {alley.mainTitle}
      </FontStyle>
    </StyledContentTitle>
  );
};
