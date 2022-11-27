import styled from "styled-components";

interface ImageProps {
  width: any;
  height?: number;
  url: string;
  margin_left?: number;
  padding_left?: number;
  padding_right?: number;
}

const ContentImage = styled.img<ImageProps>`
  position: relative;
  width: ${(props) => (props.width ? props.width : 100)}%;
  height: ${(props) => props.height}rem;
  background-image: url(${(props) => props.url});
  background-size: cover;

  background-repeat: no-repeat;
  place-items: center;
  margin-left: ${(props) => (props.margin_left ? props.margin_left : null)}rem;
`;

export default ContentImage;
