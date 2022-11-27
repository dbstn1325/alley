import React, { useState } from "react";
import Sheet from "react-modal-sheet";
import { FaShoppingBag } from "react-icons/fa";

import { MapButtonStyle } from "./style";

import { useRecoilState } from "recoil";
import { modalState } from "states/modal_state";
import { myPageOpenState, shopOpenState } from "states/state";

const MapButton = () => {
  const [modalIsOpen, setIsOpen] = useRecoilState(shopOpenState);
  return (
    <>
      <MapButtonStyle onClick={() => setIsOpen(true)}>
        <FaShoppingBag size={30} />
      </MapButtonStyle>
    </>
  );
};

export default MapButton;
