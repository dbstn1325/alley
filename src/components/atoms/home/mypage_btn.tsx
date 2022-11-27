import React from "react";
import { useRecoilState } from "recoil";
import { myPageOpenState } from "states/state";
import { MyPageButtonStyle } from "./style";

const MyPageButton = () => {
  const [modalIsOpen, setIsOpen] = useRecoilState(myPageOpenState);
  return (
    <MyPageButtonStyle
      onClick={() => {
        setIsOpen(true);
      }}
    >
      My Page
    </MyPageButtonStyle>
  );
};

export default MyPageButton;
