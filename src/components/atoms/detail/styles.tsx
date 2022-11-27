import styled from "styled-components";

export const StyledNavBar = styled.nav`
  position: relative;
  font-family: "PretendardMedium";
  display: flex;
  width: 85%;
  height: 100%;
  top: 1rem;
  left: 1.563rem;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitleText = styled.div`
  width: 255px;
  height: 96px;
  position: relative;
  font-family: "PretendardMedium";
  top: 19.625rem;
  margin-left: 1.25rem;
`;

export const StyledContentText = styled.div`
  padding-top: 31rem;
  font-family: "PretendardRegular";
`;

export const StyledContentTitle = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const StyledBox = styled.div`
  width: 100%;
  height: 48px;
`;

export const StyledAlleyContent = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

export const StyledNavDate = styled.div`
  color: #ffffff;
  font-size: 1.188rem;
  font-family: "PretendardRegular";
`;

export const StyledKeywordBox = styled.span`
  width: 3.875rem;
  height: 1.5rem;
  background-color: #ffffff;
  border-radius: 22px;
  padding: 2px 20px;
  font-family: "PretendardRegular";
`;

export const StyledBlackFilter = styled.div`
  background-color: black;
  width: 100%;
  height: 31.375rem;
  position: absolute;
  z-index: 0;
  opacity: 0.32;
`;
