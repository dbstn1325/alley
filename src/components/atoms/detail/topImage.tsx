import styled from "styled-components";
import jinhae from "static/img/jinhae.JPG";

const TopImage = styled.img`
  position: absolute;
  width: 100%;
  height: 40vh;
  background-image: url(${jinhae});
  background-size: cover;
  background-repeat: no-repeat;
  place-items: center;
`;

export default TopImage;
