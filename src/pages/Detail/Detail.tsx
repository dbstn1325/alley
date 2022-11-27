import { StyledBox } from "components/atoms/detail/styles";
import { TopContent } from "components/molecules/detail/topContent";
import { AlleyContent } from "components/organisms/detail/alley_content";
import { useEffect } from "react";

export const Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TopContent />
      <AlleyContent />
      <StyledBox />
    </div>
  );
};
