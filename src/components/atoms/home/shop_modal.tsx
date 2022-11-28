import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { myPageOpenState, shopOpenState } from "states/state";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

import ShopIcon from "static/img/shop.png";
const customStyles = {
  content: {
    width: "70vw",
    borderRadius: "15px",
    border: "none",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.13)",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ShopModal = () => {
  const [modalIsOpen, setIsOpen] = useRecoilState(shopOpenState);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="shop Modal"
      >
        <CloseContainer>
          <IoClose size={30} onClick={closeModal} />
        </CloseContainer>

        <TitleContainer>
          <SubTitle>Alley SHOP</SubTitle>
          <MainTitle>로컬 크리에이터 샵</MainTitle>
        </TitleContainer>
        <ImageContainer>
          <FlashImage />
        </ImageContainer>

        <TitleContainer>
          <SeeTitle>GRAND OPEN!</SeeTitle>
          <DateTitle>11월 28일 18:00 OPEN</DateTitle>
        </TitleContainer>
      </Modal>
    </>
  );
};

const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SubTitle = styled.span`
  font-family: "PretendardMedium";
  margin-bottom: 12px;
  font-size: 0.8rem;
`;

const MainTitle = styled.span`
  font-family: "PretendardMedium";
  font-size: 1.2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const SeeTitle = styled.span`
  font-family: "PretendardMedium";
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const DateTitle = styled.span`
  font-family: "PretendardMedium";
  font-size: 0.8rem;
`;

const FlashImage = styled.img.attrs({ src: `${ShopIcon}` })`
  width: 5rem;
  height: 5rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ShopModal;
