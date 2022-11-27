import { ContentFont } from "components/atoms/detail/contentFont";
import ContentImage from "components/atoms/detail/ContentImage";
import ContentImageMiddle from "components/atoms/detail/ContentImageMiddle";
import { ContentTitle } from "components/atoms/detail/contentTitle";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { alleyInfoQuery } from "recoil/states/detail-atoms";
import jinhae from "static/img/jinhae.JPG";

interface ContentProps {
  image_width: number;
  image_height: number;
  font_padding: number;
  isMiddle?: boolean;
  content?: string;
  subTitle?: string;
  mainTitle?: string;
}

export const Content = ({
  image_width,
  image_height,
  font_padding,
  isMiddle,
  content,
  subTitle,
  mainTitle,
}: ContentProps) => {
  const param = useParams();
  let alleyId = 0;
  if (param.id) {
    alleyId = parseInt(param.id);
  }

  const alley = useRecoilValue(alleyInfoQuery(alleyId));
  return (
    <>
      <ContentTitle subTitle={subTitle} mainTitle={mainTitle} />
      {isMiddle ? (
        <ContentImageMiddle
          width={image_width}
          height={image_height}
          url={alley.url2}
        />
      ) : (
        <ContentImage
          width={image_width}
          height={image_height}
          url={alley.url3}
        />
      )}

      <ContentFont
        padding_top={font_padding}
        line_height={1.563}
        content={content}
      />
    </>
  );
};
