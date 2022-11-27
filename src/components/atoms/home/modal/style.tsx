import styled from "styled-components";
import map from "static/img/map.png";

export const ModalTitleStyle = styled.h2`
  font-family: "PretendardBold";
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const ModalImageStyle = styled.img.attrs({ src: `${map}` })`
  width: 100%;
  height: 80%;
`;
