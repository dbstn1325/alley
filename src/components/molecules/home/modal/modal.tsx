import ModalImage from "components/atoms/home/modal/modal_image";
import ModalTitle from "components/atoms/home/modal/modal_title";
import React from "react";
import { ModalContainer } from "./style";

const ModalContent = () => {
  return (
    <ModalContainer>
      <ModalTitle />
      <ModalImage />
    </ModalContainer>
  );
};

export default ModalContent;
