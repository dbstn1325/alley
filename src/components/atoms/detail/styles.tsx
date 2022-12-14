import styled, { css, keyframes } from "styled-components";

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
  width: 300px;
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? "visible" : "hidden"};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

export const Background = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => modalSettings(props.visible)}
`;

export const ModalSection = styled.div<{ visible: boolean }>`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
  ${(props) => modalSettings(props.visible)}
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;

export const Contenty = styled.div`
  padding: 16px 0;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
