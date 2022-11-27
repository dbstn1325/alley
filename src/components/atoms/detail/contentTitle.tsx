import { FontStyle } from "./fontStyle";
import { StyledContentTitle } from "./styles";

export const ContentTitle = () => {
  return (
    <StyledContentTitle>
      <FontStyle
        font_size={1.313}
        font_family="PretendardMedium"
        isTitle={true}
        line_height={2.2}
      >
        옛 모습을 그대로 간직한
      </FontStyle>
      <FontStyle font_size={2} font_family="PretendardBold" isTitle={true}>
        소사마을&김씨박물관
      </FontStyle>
    </StyledContentTitle>
  );
};
