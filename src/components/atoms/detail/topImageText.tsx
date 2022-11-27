import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { alleyInfoQuery } from "recoil/states/detail-atoms";
import { FontStyle } from "./fontStyle";
import { StyledKeywordBox, StyledTitleText } from "./styles";

export const TopImageText = () => {
  const param = useParams();
  let alleyId = 0;
  if (param.id) {
    alleyId = parseInt(param.id);
  }

  const alley = useRecoilValue(alleyInfoQuery(alleyId));
  return (
    <StyledTitleText>
      <StyledKeywordBox>{alley.area}</StyledKeywordBox>
      <FontStyle
        font_size={2.5}
        color={"#FFFFFF"}
        padding_top={0.5}
        font_family={"PretendardBold"}
        line_height={3}
      >
        {alley.title}
      </FontStyle>
    </StyledTitleText>
  );
};
