import ModalContent from "components/molecules/home/modal/modal";
import React from "react";
import Sheet from "react-modal-sheet";
import { useRecoilState } from "recoil";
import { modalState } from "states/modal_state";
const SheetModal = () => {
  const [isOpen, setOpen] = useRecoilState(modalState);
  return (
    <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[0.5]}>
      <Sheet.Header>
        <Sheet.Container>
          <ModalContent />
        </Sheet.Container>
      </Sheet.Header>

      <Sheet.Backdrop
        onTap={() => {
          setOpen(false);
        }}
      ></Sheet.Backdrop>
    </Sheet>
  );
};

export default SheetModal;
