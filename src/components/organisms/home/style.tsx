import styled, { keyframes } from "styled-components";
import JinHaeImage from "static/img/jinhae.JPG";
import { Link } from "react-router-dom";


export const BannerStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 70vh;
  padding: 1rem 1rem 2rem 1rem;
  background-image: url(${JinHaeImage});
  background-size: cover;
  border-radius: 15px;
  box-shadow: 0px 3px 6px #00000029;
  margin-bottom: 2rem;

  &::before {
    content: "";
    opacity: 0.32;
    position: absolute;
    border-radius: 15px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
  }
`;
