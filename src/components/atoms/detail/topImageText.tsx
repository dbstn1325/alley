import { FontStyle } from "./fontStyle";
import { StyledKeywordBox, StyledTitleText } from "./styles";

export const TopImageText = () => {
  return (
    <StyledTitleText>
      <StyledKeywordBox>진해</StyledKeywordBox>
      <FontStyle
        font_size={2.5}
        color={"#FFFFFF"}
        padding_top={0.5}
        font_family={"PretendardBold"}
        line_height={3}
      >
        진해에서 만나는 작은 겨울왕국
      </FontStyle>
    </StyledTitleText>
  );
};
