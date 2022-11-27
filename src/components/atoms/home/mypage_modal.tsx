import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { myPageOpenState } from "states/state";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import FlashIcon from "static/img/flash.png";

const customStyles = {
  content: {
    width: "70vw",
    height: "55vh",
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

const MyPageModal = () => {
  const [modalIsOpen, setIsOpen] = useRecoilState(myPageOpenState);

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
        contentLabel="Example Modal"
      >
        <CloseContainer>
          <IoClose size={40} onClick={closeModal} />
        </CloseContainer>

        <TitleContainer>
          <SubTitle>My Explore</SubTitle>
          <MainTitle>어떤곳을 탐험했을까?</MainTitle>
        </TitleContainer>
        <ImageContainer>
          <FlashImage />
        </ImageContainer>

        <TitleContainer>
          <SeeTitle>내 탐험 기록보기</SeeTitle>
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
  font-size: 1.2rem;
`;

const MainTitle = styled.span`
  font-family: "PretendardMedium";
  font-size: 1.9rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SeeTitle = styled.span`
  font-family: "PretendardMedium";
  font-size: 1.7rem;
  margin-bottom: 15px;
`;

const DateTitle = styled.span`
  font-family: "PretendardMedium";
  font-size: 1.3rem;
`;

const FlashImage = styled.img.attrs({ src: `${FlashIcon}` })`
  width: 15rem;
  height: 15rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default MyPageModal;
