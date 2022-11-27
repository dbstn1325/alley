import { TopImageText } from "components/atoms/detail/topImageText";
import { useRecoilValue } from "recoil";
import { NavBar } from "./navBar";
import jinhae from "static/img/jinhae.JPG";

import { ContentFont } from "components/atoms/detail/contentFont";
import TopImage from "components/atoms/detail/topImage";
import { useParams } from "react-router-dom";
import { alleyInfoQuery } from "recoil/states/detail-atoms";
import { StyledBlackFilter } from "components/atoms/detail/styles";

export const TopContent = () => {
  const param = useParams();
  let alleyId = 0;
  if (param.id) {
    alleyId = parseInt(param.id);
  }
  const alley = useRecoilValue(alleyInfoQuery(alleyId));
  return (
    <div>
      <TopImage height={31.375} url={alley.url} />
      <StyledBlackFilter />
      <NavBar />
      <TopImageText />
    </div>
  );
};
