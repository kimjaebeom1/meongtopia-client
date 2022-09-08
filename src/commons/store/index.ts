import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const withDogState = atom({
  key: "withDog",
  default: "",
});

export const largeDogState = atom({
  key: "largeDog",
  default: "",
});

export const yardState = atom({
  key: "yard",
  default: "",
});
