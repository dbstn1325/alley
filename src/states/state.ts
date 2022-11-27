import { atom } from "recoil";

export const mapTitleState = atom({
  key: "mapTitleState",
  default: "진해구",
});

export const myPageOpenState = atom({
  key: "modalOpenState",
  default: false,
});

export const shopOpenState = atom({
  key: "shopOpenState",
  default: false,
});
