import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AddressStyle } from "./style";
const Address = () => {
  return (
    <AddressStyle>
      <IoLocationSharp />
      경상남도 창원시
    </AddressStyle>
  );
};

export default Address;
