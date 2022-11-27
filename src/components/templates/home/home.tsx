import Address from "components/atoms/home/address";

import { FooterContainer } from "components/atoms/home/style";
import Distance from "components/molecules/home/distance";
import NavBar from "components/molecules/nav/navbar";
import AlleyItem from "components/organisms/home/alley_item";

import { Container } from "./style";
import styled from "styled-components";

import { useCallback, useEffect, useRef, useState } from "react";
import MapButton from "components/atoms/home/map_button";
import Modal from "components/atoms/home/Modal";
const HomeTemplate = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <Container>
      <NavBar></NavBar>
      <Address></Address>

      <AlleyItem
        area="진해"
        title="진해에서 만나는 작은 겨울왕국"
        subTitle="따끈한 어묵도 먹을 수 있는 플레이스"
        distance="321m"
        id="0"
      />

      <AlleyItem
        area="진해"
        title="진해에서 만나는 작은 겨울왕국"
        subTitle="살려줘"
        distance="321m"
        id="1"
      />

      <AlleyItem
        area="진해"
        title="진해에서 만나는 작은 겨울왕국"
        subTitle="살려줘"
        distance="321m"
        id="2"
      />

      <Main>
        <Title>여긴 배경화면 입니다</Title>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            이곳에 children이 들어갑니다.
          </Modal>
        )}
        <DialogButton onClick={onClickToggleModal}>Open Modal</DialogButton>
      </Main>

      <MapButton />

      <FooterContainer />
    </Container>
  );
};
const DialogButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: blueviolet;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;
const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
`;
export default HomeTemplate;
