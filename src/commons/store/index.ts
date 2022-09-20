import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const petArrState = atom({
  key: "petArr",
  default: [],
});

export const bigDogState = atom({
  key: "bigDog",
  default: 0,
});

export const smallDogState = atom({
  key: "smallDog",
  default: 0,
});
