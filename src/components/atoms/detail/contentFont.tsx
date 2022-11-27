import { FontStyle } from "./fontStyle";

interface ContentFontProps {
  content?: string;
  padding_top?: number;
  font_family?: string;
  line_height?: number;
}

export const ContentFont = ({
  content,
  padding_top,
  font_family,
  line_height,
}: ContentFontProps) => {
  return (
    <FontStyle
      padding_top={padding_top}
      line_height={line_height ? line_height : 1}
      font_family={font_family ? font_family : "PretendardRegular"}
    >
      {content}
    </FontStyle>
  );
};
