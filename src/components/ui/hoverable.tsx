import {
  cursorHoverState,
  type HoverType,
} from "@/components/atoms/cursor-hover.atom";
import { Slot } from "@radix-ui/react-slot";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type?: HoverType;
  asChild?: boolean;
}

export const Hoverable = ({
  asChild = true,
  type = "hover",
  ...props
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const setFixState = useSetRecoilState(cursorHoverState);
  const Component = asChild ? Slot : "div";

  useEffect(() => {
    const elementRef = ref;
    if (!elementRef.current) return;

    const handleMouseEnter = () => {
      if (!elementRef.current) return;

      const { x, y, width, height } =
        elementRef.current.getBoundingClientRect();
      const fixedProps = {
        x: x + width / 2,
        y: y + height / 2,
        width: width,
        height: height,
      };

      setFixState(() => ({
        hoverType: type,
        ...fixedProps,
      }));
    };

    const handleMouseLeave = () => setFixState(null);

    elementRef.current.addEventListener("mouseenter", handleMouseEnter);
    elementRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (!elementRef.current) return;
      elementRef.current.removeEventListener("mouseenter", handleMouseEnter);
      elementRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, setFixState, type]);

  return <Component ref={ref} {...props} />;
};
Hoverable.displayName = "Hoverable";
