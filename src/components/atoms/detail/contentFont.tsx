import { FontStyle } from "./fontStyle";

interface ContentFontProps {
  content?: string;
  padding_top?: number;
  font_family?: string;
}

export const ContentFont = ({
  content,
  padding_top,
  font_family,
}: ContentFontProps) => {
  return (
    <FontStyle
      padding_top={padding_top}
      font_family={font_family ? font_family : "PretendardRegular"}
    >
      {content}
    </FontStyle>
  );
};
