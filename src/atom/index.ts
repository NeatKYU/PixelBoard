import { atom } from "recoil";
import { CanvasCoodi } from '@/interface/index'
import { CanvasColor } from '@/assets/constant/constant'

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
  default: CanvasColor.brushColor
})

export const CanvasRefState = atom({
  key: 'CanvasRefState',
  default: null,
})

export const CanvasCoodinateState = atom<CanvasCoodi[]>({
  key: 'CanvasCoodinateState',
  default: [],
})

// tool mode state
type toolMode = 'brush' | 'eraser' | 'paint' | 'pipette'
export const ToolModeState = atom<toolMode>({
  key: 'ToolModeState',
  default: 'brush',
})