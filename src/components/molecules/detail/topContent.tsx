import { TopImageText } from "components/atoms/detail/topImageText";
import { useRecoilValue } from "recoil";
import { NavBar } from "./navBar";
import jinhae from "static/img/jinhae.JPG";

import { ContentFont } from "components/atoms/detail/contentFont";
import TopImage from "components/atoms/detail/topImage";

export const TopContent = () => {
  return (
    <div>
      <TopImage height={31.375} url={jinhae} />
      <NavBar />
      <TopImageText />
    </div>
  );
};
