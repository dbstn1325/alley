import styled from "styled-components";

interface ImageProps {
  width: any;
  height?: number;
  url: string;
  margin_left?: number;
  padding_left?: number;
  padding_right?: number;
}

const ContentImageMiddle = styled.img<ImageProps>`
  position: relative;
  width: 100vw;
  height: ${(props) => props.height}rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  place-items: center;
  margin: 0 -20px;
`;

export default ContentImageMiddle;
