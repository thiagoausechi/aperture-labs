import { atom } from "recoil";

export type HoverType = "hover" | "fixed" | "blink";

type State =
  | {
      hoverType: "hover" | "blink";
    }
  | {
      hoverType: "fixed";
      x: number;
      y: number;
      width: number;
      height: number;
    };

export const cursorHoverState = atom<State | null>({
  key: "cursorHoverState",
  default: null,
});
