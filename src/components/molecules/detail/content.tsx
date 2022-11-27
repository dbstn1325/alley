import { ContentFont } from "components/atoms/detail/contentFont";
import ContentImage from "components/atoms/detail/ContentImage";
import { ContentTitle } from "components/atoms/detail/contentTitle";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { alleyInfoQuery } from "recoil/states/detail-atoms";
import jinhae from "static/img/jinhae.JPG";

interface ContentProps {
  image_width: number;
  image_height: number;
  font_padding: number;
}

export const Content = ({
  image_width,
  image_height,
  font_padding,
}: ContentProps) => {
  const param = useParams();
  let alleyId = 0;
  if (param.id) {
    alleyId = parseInt(param.id);
  }

  const alley = useRecoilValue(alleyInfoQuery(alleyId));
  return (
    <>
      <ContentTitle />
      <ContentImage width={image_width} height={image_height} url={alley.url} />
      <ContentFont
        padding_top={font_padding}
        line_height={1.563}
        content={alley.firstMiddleContent}
      />
      <ContentFont
        padding_top={1}
        line_height={1.563}
        content={alley.secondMiddleContent}
      />
    </>
  );
};
