import React, { useState } from "react";
import Sheet from "react-modal-sheet";
import { MdOutlineStorefront } from "react-icons/md";

import { MapButtonStyle } from "./style";

import { useRecoilState } from "recoil";
import { modalState } from "states/modal_state";

const MapButton = () => {
  const [isOpen, setOpen] = useRecoilState(modalState);

  return (
    <>
      <MapButtonStyle onClick={() => setOpen(true)}>
        <MdOutlineStorefront />
      </MapButtonStyle>
    </>
  );
};

export default MapButton;
