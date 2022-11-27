import styled from "styled-components";

export const DistanceStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.6rem;
  height: 1.4rem;
  font-family: "PretendardMedium";
  color: white;
  border: 1px solid white;
  border-radius: 20px;
`;

export const AddressStyle = styled.span`
  font-family: "PretendardMedium";
  font-size: 1rem;
  color: #969696;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
`;

export const AreaStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 1.6rem;
  font-family: "PretendardMedium";
  color: #3b3b3b;
  border: none;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const TitleStyle = styled.h1`
  font-family: "PretendardBold";
  font-size: 2rem;
  color: white;
  margin-bottom: 6px;
  line-height: 2.3rem;
`;

export const TitleContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const SubTitleStyle = styled.h3`
  font-family: "PretendardMedium";
  font-size: 1rem;
  color: white;
`;

export const MapButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 1.2rem 10px 0;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
  background: white;
  box-shadow: 0px 3px 6px #00000029;
  font-size: 2rem;
`;

export const FooterContainer = styled.footer`
  height: 0.7rem;
`;
