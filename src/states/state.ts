import { atom } from "recoil";

export const mapTitleState = atom({
  key: "mapTitleState",
  default: "",
});

export const myPageOpenState = atom({
  key: "modalOpenState",
  default: false,
});

export const shopOpenState = atom({
  key: "shopOpenState",
  default: false,
});
