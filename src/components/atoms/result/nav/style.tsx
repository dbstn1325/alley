import styled from "styled-components";

export const ResultNavStyle = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  padding: 0 13px 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-family: "PretendardMedium";
  font-size: 1.35em;
  font-weight: bold;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  align-items: center;
  z-index: 9999;
  margin-bottom: 10rem;
  background-color: white;
`;

export const WhiteSpace = styled.div`
  width: 10%;
  height: 2rem;
`;

export const IconStyle = styled.div`
  justify-self: flex-start;
  margin-bottom: 5px;
`;
