import { cursorHoverState } from "@/components/atoms/cursor-hover.atom";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";

type Position = { x: number; y: number };

export const Cursor = () => {
  const [cursorPos, setCursorPos] = useState<Position | null>(null);
  const [clicking, setClicking] = useState(false);
  const hoverState = useRecoilValue(cursorHoverState);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      let x = event.clientX;
      let y = event.clientY;

      if (hoverState?.hoverType === "fixed") {
        x = hoverState.x;
        y = hoverState.y;
      }

      setCursorPos({
        x,
        y,
      });
    };

    const handleMouseOut = () => setCursorPos(null);
    const handleMouseClick = (isDown: boolean) =>
      isDown ? setClicking(true) : setTimeout(() => setClicking(false), 200);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", () => handleMouseClick(true));
    window.addEventListener("mouseup", () => handleMouseClick(false));
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", () => handleMouseClick(true));
      window.removeEventListener("mouseup", () => handleMouseClick(false));
    };
  }, [hoverState]);

  const classList = useMemo(
    () =>
      [
        clicking
          ? "border-orange-900 bg-orange-500 scale-90"
          : "border-sky-900 bg-sky-500",
        hoverState?.hoverType ? "opacity-40" : "opacity-20",
        hoverState?.hoverType === "fixed" ? "scale-110 rounded-none" : "",
        hoverState?.hoverType === "hover" ? "rounded-none" : "",
        hoverState?.hoverType === "blink" ? "" : "",
      ].join(" "),
    [hoverState, clicking]
  );

  return (
    cursorPos && (
      <div
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width:
            hoverState?.hoverType === "fixed" ? hoverState.width : undefined,
          height:
            hoverState?.hoverType === "fixed" ? hoverState.height : undefined,
        }}
        className={`transition-cursor pointer-events-none fixed left-1/2 top-1/2 z-[999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 duration-200 ease-in-out ${classList}`}
      />
    )
  );
};
