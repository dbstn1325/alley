import { StyledBox } from "components/atoms/detail/styles";
import { TopContent } from "components/molecules/detail/topContent";
import { AlleyContent } from "components/organisms/detail/alley_content";

export const Detail = () => {
  return (
    <div>
      <TopContent />
      <AlleyContent />
      <StyledBox />
    </div>
  );
};
