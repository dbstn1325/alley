import { atom } from "recoil";
import 진해구 from "static/img/진해구.png";

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

export const imageUrlState = atom({
  key: "imageUrlState",
  default: 진해구,
});
