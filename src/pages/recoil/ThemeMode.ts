import { atom } from "recoil";

const themeState = atom<boolean>({
  key: "themeState",
  default: true,
});

export default themeState;
