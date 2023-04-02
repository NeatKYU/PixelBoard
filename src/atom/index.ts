import { atom } from "recoil";
import { CanvasCoodi } from '@/interface/index'

export const CanvasWidthState = atom<number>({
  key: "CanvasWidthState",
  default: 16,
});

export const CanvasHeightState = atom<number>({
  key: "CanvasHeightState",
  default: 16,
});

export const CanvasSizeState = atom<number>({
  key: "CanvasSizeState",
  default: 25,
})

export const CanvasColorState = atom<string>({
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