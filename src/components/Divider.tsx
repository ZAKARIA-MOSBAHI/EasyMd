import type { RefObject } from "react";

// { ref }: DividerProps
export default function Divider({
  ref,
  onResize,
}: {
  ref: RefObject<HTMLDivElement | null>;
  onResize: () => void;
}) {
  return (
    <div
      draggable={false}
      ref={ref}
      className="divider"
      onMouseDown={onResize}
    ></div>
  );
}
