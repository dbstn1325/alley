import React, { useState } from "react";
import Sheet from "react-modal-sheet";
import { FaMap } from "react-icons/fa";

import { MapButtonStyle } from "./style";
import SheetModal from "components/organisms/home/sheet_modal";
import { useRecoilState } from "recoil";
import { modalState } from "states/modal_state";

const MapButton = () => {
  const [isOpen, setOpen] = useRecoilState(modalState);
  return (
    <>
      <MapButtonStyle onClick={() => setOpen(true)}>
        <FaMap />
      </MapButtonStyle>

      <SheetModal />
    </>
  );
};

export default MapButton;
