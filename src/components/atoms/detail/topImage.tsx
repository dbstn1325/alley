import styled from "styled-components";

interface ImageProps {
  width?: number;
  height?: number;
  url: string;
}

const TopImage = styled.img<ImageProps>`
  position: absolute;
  width: 100%;
  height: ${(props) => props.height}rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  place-items: center;
`;

export default TopImage;
