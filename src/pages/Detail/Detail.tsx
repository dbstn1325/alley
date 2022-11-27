import { BackArrow } from "components/atoms/detail/backArrow";
import { ContentFont } from "components/atoms/detail/contentFont";
import TopImage from "components/atoms/detail/topImage";
import { TopImageText } from "components/atoms/detail/topImageText";
import { NavBar } from "components/molecules/detail/navBar";
import { TopContent } from "components/molecules/detail/topContent";

export const Detail = () => {
  return (
    <div>
      <TopContent />
      <ContentFont />
    </div>
  );
};
