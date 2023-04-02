import { atom } from "recoil";
import { CanvasCoodi } from '@/interface/index'

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
  default: 25,
})

export const CanvasColorState = atom({
  key: 'CanvasColorState',
  default: '#ffffff'
})

export const CanvasRefState = atom({
  key: 'CanvasRefState',
  default: null,
})

export const CanvasCoodinateState = atom<CanvasCoodi[]>({
  key: 'CanvasCoodinateState',
  default: [],
})