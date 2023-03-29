import { atom } from "recoil";

export const CanvasWidthState = atom({
  key: "CanvasWidthState",
  default: 16,
});

export const CanvasHeightState = atom({
  key: "CanvasHeightState",
  default: 16,
});

export const CanvasSizeState = atom({
  key: "CanvasSizeState",
  default: 15,
})