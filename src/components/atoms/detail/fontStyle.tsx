import styled from "styled-components";

interface FontStyleProps {
  isTitle?: boolean;
  font_size?: number;
  font_family?: string;
  padding_top?: number;
  color?: string;
  line_height?: number;
}

export const FontStyle = styled.div<FontStyleProps>`
  font-size: ${(props) => (props ? props.font_size : 10)}rem;
  font-family: ${(props) => (props ? props.font_family : "PretendardRegular")};
  padding-top: ${(props) => props.padding_top}rem;
  color: ${(props) => (props ? props.color : "#3B3B3B")};
  line-height: ${(props) => (props ? props.line_height : null)}rem;
`;
